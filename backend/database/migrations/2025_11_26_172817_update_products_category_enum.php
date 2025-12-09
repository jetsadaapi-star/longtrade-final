<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Change category enum to include 'tradingview'
        DB::statement("ALTER TABLE products MODIFY COLUMN category ENUM('expert_advisors', 'indicators', 'scripts', 'tradingview') NOT NULL");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revert back to original enum values
        DB::statement("ALTER TABLE products MODIFY COLUMN category ENUM('expert_advisors', 'indicators', 'scripts') NOT NULL");
    }
};
