<?php
	function sani($var) {
    	return strip_tags(stripslashes($var));
	}
	$contactFormEmail = "sales@volute.co";
	$message = "";
	$message .= "\nContact Name: " . sani($_POST['name']);
	$message .= "\nContact Email: " . sani($_POST['email1']);
	$message .= "\nContact Phone: " . sani($_POST['phone1']);
	$message .= "\nContact Message: " . sani($_POST['message']);

	if(mail($contactFormEmail, "Volute Contact Form", $message, 'From: Volute.co <sales@volute.co')){
		echo "Thank you. We have received your request and will respond within 1 business day.";
	}
	else{
		echo "Message could not be sent";
	}
?>