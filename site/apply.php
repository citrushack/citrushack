<?php

function suicide($response) {
    http_response_code($response);
    die;
}

try {
    
    if($_SERVER["CONTENT_LENGTH"] > 1048576)
    {
        suicide(300);
    }
    
    if(!isset($_FILES) || !isset($_FILES['Resume']) || !file_exists($_FILES['Resume']['tmp_name'])) {
        http_response_code(417);
        die;

    } else {
        
        if(!isset($_POST['Scope'])) suicide(417); 
        
        $json = json_decode($_POST['Scope'], true);
        
        $Fname = $json['Fname'] || suicide(401);
        $Lname = $json['Lname'] || suicide(401);
        $gender = $json['Gender'] || suicide(401);
        $shirt = $json['TShirt'] || suicide(401);
        $email = $json['Email'] || suicide(401);
        $phone = $json['Phone'] || suicide(401);
        $school = $json['School'] || suicide(401);
        $classLevel = $json['ClassLvl'] || suicide(401);
        $applicantType = $json['Type'] || suicide(401);
        $age = intval($json['Age']) || suicide(401);
        $diet = '' || suicide(401);
        $ride = $json['Ride'] || suicide(401);
        $github = $json['Github'] || suicide(401);
        $hardware = $json['Hardware'] || suicide(401);

        // Make DB connection
        $mysqli = new mysqli($_ENV["DB_HOST"], $_ENV["DB_USER"], $_ENV["DB_PASSWORD"], $_ENV["DB_NAME"]);
        
        // Check is email is taken
        $stmt = $mysqli->prepare("SELECT email FROM apps WHERE email=:email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows > 0) {
            $stmt->free_result();
            $stmt->close();
            suicide(402);
        }

        $resume = $_FILES['Resume']['tmp_name'];
        $uploadDir = $_ENV["RESUME_DIR"]; 
        $filePath = $uploadDir . $email;

        $result = move_uploaded_file($resume, $filePath);

        if(!$result) {
            error_log("Error uploading file");
            exit;
        } else {
            error_log("Success!");
        }

        if(isset($json['Diet']))
            $diet = $json['Diet'];
         
        $stmt = $mysqli->prepare(
            "INSERT INTO apps 
            (`Fname`, `Lname`, `Gender`, `Shirt`, `Email`, `Phone`, `School`, `Class`, `Role`, `Age`, `Diet`, `Ride`, `Github`, `Hardware`)
            VALUES
            ( :Fname , :Lname, :gender, :shirt, :email, :phone, :school, :class, :role, :age, :diet, :ride, :github, :hardware)"
        );
        
        $stmt->bindParam(':Fname', $Fname);
        $stmt->bindParam(':Lname', $Lname);
        $stmt->bindParam(':gender', $gender);
        $stmt->bindParam(':shirt', $shirt);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':school', $school);
        $stmt->bindParam(':class', $classLevel);
        $stmt->bindParam(':role', $applicantType);
        $stmt->bindParam(':age', $age);
        $stmt->bindParam(':diet', $diet);
        $stmt->bindParam(':ride', $ride);
        $stmt->bindParam(':github', $github);
        $stmt->bindParam(':hardware', $hardware);
        
        $stmt->execute();
        $stmt->store();
    }

} catch (Exception $e) { 
        
    error_log($e->getMessage());
    suicide(404);
}
?>
