//"buckets" we use to choose what class the user aligns with most.
barbarian = 0;
bard = 0;
cleric = 0;
druid = 0;
fighter = 0;
monk = 0;
paladin = 0;
ranger = 0;
rogue = 0;
sorcerer = 0;
warlock = 0;
wizard = 0;
artificer = 0;

lawful = 0;
neutral1 = 0;
chaotic = 0;

good = 0;
neutral2 = 0;
evil = 0;

var questionHolder = document.getElementById("question");
var choice1 = document.getElementById("btncontainer1");
var choice2 = document.getElementById("btncontainer2");
var choice3 = document.getElementById("btncontainer3");
var choice4 = document.getElementById("btncontainer4");
var choice5 = document.getElementById("btncontainer5");

var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");

var questions = ["What is your dream vacation?", "What is your favourite meal?", "You are stuck in a burning building on the top floor; how do you escape?", "What would you do in a street fight?", "What workout would you be willing to learn?", "What's your favourite subject in school?", "What virtue do you align with the most?"];
var q1answers = ["A thriving city", "Atop a quiet mountain", "Camping in a forest", "On a nice resort", "Just some alone time"];
var q2answers = ["Anything with some good meat", "Something comfortable", "Whatever I can throw together", "Any new recipe I find", "Something quick I picked up"];
var q3answers = ["Jump out the window", "Move obstacles as best you can", "Pray you make it out", "Put together something to stop the fire", "Break through the floor"];
var q4answers = ["Use your fists", "Threaten to sue", "Fight dirty", "Try to garner crowd support", "Negotiate peace"];
var q5answers = ["Pull-ups", "Rock-climbing", "Cardio", "Meditation", "Deadlifts"];
var q6answers = ["Literature", "Religious Studies", "Gym Class", "Physics", "Art"];
var q7answers = ["Honor", "Empathy", "Wisdom", "Bravery", "Spirit"];


//our iterator for questions
let qnum = 0;



questionHolder.innerHTML = questions[0];
a1.innerHTML = q1answers[0];
a2.innerHTML = q1answers[1];
a3.innerHTML = q1answers[2];
a4.innerHTML = q1answers[3];
a5.innerHTML = q1answers[4];

//function(question number, answer chosen)
choice1.addEventListener("click", function() {
  switch (qnum) {
    case 0:
      procQuestion1(1);
      break;
    case 1:
      procQuestion2(1);
      break;
    case 2:
      procQuestion3(1);
      break;
    case 3:
      procQuestion4(1);
      break;
    case 4:
      procQuestion5(1);
      break;
    case 5:
      procQuestion6(1);
      break;
    case 6:
      procQuestion7(1);
      break;
    case 7:
      procMoralQuestion(1);
      break;
    case 8:
      procBehavQuestion(1);
      break;

  }

});
choice2.addEventListener("click", function() {
  switch (qnum) {
    case 0:
      procQuestion1(2);
      break;
    case 1:
      procQuestion2(2);
      break;
    case 2:
      procQuestion3(2);
      break;
    case 3:
      procQuestion4(2);
      break;
    case 4:
      procQuestion5(2);
      break;
    case 5:
      procQuestion6(2);
      break;
    case 6:
      procQuestion7(2);
      break;
    case 7:
      procMoralQuestion(2);
      break;
    case 8:
      procBehavQuestion(2);
      break;
  }
});
choice3.addEventListener("click", function() {
  switch (qnum) {
    case 0:
      procQuestion1(3);
      break;
    case 1:
      procQuestion2(3);
      break;
    case 2:
      procQuestion3(3);
      break;
    case 3:
      procQuestion4(3);
      break;
    case 4:
      procQuestion5(3);
      break;
    case 5:
      procQuestion6(3);
      break;
    case 6:
      procQuestion7(3);
      break;
    case 7:
      procMoralQuestion(3);
      break;
    case 8:
      procBehavQuestion(3);
      break;
  }
});
choice4.addEventListener("click", function() {
  switch (qnum) {
    case 0:
      procQuestion1(4);
      break;
    case 1:
      procQuestion2(4);
      break;
    case 2:
      procQuestion3(4);
      break;
    case 3:
      procQuestion4(4);
      break;
    case 4:
      procQuestion5(4);
      break;
    case 5:
      procQuestion6(4);
      break;
    case 6:
      procQuestion7(4);
      break;
    case 7:
      procMoralQuestion(4);
      break;
    case 8:
      procBehavQuestion(4);
      break;
  }
});
choice5.addEventListener("click", function() {
  switch (qnum) {
    case 0:
      procQuestion1(5);
      break;
    case 1:
      procQuestion2(5);
      break;
    case 2:
      procQuestion3(5);
      break;
    case 3:
      procQuestion4(5);
      break;
    case 4:
      procQuestion5(5);
      break;
    case 5:
      procQuestion6(5);
      break;
    case 6:
      procQuestion7(5);
      break;
    case 7:
      procMoralQuestion(5);
      break;
    case 8:
      procBehavQuestion(5);
      break;
  }
});

