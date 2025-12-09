<?php
/**
 * LongTrade Installer - Step 1: Requirements Check
 */

require_once __DIR__ . '/helpers.php';

if (isInstalled()) {
    header('Location: ../admin');
    exit;
}

$requirements = checkAllRequirements();

renderHeader('ตรวจสอบความต้องการระบบ', 1);
?>

<h1>ตรวจสอบความต้องการระบบ</h1>
<p>ตรวจสอบว่าเซิร์ฟเวอร์ของคุณพร้อมสำหรับติดตั้ง LongTrade Platform หรือไม่</p>

<!-- PHP Version -->
<h2>🔧 PHP Version</h2>
<table class="requirements-table">
    <thead>
        <tr>
            <th>รายการ</th>
            <th>ต้องการ</th>
            <th>สถานะ</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><?php echo $requirements['php']['name']; ?></td>
            <td><?php echo $requirements['php']['required']; ?></td>
            <td>
                <span class="status-badge <?php echo $requirements['php']['passed'] ? 'success' : 'error'; ?>">
                    <?php echo $requirements['php']['current']; ?>
                </span>
            </td>
        </tr>
    </tbody>
</table>

<!-- PHP Extensions -->
<h2>📦 PHP Extensions</h2>
<table class="requirements-table">
    <thead>
        <tr>
            <th>Extension</th>
            <th>ต้องการ</th>
            <th>สถานะ</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($requirements['extensions'] as $ext): ?>
        <tr>
            <td><?php echo $ext['name']; ?></td>
            <td><?php echo $ext['required']; ?></td>
            <td>
                <span class="status-badge <?php echo $ext['passed'] ? 'success' : 'error'; ?>">
                    <?php echo $ext['passed'] ? '✓ ' : '✗ '; ?><?php echo $ext['current']; ?>
                </span>
            </td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<!-- Directory Permissions -->
<h2>📁 Directory Permissions</h2>
<table class="requirements-table">
    <thead>
        <tr>
            <th>Directory</th>
            <th>ต้องการ</th>
            <th>สถานะ</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($requirements['permissions'] as $perm): ?>
        <tr>
            <td><?php echo $perm['name']; ?></td>
            <td><?php echo $perm['required']; ?></td>
            <td>
                <span class="status-badge <?php echo $perm['passed'] ? 'success' : 'error'; ?>">
                    <?php echo $perm['passed'] ? '✓ ' : '✗ '; ?><?php echo $perm['current']; ?>
                </span>
            </td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<?php if (!$requirements['all_passed']): ?>
<div class="alert alert-error">
    <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
    </svg>
    <div>
        <strong>ไม่สามารถดำเนินการต่อได้</strong><br>
        กรุณาแก้ไขปัญหาที่พบก่อนดำเนินการต่อ หากใช้ Hostinger กรุณาติดต่อ Support เพื่อเปิด Extension ที่จำเป็น
    </div>
</div>
<?php else: ?>
<div class="alert alert-success">
    <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
    </svg>
    <div>
        <strong>ผ่านทุกข้อกำหนด!</strong><br>
        เซิร์ฟเวอร์ของคุณพร้อมสำหรับติดตั้ง LongTrade Platform
    </div>
</div>
<?php endif; ?>

<div class="btn-group">
    <a href="index.php" class="btn btn-secondary">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
        </svg>
        ย้อนกลับ
    </a>
    
    <?php if ($requirements['all_passed']): ?>
    <a href="step2_database.php" class="btn btn-primary">
        ถัดไป: ตั้งค่า Database
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
    </a>
    <?php else: ?>
    <button class="btn btn-primary" disabled style="opacity: 0.5; cursor: not-allowed;">
        ถัดไป: ตั้งค่า Database
    </button>
    <?php endif; ?>
</div>

<?php renderFooter(); ?>
