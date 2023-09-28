<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "syya133@gmail.com"; 

    $subject = "Message from $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
}
?>
