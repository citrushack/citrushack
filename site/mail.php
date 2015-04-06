<?php

ignore_user_abort(true);

$json = json_decode(file_get_contents("php://input"), true);

if($json) 
{
    header('HTTP/1.0 200 Success');
    header("Connection: close", true);
    header("Content-Encoding: none\r\n");
    header("Content-Length: 0", true);
    flush();
    ob_flush();
    session_write_close();
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
