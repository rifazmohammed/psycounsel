<?php

$subject="Mail from PsyCounsel-Contact us";

function send_mail($mail_to,$subject,$message, $headers) {

	$stat = mail($mail_to,$subject,$message,$headers);
	
	return $stat;
	
}

if(isset($_POST['Submit'])) {
	
	$contact_details = array();
	
	$contact_details['textfield'] = isset($_POST['textfield']) ? $_POST['textfield'] : '' ;				//First Name
	
	$contact_details['textfield2'] = isset($_POST['textfield2']) ? $_POST['textfield2'] : '' ;			//Last Name

	$contact_details['textfield3'] = isset($_POST['textfield3']) ? $_POST['textfield3'] : '' ;			//Address

	$contact_details['textfield4'] = isset($_POST['textfield4']) ? $_POST['textfield4'] : '' ;			//City

	$contact_details['textfield5'] = isset($_POST['textfield5']) ? $_POST['textfield5'] : '' ;			//state

	$contact_details['textfield6'] = isset($_POST['textfield6']) ? $_POST['textfield6'] : '' ;			//Country

	$contact_details['textfield7'] = isset($_POST['textfield7']) ? $_POST['textfield7'] : '' ;			//Pin

	$contact_details['textfield8'] = isset($_POST['textfield8']) ? $_POST['textfield8'] : '' ;			//Phone

	$contact_details['textfield9'] = isset($_POST['textfield9']) ? $_POST['textfield9'] : '' ;			//Email

	$contact_details['textfield10'] = isset($_POST['textfield10']) ? $_POST['textfield10'] : '' ;		//Age

	$contact_details['select'] = isset($_POST['select']) ? $_POST['select'] : '' ;						//Gender

	$contact_details['textfield11'] = isset($_POST['textfield11']) ? $_POST['textfield11'] : '' ;		//Date of Birth

	$contact_details['textfield12'] = isset($_POST['textfield12']) ? $_POST['textfield12'] : '' ;		//Qualification

	$contact_details['textfield13'] = isset($_POST['textfield13']) ? $_POST['textfield13'] : '' ;		//Job Held

	$contact_details['checkbox'] = (isset($_POST['checkbox']) && $_POST['checkbox'] == 'checkbox') ? 'Yes' : 'No' ;			//Aptitude Testing

	$contact_details['checkbox2'] = (isset($_POST['checkbox2']) && $_POST['checkbox2'] == 'checkbox') ? 'Yes' : 'No' ;		//Fears/phobias

	$contact_details['checkbox3'] = (isset($_POST['checkbox3']) && $_POST['checkbox3'] == 'checkbox') ? 'Yes' : 'No' ;		//Poor Scholastic performance

	$contact_details['checkbox4'] = (isset($_POST['checkbox4']) && $_POST['checkbox4'] == 'checkbox') ? 'Yes' : 'No' ;		//Depression

	$contact_details['checkbox5'] = (isset($_POST['checkbox5']) && $_POST['checkbox5'] == 'checkbox') ? 'Yes' : 'No' ;		//Anxiety

	$contact_details['checkbox6'] = (isset($_POST['checkbox6']) && $_POST['checkbox6'] == 'checkbox') ? 'Yes' : 'No' ;		//Marital problems/issues

	$contact_details['checkbox7'] = (isset($_POST['checkbox7']) && $_POST['checkbox7'] == 'checkbox') ? 'Yes' : 'No' ;		//Parenting issues/concerns

	$contact_details['checkbox8'] = (isset($_POST['checkbox8']) && $_POST['checkbox8'] == 'checkbox') ? 'Yes' : 'No' ;		//Relationship problems/issues

	$contact_details['checkbox9'] = (isset($_POST['checkbox9']) && $_POST['checkbox9'] == 'checkbox') ? 'Yes' : 'No' ;		//Low self-esteem

	$contact_details['checkbox12'] = (isset($_POST['checkbox12']) && $_POST['checkbox12'] == 'checkbox') ? 'Yes' : 'No' ;	//Other check

	$contact_details['checkbox13'] = (isset($_POST['checkbox13']) && $_POST['checkbox13'] == 'checkbox') ? 'Yes' : 'No' ;	//Career counseling

	$contact_details['checkbox14'] = (isset($_POST['checkbox14']) && $_POST['checkbox14'] == 'checkbox') ? 'Yes' : 'No' ;	//Psychological/emotional abuse

	$contact_details['checkbox15'] = (isset($_POST['checkbox15']) && $_POST['checkbox15'] == 'checkbox') ? 'Yes' : 'No' ;	//Childhood abuse

	$contact_details['checkbox16'] = (isset($_POST['checkbox16']) && $_POST['checkbox16'] == 'checkbox') ? 'Yes' : 'No' ;	//Grief/loss

	$contact_details['checkbox17'] = (isset($_POST['checkbox17']) && $_POST['checkbox17'] == 'checkbox') ? 'Yes' : 'No' ;	//Premarital counseling

	$contact_details['checkbox18'] = (isset($_POST['checkbox18']) && $_POST['checkbox18'] == 'checkbox') ? 'Yes' : 'No' ;	//Issues related to children

	$contact_details['checkbox19'] = (isset($_POST['checkbox19']) && $_POST['checkbox19'] == 'checkbox') ? 'Yes' : 'No' ;	//Suicidal Tendencies

	$contact_details['checkbox20'] = (isset($_POST['checkbox20']) && $_POST['checkbox20'] == 'checkbox') ? 'Yes' : 'No' ;	//School refusal

	$contact_details['checkbox21'] = (isset($_POST['checkbox21']) && $_POST['checkbox21'] == 'checkbox') ? 'Yes' : 'No' ;	//Examination Stress

	$contact_details['checkbox22'] = (isset($_POST['checkbox22']) && $_POST['checkbox22'] == 'checkbox') ? 'Yes' : 'No' ;	//Stress in Adolescents

	$contact_details['textfield122'] = isset($_POST['textfield122']) ? $_POST['textfield122'] : '' ;						//Other

	$contact_details['textarea'] = isset($_POST['textarea']) ? $_POST['textarea'] : '' ;
	
	$message = "<table style=\"border-style:solid;border-collapse:collapse;\" width=\"970\" border=\"1\">
	<tr> <td>First Name : </td><td>".$contact_details['textfield']."</td></tr>
	<tr><td> Last Name: </td><td>".$contact_details['textfield2']."</td></tr>
	<tr> <td valign=\"top\" width=\"40%\">Address  : </td><td valign=\"top\">".$contact_details['textfield3']."<br />".

	$contact_details['textfield4']."<br />".
	
	$contact_details['textfield5']."<br />".
	
	$contact_details['textfield6']."<br />
	
	Pin : " .$contact_details['textfield7']."</td></tr>
	
	<tr><td>Phone : </td><td valign=\"top\">".$contact_details['textfield8']."</td></tr>
	
	<tr><td>Email : </td><td valign=\"top\">".$contact_details['textfield9']."</td></tr>
	
	<tr> <td>Age : </td><td valign=\"top\">" .$contact_details['textfield10']."</td></tr>
	
	<tr><td>Gender : </td><td valign=\"top\">".$contact_details['select']."</td></tr>
	
	<tr><td>Date of Birth : </td><td valign=\"top\">".$contact_details['textfield11']."</td></tr>
	
	<tr><td>Qualification : </td><td valign=\"top\">".$contact_details['textfield12']."</td></tr>
	
	<tr><td>Job Held :  </td><td valign=\"top\">".$contact_details['textfield13']."</td></tr>
	
	<tr><td>Aptitude Testing : </td><td valign=\"top\">" .$contact_details['checkbox']."</td></tr>
	
	<tr><td>Examination Stress : </td><td valign=\"top\">".$contact_details['checkbox21']."</td></tr>
	
	<tr><td>Fears/phobias : </td><td valign=\"top\">".$contact_details['checkbox2']."</td></tr>
	
	<tr><td>School refusal : </td><td>".$contact_details['checkbox20']."</td></tr>
	
	<tr><td>Poor Scholastic performance : </td><td>" .$contact_details['checkbox3']."</td></tr>
	
	<tr><td>Suicidal Tendencies : </td><td valign=\"top\">".$contact_details['checkbox19']."</td></tr>
	
	<tr><td>Depression : </td><td>".$contact_details['checkbox4']."</td></tr>
	
	<tr><td>Issues related to children : </td><td valign=\"top\">".$contact_details['checkbox18']."</td></tr>
	
	<tr><td>Anxiety : </td><td valign=\"top\">".$contact_details['checkbox5']."</td></tr>
	
	<tr><td>Premarital counseling  : </td><td valign=\"top\">".$contact_details['checkbox17']."</td></tr>
	
	<tr><td>Marital problems/issues : </td><td valign=\"top\">".$contact_details['checkbox6']."</td></tr>
	
	<tr><td>Grief/loss : </td><td>".$contact_details['checkbox16']."</td></tr>
	
	<tr><td>Parenting issues/concerns : </td><td valign=\"top\">".$contact_details['checkbox7']."</td></tr>
	
	<tr><td>Childhood abuse : </td><td valign=\"top\">".$contact_details['checkbox15']."</td></tr>
	
	<tr><td>Relationship problems/issues : </td><td valign=\"top\">".$contact_details['checkbox8']."</td></tr>
	
	<tr><td>Psychological/emotional abuse : </td><td valign=\"top\">".$contact_details['checkbox14']."</td></tr>
	
	<tr><td>Low self-esteem : </td><td valign=\"top\">".$contact_details['checkbox9']."</td></tr>
	
	<tr><td>Career counseling : </td><td>".$contact_details['checkbox13']."</td></tr>
	
	<tr><td>Stress in Adolescents: </td><td valign=\"top\">  ".$contact_details['checkbox22']."</td></tr>
	
	<tr><td>Other : </td><td valign=\"top\">".$contact_details['checkbox12']."</td></tr>
	
	<tr><td>Other Comments : </td><td valign=\"top\">".$contact_details['textfield122']."</td></tr>
	
	<tr><td valign=\"top\">Detailed narrative of present issues, including past history : </td><td valign=\"top\">".$contact_details['textarea']."</td></tr></table>";
	
	$email_to = "contact@psycounsel.com, loneyjacob@hotmail.com"; // IMPORTANT : CHANGE THIS ON LIVE [contact@psycounsel.com, loneyjacob@hotmail.com]
	
	$headers = "From: " .$contact_details['textfield9']."\r\n";		

	$headers .= "MIME-Version: 1.0\r\n"; 
			   
	$headers .= "X-Mailer: PHP \r\n";

    $headers .= "Content-type: text/html; charset=iso-8859-1";
               
    $status = send_mail($email_to, $subject, $message, $headers);
    
	if($status) {
		
		 header("Location:contact_thankyou.htm");
		
	}
	
	else {
		
		header("Location:contactus.htm");
		
	}
}

?>