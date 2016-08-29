<?php

function suicide($response) {
    http_response_code($response);
    die;
}

try {

    if(!isset($_FILES) || !isset($_FILES['Resume']) || !file_exists($_FILES['Resume']['tmp_name'])) {
        http_response_code(417);
        die;

    } else {

        if(!isset($_POST['Scope'])) suicide(417);

        $json = json_decode($_POST['Scope'], true);

        $Fname = $json['Fname'];
        $Lname = $json['Lname'];
        $gender = $json['Gender'];
        $shirt = $json['TShirt'];
        $email = $json['Email'];
        $phone = $json['Phone'];
        $first = $json['First'];
        $school = $json['School'];
        $classLevel = $json['ClassLvl'];
        $applicantType = $json['Type'];
        $age = intval($json['Age']);
        $diet = print_r($json['Diet'], true);
        $ride = $json['Ride'];
        $github = $json['Github'];
        $hardware = $json['Hardware'];


        // Make DB connection
        $mysqli = new mysqli($_SERVER["DB_HOST"], $_SERVER["DB_USER"], $_SERVER["DB_PASSWORD"], $_SERVER["DB_NAME"]);

        // Check is email is taken
        $stmt = $mysqli->prepare("SELECT Email FROM apps WHERE Email=?");
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows > 0) {
            $stmt->free_result();
            $stmt->close();
            suicide(402);
        }

        $resume = $_FILES['Resume']['tmp_name'];
        $uploadDir = $_SERVER["RESUME_DIR"];
        $filePath = $uploadDir . $email;

        $result = move_uploaded_file($resume, $filePath);

        if(!$result) {
            error_log("Error uploading file");
            suicide(500);
        } else {
            error_log("Success!");
        }

        $stmt = $mysqli->prepare(
            "INSERT INTO apps
            (`Fname`, `Lname`, `Gender`, `Shirt`, `Email`, `Phone`, `First`, `School`, `Class`, `Role`, `Age`, `Diet`, `Ride`, `Github`, `Hardware`)
            VALUES
            ( ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        );

        $stmt->bind_param('sssssssssisssss', $Fname, $Lname, $gender, $shirt,
        $email, $phone, $first, $school, $classLevel, $applicantType, $age, $diet, $ride, $github, $hardware);

        $stmt->execute();
	$stmt->close();
    }

} catch (Exception $e) {
    echo $e->getMessage();
    suicide(404);
}
?>
