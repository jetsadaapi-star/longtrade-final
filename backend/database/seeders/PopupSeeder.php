<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Popup;

class PopupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $popups = [
            [
                'name' => 'Welcome Popup',
                'title' => 'ยินดีต้อนรับสู่ LongTrade!',
                'content' => '<p>รับส่วนลด <strong>20%</strong> สำหรับการซื้อครั้งแรก</p><p>ใช้โค้ด: <strong>WELCOME20</strong></p>',
                'trigger_type' => 'time_delay',
                'trigger_value' => 3,
                'display_type' => 'modal',
                'position' => 'center',
                'width' => 500,
                'target_user_type' => 'guest',
                'frequency' => 'once_per_day',
                'button_text' => 'รับส่วนลดเลย',
                'button_url' => '/products',
                'button_color' => '#ef4444',
                'background_color' => '#ffffff',
                'is_active' => true,
                'starts_at' => now(),
                'impressions' => 0,
                'clicks' => 0,
                'conversions' => 0,
            ],
            [
                'name' => 'Exit Intent Offer',
                'title' => 'รอก่อน! อย่าพลาดโอกาสนี้',
                'content' => '<p>ลดเพิ่ม <strong>10%</strong> ถ้าซื้อตอนนี้</p>',
                'trigger_type' => 'exit_intent',
                'display_type' => 'modal',
                'position' => 'center',
                'width' => 450,
                'target_user_type' => 'all',
                'frequency' => 'once_per_session',
                'button_text' => 'ใช้ส่วนลด',
                'button_url' => '/checkout',
                'button_color' => '#10b981',
                'background_color' => '#ffffff',
                'is_active' => true,
                'starts_at' => now(),
                'impressions' => 0,
                'clicks' => 0,
                'conversions' => 0,
            ],
            [
                'name' => 'Scroll Promotion',
                'title' => 'คุณสนใจ EA ใช่ไหม?',
                'content' => '<p>ดู EA แนะนำของเรา พร้อมส่วนลดพิเศษ!</p>',
                'trigger_type' => 'scroll',
                'trigger_value' => 50,
                'display_type' => 'slide_in',
                'position' => 'right',
                'width' => 350,
                'target_pages' => ['/products', '/products/*'],
                'target_user_type' => 'all',
                'frequency' => 'once_per_day',
                'button_text' => 'ดู EA',
                'button_url' => '/products/expert-advisors',
                'button_color' => '#3b82f6',
                'background_color' => '#ffffff',
                'is_active' => true,
                'starts_at' => now(),
                'impressions' => 0,
                'clicks' => 0,
                'conversions' => 0,
            ],
        ];

        foreach ($popups as $popup) {
            Popup::create($popup);
        }

        $this->command->info('Created ' . count($popups) . ' popups');
    }
}
