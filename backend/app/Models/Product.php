<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'category',
        'price',
        'access_type',
        'file_path',
        'file_size',
        'file_version',
        'requirements',
        'installation_guide',
        'demo_url',
        'thumbnail_id',
        'featured_image_id',
        'downloads_count',
        'views_count',
        'rating',
        'status',
        'is_featured',
        'published_at',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'file_size' => 'integer',
        'downloads_count' => 'integer',
        'views_count' => 'integer',
        'rating' => 'decimal:2',
        'is_featured' => 'boolean',
        'published_at' => 'datetime',
    ];

    protected $appends = [
        'formatted_price',
        'category_label',
        'file_extension',
    ];

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($product) {
            if (empty($product->slug)) {
                $product->slug = Str::slug($product->name);
            }
        });
    }

    /**
     * Relationships
     */
    public function thumbnail(): BelongsTo
    {
        return $this->belongsTo(\Awcodes\Curator\Models\Media::class, 'thumbnail_id');
    }

    public function featuredImage(): BelongsTo
    {
        return $this->belongsTo(\Awcodes\Curator\Models\Media::class, 'featured_image_id');
    }

    public function screenshots(): HasMany
    {
        return $this->hasMany(ProductScreenshot::class)->orderBy('order');
    }

    public function orders(): MorphMany
    {
        return $this->morphMany(Order::class, 'orderable');
    }

    public function payments(): MorphMany
    {
        return $this->morphMany(Payment::class, 'payable');
    }

    /**
     * Scopes
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published')
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now());
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeByCategory($query, string $category)
    {
        return $query->where('category', $category);
    }

    public function scopeFree($query)
    {
        return $query->where('access_type', 'free');
    }

    public function scopePremium($query)
    {
        return $query->where('access_type', 'premium');
    }

    /**
     * Accessors
     */
    public function getFormattedPriceAttribute(): string
    {
        if ($this->price == 0 || $this->access_type === 'free') {
            return 'ฟรี';
        }
        return '฿' . number_format((float) $this->price, 0);
    }

    public function getCategoryLabelAttribute(): string
    {
        return match ($this->category) {
            'expert_advisors' => 'Expert Advisors (EA)',
            'indicators' => 'อินดิเคเตอร์',
            'tradingview' => 'TradingView',
            default => (string) $this->category,
        };
    }

    public function getFileExtensionAttribute(): ?string
    {
        if (!$this->file_path) {
            return null;
        }
        return pathinfo($this->file_path, PATHINFO_EXTENSION);
    }

    /**
     * Helper Methods
     */
    public function isFree(): bool
    {
        return $this->access_type === 'free';
    }

    public function isPremium(): bool
    {
        return $this->access_type === 'premium';
    }

    public function isMembersOnly(): bool
    {
        return $this->access_type === 'members_only';
    }

    public function isPublished(): bool
    {
        return $this->status === 'published'
            && $this->published_at !== null
            && $this->published_at->isPast();
    }

    public function canDownload($user = null): bool
    {
        // Free products can be downloaded by anyone
        if ($this->isFree()) {
            return true;
        }

        // Must be authenticated for non-free products
        if (!$user) {
            return false;
        }

        // Check if user has purchased this product
        return $this->orders()
            ->where('user_id', $user->id)
            ->where('status', 'completed')
            ->exists();
    }

    public function incrementDownloads(): void
    {
        $this->increment('downloads_count');
    }

    public function incrementViews(): void
    {
        $this->increment('views_count');
    }

    public function getFileSizeFormatted(): string
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
}
