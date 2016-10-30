<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webservice_championsdb";

$conn = mysqli_connect("localhost", "root", "", "webservice_championsdb");
$id = $_GET["id"];
$name = $_GET["name"];
$role = $_GET["role"];
$winPercent = $_GET["winPercent"];

if (!empty($id)) {

    $sql = "UPDATE champions SET name = '$name', role = '$role', winPercent = '$winPercent' WHERE champions_id = $id";


    mysqli_query($conn, $sql);

}

mysqli_close($conn);

echo $sql;
