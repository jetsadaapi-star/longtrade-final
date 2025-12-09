<?php

namespace App\Services;

use App\Models\Course;
use App\Models\LessonVideo;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class VideoUploadService
{
    /**
     * Maximum file size in bytes (500MB)
     */
    const MAX_FILE_SIZE = 500 * 1024 * 1024;

    /**
     * Allowed video MIME types
     */
    const ALLOWED_MIMES = [
        'video/mp4',
        'video/quicktime',
        'video/x-msvideo',
        'video/avi',
        'video/webm',
        'video/x-ms-wmv',
    ];

    /**
     * Upload a video file for a lesson
     *
     * @param UploadedFile $file
     * @param Course $course
     * @param string $lessonId
     * @return LessonVideo
     * @throws \Exception
     */
    public function uploadVideo(UploadedFile $file, Course $course, string $lessonId): LessonVideo
    {
        // Validate the video file
        $this->validateVideo($file);

        // Check if video already exists for this lesson
        $existingVideo = LessonVideo::where('course_id', $course->id)
            ->where('lesson_id', $lessonId)
            ->first();

        if ($existingVideo) {
            // Delete old video file
            $this->deleteVideoFile($existingVideo);
        }

        // Generate storage paths
        $directory = "videos/courses/{$course->slug}/{$lessonId}";
        $extension = $file->getClientOriginalExtension();
        $filename = 'video_' . time() . '.' . $extension;

        // Store the video file
        $path = $file->storeAs($directory, $filename, 'public');

        // Get video metadata
        $metadata = $this->getVideoMetadata(storage_path('app/public/' . $path));

        // Create or update database record
        $video = LessonVideo::updateOrCreate(
            [
                'course_id' => $course->id,
                'lesson_id' => $lessonId,
            ],
            [
                'video_type' => 'upload',
                'youtube_id' => null,
                'file_path' => $path,
                'file_size' => $file->getSize(),
                'duration' => $metadata['duration'] ?? null,
                'mime_type' => $file->getMimeType(),
                'status' => 'ready', // Set to ready immediately, can be changed to 'processing' if using jobs
            ]
        );

        return $video;
    }

    /**
     * Validate the uploaded video file
     *
     * @param UploadedFile $file
     * @throws \Exception
     */
    private function validateVideo(UploadedFile $file): void
    {
        // Check file size
        if ($file->getSize() > self::MAX_FILE_SIZE) {
            throw new \Exception('Video file is too large. Maximum size is 500MB.');
        }

        // Check MIME type
        if (!in_array($file->getMimeType(), self::ALLOWED_MIMES)) {
            throw new \Exception('Invalid video format. Allowed formats: MP4, MOV, AVI, WebM, WMV.');
        }

        // Check if file is actually a video
        if (!$file->isValid()) {
            throw new \Exception('Invalid video file.');
        }
    }

    /**
     * Get video metadata (duration, dimensions, etc.)
     *
     * @param string $path
     * @return array
     */
    private function getVideoMetadata(string $path): array
    {
        $metadata = [];

        // Try to get duration using getID3 if available
        // For now, return empty metadata
        // TODO: Implement getID3 or FFmpeg integration for metadata extraction

        return $metadata;
    }

    /**
     * Delete video file from storage
     *
     * @param LessonVideo $video
     * @return bool
     */
    public function deleteVideoFile(LessonVideo $video): bool
    {
        if ($video->file_path && Storage::disk('public')->exists($video->file_path)) {
            Storage::disk('public')->delete($video->file_path);
        }

        if ($video->thumbnail_path && Storage::disk('public')->exists($video->thumbnail_path)) {
            Storage::disk('public')->delete($video->thumbnail_path);
        }

        return true;
    }

    /**
     * Create YouTube video record
     *
     * @param Course $course
     * @param string $lessonId
     * @param string $youtubeId
     * @return LessonVideo
     */
    public function createYouTubeVideo(Course $course, string $lessonId, string $youtubeId): LessonVideo
    {
        return LessonVideo::updateOrCreate(
            [
                'course_id' => $course->id,
                'lesson_id' => $lessonId,
            ],
            [
                'video_type' => 'youtube',
                'youtube_id' => $youtubeId,
                'file_path' => null,
                'file_size' => null,
                'duration' => null,
                'mime_type' => null,
                'status' => 'ready',
            ]
        );
    }

    /**
     * Get video by lesson ID
     *
     * @param Course $course
     * @param string $lessonId
     * @return LessonVideo|null
     */
    public function getVideoByLesson(Course $course, string $lessonId): ?LessonVideo
    {
        return LessonVideo::where('course_id', $course->id)
            ->where('lesson_id', $lessonId)
            ->first();
    }
}
