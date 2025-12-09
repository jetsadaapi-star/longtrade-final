<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Promotion;
use Illuminate\Support\Str;

class PromotionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $promotions = [
            [
                'name' => 'Flash Sale สุดคุ้ม ลด 50%',
                'slug' => 'flash-sale-50-off',
                'description' => 'ลดราคาสูงสุด 50% สำหรับคอร์สเรียนและ EA ทุกตัว เฉพาะวันนี้เท่านั้น!',
                'type' => 'flash_sale',
                'discount_type' => 'percentage',
                'discount_value' => 50.00,
                'max_discount_amount' => 5000.00,
                'min_purchase_amount' => 1000.00,
                'applicable_to' => 'all',
                'starts_at' => now(),
                'ends_at' => now()->addDays(1),
                'is_active' => true,
                'usage_limit' => 100,
                'usage_per_user' => 1,
                'current_usage' => 0,
                'badge_text' => 'HOT DEAL',
                'badge_color' => '#ef4444',
                'priority' => 10,
            ],
            [
                'name' => 'ซื้อ 2 แถม 1',
                'slug' => 'buy-2-get-1-free',
                'description' => 'ซื้อ EA 2 ตัว แถมฟรี 1 ตัว คุ้มสุดๆ',
                'type' => 'bundle',
                'discount_type' => 'buy_x_get_y',
                'discount_value' => 33.33,
                'min_purchase_amount' => 0.00,
                'applicable_to' => 'products',
                'starts_at' => now(),
                'ends_at' => now()->addDays(7),
                'is_active' => true,
                'usage_limit' => 50,
                'usage_per_user' => 2,
                'current_usage' => 0,
                'badge_text' => 'BUNDLE DEAL',
                'badge_color' => '#f59e0b',
                'priority' => 8,
            ],
            [
                'name' => 'โปรโมชั่นสมาชิกใหม่',
                'slug' => 'new-member-discount',
                'description' => 'ส่วนลด 30% สำหรับสมาชิกใหม่ทุกคน',
                'type' => 'member_exclusive',
                'discount_type' => 'percentage',
                'discount_value' => 30.00,
                'max_discount_amount' => 3000.00,
                'min_purchase_amount' => 500.00,
                'applicable_to' => 'all',
                'starts_at' => now(),
                'ends_at' => now()->addDays(30),
                'is_active' => true,
                'usage_per_user' => 1,
                'current_usage' => 0,
                'badge_text' => 'NEW MEMBER',
                'badge_color' => '#10b981',
                'priority' => 5,
            ],
            [
                'name' => 'ส่วนลดฤดูกาล',
                'slug' => 'seasonal-sale',
                'description' => 'ลดราคา 1,000 บาท สำหรับคอร์สเรียนทุกหลักสูตร',
                'type' => 'seasonal',
                'discount_type' => 'fixed_amount',
                'discount_value' => 1000.00,
                'min_purchase_amount' => 3000.00,
                'applicable_to' => 'courses',
                'starts_at' => now(),
                'ends_at' => now()->addDays(14),
                'is_active' => true,
                'usage_limit' => 200,
                'usage_per_user' => 3,
                'current_usage' => 0,
                'badge_text' => 'SEASONAL',
                'badge_color' => '#8b5cf6',
                'priority' => 6,
            ],
        ];

        foreach ($promotions as $promotion) {
            Promotion::create($promotion);
        }

        $this->command->info('Created ' . count($promotions) . ' promotions');
    }
}
