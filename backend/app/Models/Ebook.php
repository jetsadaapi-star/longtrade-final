<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Ebook extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'slug',
        'title',
        'author',
        'pages_count',
        'description',
        'cover_image',
        'price',
        'original_price',
        'pages',
        'format',
        'file_path',
        'preview_link',
        'is_published',
        'is_featured',
        'access_type',
        'preview_pages',
        'preview_percentage',
        'downloads_count',
        'views_count',
        'order',
        'category_id',
        // SEO fields
        'meta_title',
        'meta_description',
        'meta_keywords',
        'focus_keyword',
        'og_title',
        'og_description',
        'og_image',
        'twitter_card',
        'twitter_title',
        'twitter_description',
        'twitter_image',
        'canonical_url',
        'schema_type',
        'schema_data',
        'seo_score',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'original_price' => 'decimal:2',
        'pages' => 'integer',
        'pages_count' => 'integer',
        'is_published' => 'boolean',
        'is_featured' => 'boolean',
        'downloads_count' => 'integer',
        'views_count' => 'integer',
        'order' => 'integer',
        'average_rating' => 'decimal:2',
        'reviews_count' => 'integer',
        'preview_pages' => 'array',
        'preview_percentage' => 'integer',
        'schema_data' => 'array',
        'seo_score' => 'integer',
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
    protected function coverImage(): \Illuminate\Database\Eloquent\Casts\Attribute
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

    /**
     * สร้าง Meta Tags สำหรับ SEO
     */
    public function generateMetaTags(): array
    {
        $frontendUrl = env('FRONTEND_URL', 'http://localhost:3000');
        $url = $frontendUrl . '/ebooks/' . $this->slug;
        $imageUrl = $this->cover_image ? url($this->cover_image) : null;

        return [
            'title' => $this->meta_title ?: $this->title,
            'description' => $this->meta_description ?: \Illuminate\Support\Str::limit(strip_tags($this->description), 160),
            'keywords' => $this->meta_keywords,
            'canonical' => $this->canonical_url ?: $url,

            // Open Graph
            'og:title' => $this->og_title ?: $this->meta_title ?: $this->title,
            'og:description' => $this->og_description ?: $this->meta_description ?: \Illuminate\Support\Str::limit(strip_tags($this->description), 200),
            'og:image' => $this->og_image ? url($this->og_image) : $imageUrl,
            'og:url' => $url,
            'og:type' => 'book',

            // Twitter Card
            'twitter:card' => $this->twitter_card ?: 'summary_large_image',
            'twitter:title' => $this->twitter_title ?: $this->og_title ?: $this->meta_title ?: $this->title,
            'twitter:description' => $this->twitter_description ?: $this->og_description ?: $this->meta_description ?: \Illuminate\Support\Str::limit(strip_tags($this->description), 200),
            'twitter:image' => $this->twitter_image ? url($this->twitter_image) : ($this->og_image ? url($this->og_image) : $imageUrl),
        ];
    }

    /**
     * สร้าง Structured Data สำหรับ Schema.org
     */
    public function generateStructuredData(): array
    {
        $frontendUrl = env('FRONTEND_URL', 'http://localhost:3000');
        $url = $frontendUrl . '/ebooks/' . $this->slug;
        $imageUrl = $this->cover_image ? url($this->cover_image) : null;

        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => $this->schema_type ?: 'Book',
            'name' => $this->title,
            'description' => $this->meta_description ?: \Illuminate\Support\Str::limit(strip_tags($this->description), 200),
            'image' => $imageUrl,
            'author' => [
                '@type' => 'Person',
                'name' => $this->author ?: 'LongTrade Academy',
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'LongTrade',
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => $frontendUrl . '/logo.png',
                ],
            ],
            'offers' => [
                '@type' => 'Offer',
                'price' => $this->price,
                'priceCurrency' => 'THB',
                'availability' => 'https://schema.org/InStock',
            ],
            'numberOfPages' => $this->pages_count,
            'bookFormat' => 'https://schema.org/EBook',
        ];

        // Merge with custom schema data if exists
        if ($this->schema_data && is_array($this->schema_data)) {
            $structuredData = array_merge($structuredData, $this->schema_data);
        }

        return $structuredData;
    }

    /**
     * คำนวณคะแนน SEO
     */
    public function calculateSeoScore(): int
    {
        $score = 0;
        $maxScore = 100;

        // Title optimization (20 points)
        if ($this->title) {
            $titleLength = strlen($this->title);
            if ($titleLength >= 30 && $titleLength <= 60) {
                $score += 20;
            } elseif ($titleLength >= 20 && $titleLength <= 70) {
                $score += 15;
            } elseif ($titleLength > 0) {
                $score += 10;
            }
        }

        // Meta description (20 points)
        if ($this->meta_description) {
            $descLength = strlen($this->meta_description);
            if ($descLength >= 120 && $descLength <= 160) {
                $score += 20;
            } elseif ($descLength >= 100 && $descLength <= 200) {
                $score += 15;
            } elseif ($descLength > 0) {
                $score += 10;
            }
        }

        // Focus keyword (15 points)
        if ($this->focus_keyword) {
            $score += 10;

            // Check if keyword is in title
            if (stripos($this->title, $this->focus_keyword) !== false) {
                $score += 5;
            }
        }

        // Cover image (10 points)
        if ($this->cover_image) {
            $score += 10;
        }

        // Open Graph tags (15 points)
        if ($this->og_title && $this->og_description && $this->og_image) {
            $score += 15;
        } elseif ($this->og_title || $this->og_description) {
            $score += 10;
        }

        // Description length (10 points)
        if ($this->description) {
            $descriptionLength = strlen(strip_tags($this->description));
            if ($descriptionLength >= 300) {
                $score += 10;
            } elseif ($descriptionLength >= 150) {
                $score += 7;
            } elseif ($descriptionLength >= 100) {
                $score += 5;
            }
        }

        // Author (5 points)
        if ($this->author) {
            $score += 5;
        }

        // Pages count (5 points)
        if ($this->pages_count && $this->pages_count > 0) {
            $score += 5;
        }

        // Price information (5 points)
        if ($this->price !== null) {
            $score += 5;
        }

        return min($score, $maxScore);
    }

    /**
     * Auto-calculate SEO score before saving
     */
    protected static function booted()
    {
        static::saving(function ($ebook) {
            $ebook->seo_score = $ebook->calculateSeoScore();
        });
    }
}
