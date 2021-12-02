<?php

// first, we must link together our "main" functions that are used across PHP files
include 'includes/mainfunctions.php';

// waits for user to select the button
if (isset($_POST["submit"])){
    // grabs all variables that the user typed in
    $n = $_POST["su_name"];
    $e = $_POST["su_email"];
    $p = $_POST["su_password"];
    $c = $_POST["su_cpassword"];
    $secq = $_POST["su_securityq"];
    $seca = $_POST["su_securitya"];
    
    // if any of these fields are empty, simply refresh the page.
    if (emptyInputSignup($n,$e,$p,$c,$secq,$seca) != false) {
        header("location: signup.html?error=emptyinput");
        exit();
    }
    // this function will check validity of variables 
    if (invalidInput($e,$p,$c) != false) {
        header("location: signup.html?error=invalidInput");
        exit();
    }

    // Assuming all the conditions above fell through, we can now sanitize the strings
    /*
    $n = sanitize($n);
    $e = sanitize($e);
    $p = sanitize($p);
    $c = sanitize($c);
    $secq = sanitize($secq);
    $seca = sanitize($seca);
    */
    // if function is not "exited", call a function
    signUpUser($n,$e,$p,$c,$secq,$seca);
}
// if user did not select button, continue showing page
else {
    header("location: signup.html");
    exit();
}

function emptyInputSignup($n,$e,$p,$c,$secq,$seca) {
    $result; // predefines result
    if (empty($n) || empty($e) || empty($p) || empty($c) || empty($secq) || empty($seca)) { // if any of the variables are empty, automatically fail.
        $result = true;
    }
    else {
        $result = false; // if none of the results are empty, allow it to pass through
    }
    return $resullt; 
}

function invalidInput($e,$p,$c) {
    $result = false; // predefines the result to allow us to send it back
    if (!filter_var($e, FILTER_VALIDATE_EMAIL)) { // verifies format of email
        $result = false;
    }
    if($c != $p) { // verifies that the confirmation of the password is the same as the password itself
        $results = false;
    }
    if (strlen($p) < 5) { // verifies that the password's length is longer than 5 characters
        $results = false;
    }
    return $result;
}

function signUpUser($n,$e,$p,$c,$secq,$seca) {
    // establish the connection
    $db = new mysqli("localhost","sandin2c","13370798","sandin2c");
    if ($db->connect_error) {
      die ("Connection failed: " . $db->connect_error);
    }
    $q1 = "INSERT INTO user(user_email, user_password, user_question, user_answer, user_name) VALUES ('$e', '$p', '$secq', '$seca', '$u')";
    $r1 = $db->query($q1);
    if ($r1) { // if successful...
        header("location: index.html");
        $db->close();
        exit();
    }
    else {
        echo("Unsuccessful. Please try again.");
        $db->close();
        exit();
    }
    $db->close();
    exit();
}

/*
function sanitize($dirty) {
    $clean = filter_var($dirty, FILTER_SANITIZE_STRING);
    return $clean;
}
*/

/*
    // First, we need to sees if the user has clicked the "signup" button or not 
    if (isset($_POST['Submit'])) {
        // echo "It works";
        // Variables for Comparison
        $validate = true;
        $email_v = "/^[a-zA-Z0-9._]+@[a-z]+\.+[a-z]{2,3}$/";
        $pword_v = "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/";
        $name_v = "/^[A-Z][a-z]+$/";
        $email = "";

        // Variables for error printing
        $err_email = "";
        $err_name = "";
        $err_cpwd = "";
        $err_pwd = "";
        $err_sq = "";
        $err_sa = "";


        // Sign into the database
        $db = new mysqli("localhost","sandin2c","13370798","sandin2c");
        if ($db->connect_error) {
            die ("Connection failed: " . $db->connect_error);
        }

        // Let's grab the user inputed variables and trim off any extra spaces that may have accidentally found its way in there.
        $email = trim($_POST["su_email"]);
	    $password = trim($_POST["su_pwd"]);
        $cpassword = trim($_POST["su_cpwd"]);
        $uname = trim($_POST["su_name"]);
        $sanswer = trim($_POST["su_seca"]);
        $squestion = trim($_POST["su_secq"]);
        // Now, let's see if the email address is already taken.
        $q = "SELECT * FROM user WHERE user_email='$email'"; 
        $mysqli = $db->query($q); // checks with server
        if ($mysqli->num_rows > 0) { // if it found something
            $validate = false; 
            $err_email = "Email already in use.";
        }
        // If we know there is no duplicate for email., we need to verify that all the other variables are valid.
        else {
            // test email qualifications
            $emailMatch = preg_match($email_v, $email);
            if (($email == null) || ($email == "") || ($emailMatch == false)) { // if email is empty or if it doesn't follow the proper format, fail it.
                $validate = false;
                $err_email = "Invalid email entry. Please ensure it follows the format: hello@hi.com"
            }            
            // test password qualifications
            $pswdLen = strlen($password); // gets the length of the password
            $pswdMatch = preg_match($pword_v, $password); 
            if (($password == null) || ($password == "") || ($pswdLen < 8) || ($pswdMatch == false)) {
                $validate = false;
                $err_pwd = "Invalid passwword entry. Please ensure it is larger than 8 characters.";
            }
            // test confirm password qualifications
            $cpwdMatch = preg_match($password, $cpassword);
            if (($cpassword == null) || ($cpassword == "") || ($cpswdMatch == false)) {
                $validate = false;
                $err_cpwd = "Password confirmation must match password.";
            }
            // test name qualifications
            $nameMatch = preg_match($name_v, $uname);
            if (($uname == null) || ($uname == "") || ($nameMatch == false)) {
                $validate = false;
                $err_name = "Name cannot be blank.";
            }
            // test security question qualifications
            if (($squestion == null) || ($squestion == "")) { // basically as long as it isn't empty, we are happy
                $validate = false;
                $err_sq = "Security question cannot be blank."
            }
            // test security answer qualifications
            $sanswerLen = strlen($sanswer); 
            if (($sanswer == null) || ($sanswer == "") || ($sanswerLen < 6)) { // tests if security answer is empty or less than 6 characters
                $validate = false;
                $err_sa = "Security answer must be longer than 5 characters."
            }
    }
    // We have now validated everything. So, we can now import all the data entered into the database with no issues.
        if ($validate == true) {
            $q = "INSERT INTO user(user_email, user_password, user_question, user_answer, user_name) VALUES ('$email', '$password', '$squestion', '$sanswer', '$uname')";
            $db->query($q);
            header("location: index.html");
            exit();
        }
        else { // If validate is invalid, reload the signup page
            header("location: signup.html?error=invalidInput");
            exit();
        }
        // Last of all, we close the server connection.
        $db->close();
        exit(); 
    }
    */
?>