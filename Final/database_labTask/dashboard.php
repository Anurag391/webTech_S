<?php
session_start();

if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head><title>Dashboard</title></head>
<body>
<h2>Welcome, <?php echo $_SESSION['user']; ?>!</h2>
<p>You are logged in using PHP sessions.</p>

<?php
if (isset($_COOKIE['last_login'])) {
    echo "<p>Last login time: " . $_COOKIE['last_login'] . "</p>";
}
?>

<a href="logout.php">Logout</a>
</body>
</html>
