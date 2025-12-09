<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Free, Basic, Premium, Enterprise
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2)->default(0);
            $table->string('billing_cycle')->default('monthly'); // monthly, yearly, lifetime
            $table->integer('trial_days')->default(0);

            // Features (JSON)
            $table->json('features')->nullable(); // List of features
            $table->json('limitations')->nullable(); // course_limit, download_limit, etc.

            // Limits
            $table->integer('max_courses')->nullable(); // null = unlimited
            $table->integer('max_downloads_per_month')->nullable();
            $table->integer('max_ebooks')->nullable();
            $table->integer('max_products')->nullable();
            $table->boolean('ai_chat_access')->default(false);
            $table->integer('ai_messages_per_month')->nullable();

            // Display
            $table->integer('sort_order')->default(0);
            $table->boolean('is_popular')->default(false);
            $table->boolean('is_active')->default(true);
            $table->string('badge_text')->nullable(); // "Most Popular", "Best Value"
            $table->string('badge_color')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subscription_plans');
    }
};
