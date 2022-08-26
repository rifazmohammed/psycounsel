<?php


//testing email service

//bool mail ( string $to , string $subject , string $message [, string $additional_headers [, string $additional_parameters ]] )

$stat = mail('ratheesh@digitalmesh.com,ratheeshrahul@gmail.com', 'test mail', 'test message', 'From: khaleel@dmtest.com');

if($stat) {
	echo 'E mail success!';
}
else {
	echo 'mail failed';
}


?>
