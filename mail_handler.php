<?php
    header( "refresh:3;url=http://www.nathanandrimasjourneys.com" );
?>

<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];

		$to='long.nathan1@gmail.com';
		$subject='Form Submission';
		$message="Name :".$name."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1> Thank you for contacting us"." ".$name."! We will contact you shortly!</h1>";
		}
		else{
			echo "OOPS! Something went wrong!";
		}
	}
?>