<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Course extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'slug',
        'title',
        'description',
        'cover',
        'price',
        'original_price',
        'hours',
        'level',
        'lessons_count',
        'what_you_learn',
        'requirements',
        'is_published',
        'is_featured',
        'order',
        'category_id',
        'unlock_code',
        'sections',
        'quiz',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'original_price' => 'decimal:2',
        'lessons_count' => 'integer',
        'what_you_learn' => 'array',
        'requirements' => 'array',
        'is_published' => 'boolean',
        'is_featured' => 'boolean',
        'order' => 'integer',
        'average_rating' => 'decimal:2',
        'reviews_count' => 'integer',
        'sections' => 'array',
        'quiz' => 'array',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews(): MorphMany
    {
        return $this->morphMany(Review::class, 'reviewable');
    }

    // Accessors - Convert relative image paths to full URLs
    protected function cover(): \Illuminate\Database\Eloquent\Casts\Attribute
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


    // New relationships for course system
    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function lessonCompletions()
    {
        return $this->hasMany(LessonCompletion::class);
    }

    public function quizAttempts()
    {
        return $this->hasMany(QuizAttempt::class);
    }

    public function certificates()
    {
        return $this->hasMany(Certificate::class);
    }

    public function schedules()
    {
        return $this->hasMany(CourseSchedule::class);
    }

    public function videos()
    {
        return $this->hasMany(LessonVideo::class);
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
     * Update rating statistics
     */
    public function updateRatingStats()
    {
        $this->average_rating = $this->reviews()->avg('rating') ?? 0;
        $this->reviews_count = $this->reviews()->count();
        $this->save();
    }
}
