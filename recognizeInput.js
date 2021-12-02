function saveCharacter() { 
    alert("Unfortunately, characters are unable to be saved at this time.");
}

function viewCharacter() {
    alert("Unfortunately, previously created characters are unable to be viewed at this time.");
}

function forgotPassword() {
    // VARIABLES DEFINED BELOW
    // ------------------------------------------------------
    var e = document.forms.ForgotPassword.email.value; // email
    var email_v = /^[a-zA-Z0-9._]+@[a-z]+\.+[a-z]{2,3}$/; // follows format of abc12.hi@hi.ca
    var error = ""; // predefine our ongoing error message as blank
    document.getElementById("err_msg").innerHTML = "";

    // email verifier! ensure it isn't empty and that people follow the format of abc@hi.com
    if (e == null || e == "" || email_v.test(e) == false) {
        error = "Invalid email format. Example: abc@hi.com<br/>";
        document.getElementById("err_msg").innerHTML = error;
        document.getElementById("err_msg").style.backgroundColor = "red";
        document.getElementById("err_msg").style.color = "white";
        document.getElementById("err_msg").style.padding = "20px";
    }
    else {
        alert("Unfortunately, this feature is unavailable at this time. You will be redirected to the landing page shortly.");
        window.location.replace("landing.php");
    }
}

function toIndex() {
    window.location.replace("landing.php");
}

function SignUpForm() {
    // alert("Function called");
    // VARIABLES DEFINED BELOW
    // ------------------------------------------------------
    var result = true; // if this remains true, things will be sent to a server
    var b = document.forms.SignUp.su_password.value; // password
    var c = document.forms.SignUp.su_cpassword.value; // confirm password
    var e = document.forms.SignUp.su_email.value; // email
    var j = document.forms.SignUp.su_name.value; // name
    var k = document.forms.SignUp.su_securityq.value; // security question
    var l = document.forms.SignUp.su_securitya.value; // security answer

    // ------------------------------------------------------

    // REGEX DEFINED BELOW
    // ------------------------------------------------------
    var email_v = /^[a-zA-Z0-9._]+@[a-z]+\.+[a-z]{2,3}$/; // follows format of abc12.hi@hi.ca
    var pword_v = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // ensures password has at least 1 number, at least 1 special character,  and that all letters are valid
    // ------------------------------------------------------

    // alert("REGEX defined");
    // ERROR MESSAGES GATHERED BELOW AND CLEARED
    // ------------------------------------------------------
    var error = ""; // predefine our ongoing error message as blank
    document.getElementById("err_msg").innerHTML = "";
    // ------------------------------------------------------

    // alert("Variables defined.");
    // CODE BELOW TO TEST THINGS
    // ------------------------------------------------------
    // password verifier
    if (b == null || b == "" || pword_v.test(b) == false) {
        error = error + "Invalid password format! Ensure it has 8+ characters, at least 1 number, and at least 1 symbol.<br/>";
        result = false;
    }

    // ensure confirm password matches password
   if (c != b) {
        error = error + "Passwords do not match.<br/>";
        result = false;
   }

   // email verifier! ensure it isn't empty and that people follow the format of abc@hi.com
    if (e == null || e == "" || email_v.test(e) == false) {
        error = error + "Invalid email format. Example: abc@hi.com<br/>";
      result = false;
    }

    // if name is empty, error message
    if (j == null || j == "") {
        error = error + "Name cannot be empty.<br/>";
        result = false;
    }

    // if security question is empty, error message
    if (k == null || k == "") {
        error = error + "Security question cannot be empty.<br/>";
        result = false;
    }
    
    // if security answer is empty, error message
    if (l == null || l == "" || l.length < 6) {
        error = error + "Security answer must be 6 characters long or greater.<br/>";
        result = false;
    }
    // ------------------------------------------------------

     // If the result is false, print the error message
     if (result == false) {
        // We must first make it visible so users can obviously see what is wrong.
        document.getElementById("err_msg").innerHTML = error;
        document.getElementById("err_msg").style.backgroundColor = "red";
        document.getElementById("err_msg").style.color = "white";
        document.getElementById("err_msg").style.padding = "20px";
    }
    // If all else does not fail, sign up the user and let them know it worked!
    else {
        alert("No errors found! Good work, " + j + "! Unfortunately, the Signup PHP is not functional. We will redirect you to the internals manually.");
        window.location.replace("landing.php");
    }
}

function loginForm() {
    // this function borrows code from signUpForm
    // VARIABLES
    var result = true; // if this remains true, things will be sent to a server
    var b = document.forms.SignIn.password.value; // password
    var c = document.forms.SignIn.uname.value; // username
    var pword_v = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // ensures password has at least 1 number, at least 1 special character,  and that all letters are valid
  

    // password verifier
    if (b == null || b == "" || pword_v.test(b) == false) {
        error = error + "Invalid password format! Ensure it has 8+ characters, at least 1 number, and at least 1 symbol.<br/>";
        result = false;
    }
    if (c == null || c == "") {
        error = error + "Invalid password format! Ensure it has 8+ characters, at least 1 number, and at least 1 symbol.<br/>";
        result = false;
    }
    // If the result is false, print the error message
    if (result == false) {
        // We must first make it visible so users can obviously see what is wrong.
        document.getElementById("err_msg").innerHTML = error;
        document.getElementById("err_msg").style.backgroundColor = "red";
        document.getElementById("err_msg").style.color = "white";
        document.getElementById("err_msg").style.padding = "20px";
    }
    // If all else does not fail, sign up the user and let them know it worked!
    else {
        alert("No errors found!");
    }
}