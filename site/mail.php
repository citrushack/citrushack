<?php

$json = json_decode(file_get_contents("php://input"), true);

if($json) 
{
    $to      = 'citrushack@gmail.com';
    $subject = ''.$json['Subject'];
    $message = ''.$json['Message'];
    $headers = 'From: '.$json['Email']. "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $success = mail($to, $subject, $message, $headers);

    if($success)
        error_log("Sent!");
    else
        error_log("Error sending email to ".$to.", from ".$json["Email"]." with message ".$json['Message']);
} 
else
{
    http_response_code(401);
}

?>
