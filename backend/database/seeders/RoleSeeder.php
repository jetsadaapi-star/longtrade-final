<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'super_admin',
                'guard_name' => 'web',
            ],
            [
                'name' => 'admin',
                'guard_name' => 'web',
            ],
            [
                'name' => 'instructor',
                'guard_name' => 'web',
            ],
            [
                'name' => 'student',
                'guard_name' => 'web',
            ],
            [
                'name' => 'vip_member',
                'guard_name' => 'web',
            ],
        ];

        foreach ($roles as $roleData) {
            Role::firstOrCreate(
                ['name' => $roleData['name'], 'guard_name' => $roleData['guard_name']],
                $roleData
            );
        }

        $this->command->info('Standard roles created successfully!');
    }
}
