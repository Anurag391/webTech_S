<?php

include("db.php");

function addBook($t,$a,$c,$s)
{
    global $conn;

    mysqli_query($conn,
    "INSERT INTO books(title,author,category,status)
    VALUES('$t','$a','$c','$s')");
}

function getBooks()
{
    global $conn;

    return mysqli_query($conn,
    "SELECT * FROM books");
}

function updateBook($id,$t,$a,$c,$s)
{
    global $conn;

    mysqli_query($conn,
    "UPDATE books
    SET title='$t',
    author='$a',
    category='$c',
    status='$s'
    WHERE id='$id'");
}

function deleteBook($id)
{
    global $conn;

    mysqli_query($conn,
    "DELETE FROM books WHERE id='$id'");
}

?>