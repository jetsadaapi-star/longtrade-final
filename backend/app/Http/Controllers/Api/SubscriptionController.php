<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Services\SubscriptionService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SubscriptionController extends Controller
{
    protected SubscriptionService $subscriptionService;

    public function __construct(SubscriptionService $subscriptionService)
    {
        $this->subscriptionService = $subscriptionService;
    }

    /**
     * Get all subscription plans
     */
    public function plans(): JsonResponse
    {
        $plans = SubscriptionPlan::active()
            ->ordered()
            ->get()
            ->map(function ($plan) {
                return [
                    'id' => $plan->id,
                    'name' => $plan->name,
                    'slug' => $plan->slug,
                    'description' => $plan->description,
                    'price' => $plan->price,
                    'billing_cycle' => $plan->billing_cycle,
                    'trial_days' => $plan->trial_days,
                    'features' => $plan->features,
                    'is_popular' => $plan->is_popular,
                    'badge_text' => $plan->badge_text,
                    'badge_color' => $plan->badge_color,
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $plans,
        ]);
    }

    /**
     * Subscribe to a plan
     */
    public function subscribe(Request $request): JsonResponse
    {
        $request->validate([
            'plan_id' => 'required|exists:subscription_plans,id',
            'payment_method' => 'nullable|string',
            'payment_reference' => 'nullable|string',
            'auto_renew' => 'nullable|boolean',
        ]);

        $user = $request->user();
        $plan = SubscriptionPlan::findOrFail($request->plan_id);

        try {
            $subscription = $this->subscriptionService->subscribe($user, $plan, [
                'amount' => $plan->price,
                'method' => $request->payment_method,
                'reference' => $request->payment_reference,
                'auto_renew' => $request->auto_renew ?? false,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Subscription created successfully',
                'data' => [
                    'subscription' => $subscription,
                    'plan' => $plan,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Subscription failed: ' . $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Get current subscription
     */
    public function current(Request $request): JsonResponse
    {
        $user = $request->user();
        $status = $this->subscriptionService->getStatus($user);

        return response()->json([
            'success' => true,
            'data' => $status,
        ]);
    }

    /**
     * Cancel subscription
     */
    public function cancel(Request $request): JsonResponse
    {
        $user = $request->user();
        $subscription = $user->subscription;

        if (!$subscription) {
            return response()->json([
                'success' => false,
                'message' => 'No active subscription found',
            ], 404);
        }

        $this->subscriptionService->cancel($subscription);

        return response()->json([
            'success' => true,
            'message' => 'Subscription cancelled successfully',
        ]);
    }

    /**
     * Renew subscription
     */
    public function renew(Request $request): JsonResponse
    {
        $request->validate([
            'payment_method' => 'nullable|string',
            'payment_reference' => 'nullable|string',
        ]);

        $user = $request->user();
        $subscription = $user->subscription;

        if (!$subscription) {
            return response()->json([
                'success' => false,
                'message' => 'No active subscription found',
            ], 404);
        }

        try {
            $this->subscriptionService->renew($subscription, [
                'amount' => $subscription->plan->price,
                'method' => $request->payment_method,
                'reference' => $request->payment_reference,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Subscription renewed successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Renewal failed: ' . $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Upgrade subscription
     */
    public function upgrade(Request $request): JsonResponse
    {
        $request->validate([
            'plan_id' => 'required|exists:subscription_plans,id',
        ]);

        $user = $request->user();
        $newPlan = SubscriptionPlan::findOrFail($request->plan_id);

        try {
            $subscription = $this->subscriptionService->upgrade($user, $newPlan);

            return response()->json([
                'success' => true,
                'message' => 'Subscription upgraded successfully',
                'data' => $subscription,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Upgrade failed: ' . $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Check access to resource
     */
    public function checkAccess(Request $request): JsonResponse
    {
        $request->validate([
            'resource_type' => 'required|in:course,download,ebook,product,ai_chat',
            'count' => 'nullable|integer|min:1',
        ]);

        $user = $request->user();
        $canAccess = $this->subscriptionService->canAccess(
            $user,
            $request->resource_type,
            $request->count ?? 1
        );

        return response()->json([
            'success' => true,
            'can_access' => $canAccess,
        ]);
    }
}
