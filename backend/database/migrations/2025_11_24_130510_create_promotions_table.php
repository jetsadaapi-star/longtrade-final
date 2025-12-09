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
        Schema::create('promotions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->enum('type', ['flash_sale', 'bundle', 'seasonal', 'member_exclusive']);

            // Discount Settings
            $table->enum('discount_type', ['percentage', 'fixed_amount', 'buy_x_get_y']);
            $table->decimal('discount_value', 10, 2);
            $table->decimal('max_discount_amount', 10, 2)->nullable();
            $table->decimal('min_purchase_amount', 10, 2)->default(0);

            // Applicable Items
            $table->enum('applicable_to', ['all', 'categories', 'products', 'courses'])->default('all');
            $table->json('applicable_ids')->nullable(); // Array of IDs

            // Validity
            $table->timestamp('starts_at')->nullable();
            $table->timestamp('ends_at')->nullable();
            $table->boolean('is_active')->default(true);

            // Usage Limits
            $table->integer('usage_limit')->nullable(); // Total usage limit
            $table->integer('usage_per_user')->default(1);
            $table->integer('current_usage')->default(0);

            // Display Settings
            $table->string('banner_image')->nullable();
            $table->string('badge_text', 50)->nullable();
            $table->string('badge_color', 20)->nullable();
            $table->integer('priority')->default(0); // For sorting

            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->index('type');
            $table->index('is_active');
            $table->index(['starts_at', 'ends_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('promotions');
    }
};
