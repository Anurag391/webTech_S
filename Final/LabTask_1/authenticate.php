<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

// Simple hardcoded check
if ($username === "admin" && $password === "1234") {
    $_SESSION['user'] = $username; // store username in session
    header("Location: dashboard.php");
    exit();
} else {
    echo "Invalid login. <a href='login.php'>Try again</a>";
}
?>
