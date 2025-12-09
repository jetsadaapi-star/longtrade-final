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
        Schema::create('email_campaigns', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['newsletter', 'promotional', 'transactional', 'automated']);

            // Content
            $table->string('subject');
            $table->string('preview_text', 150)->nullable();
            $table->string('from_name', 100)->nullable();
            $table->string('from_email', 100)->nullable();
            $table->string('reply_to', 100)->nullable();

            // Email Body
            $table->longText('html_content')->nullable();
            $table->text('plain_text_content')->nullable();
            $table->unsignedBigInteger('template_id')->nullable(); // Will add foreign key later

            // Targeting
            $table->enum('target_audience', ['all', 'segment', 'individual'])->default('all');
            $table->json('segment_filter')->nullable();
            $table->integer('recipient_count')->default(0);

            // Scheduling
            $table->enum('schedule_type', ['immediate', 'scheduled', 'automated'])->default('immediate');
            $table->timestamp('scheduled_at')->nullable();
            $table->string('automation_trigger', 100)->nullable(); // e.g., 'user_registered', 'purchase_completed'

            // Status
            $table->enum('status', ['draft', 'scheduled', 'sending', 'sent', 'failed'])->default('draft');
            $table->boolean('is_active')->default(true);

            // Analytics
            $table->integer('sent_count')->default(0);
            $table->integer('delivered_count')->default(0);
            $table->integer('opened_count')->default(0);
            $table->integer('clicked_count')->default(0);
            $table->integer('bounced_count')->default(0);
            $table->integer('unsubscribed_count')->default(0);

            // A/B Testing
            $table->boolean('is_ab_test')->default(false);
            $table->char('ab_test_variant', 1)->nullable(); // 'A' or 'B'

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
        Schema::dropIfExists('email_campaigns');
    }
};
