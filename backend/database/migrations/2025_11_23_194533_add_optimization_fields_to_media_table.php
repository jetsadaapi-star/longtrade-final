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
        Schema::table('media', function (Blueprint $table) {
            $table->string('original_path')->nullable()->after('path');
            $table->string('optimized_path')->nullable()->after('original_path');
            $table->enum('optimization_status', ['pending', 'processing', 'completed', 'failed', 'skipped'])
                ->default('pending')
                ->after('optimized_path');
            $table->unsignedBigInteger('original_size')->nullable()->after('optimization_status');
            $table->unsignedBigInteger('optimized_size')->nullable()->after('original_size');
            $table->decimal('compression_ratio', 5, 2)->nullable()->after('optimized_size');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('media', function (Blueprint $table) {
            $table->dropColumn([
                'original_path',
                'optimized_path',
                'optimization_status',
                'original_size',
                'optimized_size',
                'compression_ratio'
            ]);
        });
    }
};
