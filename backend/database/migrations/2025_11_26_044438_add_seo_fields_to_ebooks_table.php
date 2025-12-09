<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('ebooks', function (Blueprint $table) {
            // SEO Meta Tags
            $table->string('meta_title')->nullable()->after('description');
            $table->text('meta_description')->nullable()->after('meta_title');
            $table->string('meta_keywords')->nullable()->after('meta_description');
            $table->string('focus_keyword')->nullable()->after('meta_keywords');

            // Open Graph Tags
            $table->string('og_title')->nullable()->after('focus_keyword');
            $table->text('og_description')->nullable()->after('og_title');
            $table->string('og_image')->nullable()->after('og_description');

            // Twitter Card Tags
            $table->enum('twitter_card', ['summary', 'summary_large_image'])->default('summary_large_image')->after('og_image');
            $table->string('twitter_title')->nullable()->after('twitter_card');
            $table->text('twitter_description')->nullable()->after('twitter_title');
            $table->string('twitter_image')->nullable()->after('twitter_description');

            // Advanced SEO
            $table->string('canonical_url')->nullable()->after('twitter_image');
            $table->enum('schema_type', ['Book', 'Product', 'DigitalDocument'])->default('Book')->after('canonical_url');
            $table->json('schema_data')->nullable()->after('schema_type');

            // SEO Score
            $table->integer('seo_score')->default(0)->after('schema_data');

            // Add indexes for better performance
            $table->index('seo_score');
            $table->index('focus_keyword');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ebooks', function (Blueprint $table) {
            $table->dropIndex(['seo_score']);
            $table->dropIndex(['focus_keyword']);

            $table->dropColumn([
                'meta_title',
                'meta_description',
                'meta_keywords',
                'focus_keyword',
                'og_title',
                'og_description',
                'og_image',
                'twitter_card',
                'twitter_title',
                'twitter_description',
                'twitter_image',
                'canonical_url',
                'schema_type',
                'schema_data',
                'seo_score',
            ]);
        });
    }
};
