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
            $table->enum('access_type', ['free', 'members_only', 'premium'])
                ->default('free')
                ->after('is_published');
            $table->text('preview_pages')->nullable()->after('access_type');
            $table->integer('preview_percentage')->default(10)->after('preview_pages');
            $table->string('author')->nullable()->after('title');
            $table->integer('pages_count')->nullable()->after('author');
            $table->integer('views_count')->default(0)->after('downloads_count');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ebooks', function (Blueprint $table) {
            $table->dropColumn([
                'access_type',
                'preview_pages',
                'preview_percentage',
                'author',
                'pages_count',
                'views_count'
            ]);
        });
    }
};
