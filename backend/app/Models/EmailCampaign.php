<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EmailCampaign extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'type',
        'subject',
        'preview_text',
        'from_name',
        'from_email',
        'reply_to',
        'html_content',
        'plain_text_content',
        'template_id',
        'target_audience',
        'segment_filter',
        'recipient_count',
        'schedule_type',
        'scheduled_at',
        'automation_trigger',
        'status',
        'is_active',
        'sent_count',
        'delivered_count',
        'opened_count',
        'clicked_count',
        'bounced_count',
        'unsubscribed_count',
        'is_ab_test',
        'ab_test_variant',
        'sent_at',
    ];

    protected $casts = [
        'segment_filter' => 'array',
        'recipient_count' => 'integer',
        'scheduled_at' => 'datetime',
        'is_active' => 'boolean',
        'sent_count' => 'integer',
        'delivered_count' => 'integer',
        'opened_count' => 'integer',
        'clicked_count' => 'integer',
        'bounced_count' => 'integer',
        'unsubscribed_count' => 'integer',
        'is_ab_test' => 'boolean',
        'sent_at' => 'datetime',
    ];

    /**
     * Relationship: Email Template
     */
    public function template(): BelongsTo
    {
        return $this->belongsTo(EmailTemplate::class, 'template_id');
    }

    /**
     * Get open rate
     */
    public function getOpenRate(): float
    {
        if ($this->delivered_count === 0) {
            return 0;
        }

        return round(($this->opened_count / $this->delivered_count) * 100, 2);
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
     * Get bounce rate
     */
    public function getBounceRate(): float
    {
        if ($this->sent_count === 0) {
            return 0;
        }

        return round(($this->bounced_count / $this->sent_count) * 100, 2);
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
     * Increment opened count
     */
    public function incrementOpened(): void
    {
        $this->increment('opened_count');
    }

    /**
     * Increment clicked count
     */
    public function incrementClicked(): void
    {
        $this->increment('clicked_count');
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
