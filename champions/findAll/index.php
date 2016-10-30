<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webservice_championsdb";
$rows = [];

// define host name and database name
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $names = empty($_GET['name']) ? [] : explode(',', $_GET['name']);

    if (empty($names)) {

        $stmt = $conn->prepare("SELECT * FROM champions");
    } else {

        $input_list = substr(str_repeat(',?', count($names)), 1);

        $sql = "SELECT * FROM champions WHERE name IN ($input_list)";

        $stmt = $conn->prepare($sql);

    }

    $stmt->execute($names);

    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);


} catch (PDOException $e) {
    $error_message = $e->getMessage();
    echo "this is displayed because an error was found";
    echo $error_message;
    exit();
}


$json = json_encode($rows, JSON_PRETTY_PRINT);
printf("<pre>%s</pre>", $json);
?>