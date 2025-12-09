<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleAndPermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions
        $permissions = [
            // Course permissions
            'view_courses',
            'create_courses',
            'edit_courses',
            'delete_courses',
            'publish_courses',

            // User permissions
            'view_users',
            'create_users',
            'edit_users',
            'delete_users',

            // Enrollment permissions
            'view_enrollments',
            'create_enrollments',
            'edit_enrollments',
            'delete_enrollments',
            'approve_enrollments',

            // Article permissions
            'view_articles',
            'create_articles',
            'edit_articles',
            'delete_articles',
            'publish_articles',

            // Category permissions
            'view_categories',
            'create_categories',
            'edit_categories',
            'delete_categories',

            // Coupon permissions
            'view_coupons',
            'create_coupons',
            'edit_coupons',
            'delete_coupons',

            // Certificate permissions
            'view_certificates',
            'create_certificates',
            'edit_certificates',
            'delete_certificates',

            // Quiz permissions
            'view_quiz_attempts',

            // System permissions
            'view_roles',
            'create_roles',
            'edit_roles',
            'delete_roles',
            'assign_permissions',
            'view_settings',
            'edit_settings',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission, 'guard_name' => 'web']);
        }

        // Create roles and assign permissions

        // Super Admin - all permissions
        $superAdmin = Role::create(['name' => 'super_admin', 'guard_name' => 'web']);
        $superAdmin->givePermissionTo(Permission::all());

        // Admin - manage content but not system
        $admin = Role::create(['name' => 'admin', 'guard_name' => 'web']);
        $admin->givePermissionTo([
            'view_courses',
            'create_courses',
            'edit_courses',
            'delete_courses',
            'publish_courses',
            'view_users',
            'edit_users',
            'view_enrollments',
            'create_enrollments',
            'edit_enrollments',
            'approve_enrollments',
            'view_articles',
            'create_articles',
            'edit_articles',
            'delete_articles',
            'publish_articles',
            'view_categories',
            'create_categories',
            'edit_categories',
            'delete_categories',
            'view_coupons',
            'create_coupons',
            'edit_coupons',
            'delete_coupons',
            'view_certificates',
            'create_certificates',
            'view_quiz_attempts',
        ]);

        // Instructor - manage own courses
        $instructor = Role::create(['name' => 'instructor', 'guard_name' => 'web']);
        $instructor->givePermissionTo([
            'view_courses',
            'create_courses',
            'edit_courses',
            'view_enrollments',
            'view_quiz_attempts',
            'view_certificates',
        ]);

        // Student - view and enroll
        $student = Role::create(['name' => 'student', 'guard_name' => 'web']);
        $student->givePermissionTo([
            'view_courses',
            'view_enrollments',
        ]);

        $this->command->info('Roles and permissions created successfully!');
    }
}
