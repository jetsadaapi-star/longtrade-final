<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('api_settings', function (Blueprint $table) {
            $table->id();
            $table->string('category'); // google, social, ai, smtp
            $table->string('key')->unique();
            $table->string('name');
            $table->text('value')->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_encrypted')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index(['category', 'is_active']);
        });

        // Insert default API settings
        DB::table('api_settings')->insert([
            // Google Services
            [
                'category' => 'google',
                'key' => 'google_analytics_id',
                'name' => 'Google Analytics 4 Measurement ID',
                'value' => '',
                'description' => 'GA4 Measurement ID (G-XXXXXXXXXX)',
                'is_encrypted' => false,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'google',
                'key' => 'google_search_console_verification',
                'name' => 'Google Search Console Verification Code',
                'value' => '',
                'description' => 'Meta tag verification code',
                'is_encrypted' => false,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'google',
                'key' => 'google_recaptcha_site_key',
                'name' => 'Google reCAPTCHA Site Key',
                'value' => '',
                'description' => 'reCAPTCHA v3 Site Key',
                'is_encrypted' => false,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'google',
                'key' => 'google_recaptcha_secret_key',
                'name' => 'Google reCAPTCHA Secret Key',
                'value' => '',
                'description' => 'reCAPTCHA v3 Secret Key',
                'is_encrypted' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'google',
                'key' => 'google_adsense_client_id',
                'name' => 'Google AdSense Client ID',
                'value' => '',
                'description' => 'AdSense Client ID (ca-pub-XXXXXXXXXXXXXXXX)',
                'is_encrypted' => false,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Social OAuth
            [
                'category' => 'social',
                'key' => 'line_channel_id',
                'name' => 'LINE Channel ID',
                'value' => '',
                'description' => 'LINE Login Channel ID',
                'is_encrypted' => false,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'social',
                'key' => 'line_channel_secret',
                'name' => 'LINE Channel Secret',
                'value' => '',
                'description' => 'LINE Login Channel Secret',
                'is_encrypted' => true,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'social',
                'key' => 'facebook_app_id',
                'name' => 'Facebook App ID',
                'value' => '',
                'description' => 'Facebook OAuth App ID',
                'is_encrypted' => false,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'social',
                'key' => 'facebook_app_secret',
                'name' => 'Facebook App Secret',
                'value' => '',
                'description' => 'Facebook OAuth App Secret',
                'is_encrypted' => true,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'social',
                'key' => 'google_client_id',
                'name' => 'Google OAuth Client ID',
                'value' => '',
                'description' => 'Google OAuth 2.0 Client ID',
                'is_encrypted' => false,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'social',
                'key' => 'google_client_secret',
                'name' => 'Google OAuth Client Secret',
                'value' => '',
                'description' => 'Google OAuth 2.0 Client Secret',
                'is_encrypted' => true,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // AI Services
            [
                'category' => 'ai',
                'key' => 'openai_api_key',
                'name' => 'OpenAI API Key',
                'value' => '',
                'description' => 'ChatGPT API Key',
                'is_encrypted' => true,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'ai',
                'key' => 'openai_model',
                'name' => 'OpenAI Model',
                'value' => 'gpt-4',
                'description' => 'ChatGPT Model (gpt-3.5-turbo, gpt-4, gpt-4-turbo)',
                'is_encrypted' => false,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'ai',
                'key' => 'openai_max_tokens',
                'name' => 'Max Tokens per Request',
                'value' => '2000',
                'description' => 'Maximum tokens for ChatGPT responses',
                'is_encrypted' => false,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('api_settings');
    }
};
