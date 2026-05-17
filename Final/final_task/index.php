<!DOCTYPE html>
<html>

<head>

<title>Library Management System</title>

<script src="bookHandler.js"></script>

</head>

<body>

<h2>Library Management System</h2>

<input type="text" id="title" placeholder="Title">
<br><br>

<input type="text" id="author" placeholder="Author">
<br><br>

<input type="text" id="category" placeholder="Category">
<br><br>

<input type="text" id="status" placeholder="Status">
<br><br>

<button onclick="addBook()">
Add Book
</button>

<br><br>

<table border="1">

<tr>
<th>ID</th>
<th>Title</th>
<th>Author</th>
<th>Category</th>
<th>Status</th>
<th>Action</th>
</tr>

<tbody id="data">

</tbody>

</table>

</body>
</html>