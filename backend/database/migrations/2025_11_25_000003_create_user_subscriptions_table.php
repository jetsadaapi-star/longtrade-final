<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('user_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('subscription_plan_id')->constrained()->onDelete('cascade');

            // Subscription Status
            $table->string('status')->default('active'); // active, cancelled, expired, suspended
            $table->timestamp('started_at')->useCurrent();
            $table->timestamp('expires_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->timestamp('trial_ends_at')->nullable();

            // Payment Information
            $table->unsignedBigInteger('payment_id')->nullable();
            $table->decimal('amount_paid', 10, 2)->default(0);
            $table->string('payment_method')->nullable(); // stripe, promptpay, offline
            $table->string('payment_reference')->nullable();

            // Auto-renewal
            $table->boolean('auto_renew')->default(false);
            $table->string('stripe_subscription_id')->nullable();

            // Usage Tracking
            $table->json('usage_stats')->nullable(); // courses_accessed, downloads_this_month, etc.

            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->index(['user_id', 'status']);
            $table->index('expires_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_subscriptions');
    }
};
