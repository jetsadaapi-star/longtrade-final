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
        Schema::create('coupons', function (Blueprint $table) {
            $table->id();

            // รหัสคูปอง
            $table->string('code')->unique();
            $table->string('description')->nullable();

            // ประเภทและค่าส่วนลด
            $table->enum('type', ['percentage', 'fixed_amount'])->default('percentage');
            $table->decimal('value', 10, 2); // เปอร์เซ็นต์ หรือ จำนวนเงิน

            // เงื่อนไข
            $table->decimal('min_purchase', 10, 2)->default(0); // ยอดซื้อขั้นต่ำ
            $table->decimal('max_discount', 10, 2)->nullable(); // ส่วนลดสูงสุด (สำหรับ percentage)

            // จำนวนครั้งที่ใช้ได้
            $table->integer('usage_limit')->nullable(); // null = ไม่จำกัด
            $table->integer('used_count')->default(0);

            // วันที่
            $table->timestamp('valid_from')->nullable();
            $table->timestamp('valid_until')->nullable();

            // สถานะ
            $table->boolean('is_active')->default(true);

            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->index('code');
            $table->index('is_active');
            $table->index(['valid_from', 'valid_until']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coupons');
    }
};
