// goal: on the result's page, it will dynamically change the image based off of the character class.
function imagePrinter() {
    let character_class = document.getElementById("Class");
    if (character_class == "monk" || character_class == "druid") {
        document.getElementById("charImage").src="pictures/stick.png";
    }
    else if (character_class == "barbarian") {
        document.getElementById("charImage").src="pictures/axe.png";
    }
    else if (character_class == "cleric" || character_class == "fighter") {
        document.getElementById("charImage").src="pictures/shield.png";
    }
    else if (character_class == "ranger" || character_class == "rogue") {
        document.getElementById("charImage").src="pictures/archery.png";
    }
    else if (character_class == "bard") {
        document.getElementById("charImage").src="pictures/lyre.png";
    }
    else if (character_class == "wizard") {
        document.getElementById("charImage").src="pictures/book.png";
    }
    else if (character_class == "warlock" || character_class == "sorcerer") {
        document.getElementById("charImage").src="pictures/magic.png";
    }
}