<?php

$servername = "localhost";

// REPLACE with your Database name 

$dbname="lolahves_data";

// REPLACE with Database user

$username = "lolahives_nate"; 

// REPLACE with Database user password

$password = "Jump3toads";

 $val = $_GET['val'];



echo 'From Server-> Received: '.$val;


 $conn = new mysqli($servername, $username, $password, $dbname);

 // Check connection 16 if ($conn->connect_error) {

die("Connection failed: " . $conn->connect_error);

}


$sql = "INSERT INTO gprs (val) VALUES ('$val')";



if ($conn->query($sql) === TRUE) ({

return "New record created successfully";

}

else {

return "Error: " . $sql . "<br>" . $conn->error;



 } 

$conn->close();


?>

