<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('social_accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('provider'); // line, facebook, google
            $table->string('provider_id');
            $table->string('provider_token')->nullable();
            $table->string('provider_refresh_token')->nullable();
            $table->timestamp('token_expires_at')->nullable();
            $table->string('avatar')->nullable();
            $table->json('provider_data')->nullable(); // Additional data from provider
            $table->timestamps();

            // Unique constraint: one provider account per user
            $table->unique(['user_id', 'provider']);
            $table->index('provider_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('social_accounts');
    }
};
