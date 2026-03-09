let form = document.getElementById("student-form");
let nameInput = document.getElementById("student-name");
let rollInput = document.getElementById("student-roll");
let list = document.getElementById("student-list");

let totalText = document.getElementById("total-count");
let attendanceText = document.getElementById("attendance");

let searchInput = document.getElementById("search-student");
let addButton = document.getElementById("add-btn");

let presentCount = 0;


nameInput.addEventListener("input",function(){

if(nameInput.value===""){
addButton.disabled=true;
}
else{
addButton.disabled=false;
}

});


form.addEventListener("submit",function(event){

event.preventDefault();

let name=nameInput.value;
let roll=rollInput.value;

if(name==="" || roll===""){
alert("Please enter name and roll");
return;
}

let li=document.createElement("li");
li.classList.add("student-item");

let span=document.createElement("span");
span.textContent=roll+" - "+name;


let checkbox=document.createElement("input");
checkbox.type="checkbox";

checkbox.addEventListener("change",function(){

if(checkbox.checked){
li.style.backgroundColor="lightgreen";
presentCount++;
}
else{
li.style.backgroundColor="white";
presentCount--;
}

updateAttendance();

});


let editBtn=document.createElement("button");
editBtn.textContent="Edit";

editBtn.onclick=function(){

let newName=prompt("Enter new name",name);
let newRoll=prompt("Enter new roll",roll);

if(newName!==null && newRoll!==null){
span.textContent=newRoll+" - "+newName;
}

};


let deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";

deleteBtn.onclick=function(){

let confirmDelete=confirm("Are you sure you want to delete this student?");

if(confirmDelete){
li.remove();
updateTotal();
}

};


li.appendChild(span);
li.appendChild(checkbox);
li.appendChild(editBtn);
li.appendChild(deleteBtn);

list.appendChild(li);

nameInput.value="";
rollInput.value="";

updateTotal();

});


function updateTotal(){

let total=list.children.length;

totalText.textContent="Total students: "+total;

updateAttendance();

}

function updateAttendance(){

let total=list.children.length;
let absent=total-presentCount;

attendanceText.textContent="Present: "+presentCount+" , Absent: "+absent;

}


searchInput.addEventListener("input",function(){

let searchText=searchInput.value.toLowerCase();

let students=document.querySelectorAll(".student-item");

students.forEach(function(student){

let text=student.innerText.toLowerCase();

if(text.includes(searchText)){
student.style.display="flex";
}
else{
student.style.display="none";
}

});

});


document.getElementById("sort-btn").addEventListener("click",function(){

let students=Array.from(document.querySelectorAll(".student-item"));

students.sort(function(a,b){

let nameA=a.innerText.toLowerCase();
let nameB=b.innerText.toLowerCase();

if(nameA>nameB) return 1;
if(nameA<nameB) return -1;
return 0;

});

students.forEach(function(student){
list.appendChild(student);
});

});


document.getElementById("highlight-first").addEventListener("click",function(){

let students=document.querySelectorAll(".student-item");

students.forEach(function(s){
s.classList.remove("highlight");
});

if(students.length>0){
students[0].classList.add("highlight");
}

});