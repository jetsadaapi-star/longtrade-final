<?php
/**
 * Test Laravel Request to /cp (dashboard after login)
 */

require __DIR__.'/../vendor/autoload.php';

use Illuminate\Http\Request;

$app = require_once __DIR__.'/../bootstrap/app.php';

// Simulate request to /cp
$_SERVER['REQUEST_URI'] = '/cp';
$_SERVER['REQUEST_METHOD'] = 'GET';

$kernel = $app->make('Illuminate\Contracts\Http\Kernel');
$request = Request::capture();

try {
    $response = $kernel->handle($request);
    
    echo "<h2>Laravel Response for /cp (Dashboard)</h2>";
    echo "<pre>";
    echo "Status Code: " . $response->getStatusCode() . "\n";
    
    if ($response->getStatusCode() === 403) {
        echo "\n❌ Laravel returns 403 Forbidden for Dashboard!\n";
        echo "This is likely Filament Shield blocking access.\n";
    } elseif ($response->getStatusCode() === 302 || $response->getStatusCode() === 301) {
        echo "\n➡️ Redirect to: " . ($response->headers->get('Location') ?? 'unknown') . "\n";
    } elseif ($response->getStatusCode() === 200) {
        echo "\n✅ Laravel returned 200 OK for Dashboard\n";
    }
    
    // Check if user is authenticated
    echo "\n--- Auth Status ---\n";
    $user = auth()->user();
    if ($user) {
        echo "✅ Authenticated as: {$user->email}\n";
        echo "Roles: [" . $user->getRoleNames()->implode(', ') . "]\n";
        
        // Check canAccessPanel
        $panel = \Filament\Facades\Filament::getPanel('admin');
        if (method_exists($user, 'canAccessPanel')) {
            $canAccess = $user->canAccessPanel($panel);
            echo "canAccessPanel(): " . ($canAccess ? 'YES ✅' : 'NO ❌') . "\n";
            
            if (!$canAccess) {
                echo "\n🔴 User CANNOT access the panel!\n";
                echo "This is why you see 403 after login.\n";
            }
        }
    } else {
        echo "❌ NOT authenticated\n";
        echo "This is because session from browser is not available here.\n";
        echo "But after login, if you still get 403, check Filament Shield.\n";
    }
    
    echo "</pre>";
    
} catch (Exception $e) {
    echo "<h2>Error</h2>";
    echo "<pre>";
    echo "Exception: " . $e->getMessage() . "\n";
    echo "</pre>";
}
