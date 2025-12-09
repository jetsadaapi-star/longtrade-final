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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();

            // Polymorphic relationship - สามารถรีวิวได้หลายประเภท (Course, Indicator, Ebook, EA)
            $table->morphs('reviewable');

            // ข้อมูลผู้รีวิว
            $table->string('user_name');
            $table->string('user_email');

            // เนื้อหารีวิว
            $table->unsignedTinyInteger('rating'); // 1-5 ดาว
            $table->string('title')->nullable();
            $table->text('comment')->nullable();

            // สถานะ
            $table->boolean('is_approved')->default(false); // ต้องอนุมัติก่อนแสดง
            $table->boolean('is_verified_purchase')->default(false); // ซื้อจริงหรือไม่

            // Metadata
            $table->string('ip_address')->nullable();
            $table->timestamp('approved_at')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete();

            $table->timestamps();
            $table->softDeletes();

            // Indexes (morphs already creates reviewable index)
            $table->index('rating');
            $table->index('is_approved');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
