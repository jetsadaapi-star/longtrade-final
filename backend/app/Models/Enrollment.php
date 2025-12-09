<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Enrollment extends Model
{
    protected $fillable = [
        'user_id',
        'course_id',
        'coupon_id',
        'enrollment_date',
        'completion_date',
        'status',
        'payment_status',
        'progress_percentage',
        'original_price',
        'final_price',
    ];

    protected $casts = [
        'enrollment_date' => 'datetime',
        'completion_date' => 'datetime',
        'progress_percentage' => 'decimal:2',
        'original_price' => 'decimal:2',
        'final_price' => 'decimal:2',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    public function coupon(): BelongsTo
    {
        return $this->belongsTo(Coupon::class);
    }

    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }

    public function certificate(): HasOne
    {
        return $this->hasOne(Certificate::class);
    }
}
