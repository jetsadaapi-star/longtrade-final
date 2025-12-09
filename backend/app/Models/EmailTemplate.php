<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EmailTemplate extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'category',
        'subject',
        'html_content',
        'plain_text_content',
        'available_variables',
        'thumbnail_url',
        'is_active',
        'is_default',
    ];

    protected $casts = [
        'available_variables' => 'array',
        'is_active' => 'boolean',
        'is_default' => 'boolean',
    ];

    /**
     * Relationship: Email Campaigns
     */
    public function campaigns(): HasMany
    {
        return $this->hasMany(EmailCampaign::class, 'template_id');
    }

    /**
     * Render template with variables
     */
    public function render(array $variables = []): string
    {
        $content = $this->html_content;

        foreach ($variables as $key => $value) {
            $content = str_replace('{{' . $key . '}}', $value, $content);
        }

        return $content;
    }

    /**
     * Get list of variables in template
     */
    public function extractVariables(): array
    {
        preg_match_all('/\{\{(\w+)\}\}/', $this->html_content, $matches);
        return array_unique($matches[1]);
    }

    /**
     * Validate variables
     */
    public function validateVariables(array $variables): bool
    {
        $requiredVars = $this->extractVariables();

        foreach ($requiredVars as $var) {
            if (!isset($variables[$var])) {
                return false;
            }
        }

        return true;
    }

    /**
     * Scope: Active templates
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope: By category
     */
    public function scopeByCategory($query, string $category)
    {
        return $query->where('category', $category);
    }

    /**
     * Scope: Default template
     */
    public function scopeDefault($query)
    {
        return $query->where('is_default', true);
    }
}
