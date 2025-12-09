<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class SystemSetting extends Model
{
    protected $fillable = ['key', 'value', 'type', 'group', 'description'];

    /**
     * Get a setting value by key
     */
    public static function get(string $key, $default = null)
    {
        return Cache::remember("setting_{$key}", 3600, function () use ($key, $default) {
            $setting = self::where('key', $key)->first();

            if (!$setting) {
                return $default;
            }

            return match ($setting->type) {
                'boolean' => filter_var($setting->value, FILTER_VALIDATE_BOOLEAN),
                'json' => json_decode($setting->value, true),
                'integer' => (int) $setting->value,
                default => $setting->value,
            };
        });
    }

    /**
     * Set a setting value
     */
    public static function set(string $key, $value, string $type = 'string', string $group = 'general'): void
    {
        $setting = self::updateOrCreate(
            ['key' => $key],
            [
                'value' => is_array($value) ? json_encode($value) : $value,
                'type' => $type,
                'group' => $group,
            ]
        );

        Cache::forget("setting_{$key}");
    }

    /**
     * Get all settings in a group
     */
    public static function getGroup(string $group): array
    {
        return Cache::remember("settings_group_{$group}", 3600, function () use ($group) {
            return self::where('group', $group)->get()->mapWithKeys(function ($setting) {
                $value = match ($setting->type) {
                    'boolean' => filter_var($setting->value, FILTER_VALIDATE_BOOLEAN),
                    'json' => json_decode($setting->value, true),
                    'integer' => (int) $setting->value,
                    default => $setting->value,
                };
                return [$setting->key => $value];
            })->toArray();
        });
    }

    /**
     * Clear settings cache
     */
    public static function clearCache(): void
    {
        Cache::flush();
    }
}
