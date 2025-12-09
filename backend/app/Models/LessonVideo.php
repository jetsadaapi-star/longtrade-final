<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;

class LessonVideo extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'lesson_id',
        'video_type',
        'youtube_id',
        'file_path',
        'file_size',
        'duration',
        'mime_type',
        'thumbnail_path',
        'status',
    ];

    protected $casts = [
        'file_size' => 'integer',
        'duration' => 'integer',
    ];

    protected $appends = ['video_url', 'thumbnail_url'];

    /**
     * Get the course that owns the video
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    /**
     * Get the full URL for the video file
     */
    protected function videoUrl(): Attribute
    {
        return Attribute::make(
            get: function () {
                if ($this->video_type === 'youtube') {
                    return null;
                }

                if (!$this->file_path) {
                    return null;
                }

                // If already a full URL, return as is
                if (str_starts_with($this->file_path, 'http://') || str_starts_with($this->file_path, 'https://')) {
                    return $this->file_path;
                }

                // Convert relative path to full URL
                return url('storage/' . $this->file_path);
            }
        );
    }

    /**
     * Get the full URL for the thumbnail
     */
    protected function thumbnailUrl(): Attribute
    {
        return Attribute::make(
            get: function () {
                if (!$this->thumbnail_path) {
                    return null;
                }

                // If already a full URL, return as is
                if (str_starts_with($this->thumbnail_path, 'http://') || str_starts_with($this->thumbnail_path, 'https://')) {
                    return $this->thumbnail_path;
                }

                // Convert relative path to full URL
                return url('storage/' . $this->thumbnail_path);
            }
        );
    }

    /**
     * Get formatted file size
     */
    public function getFormattedFileSizeAttribute(): string
    {
        if (!$this->file_size) {
            return 'N/A';
        }

        $units = ['B', 'KB', 'MB', 'GB'];
        $size = $this->file_size;
        $unit = 0;

        while ($size >= 1024 && $unit < count($units) - 1) {
            $size /= 1024;
            $unit++;
        }

        return round($size, 2) . ' ' . $units[$unit];
    }

    /**
     * Get formatted duration
     */
    public function getFormattedDurationAttribute(): string
    {
        if (!$this->duration) {
            return 'N/A';
        }

        $hours = floor($this->duration / 3600);
        $minutes = floor(($this->duration % 3600) / 60);
        $seconds = $this->duration % 60;

        if ($hours > 0) {
            return sprintf('%d:%02d:%02d', $hours, $minutes, $seconds);
        }

        return sprintf('%d:%02d', $minutes, $seconds);
    }

    /**
     * Check if video is ready to play
     */
    public function isReady(): bool
    {
        return $this->status === 'ready';
    }

    /**
     * Check if video is still processing
     */
    public function isProcessing(): bool
    {
        return $this->status === 'processing';
    }

    /**
     * Check if video processing failed
     */
    public function hasFailed(): bool
    {
        return $this->status === 'failed';
    }
}
