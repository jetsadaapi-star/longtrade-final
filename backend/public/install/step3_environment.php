<?php
/**
 * LongTrade Installer - Step 3: Environment Setup
 */

require_once __DIR__ . '/helpers.php';

if (isInstalled()) {
    header('Location: ../admin');
    exit;
}

// Check if database is configured
if (!isset($_SESSION['db_config'])) {
    header('Location: step2_database.php');
    exit;
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_SESSION['env_config'] = [
        'app_name' => $_POST['app_name'] ?? 'LongTrade Platform',
        'app_url' => rtrim($_POST['app_url'] ?? '', '/'),
        'frontend_url' => rtrim($_POST['frontend_url'] ?? '', '/'),
    ];
    
    header('Location: step4_admin.php');
    exit;
}

// Get saved values or defaults
$saved = $_SESSION['env_config'] ?? [];
$detectedUrl = detectAppUrl();

renderHeader('ตั้งค่า Environment', 3);
?>

<h1>ตั้งค่า Environment</h1>
<p>กำหนดค่าพื้นฐานสำหรับแอปพลิเคชัน</p>

<form method="POST" id="env-form">
    <div class="form-group">
        <label class="form-label" for="app_name">ชื่อแอปพลิเคชัน *</label>
        <input type="text" 
               class="form-input" 
               id="app_name" 
               name="app_name" 
               value="<?php echo htmlspecialchars($saved['app_name'] ?? 'LongTrade Platform'); ?>" 
               required>
        <div class="form-hint">ชื่อที่จะแสดงบนเว็บไซต์และอีเมล</div>
    </div>
    
    <div class="form-group">
        <label class="form-label" for="app_url">Backend URL (API) *</label>
        <input type="url" 
               class="form-input" 
               id="app_url" 
               name="app_url" 
               value="<?php echo htmlspecialchars($saved['app_url'] ?? $detectedUrl); ?>" 
               placeholder="https://api.yourdomain.com"
               required>
        <div class="form-hint">URL ของ Backend API (ตรวจจับอัตโนมัติ: <?php echo $detectedUrl; ?>)</div>
    </div>
    
    <div class="form-group">
        <label class="form-label" for="frontend_url">Frontend URL</label>
        <input type="url" 
               class="form-input" 
               id="frontend_url" 
               name="frontend_url" 
               value="<?php echo htmlspecialchars($saved['frontend_url'] ?? ''); ?>" 
               placeholder="https://yourdomain.com">
        <div class="form-hint">URL ของ Frontend (ถ้ามี) สำหรับ CORS และ Redirect</div>
    </div>

    <div class="card">
        <div class="card-title">🔐 APP_KEY</div>
        <p style="margin-bottom: 0; color: var(--gray-600);">
            APP_KEY จะถูกสร้างอัตโนมัติเมื่อทำการติดตั้ง<br>
            <small>ใช้สำหรับการเข้ารหัสข้อมูลใน Laravel</small>
        </p>
    </div>
    
    <div class="btn-group">
        <a href="step2_database.php" class="btn btn-secondary">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
            </svg>
            ย้อนกลับ
        </a>
        
        <button type="submit" class="btn btn-primary">
            ถัดไป: สร้าง Admin
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
        </button>
    </div>
</form>

<?php renderFooter(); ?>
