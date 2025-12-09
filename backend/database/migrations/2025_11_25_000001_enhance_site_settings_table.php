<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            // Header/Navbar Settings (header_menu already exists from previous migration)
            if (!Schema::hasColumn('site_settings', 'header_style')) {
                $table->string('header_style')->default('default')->after('header_menu'); // default, transparent, sticky
            }
            if (!Schema::hasColumn('site_settings', 'header_colors')) {
                $table->json('header_colors')->nullable()->after('header_style');
            }

            // Footer Settings (footer_menu already exists)
            if (!Schema::hasColumn('site_settings', 'footer_columns')) {
                $table->json('footer_columns')->nullable()->after('footer_text');
            }
            if (!Schema::hasColumn('site_settings', 'footer_social_links')) {
                $table->json('footer_social_links')->nullable()->after('footer_columns');
            }
            if (!Schema::hasColumn('site_settings', 'footer_style')) {
                $table->string('footer_style')->default('default')->after('footer_social_links');
            }
            if (!Schema::hasColumn('site_settings', 'footer_colors')) {
                $table->json('footer_colors')->nullable()->after('footer_style');
            }

            // Theme Settings
            if (!Schema::hasColumn('site_settings', 'theme_colors')) {
                $table->json('theme_colors')->nullable()->after('footer_colors'); // primary, secondary, accent, etc.
            }
            if (!Schema::hasColumn('site_settings', 'theme_font_heading')) {
                $table->string('theme_font_heading')->default('Inter')->after('theme_colors');
            }
            if (!Schema::hasColumn('site_settings', 'theme_font_body')) {
                $table->string('theme_font_body')->default('Inter')->after('theme_font_heading');
            }
            if (!Schema::hasColumn('site_settings', 'theme_layout')) {
                $table->string('theme_layout')->default('default')->after('theme_font_body'); // default, boxed, wide
            }
            if (!Schema::hasColumn('site_settings', 'theme_dark_mode')) {
                $table->boolean('theme_dark_mode')->default(true)->after('theme_layout');
            }
            if (!Schema::hasColumn('site_settings', 'theme_glassmorphism')) {
                $table->boolean('theme_glassmorphism')->default(true)->after('theme_dark_mode');
            }

            // Contact Information
            if (!Schema::hasColumn('site_settings', 'contact_phone')) {
                $table->string('contact_phone')->nullable()->after('theme_glassmorphism');
            }
            if (!Schema::hasColumn('site_settings', 'contact_email')) {
                $table->string('contact_email')->nullable()->after('contact_phone');
            }
            if (!Schema::hasColumn('site_settings', 'contact_address')) {
                $table->text('contact_address')->nullable()->after('contact_email');
            }
            if (!Schema::hasColumn('site_settings', 'contact_line')) {
                $table->string('contact_line')->nullable()->after('contact_address');
            }
            if (!Schema::hasColumn('site_settings', 'contact_facebook')) {
                $table->string('contact_facebook')->nullable()->after('contact_line');
            }
            if (!Schema::hasColumn('site_settings', 'contact_twitter')) {
                $table->string('contact_twitter')->nullable()->after('contact_facebook');
            }
            if (!Schema::hasColumn('site_settings', 'contact_instagram')) {
                $table->string('contact_instagram')->nullable()->after('contact_twitter');
            }
            if (!Schema::hasColumn('site_settings', 'contact_youtube')) {
                $table->string('contact_youtube')->nullable()->after('contact_instagram');
            }

            // Business Information
            if (!Schema::hasColumn('site_settings', 'business_hours')) {
                $table->string('business_hours')->nullable()->after('contact_youtube');
            }
            if (!Schema::hasColumn('site_settings', 'tax_id')) {
                $table->string('tax_id')->nullable()->after('business_hours');
            }
            if (!Schema::hasColumn('site_settings', 'company_name')) {
                $table->string('company_name')->nullable()->after('tax_id');
            }
        });
    }

    public function down(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $columns = [
                'header_style',
                'header_colors',
                'footer_columns',
                'footer_social_links',
                'footer_style',
                'footer_colors',
                'theme_colors',
                'theme_font_heading',
                'theme_font_body',
                'theme_layout',
                'theme_dark_mode',
                'theme_glassmorphism',
                'contact_phone',
                'contact_email',
                'contact_address',
                'contact_line',
                'contact_facebook',
                'contact_twitter',
                'contact_instagram',
                'contact_youtube',
                'business_hours',
                'tax_id',
                'company_name'
            ];

            foreach ($columns as $column) {
                if (Schema::hasColumn('site_settings', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
