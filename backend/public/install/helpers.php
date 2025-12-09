<?php
/**
 * LongTrade Platform - Installation Helper Functions
 * ช่วยในการติดตั้ง Laravel backend บน shared hosting
 */

session_start();

// ป้องกันการเข้าถึงโดยตรง
if (!defined('INSTALLER_ACCESS')) {
    define('INSTALLER_ACCESS', true);
}

// Path configurations
define('BASE_PATH', dirname(dirname(__DIR__)));
define('PUBLIC_PATH', dirname(__DIR__));
define('INSTALL_PATH', __DIR__);

/**
 * ตรวจสอบว่าติดตั้งแล้วหรือยัง
 */
function isInstalled(): bool
{
    return file_exists(BASE_PATH . '/.env') && file_exists(INSTALL_PATH . '/installed.lock');
}

/**
 * ตรวจสอบ PHP Version
 */
function checkPhpVersion(): array
{
    $required = '8.2.0';
    $current = PHP_VERSION;
    $passed = version_compare($current, $required, '>=');
    
    return [
        'name' => 'PHP Version',
        'required' => '>= ' . $required,
        'current' => $current,
        'passed' => $passed
    ];
}

/**
 * ตรวจสอบ PHP Extensions
 */
function checkExtensions(): array
{
    $required = [
        'pdo' => 'PDO',
        'pdo_mysql' => 'PDO MySQL',
        'mbstring' => 'Mbstring',
        'openssl' => 'OpenSSL',
        'tokenizer' => 'Tokenizer',
        'xml' => 'XML',
        'ctype' => 'Ctype',
        'json' => 'JSON',
        'bcmath' => 'BCMath',
        'fileinfo' => 'Fileinfo',
        'curl' => 'cURL',
    ];
    
    $results = [];
    foreach ($required as $ext => $name) {
        $loaded = extension_loaded($ext);
        $results[] = [
            'name' => $name . ' Extension',
            'required' => 'Enabled',
            'current' => $loaded ? 'Enabled' : 'Disabled',
            'passed' => $loaded
        ];
    }
    
    return $results;
}

/**
 * ตรวจสอบ Directory Permissions
 */
function checkPermissions(): array
{
    $directories = [
        'storage' => BASE_PATH . '/storage',
        'storage/app' => BASE_PATH . '/storage/app',
        'storage/framework' => BASE_PATH . '/storage/framework',
        'storage/logs' => BASE_PATH . '/storage/logs',
        'bootstrap/cache' => BASE_PATH . '/bootstrap/cache',
    ];
    
    $results = [];
    foreach ($directories as $name => $path) {
        $writable = is_dir($path) && is_writable($path);
        $results[] = [
            'name' => $name,
            'required' => 'Writable',
            'current' => $writable ? 'Writable' : 'Not Writable',
            'passed' => $writable
        ];
    }
    
    return $results;
}

/**
 * ตรวจสอบ requirements ทั้งหมด
 */
function checkAllRequirements(): array
{
    $results = [];
    $results['php'] = checkPhpVersion();
    $results['extensions'] = checkExtensions();
    $results['permissions'] = checkPermissions();
    
    $allPassed = $results['php']['passed'];
    foreach ($results['extensions'] as $ext) {
        if (!$ext['passed']) $allPassed = false;
    }
    foreach ($results['permissions'] as $perm) {
        if (!$perm['passed']) $allPassed = false;
    }
    
    $results['all_passed'] = $allPassed;
    
    return $results;
}

/**
 * ทดสอบการเชื่อมต่อ Database
 */
function testDatabaseConnection(string $host, int $port, string $database, string $username, string $password): array
{
    try {
        $dsn = "mysql:host={$host};port={$port};dbname={$database};charset=utf8mb4";
        $pdo = new PDO($dsn, $username, $password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
        
        return [
            'success' => true,
            'message' => 'เชื่อมต่อ Database สำเร็จ!'
        ];
    } catch (PDOException $e) {
        return [
            'success' => false,
            'message' => 'ไม่สามารถเชื่อมต่อได้: ' . $e->getMessage()
        ];
    }
}

/**
 * Generate APP_KEY สำหรับ Laravel
 */
function generateAppKey(): string
{
    $key = 'base64:' . base64_encode(random_bytes(32));
    return $key;
}

/**
 * สร้างไฟล์ .env
 */
function createEnvFile(array $config): bool
{
    $envContent = <<<ENV
APP_NAME="{$config['app_name']}"
APP_ENV=production
APP_KEY={$config['app_key']}
APP_DEBUG=false
APP_URL={$config['app_url']}

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=error

DB_CONNECTION=mysql
DB_HOST={$config['db_host']}
DB_PORT={$config['db_port']}
DB_DATABASE={$config['db_database']}
DB_USERNAME={$config['db_username']}
DB_PASSWORD={$config['db_password']}

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN={$config['session_domain']}

SANCTUM_STATEFUL_DOMAINS={$config['sanctum_domains']}

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_SCHEME=null
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="\${APP_NAME}"

VITE_APP_NAME="\${APP_NAME}"

# Media Optimization
MEDIA_OPTIMIZATION_ENABLED=true
MEDIA_OPTIMIZATION_SERVICE=cloudinary

# Frontend URL
FRONTEND_URL={$config['frontend_url']}

ENV;

    return file_put_contents(BASE_PATH . '/.env', $envContent) !== false;
}

/**
 * Import SQL file
 */
function importDatabase(string $host, int $port, string $database, string $username, string $password): array
{
    $sqlFile = BASE_PATH . '/longtrade_db.sql';
    
    if (!file_exists($sqlFile)) {
        return [
            'success' => false,
            'message' => 'ไม่พบไฟล์ longtrade_db.sql'
        ];
    }
    
    try {
        $dsn = "mysql:host={$host};port={$port};dbname={$database};charset=utf8mb4";
        $pdo = new PDO($dsn, $username, $password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]);
        
        // Read SQL file
        $sql = file_get_contents($sqlFile);
        
        // Execute SQL
        $pdo->exec($sql);
        
        return [
            'success' => true,
            'message' => 'Import database สำเร็จ!'
        ];
    } catch (PDOException $e) {
        return [
            'success' => false,
            'message' => 'Import ไม่สำเร็จ: ' . $e->getMessage()
        ];
    }
}

