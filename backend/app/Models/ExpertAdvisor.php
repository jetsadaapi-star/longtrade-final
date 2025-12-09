<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class ExpertAdvisor extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'slug',
        'title',
        'description',
        'image',
        'price',
        'original_price',
        'platform',
        'features',
        'strategy',
        'download_link',
        'is_published',
        'is_featured',
        'downloads_count',
        'order',
        'category_id',
    ];

    protected $casts = [
        'features' => 'array',
        'price' => 'decimal:2',
        'original_price' => 'decimal:2',
        'is_published' => 'boolean',
        'is_featured' => 'boolean',
        'downloads_count' => 'integer',
        'order' => 'integer',
        'average_rating' => 'decimal:2',
        'reviews_count' => 'integer',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews(): MorphMany
    {
        return $this->morphMany(Review::class, 'reviewable');
    }

    // Accessors - Convert relative image paths to full URLs
    protected function image(): \Illuminate\Database\Eloquent\Casts\Attribute
    {
        return \Illuminate\Database\Eloquent\Casts\Attribute::make(
            get: function ($value) {
                if (!$value) {
                    return null;
                }

                // If already a full URL, return as is
                if (str_starts_with($value, 'http://') || str_starts_with($value, 'https://')) {
                    return $value;
                }

                // Convert relative path to full URL
                return url('storage/' . $value);
            },
        );
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * อัพเดทสถิติคะแนนเฉลี่ยและจำนวนรีวิว
     */
    public function updateRatingStats(): void
    {
        $approvedReviews = $this->reviews()->approved();

        $this->update([
            'average_rating' => $approvedReviews->avg('rating') ?? 0,
            'reviews_count' => $approvedReviews->count(),
        ]);
    }
}
