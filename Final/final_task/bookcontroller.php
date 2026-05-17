<?php

include("bookModel.php");

if($_POST['action']=="add")
{
    addBook(
    $_POST['title'],
    $_POST['author'],
    $_POST['category'],
    $_POST['status']
    );
}

if($_POST['action']=="update")
{
    updateBook(
    $_POST['id'],
    $_POST['title'],
    $_POST['author'],
    $_POST['category'],
    $_POST['status']
    );
}

if($_POST['action']=="delete")
{
    deleteBook($_POST['id']);
}

if($_POST['action']=="view")
{
    $result=getBooks();

    while($row=mysqli_fetch_assoc($result))
    {
        echo "<tr>";

        echo "<td>".$row['id']."</td>";

        echo "<td>".$row['title']."</td>";

        echo "<td>".$row['author']."</td>";

        echo "<td>".$row['category']."</td>";

        echo "<td>".$row['status']."</td>";

        echo "<td>
        <button onclick='deleteBook(".$row['id'].")'>
        Delete
        </button>
        </td>";

        echo "</tr>";
    }
}

?>