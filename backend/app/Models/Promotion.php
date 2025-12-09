<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Promotion extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'type',
        'discount_type',
        'discount_value',
        'max_discount_amount',
        'min_purchase_amount',
        'applicable_to',
        'applicable_ids',
        'starts_at',
        'ends_at',
        'is_active',
        'usage_limit',
        'usage_per_user',
        'current_usage',
        'banner_image',
        'badge_text',
        'badge_color',
        'priority',
    ];

    protected $casts = [
        'discount_value' => 'decimal:2',
        'max_discount_amount' => 'decimal:2',
        'min_purchase_amount' => 'decimal:2',
        'applicable_ids' => 'array',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
        'is_active' => 'boolean',
        'usage_limit' => 'integer',
        'usage_per_user' => 'integer',
        'current_usage' => 'integer',
        'priority' => 'integer',
    ];

    /**
     * Check if promotion is currently valid
     */
    public function isValid(): bool
    {
        if (!$this->is_active) {
            return false;
        }

        $now = Carbon::now();

        if ($this->starts_at && $now->isBefore($this->starts_at)) {
            return false;
        }

        if ($this->ends_at && $now->isAfter($this->ends_at)) {
            return false;
        }

        if ($this->usage_limit && $this->current_usage >= $this->usage_limit) {
            return false;
        }

        return true;
    }

    /**
     * Calculate discount for given amount
     */
    public function calculateDiscount(float $amount): float
    {
        if (!$this->isValid() || $amount < $this->min_purchase_amount) {
            return 0;
        }

        $discount = 0;

        switch ($this->discount_type) {
            case 'percentage':
                $discount = $amount * ($this->discount_value / 100);
                if ($this->max_discount_amount && $discount > $this->max_discount_amount) {
                    $discount = $this->max_discount_amount;
                }
                break;

            case 'fixed_amount':
                $discount = min($this->discount_value, $amount);
                break;

            case 'buy_x_get_y':
                // Implement buy X get Y logic
                break;
        }

        return round($discount, 2);
    }

    /**
     * Increment usage count
     */
    public function use(): void
    {
        $this->increment('current_usage');
    }

    /**
     * Scope: Active promotions
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope: Current promotions (within date range)
     */
    public function scopeCurrent($query)
    {
        $now = Carbon::now();
        return $query->where(function ($q) use ($now) {
            $q->whereNull('starts_at')->orWhere('starts_at', '<=', $now);
        })->where(function ($q) use ($now) {
            $q->whereNull('ends_at')->orWhere('ends_at', '>=', $now);
        });
    }

    /**
     * Scope: Available promotions (active + current + not exhausted)
     */
    public function scopeAvailable($query)
    {
        return $query->active()->current()->where(function ($q) {
            $q->whereNull('usage_limit')
                ->orWhereRaw('current_usage < usage_limit');
        });
    }

    /**
     * Relationship: Users who have used this promotion
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'promotion_user')
            ->withPivot(['usage_count', 'discount_amount', 'order_amount', 'used_at'])
            ->withTimestamps();
    }

    /**
     * Check if this promotion can be used by a specific user
     */
    public function canBeUsedByUser(?User $user): bool
    {
        if (!$user) {
            return false;
        }

        if (!$this->isValid()) {
            return false;
        }

        $userUsage = $this->users()
            ->where('user_id', $user->id)
            ->sum('promotion_user.usage_count');

        return $userUsage < $this->usage_per_user;
    }

    /**
     * Record usage of this promotion by a user
     */
    public function recordUsage(User $user, float $discountAmount, float $orderAmount): void
    {
        $existing = $this->users()->where('user_id', $user->id)->first();

        if ($existing) {
            // Increment existing usage
            $this->users()->updateExistingPivot($user->id, [
                'usage_count' => $existing->pivot->usage_count + 1,
                'used_at' => now(),
            ]);
        } else {
            // Create new usage record
            $this->users()->attach($user->id, [
                'usage_count' => 1,
                'discount_amount' => $discountAmount,
                'order_amount' => $orderAmount,
                'used_at' => now(),
            ]);
        }

        // Increment global usage counter
        $this->increment('current_usage');
    }

    /**
     * Get the number of times a user has used this promotion
     */
    public function getUserUsageCount(User $user): int
    {
        return $this->users()
            ->where('user_id', $user->id)
            ->sum('promotion_user.usage_count');
    }
}
