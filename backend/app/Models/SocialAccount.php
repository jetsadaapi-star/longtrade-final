<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialAccount extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'provider',
        'provider_id',
        'provider_token',
        'provider_refresh_token',
        'token_expires_at',
        'avatar',
        'provider_data',
    ];

    protected $casts = [
        'token_expires_at' => 'datetime',
        'provider_data' => 'array',
    ];

    protected $hidden = [
        'provider_token',
        'provider_refresh_token',
    ];

    /**
     * Get the user that owns the social account
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Check if token is expired
     */
    public function isTokenExpired(): bool
    {
        return $this->token_expires_at !== null && $this->token_expires_at->isPast();
    }
}
