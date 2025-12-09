<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubscriptionPlan extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'billing_cycle',
        'trial_days',
        'features',
        'limitations',
        'max_courses',
        'max_downloads_per_month',
        'max_ebooks',
        'max_products',
        'ai_chat_access',
        'ai_messages_per_month',
        'sort_order',
        'is_popular',
        'is_active',
        'badge_text',
        'badge_color',
    ];

    protected $casts = [
        'features' => 'array',
        'limitations' => 'array',
        'is_popular' => 'boolean',
        'is_active' => 'boolean',
        'ai_chat_access' => 'boolean',
        'price' => 'decimal:2',
    ];

    /**
     * Get all user subscriptions for this plan
     */
    public function userSubscriptions()
    {
        return $this->hasMany(UserSubscription::class);
    }

    /**
     * Get active subscriptions count
     */
    public function getActiveSubscriptionsCountAttribute()
    {
        return $this->userSubscriptions()->where('status', 'active')->count();
    }

    /**
     * Check if plan has specific feature
     */
    public function hasFeature(string $feature): bool
    {
        return in_array($feature, $this->features ?? []);
    }

    /**
     * Get limitation value
     */
    public function getLimitation(string $key, $default = null)
    {
        return $this->limitations[$key] ?? $default;
    }

    /**
     * Scope: Active plans
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope: Popular plans
     */
    public function scopePopular($query)
    {
        return $query->where('is_popular', true);
    }

    /**
     * Scope: Ordered by sort order
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }
}
