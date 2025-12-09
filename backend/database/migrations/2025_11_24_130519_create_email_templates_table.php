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
        Schema::create('email_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('category', ['welcome', 'promotional', 'transactional', 'newsletter']);

            // Content
            $table->string('subject')->nullable();
            $table->longText('html_content');
            $table->text('plain_text_content')->nullable();

            // Variables
            $table->json('available_variables')->nullable(); // List of {{variable}} placeholders

            // Preview
            $table->string('thumbnail_url')->nullable();

            // Status
            $table->boolean('is_active')->default(true);
            $table->boolean('is_default')->default(false);

            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->index('category');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('email_templates');
    }
};