/**
 * สร้าง Admin User โดยตรงผ่าน Database
 */
function createAdminUser(string $name, string $email, string $password, array $dbConfig): array
{
    try {
        $dsn = "mysql:host={$dbConfig['host']};port={$dbConfig['port']};dbname={$dbConfig['database']};charset=utf8mb4";
        $pdo = new PDO($dsn, $dbConfig['username'], $dbConfig['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]);
        
        // Hash password
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
        $now = date('Y-m-d H:i:s');
        
        // Check if user exists
        $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$email]);
        
        if ($stmt->fetch()) {
            // Update existing user
            $stmt = $pdo->prepare("UPDATE users SET name = ?, password = ?, updated_at = ? WHERE email = ?");
            $stmt->execute([$name, $hashedPassword, $now, $email]);
            $userId = $pdo->query("SELECT id FROM users WHERE email = " . $pdo->quote($email))->fetch()['id'];
        } else {
            // Insert new user
            $stmt = $pdo->prepare("INSERT INTO users (name, email, password, email_verified_at, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->execute([$name, $email, $hashedPassword, $now, $now, $now]);
            $userId = $pdo->lastInsertId();
        }
        
        // Assign super_admin role
        $roleId = $pdo->query("SELECT id FROM roles WHERE name = 'super_admin'")->fetch();
        if ($roleId) {
            $pdo->exec("DELETE FROM model_has_roles WHERE model_id = {$userId} AND model_type = 'App\\\\Models\\\\User'");
            $stmt = $pdo->prepare("INSERT INTO model_has_roles (role_id, model_type, model_id) VALUES (?, ?, ?)");
            $stmt->execute([$roleId['id'], 'App\\Models\\User', $userId]);
        }
        
        return [
            'success' => true,
            'message' => 'สร้าง Admin user สำเร็จ!'
        ];
    } catch (PDOException $e) {
        return [
            'success' => false,
            'message' => 'สร้าง Admin ไม่สำเร็จ: ' . $e->getMessage()
        ];
    }
}

/**
 * สร้าง Storage Link
 */
function createStorageLink(): bool
{
    $target = BASE_PATH . '/storage/app/public';
    $link = PUBLIC_PATH . '/storage';
    
    if (is_link($link)) {
        return true;
    }
    
    if (file_exists($link)) {
        return true;
    }
    
    // On Windows use junction, on Linux use symlink  
    if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
        exec("mklink /J \"{$link}\" \"{$target}\"");
    } else {
        @symlink($target, $link);
    }
    
    return is_link($link) || file_exists($link);
}

/**
 * สร้าง installed.lock file
 */
function createLockFile(): bool
{
    $content = 'Installed on: ' . date('Y-m-d H:i:s');
    return file_put_contents(INSTALL_PATH . '/installed.lock', $content) !== false;
}

/**
 * Get detected APP_URL
 */
function detectAppUrl(): string
{
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
    return $protocol . '://' . $host;
}

/**
 * Get session domain from URL
 */
function getSessionDomain(string $url): string
{
    $parsed = parse_url($url);
    $host = $parsed['host'] ?? 'localhost';
    
    // Remove www if present
    if (strpos($host, 'www.') === 0) {
        $host = substr($host, 4);
    }
    
    return '.' . $host;
}

/**
 * Render HTML header
 */
function renderHeader(string $title, int $step = 0): void
{
    ?>
    <!DOCTYPE html>
    <html lang="th">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?php echo htmlspecialchars($title); ?> - LongTrade Installer</title>
        <link rel="stylesheet" href="assets/style.css">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="installer-container">
            <header class="installer-header">
                <div class="logo">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="8" fill="url(#gradient)"/>
                        <path d="M12 28L20 12L28 28H12Z" fill="white"/>
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                                <stop stop-color="#6366f1"/>
                                <stop offset="1" stop-color="#8b5cf6"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>LongTrade Platform</span>
                </div>
                <div class="step-indicator">
                    <?php if ($step > 0): ?>
                    Step <?php echo $step; ?> of 6
                    <?php endif; ?>
                </div>
            </header>
            
            <?php if ($step > 0): ?>
            <div class="progress-bar">
                <div class="progress-fill" style="width: <?php echo ($step / 6) * 100; ?>%"></div>
            </div>
            <?php endif; ?>
            
            <main class="installer-content">
    <?php
}

/**
 * Render HTML footer
 */
function renderFooter(): void
{
    ?>
            </main>
            <footer class="installer-footer">
                <p>&copy; <?php echo date('Y'); ?> LongTrade Platform. All rights reserved.</p>
            </footer>
        </div>
        <script src="assets/app.js"></script>
    </body>
    </html>
    <?php
}
