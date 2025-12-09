<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'site_name',
        'site_description',
        'logo',
        'favicon',
        'contact_email',
        'contact_phone',
        'address',
        'facebook_url',
        'line_url',
        'tiktok_url',
        'youtube_url',
        'header_menu',
        'footer_menu',
        'cta_text',
        'cta_link',
        'footer_text',
    ];

    protected $casts = [
        'header_menu' => 'array',
        'footer_menu' => 'array',
    ];
}
