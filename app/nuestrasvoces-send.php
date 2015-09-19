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

    if ( !isset($_POST['check']) ) {
        $data = array('success' => false, 'message' => 'Please read and check the agreement before submitting.');
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
    $playName = $_POST['playNameInput'];
    $synopsis = $_POST['synopsisInput'];
    $description = $_POST['descriptionInput'];

    $play = $_FILES['playFile'];

    $mail = new PHPMailer();

    $mail->setFrom('noreply@repertorio.nyc', 'Nuestras Voces Form');
    $mail->addAddress('nuestrasvoces@repertorio.org');
    //$mail->addAddress('slillo@inflexioninteractive.com', 'Web Master');
    //$mail->addAddress('c.concat.p@gmail.com');
    $mail->Subject = 'Nuestras Voces Submission Form';
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
        Play Name:\n
        $playName\n
        \n
        Synopsis:\n
        $synopsis\n
        \n
        Description:\n
        $description
    ";

    $mail->AddAttachment( $play['tmp_name'], $play['name'] );

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