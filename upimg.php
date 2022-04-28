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
    // Get next image id
    $sql = "SELECT MAX(ID) FROM redrawdata";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_row($result);
    $id = $row[0] + 1;
    $image = $_POST['image'];

    // Put image into database
    $sql = "INSERT INTO redrawdata (ID, Image) VALUES ('$id', '$image')";
    mysqli_query($conn, $sql);

    $conn->close();

    echo $id;
?>