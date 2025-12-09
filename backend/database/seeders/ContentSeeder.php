<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\Course;
use App\Models\Ebook;
use App\Models\ExpertAdvisor;
use App\Models\Indicator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->seedCourses();
        $this->seedArticles();
        $this->seedEbooks();
        $this->seedProducts();
    }

    private function seedCourses()
    {
        $category = Category::where('type', 'course')->first();
        $categoryId = $category ? $category->id : null;

        $courses = [
            [
                'title' => 'Forex Trading for Beginners',
                'description' => 'Master the basics of Forex trading with this comprehensive course designed for absolute beginners.',
                'price' => 0,
                'original_price' => 2990,
                'hours' => 5,
                'lessons_count' => 12,
                'level' => 'Beginner',
            ],
            [
                'title' => 'Advanced Price Action Strategy',
                'description' => 'Learn how to read the charts like a pro without relying on indicators.',
                'price' => 4990,
                'original_price' => 9900,
                'hours' => 10,
                'lessons_count' => 25,
                'level' => 'Advanced',
            ],
            [
                'title' => 'Risk Management Mastery',
                'description' => 'The most important skill in trading. Learn how to protect your capital and grow your account.',
                'price' => 1990,
                'original_price' => 3900,
                'hours' => 3,
                'lessons_count' => 8,
                'level' => 'Intermediate',
            ],
            [
                'title' => 'Algorithmic Trading 101',
                'description' => 'Introduction to automated trading systems and how to build your first robot.',
                'price' => 5990,
                'original_price' => 12000,
                'hours' => 15,
                'lessons_count' => 30,
                'level' => 'Advanced',
            ],
        ];

        foreach ($courses as $index => $data) {
            Course::firstOrCreate(
                ['slug' => Str::slug($data['title'])],
                [
                    'title' => $data['title'],
                    'description' => $data['description'],
                    'price' => $data['price'],
                    'original_price' => $data['original_price'],
                    'hours' => $data['hours'],
                    'lessons_count' => $data['lessons_count'],
                    'level' => $data['level'],
                    'category_id' => $categoryId,
                    'is_published' => true,
                    'is_featured' => $index < 2,
                    'order' => $index + 1,
                    'what_you_learn' => ['Market Structure', 'Risk Management', 'Psychology'],
                    'requirements' => ['Basic Computer Skills', 'Internet Connection'],
                ]
            );
        }
    }

    private function seedArticles()
    {
        $category = Category::where('type', 'article')->first();
        $categoryId = $category ? $category->id : null;

        $articles = [
            [
                'title' => 'Understanding Market Trends',
                'excerpt' => 'How to identify and follow market trends for better trading results.',
            ],
            [
                'title' => 'Top 5 Trading Mistakes to Avoid',
                'excerpt' => 'Common pitfalls that new traders fall into and how to avoid them.',
            ],
            [
                'title' => 'Fundamental vs Technical Analysis',
                'excerpt' => 'Which analysis method is right for you? We break down the pros and cons.',
            ],
            [
                'title' => 'The Psychology of a Winning Trader',
                'excerpt' => 'Mindset is everything. Learn how successful traders think and act.',
            ],
        ];

        foreach ($articles as $index => $data) {
            Article::firstOrCreate(
                ['slug' => Str::slug($data['title'])],
                [
                    'title' => $data['title'],
                    'excerpt' => $data['excerpt'],
                    'content' => '<p>' . $data['excerpt'] . ' Lorem ipsum dolor sit amet...</p>',
                    'category_id' => $categoryId,
                    'author' => 'LongTrade Team',
                    'read_time' => 5,
                    'is_published' => true,
                    'is_featured' => $index === 0,
                    'published_at' => now(),
                    'views_count' => rand(100, 1000),
                ]
            );
        }
    }

    private function seedEbooks()
    {
        $category = Category::where('type', 'ebook')->first();
        $categoryId = $category ? $category->id : null;

        $ebooks = [
            [
                'title' => 'The Ultimate Guide to Candlestick Patterns',
                'price' => 490,
                'pages' => 50,
            ],
            [
                'title' => 'Trading Psychology Workbook',
                'price' => 290,
                'pages' => 30,
            ],
            [
                'title' => 'Forex Strategy Blueprint',
                'price' => 990,
                'pages' => 120,
            ],
            [
                'title' => 'Crypto Trading Secrets',
                'price' => 0,
                'pages' => 45,
            ],
        ];

        foreach ($ebooks as $index => $data) {
            Ebook::firstOrCreate(
                ['slug' => Str::slug($data['title'])],
                [
                    'title' => $data['title'],
                    'description' => "Description for {$data['title']}",
                    'price' => $data['price'],
                    'original_price' => $data['price'] * 1.5,
                    'pages' => $data['pages'],
                    'category_id' => $categoryId,
                    'author' => 'LongTrade Expert',
                    'is_published' => true,
                    'is_featured' => $index === 0,
                ]
            );
        }
    }

    private function seedProducts()
    {
        // Seed Expert Advisors (4 items)
        $eaCategory = Category::where('type', 'expert_advisor')->first();
        $eaId = $eaCategory ? $eaCategory->id : null;

        $eas = [
            [
                'title' => 'Gold Scalper Pro',
                'price' => 9900,
                'platform' => 'MT4',
            ],
            [
                'title' => 'Trend Rider EA',
                'price' => 15000,
                'platform' => 'MT5',
            ],
            [
                'title' => 'Grid Master EA',
                'price' => 5000,
                'platform' => 'MT4',
            ],
            [
                'title' => 'News Trader Bot',
                'price' => 12000,
                'platform' => 'MT5',
            ],
        ];

        foreach ($eas as $index => $data) {
            ExpertAdvisor::firstOrCreate(
                ['slug' => Str::slug($data['title'])],
                [
                    'title' => $data['title'],
                    'description' => "Automated trading system: {$data['title']}",
                    'price' => $data['price'],
                    'original_price' => $data['price'] * 1.2,
                    'platform' => $data['platform'],
                    'category_id' => $eaId,
                    'is_published' => true,
                    'is_featured' => true,
                    'features' => ['Auto Stop Loss', 'Trailing Stop', 'News Filter'],
                ]
            );
        }

        // Seed Indicators (4 items)
        $indCategory = Category::where('type', 'indicator')->first();
        $indId = $indCategory ? $indCategory->id : null;

        $indicators = [
            [
                'title' => 'Supply Demand Zones',
                'price' => 1990,
                'platform' => 'MT4',
            ],
            [
                'title' => 'Divergence Scanner',
                'price' => 2500,
                'platform' => 'TradingView',
            ],
            [
                'title' => 'Volume Profile Pro',
                'price' => 3500,
                'platform' => 'MT5',
            ],
            [
                'title' => 'Harmonic Pattern Scanner',
                'price' => 4500,
                'platform' => 'MT4',
            ],
        ];

        foreach ($indicators as $index => $data) {
            Indicator::firstOrCreate(
                ['slug' => Str::slug($data['title'])],
                [
                    'title' => $data['title'],
                    'description' => "Technical indicator: {$data['title']}",
                    'price' => $data['price'],
                    'original_price' => $data['price'] * 1.3,
                    'platform' => $data['platform'],
                    'category_id' => $indId,
                    'is_published' => true,
                    'is_featured' => true,
                    'features' => ['Non-repainting', 'Alerts', 'Multi-timeframe'],
                ]
            );
        }
    }
}
