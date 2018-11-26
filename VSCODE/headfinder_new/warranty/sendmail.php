<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Multiple recipients
$to = 'paul.ph227@gmail.com, paul.philippenko@bauer.com'; // note the comma

// Subject
$subject = 'Warranty Form';

// Message
$message = '
<html>
<head>
  <title>Warranty Form</title>
</head>
<body>
  <p><h1>Warranty Form:</h1></p>
  <table>';
  
  $stripe = 'lightgray';

  foreach($_POST as $name=>$value){
    $message.='<tr style="background-color: '.$stripe.'; padding: 10px;"><td style="padding: 10px;"><b>'.ucfirst(str_replace("_", " ", $name)).':</b></td><td style="padding: 10px;">'.$value.'</td></tr>';
    if($stripe == 'lightgray') $stripe = 'white';
    else $stripe = 'lightgray';
  }

$message .= '</table>
</body>
</html>
';

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'To: Paul <paul.ph227@gmail.com>,  Paul Philippenko <paul.philippenko@bauer.com>';
$headers[] = 'From: noreply@bauer.biz';


echo $message;
// Mail it
if(mail($to, $subject, $message, implode("\r\n", $headers))){
    echo "mail sent";
}
else{
    echo "failed";
}
?>