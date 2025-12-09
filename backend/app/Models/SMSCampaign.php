<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SMSCampaign extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'sms_campaigns';

    protected $fillable = [
        'name',
        'type',
        'message',
        'sender_name',
        'target_audience',
        'segment_filter',
        'recipient_count',
        'schedule_type',
        'scheduled_at',
        'recurrence_pattern',
        'status',
        'is_active',
        'sent_count',
        'delivered_count',
        'failed_count',
        'clicked_count',
        'estimated_cost',
        'actual_cost',
        'sent_at',
    ];

    protected $casts = [
        'segment_filter' => 'array',
        'recipient_count' => 'integer',
        'scheduled_at' => 'datetime',
        'is_active' => 'boolean',
        'sent_count' => 'integer',
        'delivered_count' => 'integer',
        'failed_count' => 'integer',
        'clicked_count' => 'integer',
        'estimated_cost' => 'decimal:2',
        'actual_cost' => 'decimal:2',
        'sent_at' => 'datetime',
    ];

    /**
     * Get delivery rate
     */
    public function getDeliveryRate(): float
    {
        if ($this->sent_count === 0) {
            return 0;
        }

        return round(($this->delivered_count / $this->sent_count) * 100, 2);
    }

    /**
     * Get failure rate
     */
    public function getFailureRate(): float
    {
        if ($this->sent_count === 0) {
            return 0;
        }

        return round(($this->failed_count / $this->sent_count) * 100, 2);
    }

    /**
     * Get click rate
     */
    public function getClickRate(): float
    {
        if ($this->delivered_count === 0) {
            return 0;
        }

        return round(($this->clicked_count / $this->delivered_count) * 100, 2);
    }

    /**
     * Calculate estimated cost
     */
    public function calculateEstimatedCost(float $costPerSMS = 0.05): float
    {
        return round($this->recipient_count * $costPerSMS, 2);
    }

    /**
     * Check if campaign can be sent
     */
    public function canBeSent(): bool
    {
        return $this->status === 'draft' || $this->status === 'scheduled';
    }

    /**
     * Mark as sending
     */
    public function markAsSending(): void
    {
        $this->update(['status' => 'sending']);
    }

    /**
     * Mark as sent
     */
    public function markAsSent(): void
    {
        $this->update([
            'status' => 'sent',
            'sent_at' => now(),
        ]);
    }

    /**
     * Mark as failed
     */
    public function markAsFailed(): void
    {
        $this->update(['status' => 'failed']);
    }

    /**
     * Increment sent count
     */
    public function incrementSent(): void
    {
        $this->increment('sent_count');
    }

    /**
     * Increment delivered count
     */
    public function incrementDelivered(): void
    {
        $this->increment('delivered_count');
    }

    /**
     * Increment failed count
     */
    public function incrementFailed(): void
    {
        $this->increment('failed_count');
    }

    /**
     * Increment clicked count
     */
    public function incrementClicked(): void
    {
        $this->increment('clicked_count');
    }

    /**
     * Validate message length
     */
    public function isValidMessageLength(): bool
    {
        return mb_strlen($this->message) <= 160;
    }

    /**
     * Get message segments (for multi-part SMS)
     */
    public function getMessageSegments(): int
    {
        $length = mb_strlen($this->message);

        if ($length <= 160) {
            return 1;
        }

        return (int) ceil($length / 153);
    }

    /**
     * Scope: Active campaigns
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope: Scheduled campaigns
     */
    public function scopeScheduled($query)
    {
        return $query->where('status', 'scheduled');
    }

    /**
     * Scope: Sent campaigns
     */
    public function scopeSent($query)
    {
        return $query->where('status', 'sent');
    }
}
