<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('payment_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique(); // 'bank_transfer', 'promptpay', 'stripe'
            $table->string('name');
            $table->boolean('is_enabled')->default(false);
            $table->json('configuration')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // Insert default payment methods
        DB::table('payment_settings')->insert([
            [
                'key' => 'bank_transfer',
                'name' => 'Bank Transfer (โอนเงินผ่านธนาคาร)',
                'is_enabled' => true,
                'configuration' => json_encode([
                            'bank_name' => 'ธนาคารกสิกรไทย',
                            'account_name' => 'LongTrade Academy',
                            'account_number' => '123-4-56789-0',
                            'branch' => 'สาขาสยาม',
                            'instructions' => 'กรุณาโอนเงินและแนบสลิปการโอนเงิน',
                            'qr_code' => null,
                        ]),
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'promptpay',
                'name' => 'PromptPay',
                'is_enabled' => true,
                'configuration' => json_encode([
                            'promptpay_id' => '0812345678',
                            'promptpay_type' => 'mobile', // mobile, national_id, e_wallet
                            'account_name' => 'LongTrade Academy',
                            'instructions' => 'สแกน QR Code เพื่อชำระเงิน',
                        ]),
                'sort_order' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'stripe',
                'name' => 'Credit/Debit Card (Stripe)',
                'is_enabled' => false,
                'configuration' => json_encode([
                            'publishable_key' => '',
                            'secret_key' => '',
                            'webhook_secret' => '',
                            'mode' => 'test', // test, live
                            'currency' => 'thb',
                        ]),
                'sort_order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('payment_settings');
    }
};
