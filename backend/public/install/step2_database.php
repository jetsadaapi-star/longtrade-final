<?php
/**
 * LongTrade Installer - Step 2: Database Configuration
 */

require_once __DIR__ . '/helpers.php';

if (isInstalled()) {
    header('Location: ../admin');
    exit;
}

// Handle form submission
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dbConfig = [
        'host' => $_POST['db_host'] ?? 'localhost',
        'port' => (int)($_POST['db_port'] ?? 3306),
        'database' => $_POST['db_database'] ?? '',
        'username' => $_POST['db_username'] ?? '',
        'password' => $_POST['db_password'] ?? '',
    ];
    
    // Test connection
    $result = testDatabaseConnection(
        $dbConfig['host'],
        $dbConfig['port'],
        $dbConfig['database'],
        $dbConfig['username'],
        $dbConfig['password']
    );
    
    if ($result['success']) {
        // Save to session and proceed
        $_SESSION['db_config'] = $dbConfig;
        header('Location: step3_environment.php');
        exit;
    } else {
        $error = $result['message'];
    }
}

// Get saved values
$saved = $_SESSION['db_config'] ?? [];

renderHeader('ตั้งค่า Database', 2);
?>

<h1>ตั้งค่า Database</h1>
<p>กรอกข้อมูล MySQL Database ที่คุณสร้างไว้ที่ Hostinger hPanel</p>

<?php if ($error): ?>
<div class="alert alert-error">
    <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
    </svg>
    <div><?php echo htmlspecialchars($error); ?></div>
</div>
<?php endif; ?>

<div class="card">
    <div class="card-title">💡 วิธีหาข้อมูล Database ที่ Hostinger</div>
    <ol style="margin: 0; padding-left: 20px; color: var(--gray-600);">
        <li>เข้า hPanel → Databases → MySQL Databases</li>
        <li>สร้าง Database ใหม่ (ถ้ายังไม่มี)</li>
        <li>จดชื่อ Database, Username, Password</li>
        <li>Host ปกติจะเป็น <code>localhost</code> หรือดูที่ hPanel</li>
    </ol>
</div>

<form method="POST" id="database-form">
    <div class="form-row">
        <div class="form-group">
            <label class="form-label" for="db_host">Database Host *</label>
            <input type="text" 
                   class="form-input" 
                   id="db_host" 
                   name="db_host" 
                   value="<?php echo htmlspecialchars($saved['host'] ?? 'localhost'); ?>" 
                   required>
            <div class="form-hint">ปกติคือ localhost หรือ IP address</div>
        </div>
        
        <div class="form-group">
            <label class="form-label" for="db_port">Database Port *</label>
            <input type="number" 
                   class="form-input" 
                   id="db_port" 
                   name="db_port" 
                   value="<?php echo htmlspecialchars($saved['port'] ?? '3306'); ?>" 
                   required>
            <div class="form-hint">ปกติคือ 3306</div>
        </div>
    </div>
    
    <div class="form-group">
        <label class="form-label" for="db_database">Database Name *</label>
        <input type="text" 
               class="form-input" 
               id="db_database" 
               name="db_database" 
               value="<?php echo htmlspecialchars($saved['database'] ?? ''); ?>" 
               placeholder="เช่น u123456789_longtrade"
               required>
        <div class="form-hint">ชื่อ Database ที่คุณสร้างไว้</div>
    </div>
    
    <div class="form-group">
        <label class="form-label" for="db_username">Database Username *</label>
        <input type="text" 
               class="form-input" 
               id="db_username" 
               name="db_username" 
               value="<?php echo htmlspecialchars($saved['username'] ?? ''); ?>" 
               placeholder="เช่น u123456789_admin"
               required>
    </div>
    
    <div class="form-group">
        <label class="form-label" for="db_password">Database Password *</label>
        <input type="password" 
               class="form-input" 
               id="db_password" 
               name="db_password" 
               value="<?php echo htmlspecialchars($saved['password'] ?? ''); ?>" 
               required>
    </div>
    
    <div class="connection-test">
        <button type="button" class="btn btn-outline" id="test-connection-btn" onclick="testConnection()">
            ทดสอบการเชื่อมต่อ
        </button>
        <div id="connection-result"></div>
    </div>
    
    <div class="btn-group">
        <a href="step1_requirements.php" class="btn btn-secondary">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
            </svg>
            ย้อนกลับ
        </a>
        
        <button type="submit" class="btn btn-primary">
            ถัดไป: ตั้งค่า Environment
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
        </button>
    </div>
</form>

<?php renderFooter(); ?>
