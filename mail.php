<?php

/* Namespace alias. */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* Include the Composer generated autoload.php file. */
require 'vendor/autoload.php';

if(isset($_POST['send'])) {
  // Fetching data that is entered by the user
  echo nl2br("Fetch Form Info \n");
  $to   = 'sagerd@shaw.ca';
  $from = $_POST['email'];
  $name = $_POST['name'];
  $subj = 'Contact Form submission from The Well Band Space';
  $msg = $_POST['message'];
}




/* Create a new PHPMailer object. Passing TRUE to the constructor enables exceptions. */
$mail = new PHPMailer(TRUE);

/* Open the try/catch block. */
try {
  $mail->setFrom($from, $name);
  $mail->addAddress($to, 'Darsager');
  $mail->Subject = 'Contact Form submission from The Well Band Space';
  $mail->Body = $msg;

  /* SMTP parameters. */
  $mail->isSMTP();
  $mail->Host = 'mail.bravehost.com';
  $mail->SMTPAuth = TRUE;
  $mail->SMTPSecure = 'tls';
  $mail->Username = 'info@thewellbandspace.com';
  $mail->Password = '';
  $mail->Port = 587;

  if($mail->send()){
    header('Location: index.html');
  }
}
catch (Exception $e)
{
   /* PHPMailer exception. */
   echo $e->errorMessage();
}
catch (\Exception $e)
{
   /* PHP exception (note the backslash to select the global namespace Exception class). */
   echo $e->getMessage();
}




?>
