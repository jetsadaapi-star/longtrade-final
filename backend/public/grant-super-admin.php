<?php
/**
 * Grant all permissions to super_admin
 * DELETE THIS FILE AFTER USE!
 */

require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Artisan;

echo "<h2>Granting Full Access to Super Admin</h2>";
echo "<pre>";

try {
    // 1. Generate Shield permissions if not exists
    echo "Step 1: Checking permissions...\n";
    
    // Get all permissions
    $permissions = Permission::all();
    echo "Found " . $permissions->count() . " permissions in database\n";
    
    // 2. Get or create super_admin role
    $superAdminRole = Role::firstOrCreate(
        ['name' => 'super_admin', 'guard_name' => 'web']
    );
    echo "✅ super_admin role ID: {$superAdminRole->id}\n";
    
    // 3. Give all permissions to super_admin
    if ($permissions->count() > 0) {
        $superAdminRole->syncPermissions($permissions);
        echo "✅ Assigned all " . $permissions->count() . " permissions to super_admin\n";
    } else {
        echo "⚠️ No permissions found - generating...\n";
        
        // Try to run shield:generate
        try {
            Artisan::call('shield:generate', ['--all' => true, '--panel' => 'admin']);
            echo Artisan::output();
        } catch (Exception $e) {
            echo "Could not auto-generate permissions: " . $e->getMessage() . "\n";
        }
    }
    
    // 4. Also create panel_user role and assign to super_admin if needed
    $panelUserRole = Role::firstOrCreate(
        ['name' => 'panel_user', 'guard_name' => 'web']
    );
    echo "✅ panel_user role ID: {$panelUserRole->id}\n";
    
    // 5. Get admin user and ensure they have both roles
    $admin = User::where('email', 'admin@longtrade.com')->first();
    if ($admin) {
        // Sync roles - give both super_admin and panel_user
        $admin->syncRoles(['super_admin', 'panel_user']);
        echo "✅ Admin now has roles: [" . $admin->getRoleNames()->implode(', ') . "]\n";
        echo "✅ Admin permissions count: " . $admin->getAllPermissions()->count() . "\n";
    }
    
    // 6. Clear all caches
    app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
    
    // Clear Laravel caches
    $cachePaths = [
        realpath(__DIR__ . '/../bootstrap/cache/config.php'),
        realpath(__DIR__ . '/../bootstrap/cache/routes-v7.php'),
    ];
    foreach ($cachePaths as $path) {
        if ($path && file_exists($path)) {
            unlink($path);
        }
    }
    echo "✅ All caches cleared\n";
    
    echo "\n🎉 Done! Try accessing /admin again.\n";
    echo "If still 403, try logging out and logging in again.\n";
    echo "\n⚠️ DELETE THIS FILE (grant-super-admin.php) FOR SECURITY!";
    
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage() . "\n";
    echo "Line: " . $e->getLine() . "\n";
}

echo "</pre>";
