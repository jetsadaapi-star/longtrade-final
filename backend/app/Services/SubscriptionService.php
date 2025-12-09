<?php

namespace App\Services;

use App\Models\UserSubscription;
use App\Models\SubscriptionPlan;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class SubscriptionService
{
    /**
     * Subscribe user to a plan
     */
    public function subscribe(User $user, SubscriptionPlan $plan, array $paymentData = []): UserSubscription
    {
        return DB::transaction(function () use ($user, $plan, $paymentData) {
            // Cancel existing active subscriptions
            $user->subscriptions()
                ->where('status', 'active')
                ->each(function ($subscription) {
                    $subscription->cancel();
                });

            // Calculate expiry date
            $expiresAt = $this->calculateExpiryDate($plan);
            $trialEndsAt = $plan->trial_days > 0 ? now()->addDays($plan->trial_days) : null;

            // Create new subscription
            $subscription = UserSubscription::create([
                'user_id' => $user->id,
                'subscription_plan_id' => $plan->id,
                'status' => 'active',
                'started_at' => now(),
                'expires_at' => $expiresAt,
                'trial_ends_at' => $trialEndsAt,
                'amount_paid' => $paymentData['amount'] ?? $plan->price,
                'payment_method' => $paymentData['method'] ?? null,
                'payment_reference' => $paymentData['reference'] ?? null,
                'auto_renew' => $paymentData['auto_renew'] ?? false,
            ]);

            return $subscription;
        });
    }

    /**
     * Cancel subscription
     */
    public function cancel(UserSubscription $subscription): bool
    {
        $subscription->cancel();
        return true;
    }

    /**
     * Renew subscription
     */
    public function renew(UserSubscription $subscription, array $paymentData = []): bool
    {
        $plan = $subscription->plan;
        $months = $this->getBillingCycleMonths($plan->billing_cycle);

        $subscription->update([
            'amount_paid' => $paymentData['amount'] ?? $plan->price,
            'payment_method' => $paymentData['method'] ?? $subscription->payment_method,
            'payment_reference' => $paymentData['reference'] ?? null,
        ]);

        $subscription->renew($months);

        return true;
    }

    /**
     * Upgrade subscription
     */
    public function upgrade(User $user, SubscriptionPlan $newPlan): UserSubscription
    {
        $currentSubscription = $user->subscription;

        if ($currentSubscription) {
            $currentSubscription->cancel();
        }

        return $this->subscribe($user, $newPlan);
    }

    /**
     * Downgrade subscription
     */
    public function downgrade(User $user, SubscriptionPlan $newPlan): UserSubscription
    {
        // Downgrade takes effect at the end of current billing period
        $currentSubscription = $user->subscription;

        if ($currentSubscription) {
            // Schedule downgrade
            $currentSubscription->update([
                'scheduled_plan_id' => $newPlan->id,
            ]);
        }

        return $currentSubscription;
    }

    /**
     * Check if user can access resource
     */
    public function canAccess(User $user, string $resourceType, int $count = 1): bool
    {
        $subscription = $user->subscription;

        if (!$subscription || !$subscription->isActive()) {
            return false;
        }

        $plan = $subscription->plan;

        // Check limits based on resource type
        switch ($resourceType) {
            case 'course':
                $limit = $plan->max_courses;
                $current = $subscription->getUsage('courses_accessed', 0);
                break;

            case 'download':
                $limit = $plan->max_downloads_per_month;
                $current = $subscription->getUsage('downloads_this_month', 0);
                break;

            case 'ebook':
                $limit = $plan->max_ebooks;
                $current = $subscription->getUsage('ebooks_accessed', 0);
                break;

            case 'product':
                $limit = $plan->max_products;
                $current = $subscription->getUsage('products_accessed', 0);
                break;

            case 'ai_chat':
                if (!$plan->ai_chat_access) {
                    return false;
                }
                $limit = $plan->ai_messages_per_month;
                $current = $subscription->getUsage('ai_messages_this_month', 0);
                break;

            default:
                return false;
        }

        // null limit means unlimited
        if ($limit === null) {
            return true;
        }

        return ($current + $count) <= $limit;
    }

    /**
     * Track resource usage
     */
    public function trackUsage(User $user, string $resourceType, int $count = 1): void
    {
        $subscription = $user->subscription;

        if (!$subscription) {
            return;
        }

        $usageKey = match ($resourceType) {
            'course' => 'courses_accessed',
            'download' => 'downloads_this_month',
            'ebook' => 'ebooks_accessed',
            'product' => 'products_accessed',
            'ai_chat' => 'ai_messages_this_month',
            default => null,
        };

        if ($usageKey) {
            $subscription->trackUsage($usageKey, $count);
        }
    }

    /**
     * Get user's subscription status
     */
    public function getStatus(User $user): array
    {
        $subscription = $user->subscription;

        if (!$subscription) {
            return [
                'has_subscription' => false,
                'plan' => null,
                'status' => 'none',
            ];
        }

        return [
            'has_subscription' => true,
            'plan' => $subscription->plan,
            'status' => $subscription->status,
            'is_active' => $subscription->isActive(),
            'is_trial' => $subscription->isOnTrial(),
            'started_at' => $subscription->started_at,
            'expires_at' => $subscription->expires_at,
            'trial_ends_at' => $subscription->trial_ends_at,
            'auto_renew' => $subscription->auto_renew,
            'usage' => $subscription->usage_stats,
        ];
    }

    /**
     * Calculate expiry date based on billing cycle
     */
    private function calculateExpiryDate(SubscriptionPlan $plan): ?\Carbon\Carbon
    {
        if ($plan->billing_cycle === 'lifetime') {
            return null;
        }

        $months = $this->getBillingCycleMonths($plan->billing_cycle);

        return now()->addMonths($months);
    }

    /**
     * Get months from billing cycle
     */
    private function getBillingCycleMonths(string $cycle): int
    {
        return match ($cycle) {
            'monthly' => 1,
            'quarterly' => 3,
            'yearly' => 12,
            default => 1,
        };
    }

    /**
     * Process expired subscriptions
     */
    public function processExpiredSubscriptions(): int
    {
        $expired = UserSubscription::expired()
            ->where('status', 'active')
            ->get();

        foreach ($expired as $subscription) {
            $subscription->update(['status' => 'expired']);
        }

        return $expired->count();
    }

    /**
     * Reset monthly usage for all subscriptions
     */
    public function resetMonthlyUsage(): int
    {
        $subscriptions = UserSubscription::active()->get();

        foreach ($subscriptions as $subscription) {
            $subscription->resetMonthlyUsage();
        }

        return $subscriptions->count();
    }
}
