<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webservice_championsdb";

$conn = mysqli_connect($servername, $username, $password, $dbname);
$name = $_GET["name"];
$role = $_GET["role"];
$winPercent = $_GET["winPercent"];

if (!empty($name && $role && $winPercent)) {

    $sql = "INSERT INTO champions (name, role, winPercent) VALUES('$name', '$role', '$winPercent')";

    mysqli_query($conn, $sql);

}

mysqli_close($conn);

echo $sql;
