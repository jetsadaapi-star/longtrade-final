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
        Schema::create('sms_campaigns', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['promotional', 'transactional', 'notification']);

            // Content
            $table->text('message');
            $table->string('sender_name', 20)->nullable(); // SMS sender ID

            // Targeting
            $table->enum('target_audience', ['all', 'segment', 'individual'])->default('all');
            $table->json('segment_filter')->nullable(); // Conditions for filtering users
            $table->integer('recipient_count')->default(0);

            // Scheduling
            $table->enum('schedule_type', ['immediate', 'scheduled', 'recurring'])->default('immediate');
            $table->timestamp('scheduled_at')->nullable();
            $table->string('recurrence_pattern', 100)->nullable(); // Cron-like pattern

            // Status
            $table->enum('status', ['draft', 'scheduled', 'sending', 'sent', 'failed'])->default('draft');
            $table->boolean('is_active')->default(true);

            // Analytics
            $table->integer('sent_count')->default(0);
            $table->integer('delivered_count')->default(0);
            $table->integer('failed_count')->default(0);
            $table->integer('clicked_count')->default(0);

            // Costs
            $table->decimal('estimated_cost', 10, 2)->nullable();
            $table->decimal('actual_cost', 10, 2)->nullable();

            $table->timestamp('sent_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->index('status');
            $table->index('type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sms_campaigns');
    }
};
