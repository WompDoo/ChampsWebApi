<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webservice_championsdb";

$conn = mysqli_connect($servername, $username, $password, $dbname);
$json = file_get_contents('php://input');
$request = json_decode($json);


if (!empty($request->name && $request->role && $request->winPercent)) {

    $sql = "INSERT INTO champions (name, role, winPercent) VALUES('$request->name', '$request->role', '$request->winPercent')";


    mysqli_query($conn, $sql) or die(mysqli_error($conn));


}

mysqli_close($conn);


