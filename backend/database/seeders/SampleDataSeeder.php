<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SampleDataSeeder extends Seeder
{
    public function run(): void
    {
        $this->command->info('Starting sample data seeding...');

        // Seed in order (skip SubscriptionPlanSeeder - already exists)
        $this->call([
            CategorySeeder::class,
            CourseSeeder::class,
            ArticleSeeder::class,
            ProductSeeder::class,
            EbookSeeder::class,
        ]);

        $this->command->info('✅ All sample data seeded successfully!');
    }
}
