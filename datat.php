<?php
//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', 'localhost');
define('DB_USERNAME', 'lolahves_user');
define('DB_PASSWORD', 'Jump3toads');
define('DB_NAME', 'lolahves_test');

//get connection
$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if($conn->connect_error){
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT date, temp FROM sensor2";

//execute query
$result = $conn->query($sql);


//loop through the returned data
$data = array();
foreach ($result as $row) {
  $data[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$conn->close();

//now print the data
print json_encode($data);


?>
