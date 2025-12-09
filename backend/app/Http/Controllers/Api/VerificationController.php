<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\VerificationService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class VerificationController extends Controller
{
    protected VerificationService $verificationService;

    public function __construct(VerificationService $verificationService)
    {
        $this->middleware('auth:sanctum');
        $this->verificationService = $verificationService;
    }

    /**
     * Get verification status
     */
    public function status(Request $request): JsonResponse
    {
        $user = $request->user();

        return response()->json([
            'success' => true,
            'data' => [
                'email_verified' => !is_null($user->email_verified_at),
                'phone_verified' => !is_null($user->phone_verified_at),
                'email' => $user->email,
                'phone' => $user->phone,
                'email_verified_at' => $user->email_verified_at,
                'phone_verified_at' => $user->phone_verified_at,
            ],
        ]);
    }

    /**
     * Send email verification code
     */
    public function sendEmailCode(Request $request): JsonResponse
    {
        try {
            $user = $request->user();

            if ($user->email_verified_at) {
                return response()->json([
                    'success' => false,
                    'message' => 'อีเมลได้รับการยืนยันแล้ว',
                ], 400);
            }

            $code = $this->verificationService->sendEmailVerification($user);

            return response()->json([
                'success' => true,
                'message' => 'ส่งรหัสยืนยันไปยังอีเมลของคุณแล้ว',
                'expires_at' => $code->expires_at,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Send phone verification code
     */
    public function sendPhoneCode(Request $request): JsonResponse
    {
        try {
            $user = $request->user();

            if (!$user->phone) {
                return response()->json([
                    'success' => false,
                    'message' => 'กรุณาเพิ่มเบอร์โทรศัพท์ก่อน',
                ], 400);
            }

            if ($user->phone_verified_at) {
                return response()->json([
                    'success' => false,
                    'message' => 'เบอร์โทรศัพท์ได้รับการยืนยันแล้ว',
                ], 400);
            }

            $code = $this->verificationService->sendPhoneVerification($user);

            return response()->json([
                'success' => true,
                'message' => 'ส่งรหัสยืนยันไปยังเบอร์โทรศัพท์ของคุณแล้ว',
                'expires_at' => $code->expires_at,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Verify email code
     */
    public function verifyEmail(Request $request): JsonResponse
    {
        $request->validate([
            'code' => 'required|string|size:6',
        ]);

        try {
            $user = $request->user();
            $this->verificationService->verifyCode($user, 'email', $request->code);

            return response()->json([
                'success' => true,
                'message' => 'ยืนยันอีเมลสำเร็จ',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Verify phone code
     */
    public function verifyPhone(Request $request): JsonResponse
    {
        $request->validate([
            'code' => 'required|string|size:6',
        ]);

        try {
            $user = $request->user();
            $this->verificationService->verifyCode($user, 'phone', $request->code);

            return response()->json([
                'success' => true,
                'message' => 'ยืนยันเบอร์โทรศัพท์สำเร็จ',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }
}
