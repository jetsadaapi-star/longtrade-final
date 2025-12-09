<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class SiteSettingPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // Create permissions for SiteSetting
        $permissions = [
            'view_any_site::setting',
            'view_site::setting',
            'create_site::setting',
            'update_site::setting',
            'delete_site::setting',
            'delete_any_site::setting',
            'force_delete_site::setting',
            'force_delete_any_site::setting',
            'restore_site::setting',
            'restore_any_site::setting',
            'replicate_site::setting',
            'reorder_site::setting',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Assign all permissions to super_admin role
        $superAdmin = Role::where('name', 'super_admin')->first();
        if ($superAdmin) {
            $superAdmin->givePermissionTo($permissions);
            $this->command->info('✅ Site Setting permissions granted to super_admin');
        }

        $this->command->info('Site Setting permissions created successfully!');
    }
}
