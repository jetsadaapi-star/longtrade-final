<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CourseController extends Controller
{
    /**
     * Display a listing of published courses.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Course::query()
            ->with('category')
            ->published()
            ->orderBy('order')
            ->orderBy('created_at', 'desc');

        // Filter by category
        if ($request->has('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Filter by level
        if ($request->has('level')) {
            $query->where('level', $request->level);
        }

        // Pagination
        $perPage = $request->get('per_page', 12);
        $courses = $query->paginate($perPage);

        return response()->json($courses);
    }

    /**
     * Display the specified course with full details.
     */
    public function show(string $slug): JsonResponse
    {
        $course = Course::with(['category', 'videos'])
            ->where('slug', $slug)
            ->published()
            ->firstOrFail();

        // Ensure sections and quiz are properly formatted
        $courseData = $course->toArray();

        // Parse sections if it's a JSON string
        if (isset($courseData['sections']) && is_string($courseData['sections'])) {
            $courseData['sections'] = json_decode($courseData['sections'], true);
        }

        // Parse quiz if it's a JSON string
        if (isset($courseData['quiz']) && is_string($courseData['quiz'])) {
            $courseData['quiz'] = json_decode($courseData['quiz'], true);
        }

        // Merge video data into lessons
        if (isset($courseData['sections']) && is_array($courseData['sections'])) {
            foreach ($courseData['sections'] as &$section) {
                if (isset($section['lessons']) && is_array($section['lessons'])) {
                    foreach ($section['lessons'] as &$lesson) {
                        // Find video for this lesson
                        $video = collect($courseData['videos'])->firstWhere('lesson_id', $lesson['id']);

                        if ($video) {
                            // Extract YouTube ID from URL if needed
                            $youtubeId = $video['youtube_id'];
                            if ($youtubeId && str_contains($youtubeId, 'youtube.com') || str_contains($youtubeId, 'youtu.be')) {
                                $pattern = '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/ |.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i';
                                if (preg_match($pattern, $youtubeId, $matches)) {
                                    $youtubeId = $matches[1];
                                }
                            }

                            $lesson['video'] = [
                                'type' => $video['video_type'],
                                'youtube_id' => $youtubeId,
                                'video_url' => $video['video_url'],
                                'thumbnail_url' => $video['thumbnail_url'],
                                'duration' => $video['duration'],
                                'status' => $video['status'],
                                'file_size' => $video['file_size'],
                            ];
                        } else {
                            // Fallback to old youtubeId if exists
                            if (isset($lesson['youtubeId'])) {
                                // Extract YouTube ID from URL if needed
                                $youtubeId = $lesson['youtubeId'];
                                if ($youtubeId && (str_contains($youtubeId, 'youtube.com') || str_contains($youtubeId, 'youtu.be'))) {
                                    $pattern = '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/ |.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i';
                                    if (preg_match($pattern, $youtubeId, $matches)) {
                                        $youtubeId = $matches[1];
                                    }
                                }

                                $lesson['video'] = [
                                    'type' => 'youtube',
                                    'youtube_id' => $youtubeId,
                                    'video_url' => null,
                                    'thumbnail_url' => null,
                                    'duration' => null,
                                    'status' => 'ready',
                                    'file_size' => null,
                                ];
                            }
                        }
                    }
                }
            }
        }

        // Remove videos array from response (already merged into lessons)
        unset($courseData['videos']);

        return response()->json($courseData);
    }

    /**
     * Display featured courses.
     */
    public function featured(): JsonResponse
    {
        $courses = Course::with('category')
            ->published()
            ->featured()
            ->orderBy('order')
            ->limit(6)
            ->get();

        return response()->json($courses);
    }

    /**
     * Upload video for a lesson
     */
    public function uploadVideo(Request $request, string $slug, string $lessonId): JsonResponse
    {
        $request->validate([
            'video' => 'required|file|mimes:mp4,mov,avi,webm,wmv|max:512000', // 500MB
        ]);

        try {
            $course = Course::where('slug', $slug)->firstOrFail();

            $videoService = new \App\Services\VideoUploadService();
            $video = $videoService->uploadVideo(
                $request->file('video'),
                $course,
                $lessonId
            );

            return response()->json([
                'success' => true,
                'message' => 'Video uploaded successfully',
                'video' => $video,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }
}
