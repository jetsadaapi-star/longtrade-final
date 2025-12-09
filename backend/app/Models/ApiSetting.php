<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;

class ApiSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'key',
        'name',
        'value',
        'description',
        'is_encrypted',
        'is_active',
    ];

    protected $casts = [
        'is_encrypted' => 'boolean',
        'is_active' => 'boolean',
    ];

    /**
     * Get the value attribute (decrypt if encrypted)
     */
    public function getValueAttribute($value)
    {
        if ($this->is_encrypted && $value) {
            try {
                return Crypt::decryptString($value);
            } catch (\Exception $e) {
                return $value;
            }
        }

        return $value;
    }

    /**
     * Set the value attribute (encrypt if needed)
     */
    public function setValueAttribute($value)
    {
        if ($this->is_encrypted && $value) {
            $this->attributes['value'] = Crypt::encryptString($value);
        } else {
            $this->attributes['value'] = $value;
        }
    }

    /**
     * Get setting by key
     */
    public static function get(string $key, $default = null)
    {
        $setting = static::where('key', $key)->where('is_active', true)->first();

        return $setting ? $setting->value : $default;
    }

    /**
     * Set setting value
     */
    public static function set(string $key, $value): bool
    {
        $setting = static::where('key', $key)->first();

        if ($setting) {
            $setting->update(['value' => $value]);
            return true;
        }

        return false;
    }

    /**
     * Get all settings by category
     */
    public static function getByCategory(string $category): array
    {
        return static::where('category', $category)
            ->where('is_active', true)
            ->pluck('value', 'key')
            ->toArray();
    }

    /**
     * Scope: Active settings
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope: By category
     */
    public function scopeCategory($query, string $category)
    {
        return $query->where('category', $category);
    }
}
