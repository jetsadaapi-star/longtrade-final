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
        // เพิ่มฟิลด์ rating ให้กับทุกตารางสินค้า
        $tables = ['courses', 'indicators', 'ebooks', 'expert_advisors'];

        foreach ($tables as $table) {
            Schema::table($table, function (Blueprint $table) {
                $table->decimal('average_rating', 3, 2)->default(0)->after('is_featured');
                $table->integer('reviews_count')->default(0)->after('average_rating');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $tables = ['courses', 'indicators', 'ebooks', 'expert_advisors'];

        foreach ($tables as $table) {
            Schema::table($table, function (Blueprint $table) {
                $table->dropColumn(['average_rating', 'reviews_count']);
            });
        }
    }
};
