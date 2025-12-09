<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class UserSubscription extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'subscription_plan_id',
        'status',
        'started_at',
        'expires_at',
        'cancelled_at',
        'trial_ends_at',
        'payment_id',
        'amount_paid',
        'payment_method',
        'payment_reference',
        'auto_renew',
        'stripe_subscription_id',
        'usage_stats',
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'expires_at' => 'datetime',
        'cancelled_at' => 'datetime',
        'trial_ends_at' => 'datetime',
        'auto_renew' => 'boolean',
        'usage_stats' => 'array',
        'amount_paid' => 'decimal:2',
    ];

    /**
     * Get the user that owns the subscription
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the subscription plan
     */
    public function plan()
    {
        return $this->belongsTo(SubscriptionPlan::class, 'subscription_plan_id');
    }

    /**
     * Check if subscription is active
     */
    public function isActive(): bool
    {
        return $this->status === 'active' &&
            ($this->expires_at === null || $this->expires_at->isFuture());
    }

    /**
     * Check if subscription is in trial period
     */
    public function isOnTrial(): bool
    {
        return $this->trial_ends_at !== null && $this->trial_ends_at->isFuture();
    }

    /**
     * Check if subscription is expired
     */
    public function isExpired(): bool
    {
        return $this->expires_at !== null && $this->expires_at->isPast();
    }

    /**
     * Check if subscription is cancelled
     */
    public function isCancelled(): bool
    {
        return $this->status === 'cancelled';
    }

    /**
     * Cancel subscription
     */
    public function cancel()
    {
        $this->update([
            'status' => 'cancelled',
            'cancelled_at' => now(),
            'auto_renew' => false,
        ]);
    }

    /**
     * Renew subscription
     */
    public function renew(int $months = 1)
    {
        $expiresAt = $this->expires_at ?? now();

        $this->update([
            'status' => 'active',
            'expires_at' => Carbon::parse($expiresAt)->addMonths($months),
            'cancelled_at' => null,
        ]);
    }

    /**
     * Track usage
     */
    public function trackUsage(string $key, $value = 1)
    {
        $stats = $this->usage_stats ?? [];
        $stats[$key] = ($stats[$key] ?? 0) + $value;

        $this->update(['usage_stats' => $stats]);
    }

    /**
     * Get usage stat
     */
    public function getUsage(string $key, $default = 0)
    {
        return $this->usage_stats[$key] ?? $default;
    }

    /**
     * Reset monthly usage stats
     */
    public function resetMonthlyUsage()
    {
        $stats = $this->usage_stats ?? [];
        $stats['downloads_this_month'] = 0;
        $stats['ai_messages_this_month'] = 0;

        $this->update(['usage_stats' => $stats]);
    }

    /**
     * Scope: Active subscriptions
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active')
            ->where(function ($q) {
                $q->whereNull('expires_at')
                    ->orWhere('expires_at', '>', now());
            });
    }

    /**
     * Scope: Expired subscriptions
     */
    public function scopeExpired($query)
    {
        return $query->where('expires_at', '<=', now());
    }

    /**
     * Scope: On trial
     */
    public function scopeOnTrial($query)
    {
        return $query->whereNotNull('trial_ends_at')
            ->where('trial_ends_at', '>', now());
    }
}
