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
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            // Basic Information
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->enum('category', ['expert_advisors', 'indicators', 'scripts']);

            // Pricing
            $table->decimal('price', 10, 2)->default(0);
            $table->enum('access_type', ['free', 'premium', 'members_only'])->default('free');

            // Files
            $table->string('file_path', 500)->nullable();
            $table->bigInteger('file_size')->nullable(); // in bytes
            $table->string('file_version', 50)->nullable();

            // Product Information
            $table->text('requirements')->nullable();
            $table->text('installation_guide')->nullable();
            $table->string('demo_url', 500)->nullable();

            // Media
            $table->foreignId('thumbnail_id')->nullable()->constrained('media')->nullOnDelete();
            $table->foreignId('featured_image_id')->nullable()->constrained('media')->nullOnDelete();

            // Statistics
            $table->integer('downloads_count')->default(0);
            $table->integer('views_count')->default(0);
            $table->decimal('rating', 3, 2)->default(0);

            // Status
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->boolean('is_featured')->default(false);
            $table->timestamp('published_at')->nullable();

            // Timestamps
            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->index('category');
            $table->index('access_type');
            $table->index('status');
            $table->index('is_featured');
            $table->index('published_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
