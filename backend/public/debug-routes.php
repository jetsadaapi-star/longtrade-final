<?php
/**
 * Debug Filament Routes and Access
 */

require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use Illuminate\Support\Facades\Route;

echo "<h2>Filament Route Debug</h2>";
echo "<pre>";

// 1. Check what admin path is configured
$panel = \Filament\Facades\Filament::getPanel('admin');
echo "Panel ID: " . $panel->getId() . "\n";
echo "Panel Path: /" . $panel->getPath() . "\n";

// 2. List all routes that match the panel path
echo "\n--- Routes matching panel path ---\n";
$panelPath = $panel->getPath();
$routes = Route::getRoutes();
$count = 0;
foreach ($routes as $route) {
    $uri = $route->uri();
    if (strpos($uri, $panelPath) === 0 || strpos($uri, 'filament') !== false) {
        echo "- " . implode('|', $route->methods()) . " /{$uri}\n";
        $count++;
        if ($count >= 20) {
            echo "... (showing first 20 only)\n";
            break;
        }
    }
}

if ($count === 0) {
    echo "❌ NO ROUTES FOUND for /{$panelPath}!\n";
    echo "This means the routes were not registered.\n";
    echo "\nPossible cause: Route cache with old path.\n";
    echo "Solution: Clear route cache.\n";
}

// 3. Try to clear route cache
echo "\n--- Clearing Route Cache ---\n";
$routeCacheFile = realpath(__DIR__ . '/../bootstrap/cache/routes-v7.php');
if ($routeCacheFile && file_exists($routeCacheFile)) {
    unlink($routeCacheFile);
    echo "✅ Deleted routes-v7.php\n";
} else {
    echo "⏭️ No route cache file found\n";
}

echo "\n--- Try accessing these URLs ---\n";
echo "1. https://mediumpurple-wolf-998200.hostingersite.com/public/{$panelPath}/login\n";
echo "2. https://mediumpurple-wolf-998200.hostingersite.com/{$panelPath}/login\n";

echo "</pre>";
