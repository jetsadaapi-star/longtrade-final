<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\QuizAttempt;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuizController extends Controller
{
    /**
     * Submit quiz answers
     */
    public function submit(Request $request, $courseId): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'answers' => 'required|array',
            'answers.*.question_id' => 'required|integer',
            'answers.*.selected_answer' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $user = $request->user();
        $course = Course::findOrFail($courseId);

        // Check if user is enrolled
        $enrollment = Enrollment::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->where('status', 'active')
            ->first();

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'คุณยังไม่ได้ลงทะเบียนคอร์สนี้'
            ], 403);
        }

        // Get quiz from course
        $quiz = $course->quiz;
        if (!$quiz || empty($quiz)) {
            return response()->json([
                'success' => false,
                'message' => 'ไม่พบแบบทดสอบสำหรับคอร์สนี้'
            ], 404);
        }

        // Grade the quiz
        $userAnswers = collect($request->answers);
        $totalQuestions = count($quiz);
        $correctCount = 0;

        foreach ($quiz as $question) {
            $userAnswer = $userAnswers->firstWhere('question_id', $question['id']);
            if ($userAnswer && $userAnswer['selected_answer'] == $question['correct_answer']) {
                $correctCount++;
            }
        }

        $percentage = ($correctCount / $totalQuestions) * 100;
        $passed = $percentage >= 70; // 70% passing score

        // Save quiz attempt
        $attempt = QuizAttempt::create([
            'user_id' => $user->id,
            'course_id' => $course->id,
            'score' => $correctCount,
            'total_questions' => $totalQuestions,
            'percentage' => $percentage,
            'passed' => $passed,
            'answers' => $request->answers,
            'attempted_at' => now(),
        ]);

        // Update enrollment progress if passed
        if ($passed) {
            $enrollment->update([
                'progress_percentage' => 100,
                'completion_date' => now(),
                'status' => 'completed',
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'attempt_id' => $attempt->id,
                'score' => $correctCount,
                'total_questions' => $totalQuestions,
                'percentage' => round($percentage, 2),
                'passed' => $passed,
                'message' => $passed ? 'ยินดีด้วย! คุณสอบผ่าน' : 'คุณสอบไม่ผ่าน กรุณาลองใหม่อีกครั้ง'
            ]
        ]);
    }

    /**
     * Get quiz attempts for a course
     */
    public function attempts(Request $request, $courseId): JsonResponse
    {
        $user = $request->user();

        $attempts = QuizAttempt::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->orderBy('attempted_at', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $attempts
        ]);
    }

    /**
     * Get best attempt
     */
    public function bestAttempt(Request $request, $courseId): JsonResponse
    {
        $user = $request->user();

        $bestAttempt = QuizAttempt::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->orderBy('percentage', 'desc')
            ->first();

        if (!$bestAttempt) {
            return response()->json([
                'success' => false,
                'message' => 'ยังไม่มีการทำแบบทดสอบ'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $bestAttempt
        ]);
    }
}
