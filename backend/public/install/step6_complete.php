<?php
/**
 * LongTrade Installer - Step 6: Installation Complete
 */

require_once __DIR__ . '/helpers.php';

// Check if installed
if (!file_exists(INSTALL_PATH . '/installed.lock')) {
    header('Location: index.php');
    exit;
}

// Get admin email from .env if possible
$adminEmail = 'admin@example.com';
$appUrl = detectAppUrl();

if (file_exists(BASE_PATH . '/.env')) {
    $envContent = file_get_contents(BASE_PATH . '/.env');
    if (preg_match('/APP_URL=(.+)/', $envContent, $matches)) {
        $appUrl = trim($matches[1]);
    }
}

renderHeader('ติดตั้งเสร็จสิ้น', 6);
?>

<div style="text-align: center;">
    <div class="complete-icon">
        <svg fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
    </div>
    
    <h1>🎉 ติดตั้งเสร็จสิ้น!</h1>
    <p>LongTrade Platform พร้อมใช้งานแล้ว</p>
</div>

<div class="info-list">
    <div class="info-item">
        <span class="info-label">Admin Panel URL:</span>
        <span class="info-value"><?php echo htmlspecialchars($appUrl); ?>/admin</span>
    </div>
    <div class="info-item">
        <span class="info-label">API Base URL:</span>
        <span class="info-value"><?php echo htmlspecialchars($appUrl); ?>/api</span>
    </div>
</div>

<div class="alert alert-warning">
    <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
    </svg>
    <div>
        <strong>⚠️ สำคัญ - เพื่อความปลอดภัย:</strong><br>
        กรุณาลบโฟลเดอร์ <code>/install</code> ออกจากเซิร์ฟเวอร์หลังติดตั้งเสร็จ
    </div>
</div>

<div class="card">
    <div class="card-title">📋 ขั้นตอนถัดไป</div>
    <ol style="margin: 0; padding-left: 20px; color: var(--gray-600);">
        <li>เข้าสู่ระบบ Admin Panel ด้วยอีเมลและรหัสผ่านที่สร้างไว้</li>
        <li>ตั้งค่า Site Settings ใน Admin Panel</li>
        <li>ตั้งค่า Payment Gateway (ถ้าต้องการ)</li>
        <li><strong>ลบโฟลเดอร์ /install</strong> เพื่อความปลอดภัย</li>
    </ol>
</div>

<div class="btn-group right">
    <a href="<?php echo htmlspecialchars($appUrl); ?>/admin" class="btn btn-primary" target="_blank">
        เข้าสู่ Admin Panel
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
        </svg>
    </a>
</div>

<?php renderFooter(); ?>
