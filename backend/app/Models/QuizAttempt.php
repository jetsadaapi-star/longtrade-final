<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class QuizAttempt extends Model
{
    protected $fillable = [
        'user_id',
        'course_id',
        'score',
        'total_questions',
        'percentage',
        'passed',
        'answers',
        'attempted_at',
    ];

    protected $casts = [
        'percentage' => 'decimal:2',
        'passed' => 'boolean',
        'answers' => 'array',
        'attempted_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
