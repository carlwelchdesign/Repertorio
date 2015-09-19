<?php
//error_reporting(E_ALL);
//ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if ( isset($_POST['nameInput']) && isset($_POST['cellInput']) && isset($_POST['addressInput']) ) {

    //check if any of the inputs are empty
    if ( empty($_POST['nameInput']) || empty($_POST['cellInput']) || empty($_POST['addressInput']) ) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    $name = $_POST['nameInput'];
    $cell = $_POST['cellInput'];
    $address = $_POST['addressInput'];
    $appt = $_POST['apptInput'];
    $city = $_POST['cityInput'];
    $state = $_POST['stateSelect'];
    $zip = $_POST['zipInput'];
    $howYouHeard = $_POST['howYouHeardSelect'];
    $synopsis = $_POST['synopsisInput'];
    $bio = $_POST['bioInput'];

    $resume = $_FILES['resumeFile'];
    $project = $_FILES['projectFile'];
    $proofOfRes = $_FILES['proofOfResFile'];

    $mail = new PHPMailer();

    $mail->setFrom('noreply@repertorio.nyc', 'Van Lier Application Form');
    $mail->addAddress('vanlier@repertorio.org');
    //$mail->addAddress('slillo@inflexioninteractive.com', 'Web Master');
    //$mail->addAddress('c.concat.p@gmail.com');
    $mail->Subject = 'Van Lier Application Form';
    $mail->Body = "
        Name: $name\n
        Cell: $cell\n
        Address: $address\n
        appt #: $appt\n
        City: $city\n
        State: $state\n
        ZIP: $zip\n
        \n
        How did you hear about us?\n
        $howYouHeard\n
        \n
        Synopsis:\n
        $synopsis\n
        \n
        Bio:\n
        $bio
    ";

    $mail->AddAttachment( $resume['tmp_name'], $resume['name'] );
    $mail->AddAttachment( $project['tmp_name'], $project['name'] );
    $mail->AddAttachment( $proofOfRes['tmp_name'], $proofOfRes['name'] );

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);

}