<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Article extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'slug',
        'title',
        'excerpt',
        'content',
        'featured_image',
        'author',
        'read_time',
        'is_published',
        'is_featured',
        'published_at',
        'category_id',
        'tags',
        'views_count',
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
        'is_published' => 'boolean',
        'is_featured' => 'boolean',
        'published_at' => 'datetime',
        'tags' => 'array',
        'views_count' => 'integer',
        'read_time' => 'integer',
        'schema_data' => 'array',
        'seo_score' => 'integer',
    ];

    // Relationships
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function views(): HasMany
    {
        return $this->hasMany(ArticleView::class);
    }

    // Accessors - Convert relative image paths to full URLs
    protected function featuredImage(): \Illuminate\Database\Eloquent\Casts\Attribute
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

    // Scopes
    public function scopePublished($query)
    {
        return $query->where('is_published', true)
            ->where('published_at', '<=', now());
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopePopular($query, $days = 30)
    {
        return $query->where('published_at', '>=', now()->subDays($days))
            ->orderBy('views_count', 'desc');
    }

    public function scopeRelatedTo($query, $article)
    {
        return $query->where('id', '!=', $article->id)
            ->where(function ($q) use ($article) {
                $q->where('category_id', $article->category_id);

                $tags = $article->tags;
                if (is_string($tags)) {
                    $tags = json_decode($tags, true);
                }

                if ($tags && is_array($tags) && count($tags) > 0) {
                    foreach ($tags as $tag) {
                        $q->orWhereJsonContains('tags', $tag);
                    }
                }
            })
            ->published()
            ->orderBy('published_at', 'desc');
    }

    // Helper Methods
    public function incrementViews()
    {
        $this->increment('views_count');
    }

    public function recordView($userId = null, $ipAddress = null, $userAgent = null)
    {
        $this->views()->create([
            'user_id' => $userId,
            'ip_address' => $ipAddress,
            'user_agent' => $userAgent,
            'viewed_at' => now(),
        ]);

        $this->incrementViews();
    }

    public function generateMetaTags(): array
    {
        $frontendUrl = env('FRONTEND_URL', 'http://localhost:3000');
        $url = $frontendUrl . '/articles/' . $this->slug;
        $imageUrl = $this->featured_image ? url($this->featured_image) : null;

        return [
            'title' => $this->meta_title ?: $this->title,
            'description' => $this->meta_description ?: Str::limit(strip_tags($this->excerpt ?: $this->content), 160),
            'keywords' => $this->meta_keywords,
            'canonical' => $this->canonical_url ?: $url,

            // Open Graph
            'og:title' => $this->og_title ?: $this->meta_title ?: $this->title,
            'og:description' => $this->og_description ?: $this->meta_description ?: Str::limit(strip_tags($this->excerpt ?: $this->content), 200),
            'og:image' => $this->og_image ? url($this->og_image) : $imageUrl,
            'og:url' => $url,
            'og:type' => 'article',

            // Twitter Card
            'twitter:card' => $this->twitter_card ?: 'summary_large_image',
            'twitter:title' => $this->twitter_title ?: $this->og_title ?: $this->meta_title ?: $this->title,
            'twitter:description' => $this->twitter_description ?: $this->og_description ?: $this->meta_description ?: Str::limit(strip_tags($this->excerpt ?: $this->content), 200),
            'twitter:image' => $this->twitter_image ? url($this->twitter_image) : ($this->og_image ? url($this->og_image) : $imageUrl),
        ];
    }

    public function generateStructuredData(): array
    {
        $frontendUrl = env('FRONTEND_URL', 'http://localhost:3000');
        $url = $frontendUrl . '/articles/' . $this->slug;
        $imageUrl = $this->featured_image ? url($this->featured_image) : null;

        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => $this->schema_type ?: 'Article',
            'headline' => $this->title,
            'description' => $this->meta_description ?: Str::limit(strip_tags($this->excerpt ?: $this->content), 200),
            'image' => $imageUrl,
            'datePublished' => $this->published_at?->toIso8601String(),
            'dateModified' => $this->updated_at->toIso8601String(),
            'author' => [
                '@type' => 'Person',
                'name' => $this->author ?: 'LongTrade Team',
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'LongTrade',
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => $frontendUrl . '/logo.png',
                ],
            ],
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => $url,
            ],
        ];

        // Merge with custom schema data if exists
        if ($this->schema_data && is_array($this->schema_data)) {
            $structuredData = array_merge($structuredData, $this->schema_data);
        }

        return $structuredData;
    }

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

        // Featured image (10 points)
        if ($this->featured_image) {
            $score += 10;
        }

        // Open Graph tags (15 points)
        if ($this->og_title && $this->og_description && $this->og_image) {
            $score += 15;
        } elseif ($this->og_title || $this->og_description) {
            $score += 10;
        }

        // Content length (10 points)
        if ($this->content) {
            $contentLength = strlen(strip_tags($this->content));
            if ($contentLength >= 1000) {
                $score += 10;
            } elseif ($contentLength >= 500) {
                $score += 7;
            } elseif ($contentLength >= 300) {
                $score += 5;
            }
        }

        // Excerpt (5 points)
        if ($this->excerpt) {
            $score += 5;
        }

        // Read time (5 points)
        if ($this->read_time && $this->read_time > 0) {
            $score += 5;
        }

        return min($score, $maxScore);
    }

    // Auto-calculate SEO score before saving
    protected static function booted()
    {
        static::saving(function ($article) {
            $article->seo_score = $article->calculateSeoScore();
        });
    }
}
