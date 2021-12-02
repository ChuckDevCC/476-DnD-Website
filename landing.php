<html lang="en" dir="ltr">
  <head>
      <meta charset="utf-8">
      <title>DnD Character Creator</title>
      <link rel="stylesheet" type="text/css" href="landing.css">
      <script src="recognizeInput.js"></script>

      <?php session_start(); ?>
  </head>
    <body>
      <div class="buttonwrapper">
        <h1 id = "userHolder">Logged in for <?php echo $_SESSION["username"]; ?></h1>
        <div id = "quizbtn" class= "btn">
          <p id = "quizTag">Take the Quiz!</p>
        </div>
        <div id = "rndbtn" class = "btn">
          <p id = "rndTag">Randomize For Me</p>
        </div>
        <div id = "charbtn" class = "btn">
          <p id = "charTag" onClick="viewCharacter()">See my Characters</p>
        </div>
        <div id = "logbtn" class = "btn">
          <p id = "logTag">Log-out</p>
        </div>
      </div>
    </body>
    <script>
      var quizbutton = document.getElementById("quizbtn");
      var randbutton = document.getElementById("rndbtn");
      var charbutton = document.getElementById("charbtn");
      var logbutton = document.getElementById("logbtn");


      quizbutton.addEventListener("click",function(){
        window.location.href = "quiz.html";
      });

      randbutton.addEventListener("click",function(){
        window.location.href = "randresult.html";
      });

      logbutton.addEventListener("click",function(){

        window.location.href = "logout.php";
      });

    </script>
    </html>
