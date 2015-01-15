<?php

try {
    
    $json = json_decode(file_get_contents('php://input'), true);
    
    $Fname = $json['Fname'];
    $Lname = $json['Lname'];
    $gender = $json['gender'];
    $email = $json['email'];
    $phone = $json['phone'];
    $school = $json['school'];
    $classLevel = $json['classLvl'];
    $applicantType = $json['type'];
    $age = intval($json['age']);
    $diet = '';
    $ride = '';
    $github = $json['github'];
    $hardware = $json['hardware'];
    $application = '';
    
    if(isset($json['dietaryRestrictions']))
        $diet = $json['dietaryRestrictions'];
    
    $mysqli = new mysqli($_ENV["DB_HOST"], $_ENV["DB_USER"], $_ENV["DB_PASSWORD"], $_ENV["DB_NAME"]);
                
    $stmt = $mysqli->prepare(
        "INSERT INTO apps 
        (`Fname`, `Lname`, `Gender`, `Email`, `Phone`, `School`, `Class`, `Role`, `Age`, `Diet`, `Ride`, `Github`, `Hardware`, `Resume`)
        VALUES
        ( :Fname , :Lname, :gender, :email, :phone, :school, :class, :role, :age, :diet, :ride, :github, :hardware, :resume)"
    );
    
    $stmt->bindParam(':Fname', $Fname);
    $stmt->bindParam(':Lname', $Lname);
    $stmt->bindParam(':gender', $gender);
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
