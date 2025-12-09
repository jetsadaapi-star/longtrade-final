<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\TwoFactorService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TwoFactorController extends Controller
{
    protected TwoFactorService $twoFactorService;

    public function __construct(TwoFactorService $twoFactorService)
    {
        $this->twoFactorService = $twoFactorService;
    }

    /**
     * Enable 2FA
     */
    public function enable(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            $result = $this->twoFactorService->enable($user);

            return response()->json([
                'success' => true,
                'message' => '2FA setup initiated. Please scan the QR code and verify.',
                'data' => [
                    'secret' => $result['secret'],
                    'qr_code' => $result['qr_code'],
                    'recovery_codes' => $result['recovery_codes'],
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Verify and activate 2FA
     */
    public function verify(Request $request): JsonResponse
    {
        $request->validate([
            'code' => 'required|string|size:6',
        ]);

        $user = $request->user();
        $valid = $this->twoFactorService->verify($user, $request->code);

        if ($valid) {
            return response()->json([
                'success' => true,
                'message' => '2FA enabled successfully',
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Invalid verification code',
        ], 400);
    }

    /**
     * Disable 2FA
     */
    public function disable(Request $request): JsonResponse
    {
        $request->validate([
            'password' => 'required|string',
        ]);

        try {
            $user = $request->user();
            $this->twoFactorService->disable($user, $request->password);

            return response()->json([
                'success' => true,
                'message' => '2FA disabled successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Validate 2FA code
     */
    public function validate(Request $request): JsonResponse
    {
        $request->validate([
            'code' => 'required|string',
        ]);

        $user = $request->user();

        // Try regular code first
        $valid = $this->twoFactorService->validateCode($user, $request->code);

        // If not valid, try recovery code
        if (!$valid && strlen($request->code) === 8) {
            $valid = $this->twoFactorService->validateRecoveryCode($user, $request->code);
        }

        return response()->json([
            'success' => $valid,
            'message' => $valid ? 'Code validated' : 'Invalid code',
        ]);
    }

    /**
     * Get recovery codes
     */
    public function recoveryCodes(Request $request): JsonResponse
    {
        $user = $request->user();
        $twoFactor = $user->twoFactorAuth;

        if (!$twoFactor || !$twoFactor->enabled) {
            return response()->json([
                'success' => false,
                'message' => '2FA is not enabled',
            ], 400);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'recovery_codes' => $twoFactor->recovery_codes,
                'remaining' => count($twoFactor->recovery_codes ?? []),
            ],
        ]);
    }

    /**
     * Regenerate recovery codes
     */
    public function regenerateCodes(Request $request): JsonResponse
    {
        $request->validate([
            'password' => 'required|string',
        ]);

        try {
            $user = $request->user();
            $codes = $this->twoFactorService->regenerateRecoveryCodes($user, $request->password);

            return response()->json([
                'success' => true,
                'message' => 'Recovery codes regenerated successfully',
                'data' => [
                    'recovery_codes' => $codes,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Get 2FA status
     */
    public function status(Request $request): JsonResponse
    {
        $user = $request->user();
        $status = $this->twoFactorService->getStatus($user);

        return response()->json([
            'success' => true,
            'data' => $status,
        ]);
    }
}
