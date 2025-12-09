<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Media Optimization Enabled
    |--------------------------------------------------------------------------
    |
    | Enable or disable automatic media optimization.
    | When disabled, files will be stored as-is without optimization.
    |
    */
    'enabled' => env('MEDIA_OPTIMIZATION_ENABLED', true),

    /*
    |--------------------------------------------------------------------------
    | Optimization Service
    |--------------------------------------------------------------------------
    |
    | The service to use for media optimization.
    | Supported: "cloudinary", "local", "tinypng"
    |
    */
    'service' => env('MEDIA_OPTIMIZATION_SERVICE', 'cloudinary'),

    /*
    |--------------------------------------------------------------------------
    | Image Optimization Settings
    |--------------------------------------------------------------------------
    */
    'image' => [
        'max_width' => env('IMAGE_MAX_WIDTH', 2048),
        'max_height' => env('IMAGE_MAX_HEIGHT', 2048),
        'quality' => env('IMAGE_QUALITY', 85),
        'format' => env('IMAGE_FORMAT', 'webp'), // webp, jpg, png, auto
    ],

    /*
    |--------------------------------------------------------------------------
    | Video Optimization Settings
    |--------------------------------------------------------------------------
    */
    'video' => [
        'max_width' => env('VIDEO_MAX_WIDTH', 1920),
        'max_height' => env('VIDEO_MAX_HEIGHT', 1080),
        'bitrate' => env('VIDEO_BITRATE', '2M'),
        'codec' => env('VIDEO_CODEC', 'h264'), // h264, vp9
    ],

    /*
    |--------------------------------------------------------------------------
    | Cloudinary Settings
    |--------------------------------------------------------------------------
    */
    'cloudinary' => [
        'cloud_name' => env('CLOUDINARY_CLOUD_NAME'),
        'api_key' => env('CLOUDINARY_API_KEY'),
        'api_secret' => env('CLOUDINARY_API_SECRET'),
    ],

    /*
    |--------------------------------------------------------------------------
    | TinyPNG Settings
    |--------------------------------------------------------------------------
    */
    'tinypng' => [
        'api_key' => env('TINYPNG_API_KEY'),
    ],
];
