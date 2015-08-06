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
        
        $Fname = isset($json['Fname']) ? $json['Fname'] : suicide(400);
        $Lname = isset($json['Lname']) ? $json['Lname'] : suicide(400);
        $gender = isset($json['Gender']) ? $json['Gender'] : suicide(400);
        $shirt = isset($json['TShirt']) ? $json['TShirt'] : suicide(400);
        $email = isset($json['Email']) ? $json['Email'] : suicide(400);
        $phone = isset($json['Phone']) ? $json['Phone'] : suicide(400);
        $school = isset($json['School']) ? $json['School'] : suicide(400);
        $classLevel = isset($json['ClassLvl']) ? $json['ClassLvl'] : suicide(400);
        $applicantType = isset($json['Type']) ? $json['Type'] : suicide(400);
        $age = isset($json['Age']) ? intval($json['Age']) : suicide(400);
        $diet = isset($json['Diet']) ? $json['Diet'] : suicide(400);
        $ride = isset($json['Ride']) ? $json['Ride'] : suicide(400);
        $github = $json['Github'];
	$hardware = $json['Hardware'];
	
        // Make DB connection
        $mysqli = new PDO('mysql:host=us-cdbr-iron-east-02.cleardb.net; dbname=heroku_9b40805300176df', 'be49eb03cbd17f', '9c9cfe8c');
	
        // Check is email is taken
        $stmt = $mysqli->prepare("SELECT email FROM apps WHERE email=:email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        if($stmt->fetchColumn() > 0) {
            suicide(402);
        }

        $resume = $_FILES['Resume']['tmp_name'];
        $uploadDir = '/var/opt/files/';
        $filePath = $uploadDir . $email;

        $result = move_uploaded_file($resume, $filePath);

        if(!$result) {
            error_log("Error uploading file");
            suicide(500);
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
        $stmt->bindParam(':diet', print_r($diet,true));
        $stmt->bindParam(':ride', $ride);
        $stmt->bindParam(':github', $github);
        $stmt->bindParam(':hardware', $hardware);
        
        $stmt->execute();
    }

} catch (Exception $e) { 
        
    error_log($e->getMessage());
    suicide(404);
}
?>
