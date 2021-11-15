<!DOCTYPE HTML>
<html>
    <head>
        <title>Welcome to Character Generator.</title>
        <link rel="stylesheet" type="text/css" href="signup.css"/>
		<script type="text/javascript" src="signup.js"></script>
    </head>
    
    <body>
    <?php
            // VARIABLES
            $validate = true;
            $email_v = "/^[a-zA-Z0-9._]+@[a-z]+\.+[a-z]{2,3}$/";
            $pword_v = "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/";
	        $name_v = "/^[A-Z][a-z]+$/";
	        $uname_v = "/^pa-ZA-Z0-9_-]+$/";

            $email = "";
            $error = "";

            // SIGNUP
            if (isset($_POST["signed"])) { 
                $email = trim($_POST["su_email"]);
		        $password = trim($_POST["su_pwd"]);
                $cpassword = trim($_POST["su_cpwd"]);
                $name = trim($_POST["su_name"]);
                $sanswer = trim($_POST["su_seca"]);
                $squestion = trim($_POST["su_secq"]);
            }

            // SIGN UP DATABASE
            // $db = newsqli("type", "username", "password", "username");
            if ($db->connect_error) { // if for whatever reason, the connection failed...
                die ("Connection failed: " , $db->connect_error);
            }

            // if the email address is already taken, fail the validation
            if ($r1-> num_rows > 0) {
                $validate = false;
            }

            // if email isn't taken
            else {
                // test email qualifications
                $emailMatch = preg_match($email_v, $email);
                if (($email == null) || ($email == "") || ($emailMatch == false)) { // if email is empty or if it doesn't follow the proper format, fail it.
                    $validate = false;
                }

                // test password qualifications
                $pswdLen = strlen($password); // gets the length of the password
                $pswdMatch = preg_match($pword_v, $password); 
                if (($password == null) || ($password == "") || ($pswdLen < 8) || ($pswdMatch == false)) {
                    $validate = false;
                }

                // test confirm password qualifications
                $cpwdMatch = preg_match($password, $cpassword);
                if (($cpassword == null) || ($cpassword == "") || ($cpswdMatch == false)) {
                    $validate = false;
                }

                // test name qualifications
                $nameMatch = preg_match($name_v, $name);
                if (($name == null) || ($name == "") || ($nameMatch == false)) {
                    $validate = false;
                }

                // test security question qualifications
                if (($squestion == null) || ($squestion == "")) { // basically as long as it isn't empty, we are happy
                    $validate = false;
                }

                // test security answer qualifications
                $sanswerLen = strlen($sanswer); 
                if (($sanswer == null) || ($sanswer == "") || ($sanswerLen < 6)) { // tests if security answer is empty or less than 6 characters
                    $validate = false;
                }

                if ($validate == true) { // if the user's information has been validated, we can import them into the database
                    $q2 = "INSERT INTO Users(user_email, user_name, user_password, user_securityq, user_securitya) VALUES ('$email', '$username', '$password', '$squestion', '$sanswer')";
                    session_start(); // logs the user in
                    $_SESSION["email"] = $email;
                    $_SESSION["name"] = $name;
                    $db->close();
                    exit();
                }
                else {
                    echo "The email/password combination is invalid.";
                    $db->close;
                    exit();
                }

            }
        ?>
        <div class="form-container">
        <form type="hidden" name="SignUp" method="post">
            <div class="welcome">
                <h1>Welcome Adventurer!</h1>
                <p>To use our generator and begin saving your characters, <br>
                    please sign up by filling out the information below!</p>
            </div>
            <!-- <table>
                <tr>
                    <td><label id="email_msg" class="err_msg"></label></td>
                    <td align="right">Email: </td>
                    <td align="left"><input type="email" name="su_email" placeholder="Email"/></td>
                </tr>
                <tr> 
                    <td><label id="name_msg" class="err_msg"></label></td>
                    <td align="right">Name: </td>
                    <td align="left"><input type="name" name="su_name" placeholder="Name"/></td>
                </tr>
                <tr> 
                    <td><label id="pwd_msg" class="err_msg"></label></td>
                    <td align="right">Password: </td>
                    <td align="left"><input type="password" name="su_pwd" placeholder="Password"/></td>
                </tr>
                <tr> 
                    <td><label id="cpwd_msg" class="err_msg"></label></td>
                    <td align="right">Confirm Password: </td>
                    <td align="left"><input type="password" name="su_cpwd" placeholder="Confirm Password"/></td>
                </tr>
                <tr> 
                    <td><label id="secq_msg" class="err_msg"></label></td>
                    <td align="right">Security Question: </td>
                    <td align="left"><input type="text" name="su_secq" placeholder="Security Question"/></td>
                </tr>
                <tr> 
                    <td><label id="seca_msg" class="err_msg"></label></td>
                    <td align="right">Security Answer:: </td>
                    <td align="left"><input type="text" name="su_seca" placeholder="Security Answer"/></td>
                </tr>
            </table>
        --> 
        <input type="email" name="su_email" placeholder="Email"/>
        <label id="email_msg" class="err_msg"></label>
        <br> 
        <br> 
        <input type="name" name="su_name" placeholder="Name"/>
        <label id="name_msg" class="err_msg"></label>
        <br>
        <br> 
        <input type="password" name="su_pwd" placeholder="Password"/>
        <label id="pwd_msg" class="err_msg"></label>
        <br>
        <br> 
        <input type="password" name="su_cpwd" placeholder="Confirm Password"/>
        <label id="cpwd_msg" class="err_msg"></label>
        <br>
        <br> 
        <input type="text" name="su_secq" placeholder="Security Question"/>
        <label id="secq_msg" class="err_msg"></label>
        <br>
        <br> 
        <input type="text" name="su_seca" placeholder="Security Answer"/>
        <label id="seca_msg" class="err_msg"></label>
        <br>
        <br> 
        <input type="submit" id="signupButton" value="Submit" onclick="SignUpForm()"/>
        </form>
    </div>
    </body>
</html>