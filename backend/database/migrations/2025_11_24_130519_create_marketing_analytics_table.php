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
        Schema::create('marketing_analytics', function (Blueprint $table) {
            $table->id();

            // Reference
            $table->enum('campaign_type', ['promotion', 'coupon', 'popup', 'sms', 'email']);
            $table->unsignedBigInteger('campaign_id');

            // User
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('session_id', 100)->nullable();

            // Event
            $table->enum('event_type', ['view', 'click', 'conversion', 'share']);
            $table->json('event_data')->nullable();

            // Context
            $table->string('page_url')->nullable();
            $table->string('referrer')->nullable();
            $table->string('device_type', 50)->nullable();
            $table->string('browser', 50)->nullable();

            $table->timestamp('created_at')->useCurrent();

            // Indexes
            $table->index(['campaign_type', 'campaign_id']);
            $table->index('user_id');
            $table->index('event_type');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marketing_analytics');
    }
};
