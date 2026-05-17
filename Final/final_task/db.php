<?php

$conn=mysqli_connect("localhost","root","");

mysqli_query($conn,
"CREATE DATABASE IF NOT EXISTS library_db");

mysqli_select_db($conn,"library_db");

$sql="CREATE TABLE IF NOT EXISTS books(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100),
author VARCHAR(100),
category VARCHAR(100),
status VARCHAR(50)
)";

mysqli_query($conn,$sql);

?>