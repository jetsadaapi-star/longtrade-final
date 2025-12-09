<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LessonCompletion;
use App\Models\Enrollment;
use App\Models\Course;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProgressController extends Controller
{
    /**
     * Get user's progress for a course
     */
    public function show(Request $request, $courseId): JsonResponse
    {
        $user = $request->user();
        $course = Course::findOrFail($courseId);

        // Get enrollment
        $enrollment = Enrollment::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->first();

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'คุณยังไม่ได้ลงทะเบียนคอร์สนี้'
            ], 404);
        }

        // Get completed lessons
        $completedLessons = LessonCompletion::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->get();

        // Calculate progress
        $sections = $course->sections ?? [];
        $totalLessons = 0;
        foreach ($sections as $section) {
            $totalLessons += count($section['lessons'] ?? []);
        }

        $completedCount = $completedLessons->count();
        $progressPercentage = $totalLessons > 0 ? ($completedCount / $totalLessons) * 100 : 0;

        // Update enrollment progress
        $enrollment->update([
            'progress_percentage' => $progressPercentage
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'enrollment' => $enrollment,
                'total_lessons' => $totalLessons,
                'completed_lessons' => $completedCount,
                'progress_percentage' => round($progressPercentage, 2),
                'completed_lesson_ids' => $completedLessons->pluck('lesson_id')->toArray(),
            ]
        ]);
    }

    /**
     * Mark lesson as complete
     */
    public function completeLesson(Request $request, $courseId): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'section_id' => 'required|string',
            'lesson_id' => 'required|string',
            'video_progress' => 'nullable|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $user = $request->user();

        // Check enrollment
        $enrollment = Enrollment::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->where('status', 'active')
            ->first();

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'คุณยังไม่ได้ลงทะเบียนคอร์สนี้'
            ], 403);
        }

        // Mark lesson as complete (or update progress)
        $completion = LessonCompletion::updateOrCreate(
            [
                'user_id' => $user->id,
                'course_id' => $courseId,
                'lesson_id' => $request->lesson_id,
            ],
            [
                'section_id' => $request->section_id,
                'video_progress' => $request->video_progress ?? 0,
                'completed_at' => now(),
            ]
        );

        // Recalculate progress
        $course = Course::findOrFail($courseId);
        $sections = $course->sections ?? [];
        $totalLessons = 0;
        foreach ($sections as $section) {
            $totalLessons += count($section['lessons'] ?? []);
        }

        $completedCount = LessonCompletion::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->count();

        $progressPercentage = $totalLessons > 0 ? ($completedCount / $totalLessons) * 100 : 0;

        $enrollment->update([
            'progress_percentage' => $progressPercentage
        ]);

        return response()->json([
            'success' => true,
            'message' => 'บันทึกความคืบหน้าสำเร็จ',
            'data' => [
                'completion' => $completion,
                'progress_percentage' => round($progressPercentage, 2),
            ]
        ]);
    }

    /**
     * Get all lesson completions for a course
     */
    public function completions(Request $request, $courseId): JsonResponse
    {
        $user = $request->user();

        $completions = LessonCompletion::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->orderBy('completed_at', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $completions
        ]);
    }
}