function procQuestion1(anum) {
  switch (anum) {
    case 1:
      bard++;
      artificer++;
      break;
    case 2:
      monk++;
      wizard++;
      break;
    case 3:
      druid++;
      barbarian++;
      break;
    case 4:
      sorcerer++;
      break;
    case 5:
      ranger++;
      rogue++;
      break;
  }
  questionHolder.innerHTML = questions[1];
  a1.innerHTML = q2answers[0];
  a2.innerHTML = q2answers[1];
  a3.innerHTML = q2answers[2];
  a4.innerHTML = q2answers[3];
  a5.innerHTML = q2answers[4];
  qnum++;
  return;
}

function procQuestion2(anum) {
  //process questions
  switch (anum) {
    case 1:
      barbarian++;
      break;
    case 2:
      cleric++;
      druid++;
      break;
    case 3:
      warlock++;
      sorcerer++;
      break;
    case 4:
      artificer++;
      ranger++;
      break;
    case 5:
      wizard++;
      break;
  }
  //setup next question
  questionHolder.innerHTML = questions[2];
  a1.innerHTML = q3answers[0];
  a2.innerHTML = q3answers[1];
  a3.innerHTML = q3answers[2];
  a4.innerHTML = q3answers[3];
  a5.innerHTML = q3answers[4];
  qnum++;
  return;
}

function procQuestion3(anum) {
  //process questions
  switch (anum) {
    case 1:
      rogue++;
      ranger++;
      break;
    case 2:
      fighter++;
      break;
    case 3:
      paladin++;
      monk++;
      break;
    case 4:
      artificer++;
      druid++;
      break;
    case 5:
      barbarian++;
      warlock++;
      break;
  }
  questionHolder.innerHTML = questions[3];
  a1.innerHTML = q4answers[0];
  a2.innerHTML = q4answers[1];
  a3.innerHTML = q4answers[2];
  a4.innerHTML = q4answers[3];
  a5.innerHTML = q4answers[4];
  qnum++;
  return;
}

function procQuestion4(anum) {
  //process questions
  switch (anum) {
    case 1:
      fighter++;
      paladin++;
      break;
    case 2:
      sorcerer++;
      wizard++;
      break;
    case 3:
      warlock++;
      rogue++;
      break;
    case 4:
      bard++;
      barbarian++;
      break;
    case 5:
      monk++;
      cleric++;
      break;
  }
  questionHolder.innerHTML = questions[4];
  a1.innerHTML = q5answers[0];
  a2.innerHTML = q5answers[1];
  a3.innerHTML = q5answers[2];
  a4.innerHTML = q5answers[3];
  a5.innerHTML = q5answers[4];
  qnum++;
  return;
}

function procQuestion5(anum) {
  //process questions
  switch (anum) {
    case 1:
      rogue++;
      sorcerer++;
      break;
    case 2:
      druid++;
      artificer++;
      break;
    case 3:
      ranger++;
      bard++;
      break;
    case 4:
      cleric++;
      break;
    case 5:
      paladin++;
      fighter++;
      break;
  }

  questionHolder.innerHTML = questions[5];
  a1.innerHTML = q6answers[0];
  a2.innerHTML = q6answers[1];
  a3.innerHTML = q6answers[2];
  a4.innerHTML = q6answers[3];
  a5.innerHTML = q6answers[4];
  qnum++;
  return;
}

function procQuestion6(anum) {
  //process questions
  switch (anum) {
    case 1:
      rogue++;
      wizard++;
      break;
    case 2:
      paladin++;
      monk++;
      break;
    case 3:
      fighter++;
      cleric++;
      break;
    case 4:
      warlock++;
      ranger++;
      break;
    case 5:
      bard++;
      artificer++;
      break;
  }
  questionHolder.innerHTML = questions[6];
  a1.innerHTML = q7answers[0];
  a2.innerHTML = q7answers[1];
  a3.innerHTML = q7answers[2];
  a4.innerHTML = q7answers[3];
  a5.innerHTML = q7answers[4];
  qnum++;
  return;
}

function procQuestion7(anum) {
  //process question
  switch (anum) {
    case 1:
      fighter++;
      paladin++;
      break;
    case 2:
      monk++;
      cleric++;
      break;
    case 3:
      wizard++;
      sorcerer++;
      break;
    case 4:
      barbarian++;
      bard++;
      break;
    case 5:
      druid++;
      warlock++;
      break;
  }
  chooseClass();
  return;
}

