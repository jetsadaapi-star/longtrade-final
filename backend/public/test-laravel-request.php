<?php
/**
 * Test Laravel Request to /cp/login
 */

require __DIR__.'/../vendor/autoload.php';

use Illuminate\Http\Request;

$app = require_once __DIR__.'/../bootstrap/app.php';

// Simulate request to /cp/login
$_SERVER['REQUEST_URI'] = '/cp/login';
$_SERVER['REQUEST_METHOD'] = 'GET';

$kernel = $app->make('Illuminate\Contracts\Http\Kernel');
$request = Request::capture();

try {
    $response = $kernel->handle($request);
    
    echo "<h2>Laravel Response Debug</h2>";
    echo "<pre>";
    echo "Status Code: " . $response->getStatusCode() . "\n";
    echo "Content Type: " . ($response->headers->get('Content-Type') ?? 'none') . "\n";
    
    if ($response->getStatusCode() === 403) {
        echo "\n❌ Laravel is returning 403 Forbidden!\n";
        echo "This means the issue is in Laravel, not Hostinger.\n";
    } elseif ($response->getStatusCode() === 302 || $response->getStatusCode() === 301) {
        echo "\n➡️ Redirect to: " . ($response->headers->get('Location') ?? 'unknown') . "\n";
    } elseif ($response->getStatusCode() === 200) {
        echo "\n✅ Laravel returned 200 OK\n";
    }
    
    echo "</pre>";
    
    // Show first 500 chars of content if HTML
    if ($response->getStatusCode() === 200) {
        echo "<h3>Preview (first 500 chars):</h3>";
        echo "<div style='border:1px solid #ccc; padding:10px; max-height:200px; overflow:auto;'>";
        echo htmlspecialchars(substr($response->getContent(), 0, 500));
        echo "</div>";
    }
    
} catch (Exception $e) {
    echo "<h2>Error</h2>";
    echo "<pre>";
    echo "Exception: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . ":" . $e->getLine() . "\n";
    echo "</pre>";
}
