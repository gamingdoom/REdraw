<?php
    // Connect to sql database
    // Read username and password from file
    $contents = fopen("config", "r");
    $info = explode(",", fread($contents, filesize("config")));
    $user = $info[0];
    $pass = $info[1];
    fclose($contents);
    $conn = mysqli_connect("localhost", $user, $pass, "redraw");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    // Add description to row
    $id = $_POST['id'];
    echo $id;
    $description = $_POST['description'];
    $sql = "UPDATE redrawdata SET Description = '$description' WHERE ID = '$id'";
    $result = mysqli_query($conn, $sql);
    $conn->close();
?>