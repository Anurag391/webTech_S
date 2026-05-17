<?php

// Student Array
$student = array(
    "name" => "Anurag Sarkar",
    "id" => "22-12345-1",
    "department" => "CSE",
    "cgpa" => "3.80"
);

// Convert Array into JSON
echo json_encode($student);

?>