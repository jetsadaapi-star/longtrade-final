<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;
use App\Models\Category;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        $forexCategory = Category::where('slug', 'forex-trading')->first();
        $technicalCategory = Category::where('slug', 'technical-analysis')->first();
        $priceActionCategory = Category::where('slug', 'price-action')->first();

        $courses = [
            [
                'title' => 'Forex Trading สำหรับมือใหม่',
                'slug' => 'forex-trading-for-beginners',
                'description' => 'เรียนรู้พื้นฐาน Forex Trading ตั้งแต่เริ่มต้น เหมาะสำหรับผู้ที่ไม่เคยเทรดมาก่อน',
                'content' => json_encode([
                    'overview' => 'คอร์สนี้จะสอนทุกอย่างที่คุณต้องรู้เพื่อเริ่มต้นเทรด Forex',
                    'what_you_will_learn' => [
                        'พื้นฐาน Forex คืออะไร',
                        'วิธีเปิดบัญชีเทรด',
                        'การใช้งาน MT4/MT5',
                        'การอ่านกราฟเบื้องต้น',
                        'การวางคำสั่ง Buy/Sell',
                    ],
                    'requirements' => [
                        'คอมพิวเตอร์หรือมือถือ',
                        'อินเทอร์เน็ต',
                        'ความตั้งใจเรียนรู้',
                    ],
                ]),
                'category_id' => $forexCategory->id,
                'instructor_name' => 'อ.สมชาย ใจดี',
                'instructor_bio' => 'เทรดเดอร์มืออาชีพ 10 ปี',
                'level' => 'beginner',
                'duration_hours' => 8,
                'price' => 0,
                'is_free' => true,
                'is_featured' => true,
                'is_published' => true,
                'enrollment_count' => 1250,
                'rating' => 4.8,
                'thumbnail' => null,
                'video_url' => null,
                'lessons' => json_encode([
                    [
                        'id' => 1,
                        'title' => 'บทนำ: Forex คืออะไร',
                        'duration' => '15:30',
                        'is_free' => true,
                        'video_url' => null,
                    ],
                    [
                        'id' => 2,
                        'title' => 'การเปิดบัญชีเทรด',
                        'duration' => '20:00',
                        'is_free' => true,
                        'video_url' => null,
                    ],
                    [
                        'id' => 3,
                        'title' => 'ทำความรู้จัก MT4',
                        'duration' => '25:00',
                        'is_free' => false,
                        'video_url' => null,
                    ],
                ]),
                'meta_title' => 'เรียน Forex Trading ฟรี สำหรับมือใหม่',
                'meta_description' => 'คอร์สเรียน Forex Trading ฟรี เหมาะสำหรับมือใหม่ เรียนรู้ตั้งแต่พื้นฐานจนเทรดได้จริง',
            ],
            [
                'title' => 'Technical Analysis ขั้นสูง',
                'slug' => 'advanced-technical-analysis',
                'description' => 'เทคนิคการวิเคราะห์ทางเทคนิคระดับสูง สำหรับเทรดเดอร์ที่มีพื้นฐานแล้ว',
                'content' => json_encode([
                    'overview' => 'เจาะลึกการวิเคราะห์ทางเทคนิคแบบมืออาชีพ',
                    'what_you_will_learn' => [
                        'Chart Patterns ขั้นสูง',
                        'Fibonacci Retracement',
                        'Elliott Wave Theory',
                        'Volume Analysis',
                        'Multi-Timeframe Analysis',
                    ],
                ]),
                'category_id' => $technicalCategory->id,
                'instructor_name' => 'อ.วิชัย เทรดเดอร์',
                'instructor_bio' => 'นักวิเคราะห์ทางเทคนิค 15 ปี',
                'level' => 'advanced',
                'duration_hours' => 12,
                'price' => 2999,
                'is_free' => false,
                'is_featured' => true,
                'is_published' => true,
                'enrollment_count' => 580,
                'rating' => 4.9,
                'lessons' => json_encode([]),
            ],
            [
                'title' => 'Price Action Mastery',
                'slug' => 'price-action-mastery',
                'description' => 'เทรดด้วย Price Action อย่างมืออาชีพ ไม่ต้องพึ่งอินดิเคเตอร์',
                'content' => json_encode([
                    'overview' => 'เรียนรู้การอ่านแท่งเทียนและ Price Action แบบเซียน',
                    'what_you_will_learn' => [
                        'Candlestick Patterns',
                        'Support & Resistance',
                        'Trend Lines',
                        'Price Action Signals',
                        'Entry & Exit Strategies',
                    ],
                ]),
                'category_id' => $priceActionCategory->id,
                'instructor_name' => 'อ.ประเสริฐ กำไรงาม',
                'instructor_bio' => 'Price Action Trader 12 ปี',
                'level' => 'intermediate',
                'duration_hours' => 10,
                'price' => 1999,
                'is_free' => false,
                'is_featured' => false,
                'is_published' => true,
                'enrollment_count' => 420,
                'rating' => 4.7,
                'lessons' => json_encode([]),
            ],
        ];

        foreach ($courses as $courseData) {
            Course::create($courseData);
        }

        $this->command->info('Courses seeded successfully!');
    }
}
