<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'type',
        'icon',
        'color',
        'order',
        'is_active',
    ];

    protected $casts = [
        'order' => 'integer',
        'is_active' => 'boolean',
    ];

    public function courses(): HasMany
    {
        return $this->hasMany(Course::class);
    }

    public function articles(): HasMany
    {
        return $this->hasMany(Article::class);
    }

    public function indicators(): HasMany
    {
        return $this->hasMany(Indicator::class);
    }

    public function ebooks(): HasMany
    {
        return $this->hasMany(Ebook::class);
    }

    public function expertAdvisors(): HasMany
    {
        return $this->hasMany(ExpertAdvisor::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByType($query, string $type)
    {
        return $query->where('type', $type);
    }
}
