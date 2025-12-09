<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\SocialAuthService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SocialAuthController extends Controller
{
    protected SocialAuthService $socialAuthService;

    public function __construct(SocialAuthService $socialAuthService)
    {
        $this->socialAuthService = $socialAuthService;
    }

    /**
     * Redirect to social provider
     */
    public function redirect(string $provider)
    {
        try {
            return $this->socialAuthService->redirectToProvider($provider);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Handle social provider callback
     */
    public function callback(string $provider)
    {
        try {
            $result = $this->socialAuthService->handleProviderCallback($provider);

            // Redirect to frontend with token
            $frontendUrl = config('app.frontend_url', env('FRONTEND_URL', 'http://localhost:3000'));
            $callbackUrl = $frontendUrl . '/auth/callback';

            return redirect($callbackUrl . '?token=' . $result['token'] . '&provider=' . $provider);
        } catch (\Exception $e) {
            $frontendUrl = config('app.frontend_url', env('FRONTEND_URL', 'http://localhost:3000'));
            return redirect($frontendUrl . '/login?error=' . urlencode($e->getMessage()));
        }
    }

    /**
     * Link social account to current user
     */
    public function link(Request $request, string $provider): JsonResponse
    {
        try {
            $user = $request->user();
            $result = $this->socialAuthService->linkAccount($user, $provider);

            return response()->json([
                'success' => true,
                'message' => 'Account linked successfully',
                'data' => $result,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Unlink social account
     */
    public function unlink(Request $request, string $provider): JsonResponse
    {
        try {
            $user = $request->user();
            $this->socialAuthService->unlinkAccount($user, $provider);

            return response()->json([
                'success' => true,
                'message' => 'Account unlinked successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Get linked social accounts
     */
    public function accounts(Request $request): JsonResponse
    {
        $user = $request->user();
        $accounts = $this->socialAuthService->getLinkedAccounts($user);

        return response()->json([
            'success' => true,
            'data' => $accounts,
        ]);
    }
}
