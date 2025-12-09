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
        Schema::create('popups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title')->nullable();
            $table->text('content')->nullable();

            // Trigger Settings
            $table->enum('trigger_type', ['page_load', 'exit_intent', 'scroll', 'time_delay', 'click']);
            $table->integer('trigger_value')->nullable(); // Seconds for time_delay, % for scroll

            // Display Settings
            $table->enum('display_type', ['modal', 'slide_in', 'banner', 'fullscreen'])->default('modal');
            $table->enum('position', ['center', 'top', 'bottom', 'left', 'right'])->default('center');
            $table->integer('width')->default(600);
            $table->integer('height')->nullable();

            // Targeting
            $table->json('target_pages')->nullable(); // Array of page URLs/patterns
            $table->enum('target_user_type', ['all', 'guest', 'member', 'new_visitor'])->default('all');

            // Frequency
            $table->enum('frequency', ['always', 'once_per_session', 'once_per_day', 'once_per_week'])->default('once_per_session');

            // Content
            $table->string('image_url')->nullable();
            $table->string('button_text', 100)->nullable();
            $table->string('button_url')->nullable();
            $table->string('button_color', 20)->nullable();
            $table->string('background_color', 20)->nullable();

            // Status
            $table->boolean('is_active')->default(true);
            $table->timestamp('starts_at')->nullable();
            $table->timestamp('ends_at')->nullable();

            // Analytics
            $table->integer('impressions')->default(0);
            $table->integer('clicks')->default(0);
            $table->integer('conversions')->default(0);

            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->index('is_active');
            $table->index('trigger_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('popups');
    }
};
