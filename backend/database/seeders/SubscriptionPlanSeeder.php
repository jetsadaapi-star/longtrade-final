<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanSeeder extends Seeder
{
    public function run(): void
    {
        $plans = [
            [
                'name' => 'Free',
                'slug' => 'free',
                'description' => 'เริ่มต้นเรียนรู้การเทรดฟรี',
                'price' => 0,
                'billing_cycle' => 'lifetime',
                'trial_days' => 0,
                'features' => [
                    'เข้าถึงคอร์สฟรี',
                    'บทความพื้นฐาน',
                    'ชุมชนผู้เรียน',
                ],
                'limitations' => [
                    'course_limit' => 3,
                    'download_limit' => 5,
                ],
                'max_courses' => 3,
                'max_downloads_per_month' => 5,
                'max_ebooks' => 2,
                'max_products' => 0,
                'ai_chat_access' => false,
                'ai_messages_per_month' => 0,
                'sort_order' => 1,
                'is_popular' => false,
                'is_active' => true,
                'badge_text' => null,
                'badge_color' => null,
            ],
            [
                'name' => 'Basic',
                'slug' => 'basic',
                'description' => 'เหมาะสำหรับผู้เริ่มต้นที่จริงจัง',
                'price' => 499,
                'billing_cycle' => 'monthly',
                'trial_days' => 7,
                'features' => [
                    'เข้าถึงคอร์สทั้งหมด',
                    'บทความและ E-books',
                    'ดาวน์โหลด Indicators',
                    'การสนับสนุนทางอีเมล',
                ],
                'limitations' => [
                    'course_limit' => 10,
                    'download_limit' => 20,
                ],
                'max_courses' => 10,
                'max_downloads_per_month' => 20,
                'max_ebooks' => 10,
                'max_products' => 5,
                'ai_chat_access' => true,
                'ai_messages_per_month' => 50,
                'sort_order' => 2,
                'is_popular' => false,
                'is_active' => true,
                'badge_text' => null,
                'badge_color' => null,
            ],
            [
                'name' => 'Premium',
                'slug' => 'premium',
                'description' => 'สำหรับเทรดเดอร์มืออาชีพ',
                'price' => 1499,
                'billing_cycle' => 'monthly',
                'trial_days' => 14,
                'features' => [
                    'เข้าถึงคอร์สทั้งหมดไม่จำกัด',
                    'บทความและ E-books ทั้งหมด',
                    'ดาวน์โหลด Indicators & EA',
                    'AI Trading Assistant',
                    'การสนับสนุนแบบ Priority',
                    'เข้าร่วม Webinar พิเศษ',
                ],
                'limitations' => [],
                'max_courses' => null,
                'max_downloads_per_month' => null,
                'max_ebooks' => null,
                'max_products' => null,
                'ai_chat_access' => true,
                'ai_messages_per_month' => 200,
                'sort_order' => 3,
                'is_popular' => true,
                'is_active' => true,
                'badge_text' => 'Most Popular',
                'badge_color' => '#10B981',
            ],
            [
                'name' => 'Enterprise',
                'slug' => 'enterprise',
                'description' => 'สำหรับองค์กรและทีมเทรดเดอร์',
                'price' => 4999,
                'billing_cycle' => 'monthly',
                'trial_days' => 30,
                'features' => [
                    'ทุกอย่างใน Premium',
                    'Multi-user accounts (สูงสุด 10 คน)',
                    'Custom indicators & EA',
                    'AI Trading Assistant ไม่จำกัด',
                    'การสนับสนุนแบบ 24/7',
                    'Private training sessions',
                    'API Access',
                ],
                'limitations' => [],
                'max_courses' => null,
                'max_downloads_per_month' => null,
                'max_ebooks' => null,
                'max_products' => null,
                'ai_chat_access' => true,
                'ai_messages_per_month' => null,
                'sort_order' => 4,
                'is_popular' => false,
                'is_active' => true,
                'badge_text' => 'Best Value',
                'badge_color' => '#8B5CF6',
            ],
        ];

        foreach ($plans as $plan) {
            SubscriptionPlan::create($plan);
        }

        $this->command->info('Subscription plans seeded successfully!');
    }
}
