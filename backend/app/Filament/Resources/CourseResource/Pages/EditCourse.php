<?php

namespace App\Filament\Resources\CourseResource\Pages;

use App\Filament\Resources\CourseResource;
use App\Models\LessonVideo;
use App\Services\VideoUploadService;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Facades\Storage;

class EditCourse extends EditRecord
{
    protected static string $resource = CourseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }

    /**
     * Mutate form data before filling the form
     */
    protected function mutateFormDataBeforeFill(array $data): array
    {
        // Load existing videos into sections/lessons
        if (isset($data['sections']) && is_array($data['sections'])) {
            $course = $this->record;

            foreach ($data['sections'] as $sectionIndex => &$section) {
                if (isset($section['lessons']) && is_array($section['lessons'])) {
                    foreach ($section['lessons'] as $lessonIndex => &$lesson) {
                        // 1. Try to find in lesson_videos table (New System)
                        $video = LessonVideo::where('course_id', $course->id)
                            ->where('lesson_id', $lesson['id'])
                            ->first();

                        if ($video) {
                            $lesson['video_type'] = $video->video_type;

                            if ($video->video_type === 'youtube') {
                                $lesson['video_id'] = $video->youtube_id;
                            } else {
                                // For uploaded videos, show the file path
                                $lesson['video_file'] = $video->file_path;
                            }
                        }
                        // 2. If not in DB, check for legacy JSON data (Old System)
                        else {
                            if (isset($lesson['youtubeId']) && !empty($lesson['youtubeId'])) {
                                $lesson['video_type'] = 'youtube';
                                $lesson['video_id'] = $lesson['youtubeId'];
                            } elseif (isset($lesson['videoId']) && !empty($lesson['videoId'])) {
                                $lesson['video_type'] = 'youtube';
                                $lesson['video_id'] = $lesson['videoId'];
                            }
                        }
                    }
                }
            }
        }

        return $data;
    }

    /**
     * Mutate form data before saving
     */
    protected function mutateFormDataBeforeSave(array $data): array
    {
        // Handle Cover & OG Image from Curator
        $fields = ['cover', 'og_image'];
        foreach ($fields as $field) {
            if (isset($data[$field]) && is_numeric($data[$field])) {
                $media = \Awcodes\Curator\Models\Media::find($data[$field]);
                if ($media) {
                    $data[$field] = $media->path;
                }
            }
        }

        // Process video uploads
        if (isset($data['sections']) && is_array($data['sections'])) {
            $course = $this->record;
            $videoService = new VideoUploadService();

            foreach ($data['sections'] as $sectionIndex => &$section) {
                if (isset($section['lessons']) && is_array($section['lessons'])) {
                    foreach ($section['lessons'] as $lessonIndex => &$lesson) {
                        $lessonId = $lesson['id'];
                        $videoType = $lesson['video_type'] ?? null;
                        $processed = false;

                        // Skip if no video type selected
                        if (!$videoType) {
                            continue;
                        }

                        if ($videoType === 'youtube' && !empty($lesson['video_id'])) {
                            // Save YouTube video
                            try {
                                $videoService->createYouTubeVideo(
                                    $course,
                                    $lessonId,
                                    $lesson['video_id']
                                );
                                \Log::info("YouTube video saved for lesson: {$lessonId}");
                                $processed = true;
                            } catch (\Exception $e) {
                                \Log::error("Failed to save YouTube video: " . $e->getMessage());
                            }

                        } elseif ($videoType === 'upload' && !empty($lesson['video_file'])) {
                            $videoFile = $lesson['video_file'];

                            // Check if this is a Curator Media ID (from Media Library)
                            if (is_numeric($videoFile)) {
                                try {
                                    $media = \Awcodes\Curator\Models\Media::find($videoFile);
                                    if ($media) {
                                        \Log::info("Processing Curator Media ID: {$videoFile} for lesson: {$lessonId}");

                                        $newPath = $media->path;
                                        $fileSize = $media->size;
                                        $mimeType = $media->type;

                                        // Create/Update DB record
                                        LessonVideo::updateOrCreate(
                                            [
                                                'course_id' => $course->id,
                                                'lesson_id' => $lessonId,
                                            ],
                                            [
                                                'video_type' => 'upload',
                                                'youtube_id' => null,
                                                'file_path' => $newPath,
                                                'file_size' => $fileSize,
                                                'mime_type' => $mimeType,
                                                'status' => 'ready',
                                            ]
                                        );

                                        // Update lesson data to point to the path
                                        $lesson['video_file'] = $newPath;
                                        $processed = true;
                                    }
                                } catch (\Exception $e) {
                                    \Log::error("Failed to process Curator Media: " . $e->getMessage());
                                }
                            }
                            // Filament handles upload and returns a string path (Legacy or Direct Upload)
                            elseif (is_string($videoFile)) {
                                // Check if this is a NEW upload from Filament (default dir is courses/videos)
                                $isNewUpload = str_starts_with($videoFile, 'courses/videos/');

                                if ($isNewUpload) {
                                    try {
                                        \Log::info("Processing NEW video upload for lesson: {$lessonId}");

                                        if (Storage::disk('public')->exists($videoFile)) {
                                            $fileSize = Storage::disk('public')->size($videoFile);
                                            $mimeType = Storage::disk('public')->mimeType($videoFile);

                                            // Create new organized path
                                            $directory = "videos/courses/{$course->slug}/{$lessonId}";
                                            $extension = pathinfo($videoFile, PATHINFO_EXTENSION);
                                            $filename = 'video_' . time() . '.' . $extension;
                                            $newPath = $directory . '/' . $filename;

                                            // Create directory and move file
                                            Storage::disk('public')->makeDirectory($directory);
                                            Storage::disk('public')->move($videoFile, $newPath);

                                            // Create/Update DB record
                                            LessonVideo::updateOrCreate(
                                                [
                                                    'course_id' => $course->id,
                                                    'lesson_id' => $lessonId,
                                                ],
                                                [
                                                    'video_type' => 'upload',
                                                    'youtube_id' => null,
                                                    'file_path' => $newPath,
                                                    'file_size' => $fileSize,
                                                    'mime_type' => $mimeType,
                                                    'status' => 'ready',
                                                ]
                                            );

                                            // Update lesson data to point to new path
                                            $lesson['video_file'] = $newPath;
                                            $processed = true;

                                            \Log::info("Video moved and saved to: {$newPath}");
                                        }
                                    } catch (\Exception $e) {
                                        \Log::error("Failed to process new video upload: " . $e->getMessage());
                                    }
                                } else {
                                    // Existing file (already moved to videos/courses/...)
                                    // Ensure record exists in DB (Recovery Logic)
                                    $exists = LessonVideo::where('course_id', $course->id)
                                        ->where('lesson_id', $lessonId)
                                        ->exists();

                                    if (!$exists) {
                                        if (Storage::disk('public')->exists($videoFile)) {
                                            try {
                                                $fileSize = Storage::disk('public')->size($videoFile);
                                                $mimeType = Storage::disk('public')->mimeType($videoFile);

                                                LessonVideo::create([
                                                    'course_id' => $course->id,
                                                    'lesson_id' => $lessonId,
                                                    'video_type' => 'upload',
                                                    'file_path' => $videoFile,
                                                    'file_size' => $fileSize,
                                                    'mime_type' => $mimeType,
                                                    'status' => 'ready',
                                                ]);
                                                \Log::info("Restored missing DB record for existing file: {$lessonId}");
                                            } catch (\Exception $e) {
                                                \Log::error("Failed to restore DB record: " . $e->getMessage());
                                            }
                                        }
                                    }
                                    $processed = true;
                                }
                            }
                        }

                        // ONLY remove video fields if successfully processed
                        if ($processed) {
                            unset($lesson['video_type']);
                            unset($lesson['video_id']);
                            unset($lesson['video_file']);
                            // Also remove legacy fields
                            unset($lesson['youtubeId']);
                            unset($lesson['videoId']);
                        }
                    }
                }
            }
        }

        return $data;
    }
}
