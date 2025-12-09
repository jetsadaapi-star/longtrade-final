<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'reviewable_type',
        'reviewable_id',
        'user_name',
        'user_email',
        'rating',
        'title',
        'comment',
        'is_approved',
        'is_verified_purchase',
        'ip_address',
        'approved_at',
        'approved_by',
    ];

    protected $casts = [
        'rating' => 'integer',
        'is_approved' => 'boolean',
        'is_verified_purchase' => 'boolean',
        'approved_at' => 'datetime',
    ];

    /**
     * Get the parent reviewable model (Course, Indicator, Ebook, ExpertAdvisor).
     */
    public function reviewable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Get the user who approved this review.
     */
    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    /**
     * Scope a query to only include approved reviews.
     */
    public function scopeApproved($query)
    {
        return $query->where('is_approved', true);
    }

    /**
     * Scope a query to only include verified purchase reviews.
     */
    public function scopeVerifiedPurchase($query)
    {
        return $query->where('is_verified_purchase', true);
    }

    /**
     * Scope a query to filter by rating.
     */
    public function scopeRating($query, int $rating)
    {
        return $query->where('rating', $rating);
    }

    /**
     * Approve this review.
     */
    public function approve(?int $approvedBy = null): void
    {
        $this->update([
            'is_approved' => true,
            'approved_at' => now(),
            'approved_by' => $approvedBy,
        ]);

        // อัพเดทคะแนนเฉลี่ยของสินค้า
        $this->reviewable->updateRatingStats();
    }

    /**
     * Reject/unapprove this review.
     */
    public function reject(): void
    {
        $this->update([
            'is_approved' => false,
            'approved_at' => null,
            'approved_by' => null,
        ]);

        // อัพเดทคะแนนเฉลี่ยของสินค้า
        $this->reviewable->updateRatingStats();
    }

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        // อัพเดทคะแนนเมื่อลบรีวิว
        static::deleted(function ($review) {
            $review->reviewable?->updateRatingStats();
        });
    }
}
