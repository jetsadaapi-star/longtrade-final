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
        Schema::create('promotion_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('promotion_id')->constrained()->onDelete('cascade');
            $table->integer('usage_count')->default(1);
            $table->decimal('discount_amount', 10, 2)->nullable(); // Amount saved
            $table->decimal('order_amount', 10, 2)->nullable(); // Original order amount
            $table->timestamp('used_at');
            $table->timestamps();

            // Indexes for performance
            $table->index(['user_id', 'promotion_id']);
            $table->index('used_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('promotion_user');
    }
};
