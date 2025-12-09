<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ebook;

class EbookSeeder extends Seeder
{
    public function run(): void
    {
        $ebooks = [
            [
                'title' => 'คู่มือเทรด Forex ฉบับสมบูรณ์',
                'slug' => 'complete-forex-trading-guide-ebook',
                'description' => 'E-book ครบครันสำหรับผู้เริ่มต้นเทรด Forex จาก A ถึง Z',
                'author' => 'ทีมงาน LongTrade Academy',
                'pages' => 150,
                'language' => 'th',
                'format' => 'PDF',
                'file_size' => '15.5 MB',
                'access_type' => 'free',
                'price' => 0,
                'is_featured' => true,
                'is_published' => true,
                'downloads_count' => 3500,
                'rating' => 4.8,
                'cover_image' => null,
                'file_path' => null,
                'preview_url' => null,
                'published_at' => now()->subMonths(2),
            ],
            [
                'title' => 'Price Action Trading Strategies',
                'slug' => 'price-action-trading-strategies',
                'description' => 'กลยุทธ์การเทรดด้วย Price Action แบบมืออาชีพ',
                'author' => 'อ.ประเสริฐ กำไรงาม',
                'pages' => 120,
                'language' => 'th',
                'format' => 'PDF',
                'file_size' => '12.3 MB',
                'access_type' => 'basic',
                'price' => 499,
                'is_featured' => true,
                'is_published' => true,
                'downloads_count' => 850,
                'rating' => 4.9,
                'published_at' => now()->subMonth(),
            ],
            [
                'title' => 'จิตวิทยาการเทรด',
                'slug' => 'trading-psychology-ebook',
                'description' => 'เข้าใจจิตวิทยาของตัวเองและตลาด เพื่อเทรดให้ประสบความสำเร็จ',
                'author' => 'อ.วิชัย เทรดเดอร์',
                'pages' => 95,
                'language' => 'th',
                'format' => 'PDF',
                'file_size' => '8.7 MB',
                'access_type' => 'premium',
                'price' => 799,
                'is_featured' => false,
                'is_published' => true,
                'downloads_count' => 620,
                'rating' => 4.7,
                'published_at' => now()->subWeeks(3),
            ],
            [
                'title' => 'Risk Management Handbook',
                'slug' => 'risk-management-handbook',
                'description' => 'คู่มือการบริหารความเสี่ยงและเงินทุนอย่างมืออาชีพ',
                'author' => 'อ.สมชาย ใจดี',
                'pages' => 80,
                'language' => 'th',
                'format' => 'PDF',
                'file_size' => '7.2 MB',
                'access_type' => 'free',
                'price' => 0,
                'is_featured' => false,
                'is_published' => true,
                'downloads_count' => 1200,
                'rating' => 4.6,
                'published_at' => now()->subWeeks(2),
            ],
            [
                'title' => 'Technical Analysis Masterclass',
                'slug' => 'technical-analysis-masterclass',
                'description' => 'เจาะลึกการวิเคราะห์ทางเทคนิคระดับสูง',
                'author' => 'อ.วิชัย เทรดเดอร์',
                'pages' => 200,
                'language' => 'th',
                'format' => 'PDF',
                'file_size' => '22.1 MB',
                'access_type' => 'premium',
                'price' => 1299,
                'is_featured' => true,
                'is_published' => true,
                'downloads_count' => 450,
                'rating' => 5.0,
                'published_at' => now()->subWeek(),
            ],
        ];

        foreach ($ebooks as $ebookData) {
            Ebook::create($ebookData);
        }

        $this->command->info('E-books seeded successfully!');
    }
}
