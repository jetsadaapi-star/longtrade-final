<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Popup extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'title',
        'content',
        'trigger_type',
        'trigger_value',
        'display_type',
        'position',
        'width',
        'height',
        'target_pages',
        'target_user_type',
        'frequency',
        'image_url',
        'button_text',
        'button_url',
        'button_color',
        'background_color',
        'is_active',
        'starts_at',
        'ends_at',
        'impressions',
        'clicks',
        'conversions',
    ];

    protected $casts = [
        'trigger_value' => 'integer',
        'width' => 'integer',
        'height' => 'integer',
        'target_pages' => 'array',
        'is_active' => 'boolean',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
        'impressions' => 'integer',
        'clicks' => 'integer',
        'conversions' => 'integer',
    ];

    /**
     * Check if popup should be displayed
     */
    public function shouldDisplay(string $currentPage = null, bool $isGuest = true): bool
    {
        if (!$this->is_active) {
            return false;
        }

        $now = Carbon::now();

        // Check date range
        if ($this->starts_at && $now->isBefore($this->starts_at)) {
            return false;
        }

        if ($this->ends_at && $now->isAfter($this->ends_at)) {
            return false;
        }

        // Check target pages
        if ($currentPage && $this->target_pages && count($this->target_pages) > 0) {
            $matches = false;
            foreach ($this->target_pages as $pattern) {
                if (fnmatch($pattern, $currentPage)) {
                    $matches = true;
                    break;
                }
            }
            if (!$matches) {
                return false;
            }
        }

        // Check user type
        if ($this->target_user_type === 'guest' && !$isGuest) {
            return false;
        }

        if ($this->target_user_type === 'member' && $isGuest) {
            return false;
        }

        return true;
    }

    /**
     * Record impression
     */
    public function recordImpression(): void
    {
        $this->increment('impressions');
    }

    /**
     * Record click
     */
    public function recordClick(): void
    {
        $this->increment('clicks');
    }

    /**
     * Record conversion
     */
    public function recordConversion(): void
    {
        $this->increment('conversions');
    }

    /**
     * Get click-through rate
     */
    public function getClickThroughRate(): float
    {
        if ($this->impressions === 0) {
            return 0;
        }

        return round(($this->clicks / $this->impressions) * 100, 2);
    }

    /**
     * Get conversion rate
     */
    public function getConversionRate(): float
    {
        if ($this->clicks === 0) {
            return 0;
        }

        return round(($this->conversions / $this->clicks) * 100, 2);
    }

    /**
     * Scope: Active popups
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope: Current popups (within date range)
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
     * Scope: Available popups
     */
    public function scopeAvailable($query)
    {
        return $query->active()->current();
    }
}
