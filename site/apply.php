<?php

try {
    
    $json = json_decode(file_get_contents('php://input'), true);
    
    $Fname = $json['Fname'];
    $Lname = $json['Lname'];
    $gender = $json['Gender'];
	$shirt = $json['TShirt'];
    $email = $json['Email'];
    $phone = $json['Phone'];
    $school = $json['School'];
    $classLevel = $json['ClassLvl'];
    $applicantType = $json['Type'];
    $age = intval($json['Age']);
    $diet = '';
    $ride = $json['Ride'];
    $github = $json['Github'];
    $hardware = $json['Hardware'];
    $application = '';
    
    if(isset($json['dietaryRestrictions']))
        $diet = $json['dietaryRestrictions'];
    
    $mysqli = new mysqli($_ENV["DB_HOST"], $_ENV["DB_USER"], $_ENV["DB_PASSWORD"], $_ENV["DB_NAME"]);
                
    $stmt = $mysqli->prepare(
        "INSERT INTO apps 
        (`Fname`, `Lname`, `Gender`, `Shirt`, `Email`, `Phone`, `School`, `Class`, `Role`, `Age`, `Diet`, `Ride`, `Github`, `Hardware`, `Resume`)
        VALUES
        ( :Fname , :Lname, :gender, :shirt, :email, :phone, :school, :class, :role, :age, :diet, :ride, :github, :hardware, :resume)"
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
    $stmt->bindParam(':resume', $application);
    
    $stmt->execute();
    
    } catch (Exception $e) { 
        
        error_log($e->getMessage());
        
    }
?>
