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
    // Get info from code
    $id = $_POST['id'];
    $getImage = $_POST['boolGetImage'];
    if ($getImage == "false"){
        // Get description from database
        $sql = "SELECT Description FROM redrawdata WHERE ID = $id";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $description = $row['Description'];
        echo $description;
    }
    else {
        // Get image from database
        $sql = "SELECT Image FROM redrawdata WHERE ID = $id";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $image = $row['Image'];
        echo $image;
    }
?>