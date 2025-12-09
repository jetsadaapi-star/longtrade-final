<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'name',
        'is_enabled',
        'configuration',
        'sort_order',
    ];

    protected $casts = [
        'is_enabled' => 'boolean',
        'configuration' => 'array',
    ];

    /**
     * Get configuration value
     */
    public function getConfig(string $key, $default = null)
    {
        return $this->configuration[$key] ?? $default;
    }

    /**
     * Set configuration value
     */
    public function setConfig(string $key, $value)
    {
        $config = $this->configuration ?? [];
        $config[$key] = $value;
        $this->update(['configuration' => $config]);
    }

    /**
     * Get payment setting by key
     */
    public static function getByKey(string $key)
    {
        return static::where('key', $key)->first();
    }

    /**
     * Get enabled payment methods
     */
    public static function getEnabled()
    {
        return static::where('is_enabled', true)
            ->orderBy('sort_order')
            ->get();
    }

    /**
     * Scope: Enabled
     */
    public function scopeEnabled($query)
    {
        return $query->where('is_enabled', true);
    }

    /**
     * Scope: Ordered
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }
}
