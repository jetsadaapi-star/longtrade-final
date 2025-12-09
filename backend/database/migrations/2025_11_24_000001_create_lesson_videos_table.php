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
        Schema::create('lesson_videos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->string('lesson_id');
            $table->enum('video_type', ['youtube', 'upload'])->default('upload');
            $table->string('youtube_id')->nullable();
            $table->string('file_path', 500)->nullable();
            $table->unsignedBigInteger('file_size')->nullable()->comment('File size in bytes');
            $table->integer('duration')->nullable()->comment('Duration in seconds');
            $table->string('mime_type', 100)->nullable();
            $table->string('thumbnail_path', 500)->nullable();
            $table->enum('status', ['processing', 'ready', 'failed'])->default('processing');
            $table->timestamps();

            $table->index(['course_id', 'lesson_id']);
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lesson_videos');
    }
};
