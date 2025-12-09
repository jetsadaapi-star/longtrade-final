/**
 * LongTrade Installer - JavaScript Functions
 */

// Test Database Connection
async function testConnection() {
    const btn = document.getElementById('test-connection-btn');
    const result = document.getElementById('connection-result');

    // Get form values
    const host = document.getElementById('db_host').value;
    const port = document.getElementById('db_port').value;
    const database = document.getElementById('db_database').value;
    const username = document.getElementById('db_username').value;
    const password = document.getElementById('db_password').value;

    // Validate
    if (!host || !port || !database || !username) {
        result.innerHTML = '<span class="alert alert-warning" style="margin:0;padding:10px;">กรุณากรอกข้อมูลให้ครบ</span>';
        return;
    }

    // Show loading
    btn.disabled = true;
    btn.innerHTML = '<span class="loader"></span> กำลังทดสอบ...';
    result.innerHTML = '';

    try {
        const formData = new FormData();
        formData.append('action', 'test_connection');
        formData.append('host', host);
        formData.append('port', port);
        formData.append('database', database);
        formData.append('username', username);
        formData.append('password', password);

        const response = await fetch('ajax.php', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            result.innerHTML = '<span class="alert alert-success" style="margin:0;padding:10px;">✓ ' + data.message + '</span>';
        } else {
            result.innerHTML = '<span class="alert alert-error" style="margin:0;padding:10px;">✗ ' + data.message + '</span>';
        }
    } catch (error) {
        result.innerHTML = '<span class="alert alert-error" style="margin:0;padding:10px;">✗ เกิดข้อผิดพลาด: ' + error.message + '</span>';
    }

    btn.disabled = false;
    btn.innerHTML = 'ทดสอบการเชื่อมต่อ';
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    let valid = true;
    const inputs = form.querySelectorAll('input[required]');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            valid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return valid;
}

// Password Confirmation
function validatePassword() {
    const password = document.getElementById('admin_password');
    const confirm = document.getElementById('admin_password_confirmation');

    if (!password || !confirm) return true;

    if (password.value !== confirm.value) {
        confirm.classList.add('error');
        alert('รหัสผ่านไม่ตรงกัน');
        return false;
    }

    return true;
}

// Installation Progress Animation
function animateProgress() {
    const steps = document.querySelectorAll('.install-step');
    let currentStep = 0;

    function showNextStep() {
        if (currentStep < steps.length) {
            steps[currentStep].classList.remove('active');
            steps[currentStep].classList.add('completed');
            currentStep++;

            if (currentStep < steps.length) {
                steps[currentStep].classList.add('active');
            }
        }
    }

    // Check for step updates from server
    const checkProgress = setInterval(() => {
        const activeStep = document.querySelector('.install-step.active');
        if (!activeStep) {
            clearInterval(checkProgress);
        }
    }, 1000);
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('คัดลอกแล้ว!');
    }).catch(err => {
        console.error('Copy failed:', err);
    });
}

// Form Submit Handler
document.addEventListener('DOMContentLoaded', function () {
    // Auto-detect URL formation
    const appUrlInput = document.getElementById('app_url');
    if (appUrlInput && !appUrlInput.value) {
        const currentUrl = window.location.origin;
        appUrlInput.value = currentUrl;
    }

    // Add form validation to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            const inputs = form.querySelectorAll('input[required]');
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    valid = false;
                } else {
                    input.classList.remove('error');
                }
            });

            if (!valid) {
                e.preventDefault();
                alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            }
        });
    });

    // Real-time input validation
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });

        input.addEventListener('input', function () {
            this.classList.remove('error');
        });
    });
});

// Show/Hide Password Toggle
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}
