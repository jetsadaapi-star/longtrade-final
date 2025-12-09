<?php
/**
 * Assign super_admin role to admin user
 * DELETE THIS FILE AFTER USE!
 */

require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use App\Models\User;
use Spatie\Permission\Models\Role;

echo "<h2>Checking and Assigning Admin Role</h2>";
echo "<pre>";

try {
    // Check if super_admin role exists
    $superAdminRole = Role::where('name', 'super_admin')->first();
    
    if (!$superAdminRole) {
        echo "Creating super_admin role...\n";
        $superAdminRole = Role::create(['name' => 'super_admin', 'guard_name' => 'web']);
        echo "✅ super_admin role created\n";
    } else {
        echo "✅ super_admin role exists (ID: {$superAdminRole->id})\n";
    }
    
    // Find admin user
    $admin = User::where('email', 'admin@longtrade.com')->first();
    
    if (!$admin) {
        echo "❌ Admin user not found!\n";
        echo "</pre>";
        exit;
    }
    
    echo "✅ Found admin user: {$admin->name} ({$admin->email})\n";
    
    // Check current roles
    $currentRoles = $admin->getRoleNames();
    echo "Current roles: [" . $currentRoles->implode(', ') . "]\n";
    
    // Assign super_admin role if not assigned
    if (!$admin->hasRole('super_admin')) {
        $admin->assignRole('super_admin');
        echo "✅ Assigned super_admin role to {$admin->email}\n";
    } else {
        echo "✅ Already has super_admin role\n";
    }
    
    // Also update the role column in users table
    $admin->role = 'admin';
    $admin->save();
    echo "✅ Updated role column to 'admin'\n";
    
    // Clear permission cache
    app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
    echo "✅ Permission cache cleared\n";
    
    echo "\n🎉 Done! Try accessing /admin again.\n";
    echo "\n⚠️ DELETE THIS FILE (assign-admin-role.php) FOR SECURITY!";
    
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage() . "\n";
    echo "Stack trace:\n" . $e->getTraceAsString() . "\n";
}

echo "</pre>";
