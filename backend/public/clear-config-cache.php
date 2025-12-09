<?php
/**
 * Clear Laravel config cache by deleting files directly
 * Use this when artisan commands fail due to database connection issues
 * DELETE THIS FILE AFTER USE!
 */

echo "<h2>Clearing Laravel Config Cache (File-based)</h2>";
echo "<pre>";

$basePath = realpath(__DIR__ . '/..');

// Files/folders to delete
$cachePaths = [
    $basePath . '/bootstrap/cache/config.php',
    $basePath . '/bootstrap/cache/routes-v7.php',
    $basePath . '/bootstrap/cache/services.php',
    $basePath . '/bootstrap/cache/packages.php',
];

$deleted = 0;
$errors = 0;

foreach ($cachePaths as $path) {
    if (file_exists($path)) {
        if (unlink($path)) {
            echo "✅ Deleted: " . basename($path) . "\n";
            $deleted++;
        } else {
            echo "❌ Failed to delete: " . basename($path) . "\n";
            $errors++;
        }
    } else {
        echo "⏭️ Not found (skip): " . basename($path) . "\n";
    }
}

// Clear storage/framework/cache
$cacheDataPath = $basePath . '/storage/framework/cache/data';
if (is_dir($cacheDataPath)) {
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($cacheDataPath, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::CHILD_FIRST
    );
    
    foreach ($files as $file) {
        if ($file->isFile() && $file->getFilename() !== '.gitignore') {
            unlink($file->getRealPath());
            $deleted++;
        }
    }
    echo "✅ Cleared storage/framework/cache/data\n";
}

// Clear storage/framework/views
$viewsPath = $basePath . '/storage/framework/views';
if (is_dir($viewsPath)) {
    $files = glob($viewsPath . '/*.php');
    foreach ($files as $file) {
        unlink($file);
        $deleted++;
    }
    echo "✅ Cleared storage/framework/views\n";
}

echo "\n";
echo "📊 Summary: $deleted files deleted, $errors errors\n";
echo "\n🎉 Config cache cleared! Try accessing the site again.\n";
echo "\n⚠️ DELETE THIS FILE (clear-config-cache.php) FOR SECURITY!";
echo "</pre>";

// Show current .env DB settings (masked)
echo "<hr><h3>Current .env Database Settings:</h3><pre>";
$envPath = $basePath . '/.env';
if (file_exists($envPath)) {
    $envContent = file_get_contents($envPath);
    
    // Extract and display DB settings (mask password)
    preg_match('/DB_HOST=(.*)/', $envContent, $host);
    preg_match('/DB_DATABASE=(.*)/', $envContent, $db);
    preg_match('/DB_USERNAME=(.*)/', $envContent, $user);
    preg_match('/DB_PASSWORD=(.*)/', $envContent, $pass);
    
    echo "DB_HOST: " . trim($host[1] ?? 'NOT SET') . "\n";
    echo "DB_DATABASE: " . trim($db[1] ?? 'NOT SET') . "\n";
    echo "DB_USERNAME: " . trim($user[1] ?? 'NOT SET') . "\n";
    echo "DB_PASSWORD: " . (isset($pass[1]) && trim($pass[1]) ? '******* (is set)' : 'NOT SET!') . "\n";
} else {
    echo "❌ .env file not found!\n";
}
echo "</pre>";
