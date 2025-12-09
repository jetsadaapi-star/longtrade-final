<?php
/**
 * LongTrade Installer - Step 4: Admin Account
 */

require_once __DIR__ . '/helpers.php';

if (isInstalled()) {
    header('Location: ../admin');
    exit;
}

// Check previous steps
if (!isset($_SESSION['db_config']) || !isset($_SESSION['env_config'])) {
    header('Location: step2_database.php');
    exit;
}

// Handle form submission
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['admin_name'] ?? '');
    $email = trim($_POST['admin_email'] ?? '');
    $password = $_POST['admin_password'] ?? '';
    $passwordConfirm = $_POST['admin_password_confirmation'] ?? '';
    
    // Validate
    if (empty($name) || empty($email) || empty($password)) {
        $error = 'กรุณากรอกข้อมูลให้ครบถ้วน';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'รูปแบบอีเมลไม่ถูกต้อง';
    } elseif (strlen($password) < 8) {
        $error = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
    } elseif ($password !== $passwordConfirm) {
        $error = 'รหัสผ่านไม่ตรงกัน';
    } else {
        $_SESSION['admin_config'] = [
            'name' => $name,
            'email' => $email,
            'password' => $password,
        ];
        
        header('Location: step5_install.php');
        exit;
    }
}

// Get saved values
$saved = $_SESSION['admin_config'] ?? [];

renderHeader('สร้าง Admin Account', 4);
?>

<h1>สร้าง Admin Account</h1>
<p>สร้างบัญชีผู้ดูแลระบบสำหรับเข้าถึง Admin Panel</p>

<?php if ($error): ?>
<div class="alert alert-error">
    <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
    </svg>
    <div><?php echo htmlspecialchars($error); ?></div>
</div>
<?php endif; ?>

<form method="POST" id="admin-form">
    <div class="form-group">
        <label class="form-label" for="admin_name">ชื่อ-นามสกุล *</label>
        <input type="text" 
               class="form-input" 
               id="admin_name" 
               name="admin_name" 
               value="<?php echo htmlspecialchars($saved['name'] ?? ''); ?>" 
               placeholder="เช่น Admin User"
               required>
    </div>
    
    <div class="form-group">
        <label class="form-label" for="admin_email">อีเมล *</label>
        <input type="email" 
               class="form-input" 
               id="admin_email" 
               name="admin_email" 
               value="<?php echo htmlspecialchars($saved['email'] ?? ''); ?>" 
               placeholder="admin@example.com"
               required>
        <div class="form-hint">ใช้สำหรับเข้าสู่ระบบ Admin Panel</div>
    </div>
    
    <div class="form-row">
        <div class="form-group">
            <label class="form-label" for="admin_password">รหัสผ่าน *</label>
            <input type="password" 
                   class="form-input" 
                   id="admin_password" 
                   name="admin_password" 
                   placeholder="อย่างน้อย 8 ตัวอักษร"
                   minlength="8"
                   required>
        </div>
        
        <div class="form-group">
            <label class="form-label" for="admin_password_confirmation">ยืนยันรหัสผ่าน *</label>
            <input type="password" 
                   class="form-input" 
                   id="admin_password_confirmation" 
                   name="admin_password_confirmation" 
                   placeholder="กรอกรหัสผ่านอีกครั้ง"
                   minlength="8"
                   required>
        </div>
    </div>

    <div class="alert alert-info" style="margin-top: 20px;">
        <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
        </svg>
        <div>
            <strong>หมายเหตุ:</strong> Admin จะได้รับสิทธิ์ <code>super_admin</code> ซึ่งมีสิทธิ์เข้าถึงทุกส่วนของระบบ
        </div>
    </div>
    
    <div class="btn-group">
        <a href="step3_environment.php" class="btn btn-secondary">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
            </svg>
            ย้อนกลับ
        </a>
        
        <button type="submit" class="btn btn-primary">
            ถัดไป: เริ่มติดตั้ง
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
        </button>
    </div>
</form>

<?php renderFooter(); ?>
