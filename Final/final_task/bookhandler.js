function loadBooks()
{
    var xhttp=new XMLHttpRequest();

    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            document.getElementById("data").innerHTML=
            this.responseText;
        }
    };

    xhttp.open("POST","bookController.php",true);

    xhttp.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
    );

    xhttp.send("action=view");
}

function addBook()
{
    var title=document.getElementById("title").value;

    var author=document.getElementById("author").value;

    var category=document.getElementById("category").value;

    var status=document.getElementById("status").value;

    var xhttp=new XMLHttpRequest();

    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            loadBooks();
        }
    };

    xhttp.open("POST","bookController.php",true);

    xhttp.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
    );

    xhttp.send(
    "action=add&title="+title+
    "&author="+author+
    "&category="+category+
    "&status="+status
    );
}

function deleteBook(id)
{
    var xhttp=new XMLHttpRequest();

    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            loadBooks();
        }
    };

    xhttp.open("POST","bookController.php",true);

    xhttp.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
    );

    xhttp.send("action=delete&id="+id);
}

window.onload=loadBooks;