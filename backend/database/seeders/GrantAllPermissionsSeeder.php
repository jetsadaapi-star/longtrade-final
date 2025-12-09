<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class GrantAllPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // Get or create super_admin role
        $superAdmin = Role::firstOrCreate(['name' => 'super_admin']);

        // Get all existing permissions
        $allPermissions = Permission::all();

        // Grant all permissions to super_admin
        $superAdmin->syncPermissions($allPermissions);

        $this->command->info('✅ Granted ' . $allPermissions->count() . ' permissions to super_admin');

        // Assign super_admin role to admin user
        $admin = \App\Models\User::where('email', 'admin@longtrade.com')->first();
        if ($admin) {
            $admin->syncRoles(['super_admin']);
            $this->command->info('✅ Assigned super_admin role to admin@longtrade.com');
        }

        $this->command->info('All permissions granted successfully!');
    }
}
