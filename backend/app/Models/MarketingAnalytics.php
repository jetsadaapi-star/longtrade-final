<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MarketingAnalytics extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'campaign_type',
        'campaign_id',
        'user_id',
        'session_id',
        'event_type',
        'event_data',
        'page_url',
        'referrer',
        'device_type',
        'browser',
    ];

    protected $casts = [
        'campaign_id' => 'integer',
        'user_id' => 'integer',
        'event_data' => 'array',
        'created_at' => 'datetime',
    ];

    /**
     * Relationship: User
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get campaign model
     */
    public function campaign()
    {
        return match ($this->campaign_type) {
            'promotion' => Promotion::find($this->campaign_id),
            'coupon' => Coupon::find($this->campaign_id),
            'popup' => Popup::find($this->campaign_id),
            'sms' => SMSCampaign::find($this->campaign_id),
            'email' => EmailCampaign::find($this->campaign_id),
            default => null,
        };
    }

    /**
     * Track event
     */
    public static function track(
        string $campaignType,
        int $campaignId,
        string $eventType,
        ?int $userId = null,
        ?string $sessionId = null,
        array $eventData = [],
        ?string $pageUrl = null,
        ?string $referrer = null,
        ?string $deviceType = null,
        ?string $browser = null
    ): self {
        return self::create([
            'campaign_type' => $campaignType,
            'campaign_id' => $campaignId,
            'user_id' => $userId,
            'session_id' => $sessionId,
            'event_type' => $eventType,
            'event_data' => $eventData,
            'page_url' => $pageUrl,
            'referrer' => $referrer,
            'device_type' => $deviceType,
            'browser' => $browser,
        ]);
    }

    /**
     * Get stats for campaign
     */
    public static function getCampaignStats(string $campaignType, int $campaignId): array
    {
        $analytics = self::where('campaign_type', $campaignType)
            ->where('campaign_id', $campaignId)
            ->get();

        return [
            'total_events' => $analytics->count(),
            'views' => $analytics->where('event_type', 'view')->count(),
            'clicks' => $analytics->where('event_type', 'click')->count(),
            'conversions' => $analytics->where('event_type', 'conversion')->count(),
            'shares' => $analytics->where('event_type', 'share')->count(),
            'unique_users' => $analytics->whereNotNull('user_id')->pluck('user_id')->unique()->count(),
            'unique_sessions' => $analytics->whereNotNull('session_id')->pluck('session_id')->unique()->count(),
        ];
    }

    /**
     * Scope: By campaign
     */
    public function scopeByCampaign($query, string $type, int $id)
    {
        return $query->where('campaign_type', $type)->where('campaign_id', $id);
    }

    /**
     * Scope: By event type
     */
    public function scopeByEventType($query, string $type)
    {
        return $query->where('event_type', $type);
    }

    /**
     * Scope: By user
     */
    public function scopeByUser($query, int $userId)
    {
        return $query->where('user_id', $userId);
    }

    /**
     * Scope: By date range
     */
    public function scopeDateRange($query, $startDate, $endDate)
    {
        return $query->whereBetween('created_at', [$startDate, $endDate]);
    }
}
