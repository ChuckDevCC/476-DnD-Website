<?php

// first, we must link together our "main" functions that are used across PHP files
// include 'includes/mainfunctions.php';

// this if statement waits to see if the user clicked "login"
  if (isset($_POST["submit"])){
    $username = $_POST["uname"];
    $pwd = $_POST["password"];
    
    if (emptyInputLogin($username,$pwd) != false) {
      header("location: index.html?error=emptyinput");
      exit();
    }
  loginUser($conn, $username,$pwd);
  }
  else{
    header("location: index.html");
    exit();
  }

  // this function tests if the user inputted anything.
  function emptyInputLogin($username,$pwd) {
    $result;
    if (empty($username) || empty($pwd)) {
      $result = true;
    }
    else{
      $result = false;
    }
    return $result;
  }

  // this function tests to see if the user's login exists in the system and if it is valid.
  function loginUser($conn, $username, $pwd) {
    // $db = connection();
    $db = new mysqli("localhost","sandin2c","13370798","sandin2c");
    if ($db->connect_error) {
      die ("Connection failed: " . $db->connect_error);
    }

    $q1 = "SELECT * FROM user WHERE user_name = '$username' AND user_password = '$pwd'";
    $r1 = $db->query($q1);

    if ($r1->num_rows > 0){
      header("Location: landing.php");
      session_start();
      $_SESSION["username"] = $username;
      $db->close();
      exit();
    }
    else{
      header("Location: index.html?error=badform");
      $db->close();
      exit();
    }

  }
?>
