<?php

if($_POST) 
{
    $to      = 'citrushack@gmail.com';
    $subject = ''.$_POST['Subject'];
    $message = ''.$_POST['Message'];
    $headers = 'From: '.$_POST['Email']. "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $success = mail($to, $subject, $message, $headers);

    if($success)
        error_log("Sent!");
    else
        error_log("Error sending email to ".$_POST['Email'].". With message ".$_POST['Message']);
} 
else
{
    http_response_code(401);
}

?>