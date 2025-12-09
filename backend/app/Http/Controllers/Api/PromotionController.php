<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Promotion;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PromotionController extends Controller
{
    /**
     * Display a listing of active promotions
     */
    public function index(Request $request): JsonResponse
    {
        $query = Promotion::query()->available();

        // Filter by type if provided
        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        // Get authenticated user
        $user = $request->user();

        // If user is authenticated, filter out promotions they've exhausted
        if ($user) {
            $query->where(function ($q) use ($user) {
                $q->whereDoesntHave('users', function ($userQuery) use ($user) {
                    $userQuery->where('user_id', $user->id)
                        ->whereRaw('promotion_user.usage_count >= promotions.usage_per_user');
                });
            });
        }

        $promotions = $query->orderBy('priority', 'desc')
            ->orderBy('created_at', 'desc')
            ->paginate($request->get('per_page', 10));

        // Add user usage info if authenticated
        if ($user) {
            $promotions->getCollection()->transform(function ($promotion) use ($user) {
                $promotion->user_usage_count = $promotion->getUserUsageCount($user);
                $promotion->user_can_use = $promotion->canBeUsedByUser($user);
                return $promotion;
            });
        }

        return response()->json([
            'success' => true,
            'data' => $promotions,
        ]);
    }

    /**
     * Display the specified promotion
     */
    public function show(Request $request, string $slug): JsonResponse
    {
        $promotion = Promotion::where('slug', $slug)->first();

        if (!$promotion) {
            return response()->json([
                'success' => false,
                'message' => 'Promotion not found',
            ], 404);
        }

        // Add user usage info if authenticated
        $user = $request->user();
        if ($user) {
            $promotion->user_usage_count = $promotion->getUserUsageCount($user);
            $promotion->user_can_use = $promotion->canBeUsedByUser($user);
        }

        return response()->json([
            'success' => true,
            'data' => $promotion,
        ]);
    }

    /**
     * Get featured promotions
     */
    public function featured(Request $request): JsonResponse
    {
        $query = Promotion::query()->available()
            ->where('priority', '>', 0)
            ->orderBy('priority', 'desc')
            ->limit(3);

        // Get authenticated user
        $user = $request->user();

        // If user is authenticated, filter out exhausted promotions
        if ($user) {
            $query->where(function ($q) use ($user) {
                $q->whereDoesntHave('users', function ($userQuery) use ($user) {
                    $userQuery->where('user_id', $user->id)
                        ->whereRaw('promotion_user.usage_count >= promotions.usage_per_user');
                });
            });
        }

        $promotions = $query->get();

        // Add user usage info if authenticated
        if ($user) {
            $promotions->transform(function ($promotion) use ($user) {
                $promotion->user_usage_count = $promotion->getUserUsageCount($user);
                $promotion->user_can_use = $promotion->canBeUsedByUser($user);
                return $promotion;
            });
        }

        return response()->json([
            'success' => true,
            'data' => $promotions,
        ]);
    }

    /**
     * Apply promotion to cart
     */
    public function apply(Request $request): JsonResponse
    {
        $request->validate([
            'slug' => 'required|string',
            'amount' => 'required|numeric|min:0',
        ]);

        $user = $request->user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Authentication required to use promotions',
            ], 401);
        }

        $promotion = Promotion::where('slug', $request->slug)->first();

        if (!$promotion) {
            return response()->json([
                'success' => false,
                'message' => 'Promotion not found',
            ], 404);
        }

        if (!$promotion->canBeUsedByUser($user)) {
            return response()->json([
                'success' => false,
                'message' => 'You have already used this promotion the maximum number of times',
            ], 400);
        }

        if (!$promotion->isValid()) {
            return response()->json([
                'success' => false,
                'message' => 'Promotion is not valid',
            ], 400);
        }

        $discount = $promotion->calculateDiscount($request->amount);

        if ($discount === 0) {
            return response()->json([
                'success' => false,
                'message' => 'Promotion cannot be applied to this amount',
            ], 400);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'promotion' => $promotion,
                'original_amount' => $request->amount,
                'discount' => $discount,
                'final_amount' => $request->amount - $discount,
                'user_usage_count' => $promotion->getUserUsageCount($user),
                'user_can_use_again' => $promotion->getUserUsageCount($user) + 1 < $promotion->usage_per_user,
            ],
        ]);
    }

    /**
     * Use promotion (record usage for user)
     */
    public function use(Request $request, string $slug): JsonResponse
    {
        $user = $request->user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Authentication required',
            ], 401);
        }

        $promotion = Promotion::where('slug', $slug)->first();

        if (!$promotion) {
            return response()->json([
                'success' => false,
                'message' => 'Promotion not found',
            ], 404);
        }

        if (!$promotion->canBeUsedByUser($user)) {
            return response()->json([
                'success' => false,
                'message' => 'You have already used this promotion the maximum number of times',
            ], 400);
        }

        if (!$promotion->isValid()) {
            return response()->json([
                'success' => false,
                'message' => 'Promotion is not valid',
            ], 400);
        }

        // This would typically be called after a successful purchase
        // For now, we'll just record the usage without amount details
        $promotion->recordUsage($user, 0, 0);

        return response()->json([
            'success' => true,
            'message' => 'Promotion used successfully',
            'data' => [
                'user_usage_count' => $promotion->getUserUsageCount($user),
                'user_can_use_again' => $promotion->canBeUsedByUser($user),
            ],
        ]);
    }

    /**
     * Get user's promotion usage history
     */
    public function userHistory(Request $request): JsonResponse
    {
        $user = $request->user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        $usedPromotions = $user->usedPromotions()
            ->paginate($request->get('per_page', 10));

        return response()->json([
            'success' => true,
            'data' => $usedPromotions,
        ]);
    }
}
