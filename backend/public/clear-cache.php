<?php
/**
 * Clear Laravel cache via URL
 * DELETE THIS FILE AFTER USE!
 */

require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use Illuminate\Support\Facades\Artisan;

echo "<h2>Clearing Laravel Caches...</h2>";
echo "<pre>";

try {
    Artisan::call('config:clear');
    echo "✅ Config cache cleared\n";
    
    Artisan::call('cache:clear');
    echo "✅ Application cache cleared\n";
    
    Artisan::call('route:clear');
    echo "✅ Route cache cleared\n";
    
    Artisan::call('view:clear');
    echo "✅ View cache cleared\n";
    
    echo "\n🎉 All caches cleared successfully!\n";
    echo "\n⚠️ DELETE THIS FILE (clear-cache.php) FOR SECURITY!";
    
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage() . "\n";
}

echo "</pre>";
