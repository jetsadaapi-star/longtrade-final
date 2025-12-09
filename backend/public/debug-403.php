<?php
/**
 * Debug 403 issue - identify the source
 * DELETE THIS FILE AFTER USE!
 */

echo "<h2>Debugging 403 Issue</h2>";
echo "<pre>";

// 1. Check if this PHP file runs at all
echo "✅ PHP is working\n";

// 2. Check Laravel
try {
    require __DIR__.'/../vendor/autoload.php';
    $app = require_once __DIR__.'/../bootstrap/app.php';
    $app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();
    echo "✅ Laravel bootstrap successful\n";
    
    // 3. Check authenticated user
    $user = auth()->user();
    if ($user) {
        echo "✅ Authenticated as: {$user->email}\n";
        echo "   Roles: [" . $user->getRoleNames()->implode(', ') . "]\n";
        echo "   Permissions count: " . $user->getAllPermissions()->count() . "\n";
    } else {
        echo "❌ NOT authenticated - no user session\n";
    }
    
    // 4. Check Filament access
    echo "\n--- Filament Panel Check ---\n";
    
    // Check if user can access panel
    $panel = \Filament\Facades\Filament::getPanel('admin');
    echo "Panel ID: " . $panel->getId() . "\n";
    echo "Panel Path: " . $panel->getPath() . "\n";
    
    if ($user) {
        // Check canAccessPanel method if it exists
        $canAccess = true;
        
        // Check if user model has canAccessPanel method
        if (method_exists($user, 'canAccessPanel')) {
            $canAccess = $user->canAccessPanel($panel);
            echo "canAccessPanel(): " . ($canAccess ? 'YES' : 'NO') . "\n";
        } else {
            echo "canAccessPanel() method: NOT DEFINED (should allow access)\n";
        }
        
        // Check if user has super_admin
        if ($user->hasRole('super_admin')) {
            echo "Has super_admin role: YES\n";
        } else {
            echo "Has super_admin role: NO\n";
        }
    }
    
    // 5. Check .htaccess in public_html
    echo "\n--- File Structure Check ---\n";
    $rootHtaccess = realpath(__DIR__ . '/../../.htaccess');
    $publicHtaccess = realpath(__DIR__ . '/.htaccess');
    
    echo "Root .htaccess: " . ($rootHtaccess ? 'EXISTS' : 'NOT FOUND') . "\n";
    echo "Public .htaccess: " . ($publicHtaccess ? 'EXISTS' : 'NOT FOUND') . "\n";
    
    // 6. Check request info
    echo "\n--- Request Info ---\n";
    echo "REQUEST_URI: " . ($_SERVER['REQUEST_URI'] ?? 'N/A') . "\n";
    echo "SCRIPT_NAME: " . ($_SERVER['SCRIPT_NAME'] ?? 'N/A') . "\n";
    echo "DOCUMENT_ROOT: " . ($_SERVER['DOCUMENT_ROOT'] ?? 'N/A') . "\n";
    
    echo "\n--- Possible Causes of 403 ---\n";
    
    // Check if this is Hostinger ModSecurity
    if (strpos($_SERVER['SERVER_SOFTWARE'] ?? '', 'Apache') !== false) {
        echo "Server: Apache - ModSecurity may be blocking /admin path\n";
        echo "Solution: Contact Hostinger support to whitelist /admin\n";
    }
    
    echo "\n📋 Try this URL directly:\n";
    echo "https://mediumpurple-wolf-998200.hostingersite.com/admin/login\n";
    echo "(Make sure you're logged OUT first, then try logging in again)\n";
    
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . "\n";
    echo "Line: " . $e->getLine() . "\n";
}

echo "</pre>";
