<?php
/**
 * LongTrade Installer - Welcome Page
 */

require_once __DIR__ . '/helpers.php';

// ตรวจสอบว่าติดตั้งแล้วหรือยัง
if (isInstalled()) {
    header('Location: ../admin');
    exit;
}

renderHeader('Welcome', 0);
?>

<div style="text-align: center; margin-bottom: 24px;">
    <h1>ยินดีต้อนรับสู่ LongTrade Platform</h1>
    <p>ระบบ Installer จะช่วยคุณติดตั้ง LongTrade Platform ได้อย่างง่ายดาย</p>
</div>

<div class="welcome-features">
    <div class="feature-item">
        <div class="feature-icon">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z"/>
            </svg>
        </div>
        <div class="feature-text">
            <h3>คอร์สออนไลน์</h3>
            <p>ระบบจัดการคอร์สเรียนครบวงจร</p>
        </div>
    </div>
    
    <div class="feature-item">
        <div class="feature-icon">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
            </svg>
        </div>
        <div class="feature-text">
            <h3>E-books & บทความ</h3>
            <p>จัดการเนื้อหาดิจิทัล</p>
        </div>
    </div>
    
    <div class="feature-item">
        <div class="feature-icon">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
            </svg>
        </div>
        <div class="feature-text">
            <h3>Indicators & EA</h3>
            <p>ขาย Trading Tools</p>
        </div>
    </div>
    
    <div class="feature-item">
        <div class="feature-icon">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>
            </svg>
        </div>
        <div class="feature-text">
            <h3>Filament Admin</h3>
            <p>แอดมินแผงควบคุมที่ทรงพลัง</p>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-title">📋 สิ่งที่ต้องเตรียม</div>
    <ul style="margin: 0; padding-left: 20px; color: var(--gray-600);">
        <li>PHP 8.2 หรือสูงกว่า</li>
        <li>MySQL Database (สร้างไว้แล้วที่ Hostinger)</li>
        <li>ข้อมูล Database: Host, Username, Password, Database Name</li>
    </ul>
</div>

<div class="btn-group right">
    <a href="step1_requirements.php" class="btn btn-primary">
        เริ่มต้นติดตั้ง
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
    </a>
</div>

<?php renderFooter(); ?>