function chooseClass() {
  //algorithm:
  //add barbarian as just a base case.
  // iterate through all the classes,
  // compare the max number, and swap if
  // higher than the current maxClass.
  // if there are multiple of the same number,
  // coinflip for it.
  let maxBucket = 0;
  //all classes except barb.
  let allClasses = [bard, cleric, druid, fighter, monk, paladin, ranger,
    rogue, sorcerer, warlock, wizard, artificer
  ];
  let allClassesString = ["bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger",
    "rogue", "sorcerer", "warlock", "wizard", "artificer"
  ];
  let classChoice = [];

  //make barbarian our basecase.
  maxBucket = barbarian;
  let maxClass = [barbarian];
  classChoice = ["barbarian"];

  for (var i = 12; i > 0; i--) {

    if (allClasses[i] > maxBucket) {
      //case if we have more than one bucket
      for (var j = maxClass.length; j > 0; j--) {
        maxClass.pop();
        classChoice.pop();
      }

      maxClass.push(allClasses[i]);
      classChoice.push(allClassesString[i]);
      maxBucket = allClasses[i];

    } else if (allClasses[i] == maxBucket) {
      maxClass.push(allClasses[i]);
      classChoice.push(allClassesString[i]);
    }
  }

  for (var i = 0; i < maxClass.length; i++) {
    alert(classChoice[i] + " " + maxClass[i]);

  }


  //Now our Array is finished. Figure out what class the user got.
  let finalClassChoice = "";

  if (maxClass.length == 1) {
    finalClassChoice = classChoice[0];
  } else {
    //randomly choose the class.
    let randChoice = Math.floor(Math.random() * maxClass.length);
    finalClassChoice = classChoice[randChoice];
  }

  alert(finalClassChoice);
  chooseRace(finalClassChoice);
  return;
}

function chooseRace(finalClassChoice) {
  //race options that will select based on your Class.
  let int_race = ["dragonborn", "human", "gnome"];
  let str_race = ["dwarf", "human", "half-orc"]
  let dex_race = ["elf", "human", "halfling"];
  let cha_race = ["dragonborn", "human", "half-elf", "tiefling"];
  let wis_race = ["wood-elf", "mountain-dwarf", "Human"];

  let finalRaceChoice = "";
  let randChoice = 0;

  switch (finalClassChoice) {
    //strength classes
    case "paladin":
    case "barbarian":
    case "fighter":
      randChoice = Math.floor(Math.random() * 3);
      finalRaceChoice = str_race[randChoice];
      break;
    case "rogue":
    case "ranger":
    case "monk":
      randChoice = Math.floor(Math.random() * 3);
      finalRaceChoice = dex_race[randChoice];
      break;
    case "wizard":
    case "artificer":
      randChoice = Math.floor(Math.random() * 3);
      finalRaceChoice = int_race[randChoice];
      break;
    case "bard":
    case "sorcerer":
    case "warlock":
      randChoice = Math.floor(Math.random() * 4);
      finalRaceChoice = cha_race[randChoice];
      break;
    case "cleric":
    case "druid":
      randChoice = Math.floor(Math.random() * 3);
      finalRaceChoice = wis_race[randChoice];
      break;
    default:
      finalRaceChoice = "human"
  }

  alert(finalRaceChoice);
  //Now we move to The morality Questions,
  // to choose Evil and Good and
  // Lawful and Chaotic.
  questionHolder.innerHTML = "You accidentally commited a crime, what do you do?"
  a1.innerHTML = "Do nothing and hope for the best";
  a2.innerHTML = "Turn yourself in";
  a3.innerHTML = "Hide the evidence";
  a4.innerHTML = "Pin it on a fake person";
  a5.innerHTML = "Confide in a friend";
  qnum++;
  return;

}

function procMoralQuestion(anum) {
  //process questions


  switch (anum) {
    case 1:
      neutral2 = 1;
      break;
    case 2:
      good = 1;
      break;
    case 3:
      evil = 1;
      break;
    case 4:
      evil = 1;
      break;
    case 5:
      good = 1;
      break;
  }
  questionHolder.innerHTML = "How clean is your house or room right now?"
  a1.innerHTML = "Spotless";
  a2.innerHTML = "Decently clean";
  a3.innerHTML = "There's a bit of stuff around";
  a4.innerHTML = "It needs a clean";
  a5.innerHTML = "There is stuff everywhere";
  qnum++;
  return;
}

function procBehavQuestion(anum) {
  //process questions


  switch (anum) {
    case 1:
      lawful = 1;
      break;
    case 2:
      lawful = 1;
      break;
    case 3:
      neutral1 = 1;
      break;
    case 4:
      chaotic = 1;
      break;
    case 5:
      chaotic = 1;
      break;
  }

  if (lawful == 1) {
    if (good == 1) {
      alert("lawful good");
    } else if (evil == 1) {
      alert("lawful evil");
    } else if (neutral2 == 1) {
      alert("lawful neutral");
    }
  }
  if (neutral1 == 1) {
    if (good == 1) {
      alert("neutral good");
    } else if (evil == 1) {
      alert("neutral evil");
    } else if (neutral2 == 1) {
      alert("true neutral");
    }
  }
  if (chaotic == 1) {
    if (good == 1) {
      alert("chaotic good");
    } else if (evil == 1) {
      alert("chaotic evil");
    } else if (neutral2 == 1) {
      alert("chaotic neutral");
    }
  }
  return;
}
