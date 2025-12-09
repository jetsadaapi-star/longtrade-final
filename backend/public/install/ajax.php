<?php
/**
 * LongTrade Installer - AJAX Handler
 */

require_once __DIR__ . '/helpers.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

$action = $_POST['action'] ?? '';

switch ($action) {
    case 'test_connection':
        $host = $_POST['host'] ?? 'localhost';
        $port = (int)($_POST['port'] ?? 3306);
        $database = $_POST['database'] ?? '';
        $username = $_POST['username'] ?? '';
        $password = $_POST['password'] ?? '';
        
        $result = testDatabaseConnection($host, $port, $database, $username, $password);
        echo json_encode($result);
        break;
        
    default:
        echo json_encode(['success' => false, 'message' => 'Unknown action']);
}
