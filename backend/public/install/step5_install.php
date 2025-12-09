<?php
/**
 * LongTrade Installer - Step 5: Run Installation
 */

require_once __DIR__ . '/helpers.php';

if (isInstalled()) {
    header('Location: ../admin');
    exit;
}

// Check all previous steps
if (!isset($_SESSION['db_config']) || !isset($_SESSION['env_config']) || !isset($_SESSION['admin_config'])) {
    header('Location: step2_database.php');
    exit;
}

$dbConfig = $_SESSION['db_config'];
$envConfig = $_SESSION['env_config'];
$adminConfig = $_SESSION['admin_config'];

$steps = [];
$allSuccess = true;
$currentStep = 0;

// Run installation if GET request (auto-start)
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['run'])) {
    header('Content-Type: application/json');
    
    $step = (int)($_GET['step'] ?? 1);
    $result = ['step' => $step, 'success' => false, 'message' => ''];
    
    switch ($step) {
        case 1:
            // Generate APP_KEY and create .env
            $appKey = generateAppKey();
            $appUrl = $envConfig['app_url'];
            $sessionDomain = getSessionDomain($appUrl);
            
            $frontendDomain = '';
            if (!empty($envConfig['frontend_url'])) {
                $parsed = parse_url($envConfig['frontend_url']);
                $frontendDomain = $parsed['host'] ?? '';
            }
            
            $sanctumDomains = trim($sessionDomain, '.') . ',' . 'www.' . trim($sessionDomain, '.');
            if ($frontendDomain) {
                $sanctumDomains .= ',' . $frontendDomain;
            }
            
            $config = [
                'app_name' => $envConfig['app_name'],
                'app_key' => $appKey,
                'app_url' => $appUrl,
                'db_host' => $dbConfig['host'],
                'db_port' => $dbConfig['port'],
                'db_database' => $dbConfig['database'],
                'db_username' => $dbConfig['username'],
                'db_password' => $dbConfig['password'],
                'session_domain' => $sessionDomain,
                'sanctum_domains' => $sanctumDomains,
                'frontend_url' => $envConfig['frontend_url'] ?: $appUrl,
            ];
            
            if (createEnvFile($config)) {
                $result['success'] = true;
                $result['message'] = 'สร้างไฟล์ .env สำเร็จ';
            } else {
                $result['message'] = 'ไม่สามารถสร้างไฟล์ .env ได้';
            }
            break;
            
        case 2:
            // Import database
            $importResult = importDatabase(
                $dbConfig['host'],
                $dbConfig['port'],
                $dbConfig['database'],
                $dbConfig['username'],
                $dbConfig['password']
            );
            $result['success'] = $importResult['success'];
            $result['message'] = $importResult['message'];
            break;
            
        case 3:
            // Create admin user
            $adminResult = createAdminUser(
                $adminConfig['name'],
                $adminConfig['email'],
                $adminConfig['password'],
                [
                    'host' => $dbConfig['host'],
                    'port' => $dbConfig['port'],
                    'database' => $dbConfig['database'],
                    'username' => $dbConfig['username'],
                    'password' => $dbConfig['password'],
                ]
            );
            $result['success'] = $adminResult['success'];
            $result['message'] = $adminResult['message'];
            break;
            
        case 4:
            // Create storage link
            if (createStorageLink()) {
                $result['success'] = true;
                $result['message'] = 'สร้าง Storage Link สำเร็จ';
            } else {
                $result['success'] = true; // Not critical
                $result['message'] = 'Storage Link อาจต้องสร้างด้วยตนเอง';
            }
            break;
            
        case 5:
            // Create lock file
            if (createLockFile()) {
                // Clear session
                unset($_SESSION['db_config']);
                unset($_SESSION['env_config']);
                unset($_SESSION['admin_config']);
                
                $result['success'] = true;
                $result['message'] = 'ติดตั้งเสร็จสิ้น!';
            } else {
                $result['success'] = true; // Not critical
                $result['message'] = 'ติดตั้งเสร็จสิ้น (ไม่สามารถสร้าง lock file)';
            }
            break;
    }
    
    echo json_encode($result);
    exit;
}

renderHeader('กำลังติดตั้ง', 5);
?>

<h1>กำลังติดตั้ง LongTrade Platform</h1>
<p>กรุณารอสักครู่ ระบบกำลังดำเนินการติดตั้ง...</p>

<div class="install-progress" id="install-progress">
    <div class="install-step" id="step-1">
        <div class="step-number">1</div>
        <div class="step-text">
            <div class="step-title">สร้างไฟล์ .env</div>
            <div class="step-status" id="status-1">รอดำเนินการ</div>
        </div>
    </div>
    
    <div class="install-step" id="step-2">
        <div class="step-number">2</div>
        <div class="step-text">
            <div class="step-title">Import Database</div>
            <div class="step-status" id="status-2">รอดำเนินการ</div>
        </div>
    </div>
    
    <div class="install-step" id="step-3">
        <div class="step-number">3</div>
        <div class="step-text">
            <div class="step-title">สร้าง Admin User</div>
            <div class="step-status" id="status-3">รอดำเนินการ</div>
        </div>
    </div>
    
    <div class="install-step" id="step-4">
        <div class="step-number">4</div>
        <div class="step-text">
            <div class="step-title">สร้าง Storage Link</div>
            <div class="step-status" id="status-4">รอดำเนินการ</div>
        </div>
    </div>
    
    <div class="install-step" id="step-5">
        <div class="step-number">5</div>
        <div class="step-text">
            <div class="step-title">เสร็จสิ้นการติดตั้ง</div>
            <div class="step-status" id="status-5">รอดำเนินการ</div>
        </div>
    </div>
</div>

<div id="error-message" class="alert alert-error" style="display: none;">
    <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
    </svg>
    <div id="error-text"></div>
</div>

<div class="btn-group" id="nav-buttons" style="display: none;">
    <a href="step4_admin.php" class="btn btn-secondary">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
        </svg>
        ย้อนกลับ
    </a>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    runInstallation();
});

async function runInstallation() {
    const totalSteps = 5;
    
    for (let step = 1; step <= totalSteps; step++) {
        const stepEl = document.getElementById('step-' + step);
        const statusEl = document.getElementById('status-' + step);
        
        // Mark as active
        stepEl.classList.add('active');
        statusEl.innerHTML = '<span class="loader"></span> กำลังดำเนินการ...';
        
        try {
            const response = await fetch('step5_install.php?run=1&step=' + step);
            const data = await response.json();
            
            stepEl.classList.remove('active');
            
            if (data.success) {
                stepEl.classList.add('completed');
                statusEl.textContent = '✓ ' + data.message;
            } else {
                stepEl.classList.add('error');
                statusEl.textContent = '✗ ' + data.message;
                
                // Show error
                document.getElementById('error-message').style.display = 'flex';
                document.getElementById('error-text').textContent = data.message;
                document.getElementById('nav-buttons').style.display = 'flex';
                return;
            }
        } catch (error) {
            stepEl.classList.remove('active');
            stepEl.classList.add('error');
            statusEl.textContent = '✗ เกิดข้อผิดพลาด: ' + error.message;
            
            document.getElementById('error-message').style.display = 'flex';
            document.getElementById('error-text').textContent = error.message;
            document.getElementById('nav-buttons').style.display = 'flex';
            return;
        }
        
        // Small delay between steps
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // All done - redirect to complete page
    setTimeout(() => {
        window.location.href = 'step6_complete.php';
    }, 1000);
}
</script>

<?php renderFooter(); ?>
