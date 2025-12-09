<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SuperAdminSeeder extends Seeder
{
    public function run(): void
    {
        // Check if super admin already exists
        $superAdmin = User::where('email', 'admin@longtrade.com')->first();

        if ($superAdmin) {
            // Update existing admin to super_admin role
            $superAdmin->assignRole('super_admin');
            $this->command->info('Existing admin user updated to super_admin role!');
        } else {
            // Create new super admin
            $superAdmin = User::create([
                'name' => 'Super Admin',
                'email' => 'admin@longtrade.com',
                'password' => Hash::make('password123'),
                'email_verified_at' => now(),
            ]);

            $superAdmin->assignRole('super_admin');
            $this->command->info('Super admin user created successfully!');
        }

        $this->command->info('Email: admin@longtrade.com');
        $this->command->info('Password: password123');
    }
}
