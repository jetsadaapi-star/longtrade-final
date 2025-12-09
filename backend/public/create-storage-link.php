<?php
/**
 * Create storage symbolic link
 * DELETE THIS FILE AFTER USE!
 */

// Path to public folder
$publicPath = __DIR__;
// Path to storage/app/public
$storagePath = realpath(__DIR__ . '/../storage/app/public');

$link = $publicPath . '/storage';

echo "<h2>Creating Storage Symlink...</h2>";
echo "<pre>";

// Remove existing storage link/folder if exists
if (is_link($link)) {
    unlink($link);
    echo "✅ Removed existing symlink\n";
} elseif (is_dir($link)) {
    // It's a folder, not a link - this is the problem!
    echo "⚠️ Found folder instead of symlink at: $link\n";
    echo "Please delete the 'storage' folder manually in /public_html/public/\n";
    echo "</pre>";
    exit;
}

// Create symlink
if (symlink($storagePath, $link)) {
    echo "✅ Symlink created successfully!\n";
    echo "From: $link\n";
    echo "To: $storagePath\n";
} else {
    echo "❌ Failed to create symlink\n";
    echo "You may need to do this via SSH or ask Hostinger support\n";
}

echo "\n⚠️ DELETE THIS FILE (create-storage-link.php) AFTER USE!";
echo "</pre>";
