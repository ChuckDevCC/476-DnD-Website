<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>DnD Character Sheets</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <?php
        // VARIABLES
        $validate = true;
        $email_v = "/^[a-zA-Z0-9._]+@[a-z]+\.+[a-z]{2,3}$/";
        $pword_v = "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/";
        $name_v = "/^[A-Z][a-z]+$/";
    
        $email = "";
        $error= "";

        // LOGIN INFORMATION 
        if (isset($_POST["submitted"])) {
          $email = trim($_POST["email"]);
          $password = trim($_POST["pwd"]);

          // connect to server: $db = new mysqli("localhost", "username", "password");
          if ($db->connect_error) {
              die ("Connection failed: " . $db->connect_error);
          }
          $q = "select * from Users where email = '$email' AND password = '$password'";
          $r = $db->query($q);
          $row = $r->fetch_assoc();
            
          if (($email != $row["email"]) && ($password != $row["password"])) {
            $validate = false;
          }  
          else {
            $emailMatch = preg_match($email_v, $email);
            if(($email == null) || ($email == "") || ($emailMatch == false)) {
              $validate = false;
            }  
            $pswdLen = strlen($password);
            $passwordMatch = preg_match($pword_V, $password);
            if (($password == null) || ($password == "") || ($pswdLen < 8) || ($passwordMatch == false)) {
                $validate = false;
            }
          }
          if ($validate == true) { // if all the conditions work, we can log the client in
            $q = "SELECT name FROM Users WHERE email = $email";
            $use = $db->query($q); // grabs the name of the user based off the email address
            session_start();
            $_SESSION["name"] = $row["name"];
            $_SESSION["email"] = $row["use"]; 
            // this will later redirect client to the homepage: header("Location: homepage.php");
            $db->close();
            exit();
            }
          else {
            $error = "The email/password combination was incorrect. Login failed.";
            $db->close();
          }
      }

    ?>
  </head>
  <body>
    <div class="form-container">
      <div class="loginbox">
        <img src="dice.jpg" class= "dice">
        <h1 id="welcome">LOGIN BELOW</h1>
        <form id="login" method="post">
        <input type = "text" name ="email" placeholder="Email">
        <input type = "password" name="pword" placeholder= "Password">
        <input type = "submit" name="submitted" value="Login">
        <a href="signup.php">
          <input type = "submit" name="" value="Create Your Account">
        </a>
        <a href="passwordreset.php">
          <input type = "submit" name="" value="Forgot Your Password?">
        </form>
      </div>
      <div class="credbutton">
        <ul>
          <li><a href="credits.html">Credits</a></li>
        </ul>
      </div>
    </div>
  </body>
</html>