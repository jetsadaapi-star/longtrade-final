<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'log_name',
        'description',
        'subject_type',
        'subject_id',
        'event',
        'causer_type',
        'causer_id',
        'properties',
        'batch_uuid',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'properties' => 'array',
    ];

    /**
     * Get the user that performed the activity
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the subject model
     */
    public function subject()
    {
        return $this->morphTo();
    }

    /**
     * Get the causer model
     */
    public function causer()
    {
        return $this->morphTo();
    }

    /**
     * Log an activity
     */
    public static function logActivity(
        string $description,
        ?User $user = null,
        ?Model $subject = null,
        array $properties = [],
        string $logName = 'default'
    ) {
        return static::create([
            'user_id' => $user?->id ?? auth()->id(),
            'log_name' => $logName,
            'description' => $description,
            'subject_type' => $subject ? get_class($subject) : null,
            'subject_id' => $subject?->id,
            'causer_type' => $user ? get_class($user) : (auth()->user() ? get_class(auth()->user()) : null),
            'causer_id' => $user?->id ?? auth()->id(),
            'properties' => $properties,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
        ]);
    }

    /**
     * Scope: By user
     */
    public function scopeByUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    /**
     * Scope: By log name
     */
    public function scopeByLogName($query, string $logName)
    {
        return $query->where('log_name', $logName);
    }

    /**
     * Scope: Recent logs
     */
    public function scopeRecent($query, int $days = 7)
    {
        return $query->where('created_at', '>=', now()->subDays($days));
    }
}
