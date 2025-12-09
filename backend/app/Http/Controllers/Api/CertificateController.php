<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\Enrollment;
use App\Models\QuizAttempt;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CertificateController extends Controller
{
    /**
     * Generate certificate for completed course
     */
    public function generate(Request $request, $courseId): JsonResponse
    {
        $user = $request->user();

        // Check enrollment
        $enrollment = Enrollment::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->where('status', 'completed')
            ->with('course')
            ->first();

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'คุณยังไม่ได้จบคอร์สนี้'
            ], 403);
        }

        // Check if already has certificate
        $existingCert = Certificate::where('enrollment_id', $enrollment->id)->first();
        if ($existingCert) {
            return response()->json([
                'success' => true,
                'message' => 'ใบประกาศนียบัตรถูกสร้างไว้แล้ว',
                'data' => $existingCert
            ]);
        }

        // Check quiz passed
        $bestAttempt = QuizAttempt::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->where('passed', true)
            ->orderBy('percentage', 'desc')
            ->first();

        if (!$bestAttempt) {
            return response()->json([
                'success' => false,
                'message' => 'คุณต้องสอบผ่านก่อนจึงจะได้รับใบประกาศนียบัตร'
            ], 403);
        }

        // Generate certificate
        $certificate = Certificate::create([
            'user_id' => $user->id,
            'course_id' => $courseId,
            'enrollment_id' => $enrollment->id,
            'certificate_number' => $this->generateCertificateNumber(),
            'issued_date' => now()->toDateString(),
            'verification_code' => $this->generateVerificationCode(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'สร้างใบประกาศนียบัตรสำเร็จ',
            'data' => $certificate->load(['user', 'course'])
        ], 201);
    }

    /**
     * Get user's certificate
     */
    public function show(Request $request, $id): JsonResponse
    {
        $user = $request->user();

        $certificate = Certificate::where('id', $id)
            ->where('user_id', $user->id)
            ->with(['user', 'course', 'enrollment'])
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $certificate
        ]);
    }

    /**
     * Get all user's certificates
     */
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $certificates = Certificate::where('user_id', $user->id)
            ->with(['course'])
            ->orderBy('issued_date', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $certificates
        ]);
    }

    /**
     * Verify certificate
     */
    public function verify(Request $request, $verificationCode): JsonResponse
    {
        $certificate = Certificate::where('verification_code', $verificationCode)
            ->with(['user', 'course'])
            ->first();

        if (!$certificate) {
            return response()->json([
                'success' => false,
                'message' => 'ไม่พบใบประกาศนียบัตร'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'ใบประกาศนียบัตรถูกต้อง',
            'data' => [
                'certificate_number' => $certificate->certificate_number,
                'student_name' => $certificate->user->name,
                'course_title' => $certificate->course->title,
                'issued_date' => $certificate->issued_date,
                'verified' => true,
            ]
        ]);
    }

    /**
     * Generate unique certificate number
     */
    private function generateCertificateNumber(): string
    {
        do {
            $number = 'CERT-' . date('Y') . '-' . strtoupper(Str::random(8));
        } while (Certificate::where('certificate_number', $number)->exists());

        return $number;
    }

    /**
     * Generate unique verification code
     */
    private function generateVerificationCode(): string
    {
        do {
            $code = strtoupper(Str::random(16));
        } while (Certificate::where('verification_code', $code)->exists());

        return $code;
    }
}
