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
        Schema::table('courses', function (Blueprint $table) {
            $table->string('meta_title')->nullable()->after('description');
            $table->text('meta_description')->nullable()->after('meta_title');
            $table->text('meta_keywords')->nullable()->after('meta_description');
            $table->text('og_image')->nullable()->after('meta_keywords');
            $table->text('og_description')->nullable()->after('og_image');
            $table->string('canonical_url')->nullable()->after('og_description');
            $table->json('schema_markup')->nullable()->after('canonical_url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn([
                'meta_title',
                'meta_description',
                'meta_keywords',
                'og_image',
                'og_description',
                'canonical_url',
                'schema_markup'
            ]);
        });
    }
};
