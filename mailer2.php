<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $captcha = $_POST['g-recaptcha-response'];
    $secret = '6Le3yiUUAAAAAKolNqd7JlRYVTD93lmRNzxNd9Qu';
        
        
        
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$captcha);
    $responseData = json_decode($verifyResponse);
    if($responseData->success){

       // $from = 'hello@crawfordcountyhistoricalsociety.com';
        $to = '"Courtney-Ring.com" <ce.ring@comcast.net>';
        //$to = "ce.ring@comcast.net";
        $subject = 'New Message from Courtney-Ring.com';

        $message = "From: $name\n E-Mail: $email\n Message:\n $message";
        $headers = 'From: "Courtney-Ring.com" <hello@courtney-ring.com>' . "\r\n" . 'Reply-to:' . $email;



        if ($_POST['submit']) {
            if (mail ($to, $subject, $message, $headers)) {
                header("Location:http://www.courtney-ring.com#contact");
                //echo '<p class="success">Your message has been sent successfully!</p>';
                //echo '<script>alert();</script>';

            } else {
                echo "Error. Please go back and try again.";

            }
        }
    }
    else{
            $errMsg = 'Robot verification failed, please try again.';
    }
?>
