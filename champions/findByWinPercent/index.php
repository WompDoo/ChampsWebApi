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
    $winpercents = empty($_GET['winPercent']) ? [] : explode(',', $_GET['winPercent']);

    if (empty($winpercents)) {

        $stmt = $conn->prepare("SELECT * FROM champions");
    } else {

        $input_list = substr(str_repeat(',?', count($winpercents)), 1);
        $sql = "SELECT * FROM champions WHERE winPercent IN ($input_list)";
        $stmt = $conn->prepare($sql);

    }

    $stmt->execute($winpercents);

    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);


} catch (PDOException $e) {
    $error_message = $e->getMessage();
    echo "this is displayed because an error was found";
    echo $error_message;
    exit();
}


$json = json_encode($rows, JSON_PRETTY_PRINT);
printf("%s", $json);
?>