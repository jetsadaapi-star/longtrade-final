<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductScreenshot extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'media_id',
        'order',
    ];

    protected $casts = [
        'order' => 'integer',
    ];

    /**
     * Relationships
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function media(): BelongsTo
    {
        return $this->belongsTo(\Awcodes\Curator\Models\Media::class);
    }
}
