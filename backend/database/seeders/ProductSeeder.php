<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $eaCategory = Category::where('slug', 'expert-advisors')->first();
        $indicatorCategory = Category::where('slug', 'indicators')->first();
        $scriptCategory = Category::where('slug', 'trading-scripts')->first();

        $products = [
            // Expert Advisors
            [
                'name' => 'Trend Following EA Pro',
                'slug' => 'trend-following-ea-pro',
                'description' => 'EA ตามเทรนด์อัตโนมัติ ใช้กลยุทธ์ Moving Average Crossover',
                'category' => 'ea',
                'category_id' => $eaCategory?->id,
                'price' => 4999,
                'access_type' => 'premium',
                'version' => '2.1.0',
                'platform' => 'MT4/MT5',
                'features' => json_encode([
                    'Auto Trading',
                    'Multi-Timeframe Analysis',
                    'Risk Management',
                    'Trailing Stop',
                    'News Filter',
                ]),
                'requirements' => json_encode([
                    'MT4 Build 1380+',
                    'VPS แนะนำ',
                    'Spread ต่ำกว่า 2 pips',
                ]),
                'is_featured' => true,
                'is_active' => true,
                'downloads_count' => 250,
                'rating' => 4.7,
            ],
            [
                'name' => 'Scalping Master EA',
                'slug' => 'scalping-master-ea',
                'description' => 'EA สำหรับ Scalping ในกรอบเวลาสั้น M1-M5',
                'category' => 'ea',
                'category_id' => $eaCategory?->id,
                'price' => 3999,
                'access_type' => 'premium',
                'version' => '1.5.2',
                'platform' => 'MT4',
                'features' => json_encode([
                    'Fast Execution',
                    'Low Drawdown',
                    'High Win Rate',
                    'Auto Lot Sizing',
                ]),
                'is_featured' => false,
                'is_active' => true,
                'downloads_count' => 180,
                'rating' => 4.5,
            ],

            // Indicators
            [
                'name' => 'Smart Support Resistance Indicator',
                'slug' => 'smart-support-resistance',
                'description' => 'อินดิเคเตอร์แสดง Support และ Resistance อัตโนมัติ',
                'category' => 'indicator',
                'category_id' => $indicatorCategory?->id,
                'price' => 0,
                'access_type' => 'free',
                'version' => '3.0.0',
                'platform' => 'MT4/MT5',
                'features' => json_encode([
                    'Auto S/R Detection',
                    'Multi-Timeframe',
                    'Alert System',
                    'Customizable Colors',
                ]),
                'is_featured' => true,
                'is_active' => true,
                'downloads_count' => 1500,
                'rating' => 4.8,
            ],
            [
                'name' => 'Trend Strength Meter',
                'slug' => 'trend-strength-meter',
                'description' => 'วัดความแรงของเทรนด์ในทุกคู่เงิน',
                'category' => 'indicator',
                'category_id' => $indicatorCategory?->id,
                'price' => 1999,
                'access_type' => 'basic',
                'version' => '2.3.1',
                'platform' => 'MT4/MT5',
                'features' => json_encode([
                    'Real-time Strength',
                    '28 Currency Pairs',
                    'Dashboard View',
                    'Alert Notifications',
                ]),
                'is_featured' => true,
                'is_active' => true,
                'downloads_count' => 420,
                'rating' => 4.6,
            ],
            [
                'name' => 'Volume Profile Pro',
                'slug' => 'volume-profile-pro',
                'description' => 'แสดง Volume Profile และ POC บนกราฟ',
                'category' => 'indicator',
                'category_id' => $indicatorCategory?->id,
                'price' => 2499,
                'access_type' => 'premium',
                'version' => '1.8.0',
                'platform' => 'MT5',
                'features' => json_encode([
                    'Volume Profile',
                    'Point of Control',
                    'Value Area',
                    'Historical Data',
                ]),
                'is_featured' => false,
                'is_active' => true,
                'downloads_count' => 310,
                'rating' => 4.9,
            ],

            // Scripts
            [
                'name' => 'One-Click Trading Panel',
                'slug' => 'one-click-trading-panel',
                'description' => 'แผงควบคุมสำหรับเทรดด้วยคลิกเดียว',
                'category' => 'script',
                'category_id' => $scriptCategory?->id,
                'price' => 0,
                'access_type' => 'free',
                'version' => '2.0.0',
                'platform' => 'MT4/MT5',
                'features' => json_encode([
                    'Quick Order Entry',
                    'Risk Calculator',
                    'Partial Close',
                    'Break Even',
                ]),
                'is_featured' => false,
                'is_active' => true,
                'downloads_count' => 2100,
                'rating' => 4.7,
            ],
        ];

        foreach ($products as $productData) {
            Product::create($productData);
        }

        $this->command->info('Products seeded successfully!');
    }
}
