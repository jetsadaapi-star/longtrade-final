<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            'course' => [
                'Forex Basics',
                'Advanced Technical Analysis',
                'Fundamental Analysis',
                'Risk Management Masterclass'
            ],
            'article' => [
                'Market News',
                'Trading Strategies',
                'Psychology of Trading',
                'Weekly Outlook'
            ],
            'indicator' => [
                'Trend Indicators',
                'Oscillators',
                'Volume Indicators',
                'Custom Indicators'
            ],
            'ebook' => [
                'Beginner Guides',
                'Strategy Books',
                'Mindset & Psychology',
                'Chart Patterns'
            ],
            'expert_advisor' => [
                'Scalping EAs',
                'Trend Following EAs',
                'Grid Systems',
                'Arbitrage EAs'
            ],
            'tradingview' => [
                'Pine Script Strategies',
                'Custom Chart Layouts',
                'Alert Systems',
                'Backtesting Templates'
            ],
        ];

        foreach ($types as $type => $names) {
            foreach ($names as $index => $name) {
                Category::firstOrCreate(
                    ['slug' => Str::slug($name)],
                    [
                        'name' => $name,
                        'description' => "Sample category for {$type} - {$name}",
                        'type' => $type,
                        'icon' => 'heroicon-o-tag',
                        'color' => $this->getColorForType($type),
                        'order' => $index + 1,
                        'is_active' => true,
                    ]
                );
            }
        }
    }

    private function getColorForType(string $type): string
    {
        return match ($type) {
            'course' => 'info',
            'article' => 'success',
            'indicator' => 'warning',
            'ebook' => 'primary',
            'expert_advisor' => 'danger',
            'tradingview' => 'gray',
            default => 'primary',
        };
    }
}
