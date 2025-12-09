<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;
use App\Models\Category;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $tipsCategory = Category::where('slug', 'trading-tips')->first();
        $analysisCategory = Category::where('slug', 'market-analysis')->first();
        $beginnerCategory = Category::where('slug', 'beginner-guide')->first();

        $articles = [
            [
                'title' => '10 เทคนิคการเทรด Forex ที่มือใหม่ต้องรู้',
                'slug' => '10-forex-trading-tips-for-beginners',
                'excerpt' => 'รวม 10 เทคนิคสำคัญที่จะช่วยให้คุณเทรด Forex ได้อย่างมั่นใจและปลอดภัย',
                'content' => '<h2>1. เริ่มต้นด้วยบัญชี Demo</h2><p>ก่อนเทรดด้วยเงินจริง ควรฝึกฝนกับบัญชี Demo ก่อนอย่างน้อย 3-6 เดือน</p><h2>2. ศึกษาพื้นฐานให้ดี</h2><p>เรียนรู้เกี่ยวกับคู่เงิน, Lot Size, Leverage และ Margin</p><h2>3. ใช้ Stop Loss ทุกครั้ง</h2><p>อย่าลืมวาง Stop Loss เพื่อจำกัดความเสียหาย</p>',
                'category_id' => $tipsCategory->id,
                'author_name' => 'ทีมงาน LongTrade',
                'is_featured' => true,
                'is_published' => true,
                'views_count' => 2500,
                'reading_time' => 8,
                'featured_image' => null,
                'meta_title' => '10 เทคนิคเทรด Forex สำหรับมือใหม่',
                'meta_description' => 'รวม 10 เทคนิคการเทรด Forex ที่มือใหม่ต้องรู้ เพื่อเทรดอย่างปลอดภัยและมีกำไร',
                'published_at' => now(),
            ],
            [
                'title' => 'วิเคราะห์ตลาด Forex ประจำสัปดาห์',
                'slug' => 'weekly-forex-market-analysis',
                'excerpt' => 'ภาพรวมตลาด Forex สัปดาห์นี้ พร้อมแนวโน้มคู่เงินหลัก',
                'content' => '<h2>EUR/USD</h2><p>คาดว่าจะมีแนวโน้มขาขึ้น หลังจากข่าวเศรษฐกิจจากยุโรปออกมาดี</p><h2>GBP/USD</h2><p>อยู่ในช่วง Sideways รอข่าวจาก BOE</p><h2>USD/JPY</h2><p>แนวโน้มขาลง หลังจาก BOJ ปรับนโยบาย</p>',
                'category_id' => $analysisCategory->id,
                'author_name' => 'นักวิเคราะห์ LongTrade',
                'is_featured' => true,
                'is_published' => true,
                'views_count' => 1800,
                'reading_time' => 5,
                'published_at' => now()->subDays(1),
            ],
            [
                'title' => 'คู่มือเริ่มต้นเทรด Forex ฉบับสมบูรณ์',
                'slug' => 'complete-forex-trading-guide',
                'excerpt' => 'คู่มือครบครันสำหรับผู้เริ่มต้นเทรด Forex ตั้งแต่ A ถึง Z',
                'content' => '<h2>Forex คืออะไร</h2><p>Forex หรือ Foreign Exchange คือการซื้อขายแลกเปลี่ยนเงินตราต่างประเทศ</p><h2>ทำไมต้องเทรด Forex</h2><p>ตลาดใหญ่ที่สุดในโลก เปิด 24 ชั่วโมง 5 วันต่อสัปดาห์</p><h2>เริ่มต้นอย่างไร</h2><p>1. เลือกโบรกเกอร์ที่น่าเชื่อถือ<br>2. เปิดบัญชีเทรด<br>3. ฝึกฝนกับบัญชี Demo</p>',
                'category_id' => $beginnerCategory->id,
                'author_name' => 'ทีมงาน LongTrade',
                'is_featured' => false,
                'is_published' => true,
                'views_count' => 3200,
                'reading_time' => 12,
                'published_at' => now()->subDays(3),
            ],
            [
                'title' => 'การบริหารความเสี่ยงในการเทรด',
                'slug' => 'risk-management-in-trading',
                'excerpt' => 'เทคนิคการบริหารความเสี่ยงที่เทรดเดอร์มืออาชีพใช้',
                'content' => '<h2>กฎ 1-2%</h2><p>อย่าเสี่ยงเกิน 1-2% ของเงินทุนต่อ 1 การเทรด</p><h2>Risk:Reward Ratio</h2><p>ควรมีอัตราส่วนอย่างน้อย 1:2 หรือมากกว่า</p><h2>Diversification</h2><p>อย่าเทรดคู่เงินเดียว กระจายความเสี่ยง</p>',
                'category_id' => $tipsCategory->id,
                'author_name' => 'อ.สมชาย ใจดี',
                'is_featured' => false,
                'is_published' => true,
                'views_count' => 1500,
                'reading_time' => 6,
                'published_at' => now()->subDays(5),
            ],
            [
                'title' => 'จิตวิทยาการเทรดที่ต้องรู้',
                'slug' => 'trading-psychology-essentials',
                'excerpt' => 'ทำไมจิตวิทยาถึงสำคัญกับการเทรดมากกว่าเทคนิค',
                'content' => '<h2>ความกลัวและความโลภ</h2><p>2 อารมณ์หลักที่ทำลายเทรดเดอร์</p><h2>Discipline</h2><p>การมีวินัยในการทำตาม Trading Plan</p><h2>Patience</h2><p>ความอดทนรอจังหวะที่ดี</p>',
                'category_id' => $tipsCategory->id,
                'author_name' => 'อ.วิชัย เทรดเดอร์',
                'is_featured' => true,
                'is_published' => true,
                'views_count' => 2100,
                'reading_time' => 7,
                'published_at' => now()->subWeek(),
            ],
        ];

        foreach ($articles as $articleData) {
            Article::create($articleData);
        }

        $this->command->info('Articles seeded successfully!');
    }
}
