
let myCookie = document.cookie;
var alignment = ["Chaotic Evil", "Neutral Evil", "Lawful Evil", "Chaotic Neutral", "True Neutral", "Lawful Neutral", "Chaotic Good", "Neutral Good", "Lawful Good"];
// 9 races from Player's Handbook
var race_option = ["dwarf", "elf", "halfling", "human", "dragonborn", "gnome", "half-elf", "half-orc", "tiefling"];
// 2 subraces for dwarves
var sub_dwarf = ["hill", "mountain"];
// 3 subraces for elfs
var sub_elf = ["high", "wood", "drow"];
// 2 subraces for halflings
var sub_halfling = ["lightfoot", "stout"];
// 9 subraces for humans
var sub_human = ["calishite", "chondathan", "damaran", "illuskan", "mulan", "rashemi", "shou", "tethyrian", "turami"];
// 10 subraces for dragonborns
var sub_dragonborn = ["black", "blue", "brass", "bronze", "copper", "gold", "green", "red", "silver", "white"];
// 2 subraces for gnomes
var sub_gnome = ["forest", "rock"];

// -------------------------------------

/* CLASSES */

// 12 classes from Player's Handbook

var class_option = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard", "artificer"];

// WARLOCK
// Otherworldly Patron Options
var warlock_patron = ["archfey", "fiend", "great old one", "the celestial", "the hexblade", "fathomless", "genie"];
var warlock_genie = ["dao", "dijinni", "efreeti", "marid"];
// SORCERER
// Origins
var sorcerer_sub = ["draconic bloodline", "wild magic", "divine soul", "shadow magic", "aberrant mind", "clockwork soul"];
var sorcerer_draconic = ["black", "blue", "brass", "bronze", "copper", "gold", "green", "red", "silver", "white"];

// RANGER
// Favored Enemy
var ranger_favored = ["aberrations", "beasts", "celestials", "constructs", "dragons", "elementals", "fey", "fiends", "giants", "humanoids", "monstrosities", "oozes", "plants", "undead"];

// FIGHTER
// Fighting Style
var fighter_style = ["archery", "defense", "dueling", "great weapon fighting", "protection", "two-weapon fighting", "blind fighting", "interception", "superior technique", "thrown weapon fighting", "unarmed fighting"];
var fighter_maneuver = ["ambush", "bait and switch", "brace", "commanding presence", "grappling strike", "quick toss", "tactical assessment"];

// CLERIC
// Divine Domain
var cleric_domain = ["knowledge", "life", "light", "nature", "tempest", "trickery", "war", "peace", "order", "twilight"];


// -------------------------------------

/* MAGIC */
// ARTIFICER SPELLS
var artificer_cantrip = ["acid splash", "booming blade", "create bonfire", "dancing lights", "fire bolt", "frostbite", "greenflame blade", "guidance", "light", "lightning lure", "mage hand", "magic stone", "mending", "message", "poison spray", "prestidigitaton", "ray of frost", "resistance", "shocking grasp", "spare the dying", "sword burst", "thorn whip", "thunderclap"];
var artificer_1stlevel = ["absorb elements", "alarm ritual", "catapult", "detect magic ritual", "disguise self", "expeditious retreat", "faerie fire", "false fire", "feather fall", "grease", "identify ritual", "jump", "longstrider", "purify food and drink", "sancutary", "Snare", "tasha's caustic brew"];


// BARD SPELLS
var bard_cantrip = ["blade ward", "dancing lights", "friends", "light", "mage hand", "mending", "message", "minor illusion", "prestidigitation", "true strike", "vicious mockery"];
var bard_1stlevel = ["animal friendship", "bane", "charm person", "comprehend languages", "cure wounds", "detect magic", "disguise self", "dissonant whispers", "faerie fire", "feather fall", "healing word", "heroism", "identify", "illusory script", "longstrider", "silent image", "sleep", "speak with animals", "tasha's hideous laughter", "thunderwave", "unseen servant", "color spray", "command"];
// CLERIC SPELLS
var cleric_cantrip = ["guidance", "light", "mending", "resistance", "sacred flame", "spare the dying", "thaumaturgy"];
var cleric_1stlevel = ["bane", "bless", "command", "create or destroy water", "cure wounds", "detect evil and good", "detect magic", "detect poison and disease", "guiding bolt", "healing word", "inflict wounds", "protection from evil and good", "purify food and drink", "sanctuary", "shield of faith"];
    // domain spells
    var cleric_order1st = ["command, heroism"];
    var cleric_peace1st = ["heroism", "sanctuary"];
    var cleric_twilight1st = ["faerie fire", "sleep"];
    var cleric_knowledge1st = ["command", "identify"];
    var cleric_life1st = ["bless", "cure wounds"];
    var cleric_light1st = ["burning hands", "faerie fire"];
    var cleric_nature1st = ["animal friendship", "speak with animals"];
    var cleric_tempest1st = ["fog cloud", "thunderwave"];
    var cleric_trickery1st = ["charm person", "disguise self"];
    var cleric_war1st = ["divine favor", "shield of faith"];
// DRUID SPELLS
var druid_cantrip = ["druidcraft", "guidance", "mending", "poison spray", "produce flame", "resistance", "shillelagh", "thorn whip"];
var druid_1stlevel = ["animal friendship", "charm person", "create or destroy water", "cure wounds", "detect magic", "detect poison and disease", "entangle", "faerie fire", "fog cloud", "goodberry", "healing word", "jump", "longstrider", "purify food and drink", "speak with animals", "thunderwave", "protection from evil and good"];
// PALADIN SPELLS
var paladin_1stlevel = ["bless", "command", "compelled duel", "cure wounds", "detect evil and good", "detect magic", "detect poison and disease", "divine favor", "heroism", "protection from evil and good", "purify food and drink", "smearing smite", "shield of faith", "thunderous smite", "wrathful smite"];
// RANGER SPELLS
var ranger_1stlevel = ["alarm", "animal friendship", "cure wounds", "detect magic", "detect poison and disease", "ensnaring strike", "fog cloud", "goodberyy", "hail of thorns", "hunters mark", "jump", "longstrider", "speal with animals"];
// SORCERER SPELLS
var sorcerer_cantrip = ["acid splash", "blade ward", "chill touch", "dancing lights", "fire bolt", "friends", "light", "mage hand", "mending", "message", "minor illusion", "poison spray", "prestidigtation", "ray of frost", "shocking grasp", "true strike", "booming blade", "greenflame blade", "lightning lure", "mind sliver", "sword burst"];
var sorcerer_1stlevel = ["burning hands", "charm person", "chromatic orb", "color spray", "comprehend languages", "detect magic", "disguise self", "expeditious retreat", "false life", "feather fall", "fog cloud", "jump", "mage armor", "magic missile", "ray of sickness", "shield", "silent image", "sleep", "thunderwave", "witch bolt", "grease", "tasha's caustic brew"];
    // origin spells
    var sorcerer_aberrant1st = ["arms of hadar", "dissonant whispers", "mind sliver"];
    var sorcerer_clockwork1st = ["alarm", "protection from evil and good"];
// WARLOCK SPELLS
var warlock_cantrip = ["blade ward", "chill touch", "eldritch blast", "friends", "mage hand", "minor illusion", "poison spray", "pretidigitation", "true strike", "booming blade", "greenflame blade", "lightning lure", "mind sliver", "sword burst"];
var warlock_1stlevel = ["armor of agathys", "arms of hadar", "charm person", "comprehend languages", "expeditious retreat", "hellish rebuke", "hex", "illusory script", "protection from evil and good", "unseen servant", "witch bolt"];
    // otherworldly patron spells
    var warlock_fathomless1st = ["create or destroy water", "thunderwaves"];
    var warlock_genie1st = ["detect evil and good"];
    var warlock_genie_dao1st = ["sanctuary"];
    var warlock_genie_djinni1st = ["thunderwave"];
    var warlock_genie_efreeti1st = ["burning hands"];
    var warlock_genie_marid1st = ["fog cloud"];
    var warlock_archfey1st = ["faerie fire", "sleep"];
    var warlock_fiend1st = ["burning hands", "command"];
    var warlock_greatoldone1st = ["dissonant whispers", "tasha's hideous laughter"];
// WIZARD SPELLS
var wizard_cantrip = ["acid splash", "blade ward", "chill touch", "dancing lights", "fire bolt", "friends", "light", "mage hand", "mending", "message", "minor illusion", "poison spray", "prestidigitation", "ray of frost", "shocking grasp", "true strike", "booming blade", "greenflame blade", "lightning lure", "mind sliver", "sword burst"];
var wizard_1stlevel = ["alarm", "burning hands", "charm person", "chromatic orb", "color spray", "comprehend languages", "detect magic", "disguise self", "expeditious retreat", "false life", "feather fall", "find familiar", "fog cloud", "grease", "identify", "illusory script", "jump", "longstrider", "mage armor", "magic missile", "protection from evil and good", "ray of sickness", "shield", "silent image", "sleep", "tasha's hideous laughter", "tenser's floating disk", "thunderwave", "unseen servant", "witch bolt", "tasha's caustic brew"];

// -------------------------------------

/* ITEMS */

// Weapons
var weapon_simplemelee = ["club", "dagger", "greatclub", "handaxe", "javelin", "light hammer", "mace", "quarterstaff", "sickle", "spear"];
var weapon_simpleranged = ["crossbow light", "dart", "shortbow", "sling"];
var weapon_martialmelee = ["battleaxe", "flail", "glaive", "greataxe", "greatsword", "halberd", "lance", "longsword", "maul", "morningstar", "pike", "rapier", "scimitar", "shortsword", "trident", "war_pick", "warhammer", "whip"];
var weapon_martialranged = ["blowgun", "crossbow hand", "crossbow heavy", "longbow", "net"];

// Armor
var armor_light = ["padded", "leather", "studded leather"];
var armor_medium = ["hide", "chain shirt", "scale mail", "breatplate", "half plate"];
var armor_heavy = ["ring mail", "chain mail", "splint", "plate"];

// Equipment
var equipment_pack = ["burglar's pack", "diplomat's pack", "dungeoneer's pack", "entertainer's pack", "explorer's pack", "priest's pack", "scholar's pack"];
var equipment_instruments = ["bagpipes", "drum", "dulcimer", "flute", "lute", "lyre", "horn", "pan flute", "shawm", "viol"];
var equipment_artisan = ["alchemist's supplies", "brewer's supplies", "calligrapher's supplies", "carpenter's tools", "cartographer's tool", "cobbler's tools", "cook's utensils", "glassblower's tools", "jeweler's tools", "leatherworker's tools", "mason's tools", "painter's supplies", "potter's tools", "smith's tools", "tinker's tool", "weaver's tool", "woodcarver's tools"];
var equipment_gaming = ["dice set", "dragonchess set", "playing card set", "three-dragon ante set"];

// Vehicles
var vehicle_mount = ["camel", "donkey", "elephant", "horse", "mastiff", "pony", "warhorse"];
var vehicle_waterborne = ["galley", "keelboat", "longsoap", "rowboat", "sailing_ship", "warship"];

// -------------------------------------

/* BACKGROUNDS */
var background = ["acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "noble", "outlander", "sage", "sailor", "soldier", "urchin"];

// Alignments

// Reasons for becoming a [background]
var reason_acolyte = ["I ran away from home at an early age and found refuge in a temple.", "My family gave me to a temple, since they were unable or unwilling to care for me.", "I grew up in a household with strong religious convictions. Entering the service of one or more gods seemed natural", "An impassioned sermon struck a chord deep in my soul and moved me to serve the faith.", "I followed a childhood friend, a respected acquintance, or someone I loved into religious service.", "After encoutering a true servant of the gods, I was so inspired that I immediately entered the service of a religious group."];
var reason_charlatan = ["I was left to my own devices, and my knack for manipulating others helped me survive.", "I learned early on that people are gullible and easy to exploit.", "I often got in trouble, but I managed to talk my way out of it every time.", "I took up with a confidence artist, from whom I learned my craft.", "After a charlatan fleeced my family, I deicded to learn the trade so I would never be fooled by such deception again.", "I was poor or I feared becoming poor, so I learned the tricks I needed to keep myself out of poverty."];
var reason_criminal = ["I resented authority in my younger days and saw a life of crime as the best way to fight against tyranny and oppression.", "Necessity forced to take up the life, since it was the only way I could survive.", "I fell in wiht a gang of reprobates and ne'er-do-wells, and I learned my specialty from them.", "A parent or relative taught my criminal specialty to prepare me for the family business.", "I left home and found a place in a thieves' guilt or some other criminal organization.", "I was always bored, so I turned to crime to pass the time and discovered I was quite good at it."];
var reason_entertainer = ["Members of my family made ends meet by performing, so it was fitting for me to follow their example.", "I always had a keen insight into other people, enough so that I could make them laugh or cry with my stories or songs.", "I ran away from home to follow a minstrel troupe.", "I saw a bard perform once, and I knew form that moment on what I was born to do.", "I earned coin by performing on street corners and eventually made a name for myself.", "A traveling entertainer took me in and taught me the trade."];
var reason_folkhero = ["I learned what was right and wrong from my family.", "I was always enarmored by tales of heroes and wished I could be something more than ordinary.", "I hated my mundane life, so when it was time for someone to step up and do the right thing, I took my chance.", "A parent or one of my relatives was an adventurer, and I was inspired by that person's courage.", "A mad old hermit spoke a prophecy when I was born, saying that I would accomplish great things.", "I have always stood up for those who are weaker than I am."];
var reason_guildartisan = ["I was apprenticed to a master who taught me the guild's business.", "I helped a guild artisan keep a secret or complete a task, and in return I was taken on as an apprentice.", "One of my family members who belonged to the guild who made a place for me.", "I was always good with my hands, so I took the opportunity to learn a trade.", "I wanted to get away from my home situation and start a new life.", "I learned the essentials of my craft from a mentor but had to join the guild to finish my training."];
var reason_hermit = ["My enemies ruined my reputation, and I fled to my wilds to avoid further disparagement", "I am comfortable with being isolated, as I seek inner peace.", "I never liked the people I called my friends, so it was easy for me to strike out on my own.", "I felt compelled to forsake my past, but did so with great reluctance, and sometimes I regret making that decision.", "I lost everything - my home, my family, my friends. Going it alone was all I could do.", "Society's decadence disgusted me, so I decided to leave it behind."];
var reason_noble = ["I come from an old and storied family, and it fell to me to preserve the family name.", "My family has been disgraced, and I intend to clear our name.", "My family recently came by its title, and that elevation thrust us into a new and strange world.", "My family has a title, but none of my ancestors have distinguished themselves since we gained it.", "My family is filled with remarkable people. I hope to live up to their example.", "I hope to increase my family's power and influence."];
var reason_outlander = ["I spent a lot of time in the wilderness as a youngster, and I came to love that way of life.", "From a young age, I couldn't abide the stink of the cities and preferred to spend my time in nature.", "I came to understand the darkness that lurks in the wilds, and I vowed to combat it.", "My people lived on the edges of civilization, and I learned the methods of survival from my family.", "After a tragedy I retreated to the wilderness, leaving my old life behind.", "My family moved away from civilization, and I learned to adapt to my new environment."];
var reason_sage = ["I was naturally curious, so I packed up and went to a university to learn more about the world.", "My mentor's teachings opened my mind to new possibilites in that field of study.", "I was always an avid reader, and I learned much about my favorite topic on my own.", "I discovered an old library and pored over the texts I found there. The experience awakened a hunger for more knowledge.", "I impressed a wizard who told me I was squandering my talents and should seek out an education to take advantage of my gifts.", "One of my parents or a relative gave me a basic education that whetted my appetite, and I left home to build on what I had learned."];
var reason_sailor = ["I was press-ganged by pirates and forced to serve on their ship until I finally escape.", "I wanted to see the world, so I signed on a deckhand for a merchant ship.", "One of my relatives was a sailor who took to me sea.", "I needed to escape my community quickly, so I stowed away on a ship. When the crew found me, I was forced to work for my passage.", "Reavers attacked my community, so I found refuge on a ship until I could seek vegenance.", "I had few prospets where I was living, so I left to find my fortune elsewhere."];
var reason_soldier = ["I joined the militia to help protect my community from monsters.", "A relative of mine was a soldier, and I wanted to carry on the family tradition.", "The local lord forced me to enlist in the army.", "War ravaged my homeland while I was growing up. Fighting was the only life I ever knew.", "I wanted fame and fortune, so I joined a mercenary company, selling my sword to the highest bidder.", "Invaders attacked my homeland. It was my duty to take up my arms in defense of my people."];
var reason_urchin = ["Wanderlust caused me to leave my family to see the world. I look after myself.", "I ran away from a bad situation at home and made my own way in the world.", "Monsters wiped out my village, and I was the sole survivor. I had a find way to survive.", "A notorious thief looked after and other orphans, and we spied and stole to earn our keep.", "One day I woke up on the streets, alone and hungry, with no memory of my early childhood.", "My parents died, leaving no one to look up after me. I raised myself."];

// Reasons for becoming a [class]
var reason_barbarian = ["My devotion to my people lifted me in battle, making me powerful and dangerous.", "The spirits of my ancestors called on me to carry out a great task.", "I lost control in one battle one day, and it was as if something else was manipulating my body, forcing it to kill every foe I could reach.", "I went on a spiritual journey to find myself and instead found a spirit animal to guide, protect, and inspire me.", "I was struck by lightning and lived. Afterward, I found a new strength within me that let me push beyond my limitations.", "My anger needed to be channeled into battle, or I risked becoming an indiscriminate killer."];
var reason_bard = ["I awakened my latent bardic abilities through trial and error.", "I was a gifted performer and attacked the attention of a master bard who schooled me in the old techniques.", "I joined a loose security of scholars and orators to learn new techniques of performance and magic.", "I felt a calling to recount the deeds of champions and heroes, to bring them alive in song and story.", "I joined one of the great colleges to learn old lore, the secrets of magic, and the art of performances.", ""];
var reason_cleric = ["A supernatural being in service to the gods called me to become a divide agent in the world.", "I saw the injustice and horror in the world and felt moved to take a stand against them.", "My god gave me an umistakable sign. I dropped everything to serve the divine.", "Although I was always devout, it wasn't until I completed a pilgrimage that I knew my true calling.", "I used to serve in my religion's bureaucracy but found I needed to work in the world, to bring the message of my faith to the darkest corners of the land.", "I realize that my god works throug me, and I do as commanded, even though I don't know why I was chosen to serve."];
var reason_druid = ["I saw too much devastation in the world in the wild places, too much of a nature's splendor ruined by the despoilers. I joined a circle of druids to fight back against hte enemies of nature.", "I found a place among a group of druids after I fled a catastrophe.", "I have always had an affinity for animals, so I explored my talent to see how I could best use it.", "I befriended a druid and was moved by druidic teachings. I decided to follow my friend's guidance and give something back to the world.", "While I was growing up, I saw spirits all around the world - entities no one else could perceive. I sought out the druids to help me understand the visions and communicate with these beings.", "I have always felt disgust for creatures of unnatural origin. For this reason, I immersed myself in the study of the druidic mysteries and became a champion of the natural order."];
var reason_fighter = ["I wanted to hone my combat skills, and so I joined a war college.", "I equired for a knight who taught me how to fight, care for a steed, and conduct myself with honor. I decided to take up that path for myself.", "Horrible monsters descended on my community, killing someone I loved. I took up arms to destroy those creatures and others of a similar nature.", "I joined the army and learned how to fight as part of a group.", "I grew up fighting, and I refined my talents by defending myself against people who crossed me.", "I could always pick up just about my weapon and know how to use it effectively."];
var reason_monk = ["I was chosen to study at a secluded monastery. There, I was tuaght the fundamental techniques required to eventually master a tradition.", "I sought instruction to gain a deeper understanding of existence and my place in the world.", "I stumbled into a portal to the Shadowfell and took refuge in a strange monastery, where I learend how to defend myself against the forces of darkness.", "I overwhelmed with grief after losing someone close to me, and I sought the advice of philosophers to help me cope with my loss.", "I could feel that a special sort of power lay within me, so I sought out those who could help me call it forth and master it.", "I was wild and undisciplined as a youngster, but then I realized the error of my ways. I applied to a monastery and became a monk as a way to live a life of discipline."]
var reason_paladin = ["A fantastical being appeared before me and called onme to undertake a holy quest.", "One of my ancestors left a holy quest unfulfilled, so I intend to finish that work.", "The world is a dark and terrible place. I decided to serve as a beacon of light shining out against the gathering shadows.", "I served as a paladin's squire, learning all I needed to swear my own sacred oath.", "Evil must be opposed on all fronts. I feel compelled to seek out wickedness and purge it from the world.", "Becoming a paladin was a natural consequence of my unwavering faith. In taking my vows, I became the holy sword of my religion."];
var reason_ranger = ["I found purpose while I honed my hunting skills by bringing down my dangerous animals at the edge of civilization.", "I always had a way with animals, able to calm them with a soothing word and a touch.", "I suffer from terrile wanderlust, so being a ranger gave me a reason not to remain in one place for too long.", "I have seen what happens when the monsters come out from the dark. I took it upon myself to become the first line of defense against the evils that lie beyond civilization's borders.", "I met a grizzled ranger who taught me woodcraft and the secrets of the wild lands.", "I served in an army, learning the precepts of my profession while blazing trails and scouting enemy encampments."];
var reason_rogue = ["I've always been nimble and quick of wit, so I decided to use those talents to help me make my way in the world.", "An assassin or a thief wronged me, so I focused my training on mastering the skills of my enemy to better combat foes of that sort.", "An experienced rogue saw something in me and taught me several useful tricks.", "I decided to turn my natural lucky streak into the basis of a career, though I still realize that improveming my skills is essential.", "I took up with a grup of ruffians who showed me how to get what I wanted through sneakiness rather than direct confrontation.", "I'm a sucker for a shiny bauble or a sack of coins, as long as I can get my hands on it without risking life and limb."];
var reason_sorcerer = ["When I was born, all the water in the house froze solid, the milk spoiled, or all the iron turned to copper. My family is convinced that this event was a harbinger of stranger things to come for me.", "I suffered a terrible emotional or physical strain, which brought forth my latent magical power. I have fought to contrl it ever since.", "My immediate family never spoke of my ancestors, and when I asked, they would change the subject. It wasn't until I started displaying strange talents that the full truth of my heritage came out.", "Sensing something speical in me, a stranger taught me how to control my gift.", "After I escapted from a magical conflagration, I realized that thoug I was unharmed, I was not unchanged. I began exhibit unusual abilities that I am just beginning to understand."];
var reason_warlock = ["While wandering in a forbidden place, I encoutered an otherworldly being that offered to enter into a pact with me.", "I was examining a strange tome I found in an abandoned library when the entity that would become my patron suddenly appeared before me.", "I stumbled into the cluthes of my patron after I accidentally stepped through a magical doorway.", "When I was faced with a terrible crisis, I prayed to any being who woudl listen, and the creature that answered my patron.", "My future patron visited me in my dreams and offered great power ine exchange for my service.", "One of my ancestors had a pact with my patron, so that entity was determined to bind me to the same agreement."];
var reason_wizard = ["An old wizard chose me from among several candidates to serve an apprentice.", "When I became in a forest, a hedge wizard foud me, took me in, and taught me the rudiments of magic.", "I grew up listening to tales of great wizards and knew I wanted to follow their path. I strove to be accepted at an academy of magic and succeeded.", "One of my relatives was an accomplished wizard who decided I was smart enough to learn the craft.", "While exploring an old tomb, library, or temple, I found a spellbook. I was immediately driven to learn all I could becoming a wizard.", "I was a prodigy who demonstarted mastery of the arcane arts at an early age. When I became old enough to set out on my own, I did so to learn more magic and expand my power."];

// -------------------------------------

/* LANGUAGES */
var language_standard = ["common", "dwarvish", "elvish", "giant", "gnomish", "goblin", "halfling", "orc"];
var language_exotic = ["abyssal", "celestial", "deep speech", "draconic", "infernal", "primordial", "sylvan", "undercommon"];

// -------------------------------------

/* NAMES */
// Gender
var gender = ["female", "male", "other"];


// Dragonborns
var name_dragonborn_female = ["Akra", "Aasathra", "Antrara", "Arava", "Biri", "Blendaeth", "Burana", "Chassath", "Daar", "Dentratha", "Doudra", "Driindar", "Eggren", "Farideh", "Findex", "Furrele", "Gesrethe", "Gilkass", "Harann", "Havilar", "Hethress", "Hillanot", "Jaxi", "Jezean", "Jheri", "Kadana", "Kava", "Korinn", "Megren", "Mijira", "Mishann", "Nala", "Nuthra", "Perra", "Pogranix", "Pyrxrin", "Quespa", "Raiann", "Rezena", "Ruloth", "Saphara", "Savaran", "Sora", "Surina", "Syrthrin", "Tatyan", "Thava", "Uadjit", "Vezera", "Zykroff"];
var name_dragonborn_male = ["Adrex", "Arjhan", "Azzakh", "Balasar", "Bharash", "Bidreked", "Dadalan", "Dazzazn", "Direcris", "Donaar", "Fax", "Gargax", "Ghesh", "Gorbundus", "Greethen", "Heskan", "Hirrathak", "Ildrex", "Kaladan", "Kerkad", "Kiirith", "Kriv", "Maagog", "Medrash", "Mehen", "Mozikth", "Mreksh", "Mugrunden", "Nadarr", "Nithther", "Norkruuth", "Nykkan", "Pandjed", "Patrin", "Pijjrik", "Quarethon", "Rathkran", "Rhogar", "Rivaan", "Sethrekar", "Shamash", "Shedinn", "Srorthen", "Tarhun", "Torinn", "Tyrnnicus", "Valorean", "Vrondiss", "Zedaar"];
var name_dragonborn_clan = ["Akambherylliax", "Argenthrixus", "Baharoosh", "Beryntholthropal", "Bhenkumbyrznaax", "Caavylteradyn", "Chumbyxirinnish", "Clethtinthiallor", "Daardendrian", "Delmirev", "Dhyrktelonis", "Ebnichtomonis", "Esstrlynn", "Fharngnarthnost", "Ghaallixirn", "Grrrmmballhyst", "Gygazzylyshrift", "Hashphronyxadyn", "Hshhsstoroth", "Imbixtellrhyst", "Jerynomonis", "Jharthraxyn", "Kerrhylon", "Kimbatuul", "Lhamboldennish", "Linxakasendalor", "Mohradyllion", "Mystan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Orexijandilin", "Pfaphnyrennish", "Phrahdrandon", "Pyraxtallinost", "Qyxpahrgh", "Ragthroknaar", "Shestendeliath", "Skaarzborroosh", "Sumnarghthrysh", "Sturnuroth", "Umbyrphrael", "Vangdondalor", "Verthisathurgiesh", "Wivvyholdalphiax", "Wystongjir", "Xephyrbahnor", "Yarjerit", "Zzzxaaxthroth"];

// Dwarfs
var name_dwarf_female = ["Anbera", "Artin", "Audhild", "Balifra", "Barbena", "Bardryn", "Bolhild", "Dagnal", "Dariff", "Delre", "Diesa", "Eldeth", "Eridred", "Falkrunn", "Fallthra", "Finellen", "Gillydd", "Gunnloda", "Gurdis", "Helgret", "Helja", "Hlin", "Ilde", "Jarana", "Kathra", "Kilia", "Kristryd", "Liftrasa", "Marastyr", "Mardred", "Morana", "Nalaed", "Nora", "Nurkara", "Oriff", "Orvina", "Riswynn", "Sannl", "Therlin", "Thordris", "Torbera", "Tordrid", "Torgga", "Urshar", "Valida", "Vistra", "Vonana", "Werydd", "Whurdred", "Yurgunn"];
var name_dwarf_male = ["Adrik", "Alberich", "Baern", " Barendd", "Beloril", "Brottor", "Dain", "Dalgal", "Darral", "Delg", "Duergath", "Dworic", "Eberk", "Einkil", "Elaim", "Erias", "Fallond", "Fargrim", "Gardain", "Gilthur", "Gimgen", "Gimurt", "Harbek", "Kildrak", "Kilvar", "Morgran", "Morkral", "Nalral", "Nordak", "Nuraval", "Oloric", "Olunt", "Orsik", "Oskar", "Rangrim", "Reirak", "Rurik", "Taklinn", "Thoradin", "Thorin", "Thradal", "Tordek", "Traubon", "Travok", "Ulfgar", "Uraim", "Veit", "Vonbin", "Vondal", "Whurbin"];
var name_dwarf_clan = ["Aranore", "Balderk", "Battlehammer", "Bigtoe", "Bloodkith", "Bofdann", "Brawnanvil", "Brazzik", "Broodfist", "Burrowfoud", "Caebrek", "Daerdahk", "Dankil", "Daraln", "Deepdelver", "Durthane", "Eversharp", "Fallack", "Fireforge", "Foamtankard", "Frostbeard", "Glanhig", "Goblinbane", "Goldfinger", "Gorunn", "Graybeard", "Hammerstone", "Helcral", "Holderhek", "Ironfist", "Loderr", "Lutgethr", "Morigak", "Orcfoe", "Rakankrak", "Ruby-Eye", "Rumnaheim", "Silveraxe", "Silverstone", "Steelfist", "Stoutale", "Strakeln", "Strongheart", "Thrahak", "Torevir", "Torunn", "Trollbleeder", "Trueanvil", "Trueblood", "Ungart"];

// Elves
var name_elf_female = ["Adrie", "Ahinar", "Althaea", "Anastrianna", "Andraste", "Antinua", "Arara", "Baelitae", "Bethrynna", "Birel", "Caelynn", "Chaedi", "Claira", "Dara", "Drusilia", "Elama", "Enna", "Faral", "Felosial", "Hatae", "Ielenia", "Ilanis", "Irann", "Jarsali", "Jelennth", "Keyleth", "Leshanna", "Lia", "Maiathah", "Malquis", "Meriele", "Mialee", "Myathethil", "Naivara", "Quelenna", "Quillathe", "Ridaro", "Sariel", "Shanairla", "Shava", "Silaqui", "Sumnes", "Theirastra", "Thiala", "Tiaathque", "Traulam", "Vadania", "Valanthe", "Valna", "Xanaphia"];
var name_elf_male = ["Adran", "Aelar", "Aerdeth", "Ahvain", "Aramil", "Arannis", "Aust", "Azaki", "Beiro", "Berrian", "Caeldrim", "Carric", "Dayereth", "Dreali", "Efferil", "Eiravel", "Enialis", "Erdan", "Erevan", "Fivin", "Galinndan", "Gennal", "Hadari", "Halimath", "Heian", "Himo", "Immeral", "Ivellios", "Korfel", "Lamlis", "Laucian", "Lucan", "Mindartis", "Naal", "Nutae", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Suhnae", "Thamior", "Tharivol", "Theren", "Theriatis", "Thervan", "Uthemar", "Vanuath", "Varis"];
var name_elf_family = ["Aloro", "Amakiir", "Amastacia", "Ariessus", "Arnuanna", "Berevan", "Caerdonel", "Caphaxath", "Casilltenirra", "Cithreth", "Dalanthan", "Eathalena", "Erenaeth", "Ethanasath", "Fasharash", "Firahel", "Floshem", "Galanodel", "Goltorah", "Hanali", "Holimion", "Horineth", "Iathrana", "Ilphelkiir", "Iranapha", "Koehlanna", "Lathalas", "Iadon", "Meliamne", "Mellerelel", "Mystralath", "Nailo", "Netyoive", "Ofandrus", "Ostoroth", "Othronus", "Qualanthri", "Raethran", "Rothenel", "Selevarun", "Siannodel", "Sylvaranth", "Teinithra", "Tiltathana", "Wasanthi", "Withrethin", "Xiloscient", "Xistsrith", "Yaeldrin"];

// Gnomes
var name_gnome_female = ["Abalaba", "Bimpnottin", "Breena", "Buvvie", "Callybon", "Caramip", "Carlin", "Cumpen", "Dalaba", "Donella", "Duvamil", "Ella", "Ellyjoybell", "Ellywick", "Enidda", "Lilli", "Loopmotion", "Lorilla", "Luthra", "Mardnab", "Meena", "Menny", "Mumpena", "Nissa", "Numbra", "Nyx", "Oda", "Oppa", "Orla", "Panana", "Pyntle", "Quilla", "Ranala", "Reddlepop", "Roywyn", "Salanop", "Shamil", "Siffress", "Symma", "Tana", "Tenena", "Tervaround", "Tippletoe", "Ulla", "Unvera", "Veloptima", "Virra", "Waywocket", "Yebe", "Zanna"];
var name_gnome_male = ["Alston", "Alvyn", "Anverth", "Arumawann", "Bilbron", "Boddynock", "Brocc", "Burgell", "Cockaby", "Crampernap", "Dabbledob", "Delebean", "Dimble", "Eberdeb", "Eldon", "Erky", "Fablen", "Fibblestib", "Fonkin", "Frouse", "Frug", "Gerbo", "Gimble", "Glim", "Igden", "Jabble", "Jebeddo", "Kellen", "Kipper", "Namfoodle", "Oppleby", "Orryn", "Paggen", "Pallabr", "Pog", "Qualen", "Ribbles", "Rimple", "Roondar", "Sapply", "Seebo", "Senteq", "Sindri", "Umpen", "Warryn", "Wiggens", "Wobbles", "Wrenn", "Zaffrab", "Zook"];
var name_gnome_clan = ["Albaratie", "Bafflestone", "Beren", "Boondiggles", "Cobblelob", "Daergel", "Dunben", "Fabblestabble", "Fapplestamp", "Fiddlefen", "Folkor", "Garrick", "Gimlen", "Glittergen", "Gobblefirn", "Gummen", "Horcusporcus", "Humplebumple", "Ironhide", "Leffery", "Lingenhall", "Loofollue", "Maekkelferce", "Miggledy", "Munggen", "Murnig", "Musgraben", "Nackle", "Ningel", "Nopenstallen", "Nucklestamp", "Offund", "Oomtrowl", "Pilwicken", "Pingun", "Quillsharpener", "Raulnor", "Reese", "Rofferton", "Scheppen", "Shadowcloak", "Silverthread", "Sympony", "Tarkelby", "Timbers", "Turen", "Umbodoben", "Waggletop", "Welber", "Wildwander"];

// Halflings
var name_halfling_female = ["Alain", "Andry", "Anne", "Bella", "Blossom", "Bree", "Callie", "Chenna", "Cora", "Dee", "Dell", "Eida", "Eran", "Euphemia", "Georgina", "Gynnie", "Harriet", "Jasmine", "Jillian", "Jo", "Kithri", "Lavinia", "Lidda", "Maegan", "Marigold", "Merla", "Muria", "Nedda", "Nikki", "Nora", "Olivia", "Paela", "Pearl", "Pennie", "Philomena", "Portia", "Robbie", "Rose", "Saral", "Seraphina", "Shaena", "Stacee", "Tawna", "Thea", "Trym", "Tyna", "Vani", "Verna", "Wella", "Willow"];
var name_halfling_male = ["Alton", "Ander", "Bernie", "Bobbin", "Cade", "Callus", "Corrin", "Dannad", "Daniel", "Eddie", "Egart", "Eldon", "Errich", "Fildo", "Finnan", "Franklin", "Garret", "Garth", "Gilbert", "Gob", "Harol", "Igor", "Jasper", "Keith", "Kevin", "Lazam", "Lerry", "Lindal", "Lyle", "Merric", "Mican", "Milo", "Morrin", "Nebin", "Nevil", "Osborn",  "Ostran", "Oswalt", "Perrin", "Poppy", "Reed", "Roscoe", "Sam", "Shardon", "Tye", "Ulmo", "Wellby", "Wendel", "Wenner", "Wes"];
var name_halfling_family = ["Appleblossom", "Bigheart", "Brightmoon", "Brushgather", "Cherrycheeks", "Copperkettle", "Deephollow", "Elderberry", "Fastfoot", "Fatrabbit", "Glenfellow", "Goldfound", "Goodbarrel", "Goodearth", "Greenbottle", "Greenleaf", "High-Hill", "Hilltopple", "Hogcollar", "Honeypot", "Jamjar", "Kettlewhistle", "Leagallow", "Littlefoot", "Nimblefingers", "Porridgepot", "Quickstep", "Reedfellow", "Shadowquick", "Silvereyes", "Smoothhands", "Stonebridge", "Stoutbridge", "Stoutman", "Strongbones", "Sunmeadow", "Swiftwhistle", "Tallfellow", "Tealeaf", "Tenpenny", "Thistletop", "Thorngage", "Tosscobble", "Underbough", "Underfoot", "Warmwater", "Whispermouse", "Wildcloak", "Wildheart", "Wiseacre"];

// Half-Orcs
var name_halforc_female = ["Arha", "Baggi", "Bendoo", "Bilga", "Brakka", "Creega", "Drenna", "Ekk", "Emen", "Engong", "Fistula", "Gaaki", "Gorga", "Grai", "Greeba", "Grigi", "Grynk", "Hrathy", "Huru", "Ilga", "Kabbarg", "Kansif", "Lagazi", "Lezre", "Mrugen", "Murook", "Myev", "Nagrette", "Neega", "Nella", "Nogu", "Oolah", "Ootah", "Ovak", "Ownka", "Puyet", "Reeza", "Shautha", "Silgre", "Sutha", "Tagga", "Tawar", "Tomph", "Ubada", "Vanchu", "Vola", "Volen", "Vorken", "Yevelda", "Zagga"];
var name_halforc_male = ["Argran", "Braak", "Brug", "Cagak", "Dench", "Dorn", "Dren", "Druuk", "Feng", "Gell", "Gnarsh", "Grumbar", "Gubrash", "Hagren", "Henk", "Hongar", "Holg", "Imsh", "Karash", "Karg", "Keth", "Korag", "Krusk", "Lubash", "Megged", "Mhurren", "Mord", "Morg", "Nil", "Nybarg", "Odorr", "Ohr", "Rendar", "Resh", "Ront", "Rrath", "Sark", "Scrag", "Sheggen", "Shump", "Tanglar", "Tarak", "Thar", "Thokk", "Trag", "Ugarth", "Varg", "Vilberg", "Yurk", "Zed"];

// Tieflings
var name_tiefling_female = ["Akta", "Anakis", "Armara", "Astaro", "Aym", "Azza", "Beleth", "Bryseis", "Bune", "Criella", "Damaia", "Decarabia", "Ea", "Gadreel", "Gomory", "Hecat", "Ishte", "Jezebth", "Kali", "Kallista", "Kasdeya", "Lerissa", "Lilith", "Makaria", "Manea", "Markosian", "Mastema", "Naamah", "Nemeia", "Nija", "Orianna", "Osah", "Phelaia", "Prosperine", "Purah", "Pyra", "Rieta", "Ronobe", "Ronwe", "Seddit", "Seere", "Sekhmet", "Semyaza", "Shava", "Shax", "Sorath", "Uzza", "Vapula", "Vepar", "Verin"];
var name_tiefling_male = ["Abad", "Ahrim", "Akmen", "Ammon", "Andram", "Astar", "Balam", "Barakas", "Bathin", "Caim", "Chem", "Cimer", "Cressel", "Damakos", "Ekemon", "Euron", "Feniz", "Forcas", "Habor", "Iador", "Kairon", "Leucis", "Mamnen", "Mantus", "Marbas", "Melech", "Merihim", "Modean", "Mordai", "Mormo", "Morthos", "Nicor", "Nirgel", "Oriax", "Paymon", "Pelaios", "Purson", "Qemuel", "Raam", "Rimmon", "Sammal", "Skamos", "Tethren", "Thamuz", "Therai", "Valafar", "Vassago", "Xappan", "Zepar", "Zephan"];
var name_tiefling_virtue = ["Ambition", "Art", "Carrion", "Chant", "Creed", "Death", "Debauchery", "Depair", "Doom", "Doubt", "Dread", "Ectasy", "Ennui", "Entropy", "Excellence", "Fear", "Glory", "Gluttony", "Grief", "Hate", "Hope", "Horror", "Ideal", "Ignominy", "Laughter", "Love", "Lust", "Mayhem", "Mockery", "Murder", "Muse", "Music", "Mystery", "Nowhere", "Open", "Pain", "Passion", "Poetry", "Quest", "Random", "Reverence", "Revulsion", "Sorrow", "Termerity", "Torment", "Tragedy", "Vice", "Virtue", "Weary", "Wit"];

// Humans
var name_human_female = new Array( );
var name_human_male = new Array( );
// all female names
    // var name_human_arabic_female =
name_human_female[0] = ["Aaliyah", "Aida", "Akilah", "Alia", "Amina", "Atefeh", "Chaima", "Dalia", "Ehsan", "Elham", "Farah", "Fatemah", "Gamila", "Iesha", "Inbar", "Kamaria", "Khadija", "Layla", "Lupe", "Nabila", "Nadine", "Naima", "Najila", "Najwa", "Nakia", "Nashwa", "Nawra", "Nuha", "Nura", "Oma", "Qadira", "Qamar", "Qistina", "Rahima", "Rihanna", "Saadia", "Sabah", "Sada", "Saffron", "Sahar", "Salma", "Shatha", "Tahira", "Takisha", "Thana", "Yadira", "Zahra", "Zaida", "Zaina", "Zeinab"];
    // var name_human_celtic_female =
name_human_female[1]= ["Aife", "Aina", "Alane", "Ardena", "Arienh", "Beatha", "Birgit", "Briann", "Caomh", "Cara", "Cinnia", "Cordelia", "Deheune", "Divone", "Donia", "Doreena", "Elsha", "Enid", "Ethne", "Evelina", "Fianna", "Genevieve", "Gilda", "Gitta", "Grania", "Gwyndolin", "Idelisa", "Isolde", "Keelin", "Kennocha", "Lavena", "Lesley", "Linnette", "Lyonesse", "Mabina", "Marvina", "Mavis", "Mirna", "Morgan", "Muriel", "Nareena", "Oriana", "Regan", "Ronat", "Roweena", "Selma", "Ula", "Venetia", "Wynne", "Yseult"];
    // var name_human_chinese_female =
name_human_female[2] = ["Ai", "Anming", "Baozhai", "Bei", "Caixia", "Changchang", "Chen", "Chou", "Chunhua", "Daianna", "Daiyu", "Die", "Ehuang", "Fenfang", "Ge", "Hong", "Huan", "Huifang", "Jia", "Jiao", "Jiaying", "Jingfei", "Jinjing", "Lan", "Li", "Lihua", "Lin", "Ling", "Liu", "Meili", "Ning", "Qi", "Qiao", "Rong", "Shu", "Shuang", "Song", "Ting", "Wen", "Xia", "Xiaodan", "Xiaoli", "Xingjuan", "Xue", "Ya", "Yan", "Ying", "Yuan", "Yue", "Yun"];
    // var name_human_egyptian_female =
name_human_female[3] = ["A'at", "Ahset", "Amunet", "Aneksi", "Atet", "Baketamon", "Betrest", "Bunefer", "Dedyet", "Hatshepsut", "Hentie", "Herit", "Hetepheres", "Intakaes", "Ipwet", "Itet", "Joba", "Kasmut", "Kemanub", "Khemut", "Kiya", "Maia", "Menhet", "Merit", "Meritamen", "Merneith", "Merseger", "Muyet", "Nebet", "Nebetah", "Nedjemmut", "Neferiti", "Nerferu", "Neithotep", "Nit", "Nofret", "Nubemiunu", "Peseshet", "Pypuy", "Qalhata", "Rai", "Redji", "Sadeh", "Sitamun", "Sitre", "Takhat", "Tarset", "Taweret", "Werenro"];
    // var name_human_english_female =
name_human_female[4] = ["Adelaide", "Agatha", "Agnes", "Alice", "Aline", "Amne", "Avelina", "Avice", "Beatrice", "Cecily", "Egelina", "Eleanor", "Elizabeth", "Ella", "Eloise", "Elysande", "Emeny", "Emma", "Emmeline", "Ermina", "Eva", "Galiena", "Geva", "Giselle", "Griselda", "Hadwisa", "Helen", "Herleva", "Hugolina", "Ida", "Isabella", "Jacoba", "Jane", "Joan", "Juliana", "Katherine", "Margery", "Mary", "Matilda", "Maynild", "Oriel", "Rohesia", "Rosalind", "Rosamund", "Sarah", "Susannah", "Sybil", "Williamina", "Yvonne"];
    // var name_human_french_female =
name_human_female[5] = ["Aalis", "Agatha", "Agnes", "Alberea", "Alips", "Amee", "Amelot", "Anne", "Avelina", "Blancha", "Cateline", "Cecilia", "Claricia", "Collette", "Denisete", "Dorian", "Edelina", "Emelina", "Emmelot", "Ermentrudis", "Gibelina", "Gila", "Gillette", "Guiburgis", "Guillemette", "Guoite", "Hecelina", "Heloysis", "Helydouis", "Hodeardis", "Isabellis", "Jaquette", "Jehan", "Johanna", "Juliote", "Katerine", "Luciana", "Margot", "Marguerite", "Maria", "Marie", "Melisende", "Odelina", "Perrette", "Petronilla", "Sedilia", "Stephana", "Sybilla", "Ysabeau", "Ysabel"];
    // var name_human_german_female =
name_human_female[6] = ["Adelhayt", "Affras", "Agatha", "Allet", "Allet", "Agnes", "Anna", "Apell", "Applonia", "Barbara", "Brida", "Brigita", "Cecilia", "Clara", "Cristina", "Dorothea", "Duretta", "Ella", "Els", "Elsbeth", "Engel", "Enlein", "Enndlin", "Eva", "Fela", "Fronicka", "Genefe", "Geras", "Gerhauss", "Gertrudt", "Guttel", "Helena", "Irmel", "Jonata", "Katerina", "Kuen", "Kungund", "Lucia", "Madalena", "Magdalen", "Margret", "Marlein", "Martha", "Otilia", "Ottilg", "Peternella", "Reusin", "Sibilla", "Ursel", "Vrsula", "Walpurg"];
    // var name_human_greek_female =
name_human_female[7] = ["Acantha", "Aella", "Alektos", "Alkippe", "Andromeda", "Antigone", "Ariadne", "Astraea", "Chloros", "Chryseos", "Daphne", "Despoina", "Dione", "Eileithyia", "Elektra", "Euadne", "Eudora", "Eunomia", "Hekabe", "Helene", "Hermoione", "Hippolyte", "Ianthe", "Iokaste", "Iole", "Iphigenia", "Ismene", "Kalliope", "Kallistro", "Kalypso", "Karme", "Kassandra", "Kassiopeia", "Kirke", "Kleio", "Klotho", "Klytie", "Kynthia", "Leto", "Megaera", "Melaina", "Melpomene", "Nausikaa", "Nemesis", "Niobe", "Ourania", "Phaenna", "Polymnia", "Semele", "Theia"];
    // var name_human_indian_female =
name_human_female[8] = ["Abha", "Aishwarya", "Amala", "Ananda", "Ankita", "Archana", "Avani", "Chandana", "Chandrakanta", "Chetan", "Darshana", "Devi", "Dipti", "Esha", "Gauro", "Gita", "Gita", "Indira", "Indu", "Jaya", "Kala", "Kalpana", "Kamala", "Kanta", "Kashi", "Kishori", "Lalita", "Lina", "Madhur", "Manju", "Meera", "Mohana", "Mukta", "Nisha", "Nitya", "Padma", "Pratima", "Priya", "Rani", "Sarala", "Shakti", "Shanta", "Shobha", "Sima", "Sonal", "Sumana", "Sunita", "Tara", "Valli", "Vijaya", "VImala"];
    // var name_human_japanese_female =
name_human_female[9] = ["Aika", "Akemi", "Akiko", "Amaya", "Asami", "Ayumi", "Bunko", "Chieko", "Chika", "Chiyo", "Cho", "Eiko", "Emiko", "Eri", "Etsuo", "Gina", "Hana", "Haruki", "Hideko", "Hisoka", "Hishi", "Hotaru", "Izumi", "Kameyo", "Kasumi", "Kimiko", "Kotone", "Kyoko", "Maiko", "Masako", "Mi", "Minori", "Naoki", "Natsuko", "Noriko", "Rei", "Ren", "Saki", "Shigeko", "Shinju", "Sumiko", "Toshiko", "Tsukiko", "Ume", "Usagi", "Yasuko", "Yuriko"];
    // var name_human_mesoamerican_female =
name_human_female[10] = ["Ahuiliztli", "Atl", "Centehua", "Chalchiuitl", "Chipahua", "Cihuaton", "Citali", "Citalmina", "Coszcatl", "Coszamalotl", "Cuicatl", "Eleuia", "Eloxochitl", "Eztli", "Ichataca", "Icnoyotl", "Ilhuicatl", "Ilhuitl", "Itotia", "Iuitl", "Ixcatzin", "Izel", "Malinalxochitl", "Mecatl", "Meztli", "Miyaoaxochitl", "Mizquixual", "Moyolehuani", "Nahuatl", "Nechual", "Nenetl", "Nochtli", "Noxochioztli", "Ohtli", "Papan", "Patli", "Quetzalxochitl", "Sacnite", "Teicu", "Tepin", "Teuicui", "Teyacapan", "Tlaco", "Tlacoehua", "Tlacotl", "Tlalli", "Tlanextli", "Xihuitl", "Xuihcoatl", "Xiuhtonal"];
    // var name_human_nigercongo_female =
name_human_female[11] = ["Abebi", "Abena", "Abimbola", "Akoko", "Akachi", "Alaba", "Anuli", "Ayo", "Bolanie", "Bosede", "Chiamaka", "Chidi", "Chidimma", "Chinyere", "Chioma", "Dada", "Ebele", "Efemena", "Ejiro", "Ekundayo", "Enitan", "Funanya", "Ifunanya", "Ige", "Ime", "Kunto", "Lesedi", "Lumusi", "Mojisola", "Monifa", "Nakato", "Ndidi", "Ngozi", "Nkiruka", "Nneka", "Ogechi", "Olamide", "Oluchi", "Omolara", "Onyeka", "Simisola", "Temitope", "Thema", "Titlayo", "Udo", "Uduak", "Ufuoma", "Yaa", "Yejide", "Yewande"];
    // var name_human_norse_female =
name_human_female[12] = ["Alfhild", "Arnbjorg", "Ase", "Aslog", "Astrid", "Auda", "Audhid", "Bergljot", "Birghild", "Bodil", "Brenna", "Brynhild", "Dagmar", "Eerika", "Eira", "Gudrun", "Gunborg", "Gunhild", "Gunvor", "Helga", "Hertha", "Hilde", "Hillevi", "Ingrid", "Iona", "Jorunn", "Kari", "Kenna", "Magnhild", "Nanna", "Olga", "Ragna", "Ragnhild", "Ranveig", "Runa", "Saga", "Sigfrid", "Signe", "Sigred", "Sigrunn", "Solveg", "Svanhild", "Thora", "Torborg", "Torunn", "Tove", "Unn", "Vigdis", "Ylva", "Yngvild"];
    // var name_human_polynesian_female =
name_human_female[13] = ["Ahulani", "Airini", "Alani", "Aluala", "Anahera", "Anuhea", "Aolani", "Elenoa", "Emele", "Fetia", "Fiva", "Halona", "Hi'lei", "Hina", "Huali", "Inia", "Ka'ana'ana", "Ka'ena", "Kaamia", "Kahula", "Kailani", "Kamaile", "Kamakani", "Kamea", "Latai", "Liona", "Lokelani", "Marva", "Mehana", "Millawa", "Moana", "Ngana", "Nohea", "Pelika", "Sanoe", "Satina", "Tahia", "Tasi", "Tiaho", "Toroa", "Ulanni", "Uluwehi", "Vaina", "Waiola", "Waitara"];
    // var name_human_roman_female =
name_human_female[14] = ["Aelia", "Aemilia", "Agrippina", "Alba", "Antonia", "Aquila", "Augusta", "Aurelia", "Balbina", "Caelia", "Camilla", "Casia", "Claudia", "Cloelia", "Domitia", "Drusa", "Fabia", "Fabricia", "Fausta", "Flavia", "Floriana", "Fulvia", "Germana", "Glaucia", "Gratiana", "Hadriana", "Hermina", "Hortensia", "Iovita", "Iulia", "Laelia", "Laurentia", "Livia", "Longina", "Lucilla", "Lucretia", "Marcella", "Marcia", "Maxima", "Nona", "Octavia", "Paulina", "Petronia", "Porcia", "Tacita", "Tullia", "Verginia", "Vita"];
    // var name_human_slavic_female =
name_human_female[15] = ["Agripina", "Anatasiya", "Bogdana", "Boleslava", "Bozhena", "Danica", "Darya", "Desislava", "Dragoslava", "Dunja", "Efrosinia", "Ekaterina", "Elena", "Faina", "Galina", "Irina", "Iskra", "Jasna", "Katarina", "Katya", "Kresimira", "Lyudmila", "Magda", "Mariya", "Militsa", "Miloslava", "Mira", "Miroslava", "Mokosh", "Morana", "Natasha", "Nika", "Olga", "Rada", "Radoslava", "Raisa", "Slavitsa", "Svetlana", "Tatyana", "Tomislava", "Veronika", "Vesna", "Vladimira", "Yaroslava", "Zaira", "Zarya", "Zoria"];

// All male names
    // var name_human_arabic_male =
name_human_male[0] = ["Abbad", "Abdul", "Achmed", "Akeem", "Alif", "Amir", "Asmin", "Bashir", "Bassam", "Fahim", "Farid", "Farouk", "Fayez", "Fayyaad", "Fazil", "Hakim", "Halil", "Hamid", "Hazim", "Heydar", "Hussein", "Jabari", "Jahid", "Jamal", "Kalim", "Karim", "Kazim", "Khadim", "Khalid", "Mahmud", "Mansour", "Musharraf", "Mustafa", "Nadir", "Nazim", "Omar", "Qadir", "Qusay", "Rafiq", "Rakim", "Rashad", "Rauf", "Saladin", "Sami", "Samir", "Talib", "Tamir", "Tariq", "Yazid"];
    // var name_human_celtic_male =
name_human_male[1] = ["Airell", "Airic", "Alan", "Anghus", "Aodh", "Bardon", "Bearacb", "Bevyn", "Bodne", "Bran", "Brasil", "Bredon", "Brian", "Bricriu", "Bryant", "Cadman", "Caradoc", "Cedric", "Conalt", "Conchobar", "Condon", "Darcy", "Devin", "Dillion", "Donagphy", "Donall", "Duer", "Eghan", "Ewyn", "Ferghus", "Galvyn", "Gildas", "Guy", "Harvey", "Iden", "Irven", "Karney", "Kayne", "Kelvyn", "Kunsgonos", "Leigh", "Maccus", "Moryn", "Neale", "Owyn", "Pryderi", "Reaghan", "Taliesin", "Tiernay", "Turi"];
    // var name_human_chinese_male =
name_human_male[2] = ["Bingwen", "Bo", "Bolin", "Chang", "Chao", "Chen", "Cheng", "Da", "Dingxiang", "Fang", "Feng", "Fu", "Gang", "Guang", "Hai", "Heng", "Hong", "Huan", "Huang", "Huiliang", "Huizhong", "Jian", "Jiayi", "Junjie", "Kang", "Lei", "Liang", "Ling", "Liwei", "Meilin", "Niu", "Peizhi", "Peng", "Ping", "Qiang", "Qiu", "Quan", "Renshu", "Rong", "Ru", "Shan", "Shen", "Tengfei", "Wei", "Xiaobo", "Xiaoli", "Xin", "Yang", "Ying", "Zhong"];
    // var name_human_egyptian_male =
name_human_male[3] = ["Ahmose", "Akhom", "Amasis", "Amenemhet", "Anen", "Banefre", "Bek", "Djedefre", "Djoser", "Hekaib", "Henenu", "Horemheb", "Horwedja", "Huya", "Ibebi", "Idu", "Imhotep", "Ineni", "Ipuki", "Irsu", "Kagemni", "Kawab", "Kenamon", "Kewap", "Khaemwaset", "Khafra", "Khusebek", "Masaharta", "Meketre", "Menkhaf", "Merenre", "Metjen", "Nebamun", "Nebetka", "Nehi", "Nekute", "Nessumontu", "Pakhom", "Pawah", "Pawero", "Ramose", "Rudjek", "Sabaf", "Sebek-khu", "Sebni", "Senusret", "Shabaka", "Somintu", "Thaneni", "Thethi"];
    // var name_human_english_male =
name_human_male[4] = ["Adam", "Adelard", "Aldous", "Anselm", "Arnold", "Bernard", "Bertram", "Charles", "Clerebold", "Conrad", "Diggory", "Drogo", "Everard", "Frederick", "Geoffrey", "Gerald", "Gilbert", "Godfrey", "Gunter", "Guy", "Henry", "Heward", "Hubert", "Hugh", "Jocelyn", "John", "Lance", "Manfred", "Miles", "Nicholas", "Norman", "Odo", "Percival", "Peter", "Ralf", "Randal", "Raymond", "Reynard", "Richard", "Robert", "Roger", "Roland", "Rolf", "Simon", "Theobald", "Theodoric", "Thomas", "Timm", "William", "Wymar"];
    // var name_human_french_male
name_human_male[5] = ["Ambroys", "Ame", "Andri", "Andriet", "Anthoine", "Bernard", "Charles", "Charlot", "Colin", "Denis", "Durant", "Edouart", "Ernault", "Ethor", "Felix", "Floquart", "Galleren", "Gaultier", "Gilles", "Guy", "Henry", "Hugo", "Imbert", "Jacques", "Jacquot", "Jean", "Jehannin", "Louis", "Louys", "Loys", "Martin", "Michel", "Mille", "Morelet", "Nicolas", "Nicolle", "Oudart", "Perrin", "Phillippe", "Pierre", "Regnault", "Richart", "Robert", "Robinet", "Sauvage", "Simon", "Talbot", "Tanguy", "Vincent"];
    // var name_human_german_male =
name_human_male[6] = ["Albrecht", "Allexander", "Baltasar", "Benedick", "Berhart", "Caspar", "Clas", "Cristin", "Cristoff", "Dieterich", "Engelhart", "Erhart", "Felix", "Frantz", "Fritz", "Gerhart", "Gotleib", "Hans", "Hartmann", "Heintz", "Herman", "Jacob", "Jeremias", "Jorg", "Karll", "Kilian", "Linhart", "Lorentz", "Ludwig", "Marx", "Melchor", "Mertin", "Michel", "Moritz", "Osswald", "Ott", "Peter", "Rudolff", "Ruprecht", "Sewastian", "Sigmund", "Steffan", "Symon", "Thoman", "Ulrich", "Vallentin", "Wendel", "Wilhelm", "Wolff", "Wolfgang"];
    // var name_human_greek_male =
name_human_male[7] = ["Adonis", "Adrastos", "Aeson", "Alias", "Aineias" ,"Aiolos", "Alekto", "Alkeides", "Argos", "Brontes", "Damazo", "Dardanos", "Deimos", "Diomedes", "Endymion", "Epimetheus", "Erebos", "Euandros", "Ganymedes", "Glaukos", "Hektor", "Heros", "Hippolytos", "Iacchus", "Iason", "Kadmos", "Kastor", "Kepheus", "Koios", "Kreios", "Laios", "Leandros", "Linos", "Lykos", "Melanthios", "Mentor", "Neoptolemus", "Okeanos", "Orestes", "Pallas", "Patroklos", "Philandros", "Phoibos", "Phrixus", "Priamos", "Pyrrhos", "Xanthos", "Zephyros"];
    // var name_human_indian_male =
name_human_male[8] = ["Abhay", "Ahsan", "Ajay", "Ajit", "Akhil", "Amar", "Amit", "Ananta", "Aseem", "Ashok", "Bahadur", "Basu", "Chand", "Chandra", "Damodar", "Darhsan", "Devdan", "Dinesh", "Dipak", "Gopal", "Govind", "Harendra", "Harsha", "Ila", "Isha", "Johar", "Kalyan", "Kiran", "Kumar", "Lakshmana", "Mahavir", "Narayan", "Naveen", "Nirav", "Prabhakar", "Prasanna", "Raghu", "Rajanikant", "Rakesh", "Ranjeet", "Rishi", "Sanjay", "Sekar", "Shandar", "Sumantra", "Vijay", "Vikram", "Vimal", "Vishal", "Yash"];
    // var name_human_japanese_male =
name_human_male[9] = ["Akio", "Atsushi", "Daichi", "Daiki", "Daisuke", "Eiji", "Fumio", "Hajime", "Haru", "Hideaki", "Hideo", "Hikaru", "Hiro", "Hiroki", "Hisao", "Hitoshi", "Isamu", "Isao", "Jun", "Katashi", "Katsu", "Kei", "Ken", "Kenshin", "Kenshin", "Kenta", "Kioshi", "Makoto", "Mamoru", "Masato", "Masumi", "Noboru", "Norio", "Osamu", "Ryota", "Sadao", "Shigeo", "Shin", "Sora", "Tadao", "Takehiko", "Takeo", "Toru", "Toshio", "Yasuo", "Yukio"];
    // var name_human_mesoamerican_male =
name_human_male[10] = ["Achcauhtli", "Amoxtli", "Chicahua", "Cipactli", "Coaxoch", "Coyotl", "Cualli", "Cuahtemoc", "Cuetlachtilo", "Cuetzpalli", "Cuixtli", "Ehecatl", "Etalpalli", "Huemac", "Huitzilihuitl", "Iccauhtli", "Ilhicamina", "Itztli", "Ixli", "Mahuizoh", "Manauia", "Matlal", "Mictlantecuhtli", "Milintica", "Momoztli", "Namacuix", "Necalli", "Necuameti", "Nezahualcoyotl", "Nexahualpilli", "Nochehuatl", "Nopaltzin", "Ollin", "Quauhtli", "Tenoch", "Teoxihuitl", "Tepiltzin", "Tezacoatl", "Tlacaelel", "Tlaloc", "Tlanextic", "Tlazohtlaloni", "Tlazopillo", "Uetzcayotl", "Xipilli", "Yaotl"];
    // var name_human_nigercongo_male =
name_human_male[11] = ["Abebe", "Abel", "Abidemi", "Abrafo", "Adisa", "Amadi", "Amara", "Anyim", "Azulbulke", "Bapoto", "Baraka", "Bohlale", "Bongani", "Bunjune", "Buziba", "Chakide", "Chibuzo", "Chika", "Chimola", "Chiratidzo", "Dabulamanzi", "Dumise", "Dwanh", "Emeka", "Folami", "Gatura", "Gebhuzza", "Gero", "Isoba", "Kagiso", "Kamau", "Katlego", "Masego", "Matata", "Nthanda", "Ogechi", "Olwenyo", "Osumara", "Paki", "Qinisela", "Quanda", "Samanya", "Shanika", "Sibonakaliso", "Tapiwa", "Thabo", "Themba", "Uzoma", "Zuberi", "Zuri"];
    // var name_human_norse_male =
name_human_male[12] = ["Agni", "Alaric", "Anvindr", "Arvid", "Asger", "Asmund", "Bjarte", "Bjorg", "Brandr", "Brandt", "Brynjar", "Calder", "Colborn", "Cuyler", "Egil", "Einar", "Eric", "Erland", "Fiske", "Folkvar", "Fritjog", "Frode", "Geir", "Halvar", "Hemming", "Hjalmar", "Hjortr", "Ingimarr", "Ivar", "Knud", "Leif", "Liufr", "Manning", "Oddr", "Olin", "Ormr", "Ove", "Rannulfr", "Sigurd", "Skari", "Snorri", "Sten", "Stigandr", "Stigr", "Sven", "Trygve", "Ulf", "Vali", "Vidar"];
    // var name_human_polynesian_male =
name_human_male[13] = ["Afa", "Ahohako", "Aisake", "Aleki", "Anewa", "Anitelu", "Aputi", "Ariki", "Butat", "Enele", "Fef", "Fuifui", "Ha'aheo", "Hanohano", "Haunui", "Hekili", "Hiapo", "Hikawera", "Hanano", "Ho'onani", "Hoku", "Hu'eu", "Ina", "Itu", "Ka'aukai", "Ka'eo", "Kaelani", "Kahale", "Kaiea", "Kaikoa", "Kana'l", "Koamalu", "Ka", "Laki", "Makai", "Manu", "Manuka", "Nui", "Pono", "Popki", "Ruru", "Tahu", "Taurau", "Tuala", "Turoa", "Tusitala", "Uaine", "Waata", "Waipuna", "Zamar"];
    // var name_human_roman_male =
name_human_male[14] = ["Aelius", "Aetius", "Agrippa", "Albanus", "Albus", "Antonius", "Appius", "Aquilinus", "Atilus", "Augustus", "Aurelius", "Avitus", "Balbus", "Blandus", "Blasius", "Brutus", "Caelius", "Caius", "Casian", "Cassius", "Cato", "Celsus", "Claudius", "Cloelius", "Cnaeus", "Crispus", "Cyprianus", "Diocletianus", "Egnatius", "Ennius", "Fabricius", "Faustus", "Gaius", "Germanus", "Gnaeus", "Horatius", "Iovianus", "Iulius", "Lucilius", "Manius", "Marcus", "Marius", "Maximus", "Octavius", "Paulus", "Quintilian", "Regulus", "Servius", "Tacitus", "Varius"];
    // var name_human_slavic_male =
name_human_male[15] = ["Aleksandru", "Berislav", "Blazh", "Bogumir", "Boguslav", "Borislav", "Bozhidar", "Bratomil", "Bratoslav", "Bronislav", "Chedomir", "Chestibor", "Chestirad", "Chestislav", "Desilav", "Dmitrei", "Dobromil", "Dobroslav", "Dragomir", "Dragutin", "Drazhan", "Gostislav", "Kazimir", "Kyrilu", "Lyubomir", "Mechislav", "Milivoj", "Milosh", "Mstislav", "Nikola", "Ninoslav", "Premislav", "Radomir", "Radovan", "Ratimir", "Rostislav", "Slavomir", "Stanislav", "Tomislav", "Vasli", "Velimir", "Vladimir", "Vladislav", "Vlastimir", "Volodimeru", "Yarognev", "Yaromir", "Zbignev"];
    // var name_human_spanish_male =
name_human_male[16] = ["Alexanre", "Alfonso", "Alonso", "Anthon", "Arcos", "Arnaut", "Arturo", "Bartoleme", "Benito", "Berant", "Blasco", "Carlos", "Damian", "Diego", "Domingo", "Enrique", "Escobar", "Ettor", "Fernando", "Franciso", "Gabriel", "Garcia", "Gaspar", "Gil", "Gomes", "Goncalo", "Gostantin", "Jayme", "Joan", "Jorge", "Jose", "Juan", "Machin", "Martin", "Mateu", "Miguel", "Nicolas", "Pascual", "Pedro", "Porico", "Ramiro", "Ramon", "Rodrigo", "Sabastian", "Salvador", "Simon", "Tomas", "Trostam", "Valeriano", "Ynigo"];

// -------------------------------------

/* FEATS */
var feat = ["alert", "athlete", "actor", "charger", "crossbow expert", "defensive duelist", "dual wielder", "dungeon delver", "durable", "elemental adept", "grappler", "great weapon master", "healer", "heavily armored", "heavy armor master", "inspiring leader", "keen mind", "lightly armored", "linguist", "lucky", "mage slayer", "magic initiate", "martial adept", "medium armor master", "mobile", "moderately armored", "mounted combatant", "observant", "polearm master", "resilient", "ritual caster", "savage attacker", "sentinel", "sharpshooter", "shield master", "skilled", "skulker", "spell sniper", "tavern brawler", "tough", "war caster", "weapon master", "artificer intitiate", "chef", "crusher", "eldritch adept", "fey touched", "fighting intiate", "gunner", "metamagic adept", "piercer", "poisoner", "shadow touched", "skill expert", "slasher", "telekinetic", "telepathic"];
var feat_halfling = ["bountiful luck", "second chance"];
var feat_dargonborn = ["dragon fear", "dragon hide"];
var feat_elf_drow = ["drow high magic"];
var feat_dwarf = ["dwarven fortitude", "squat nimbleness"];
var feat_elf = ["elven accuracy"];
var feat_elf_half = ["elven accuracy", "prodigy"];
var feat_elf_high = ["fey teleportation"];
var feat_elf_wood = ["wood elf magic"];
var feat_gnome = ["fade away", "squat nimbleness"];
var feat_tiefling = ["flames of phlegethos", "infernal constitution"];
var feat_orc_half = ["orcish fury", "prodigy"];
var feat_human = ["prodigy"];
var charClass = document.getElementById("Class");
charClass.innerHTML = capitalizeFirstLetter(getCookie("class"));

var charRace = document.getElementById("Race");
charRace.innerHTML = capitalizeFirstLetter(getCookie("race"));

var charLnC = document.getElementById("alignment");
charLnC.innerHTML = capitalizeFirstLetter(getCookie("lnc"));

generateCharacter();



//Testing cookie stuff.
// no use for this block yet.
/*btnSave.addEventListener("click", function(){
    alert(myCookie);
    var race = getCookie("race");
    alert(race);
    document.cookie = "class=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "race=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "lnc=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}); */

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateCharacter() {
    /*
    This function fills out all the stuff that the basic character has, such as:
        - race
        - gender
        - name
        - class
        - background
        - stats
    */

    // VARIABLES FOR FURTHER USE

    var character_level = 1; // sets the character's level to be level 1
    var character_race = ""; // this will store the race
    var character_subrace = ""; // this will store the subrace (if applicable)
    var character_gender = ""; // this will store the gender
    var character_name_first = ""; // based off of race and gender, a name will be generated
    var character_name_last = "";// based off of race, a name will be generated
    var character_background = ""; // this will store the character's backstory
    var character_background_story = ""; // this will store the reason for the character being whatever their background was
    var character_class = ""; // this will store the character's class
    var character_class_story = ""; // this will store the character's reasoning for being the class
    var character_class_specialty = "";
    var weapons = "";
    var armor = "";
    var armor_class = 10; // base 10 for no armor
    var shield = false; // if player has shield, set to true and add AC bonus
    var miscequipment = "";
    var spell_cantrip = "";
    var spell_1st = "";
    var spell_cantrip_amount = 0; // this will store how many cantrips a character knows
    var spell_1st_amount = 0; // this will store how many 1st level spells a character knows
    var character_size = "";
    var character_magic_user = false;
    var character_alignment = ""; // this will store the character's alignment
    var hitpoints = 0; // temporarily is set to 0
    var character_speed = 0; // this will store the character's speed
    var character_size = ""; // this will store the character's size
    var character_uniquefeatures = ""; // this will store any neat abilities the character has (ex. nightvision)
    var character_languages = "";
    var strength = 0; // all ability stats start with 0
    var constiution = 0; // all ability stats start with 0
    var dexterity = 0; // all ability stats start with 0
    var intelligence = 0; // all ability stats start with 0
    var wisdom = 0; // all ability stats start with 0
    var charisma = 0; // all ability stats start with 0
    var strmodifier = 0;
    var conmodifier = 0;
    var dexmodifier = 0;
    var intmodifier = 0;
    var wismodifier = 0;
    var charmodifier = 0;
    var hpbonus = 0; // determines if player has a bonus to hp (ex. some races have bonus hp)

    // TEMPORARY VARIABLES
    var x;
    var y;
    var z;

    // First, let's generate the character's race
    //x = Math.floor(Math.random() * race_option.length);
    
    x = race_option.indexOf(getCookie("race"));
    
    var character_race = race_option[x];
    
    // Next, let's generate the character's gender
    var x = Math.floor(Math.random() * 1);
    if (x == 0) {
        character_gender = "male";
    }
    else {
        character_gender = "female";
    }

    // ERROR: generating numbers above 18...
    // Let's generate the character's base stats.
   for (let i = 0; i < 6; i++) {
    x = Math.floor(Math.random() * (18-8) + 8);
    // alert(x);
    if (i == 0) {
        strength = x;
    }
    else if (i == 1) {
        constitution = x;
    }
    else if (i == 2) {
        dexterity = x;
    }
    else if (i == 3) {
        wisdom = x;
    }
    else if (i == 4) {
        intelligence = x;
    }
    else if (i == 5) {
        charisma = x;
    }
   }

   // Let's generate the character's background.
   x = Math.floor(Math.random() * background.length);
   character_background = background[x];

   // Now let's generate the reasoning for being the background they chose.
   character_background_story = backgroundReasoning(character_background, character_background_story, x);


   // Let's generate the character's class
   // x = Math.floor(Math.random() * class_option.length);
   x = class_option.indexOf(getCookie("class"));
    character_class = class_option[x];

    // Why did the character pick their class? Let's find out.
    character_class_story = classReasoning(character_class, character_background_story, x);

   // Now that we know the player's class, we need to determine if they have spells at level 1.
    if (character_class == "artificer" || character_class == "bard" || character_class == "cleric" || character_class == "druid" || character_class == "paladin" || character_class == "ranger" || character_class == "sorcerer" || character_class == "warlock" || character_class == "wizard") {
        character_magic_user = true;
    }

    // From the player's class, we can also determine their specialty.
    character_class_specialty = classSpecialty(character_class, character_class_specialty, x);

    // If the player is a magic user, we must fill out what spells they know.
    if (character_magic_user == true) {
        if (character_level == 1) { // only a few of the magic user classes have spells at level 1
            if (character_class == "artificer") {
                spell_cantrip_amount = 2;
                spell_1st_amount = 2;
            }
            else if (character_class == "bard") {
                spell_cantrip_amount = 2;
                spell_1st_amount = 3;
            }
            else if (character_class == "cleric") {
                spell_cantrip_amount = 0;
                spell_1st_amount = 0;
            }
            else if (character_class == "druid") {
                spell_cantrip_amount = 2;
                spell_1st_amount = 2;
            }
            else if (character_class == "sorcerer") {
                spell_cantrip_amount = 4;
                spell_1st_amount = 2;
            }
            else if (character_class == "warlock") {
                spell_cantrip_amount = 2;
                spell_1st_amount = 2;
            }
            else if (character_class == "wizard") {
                spell_cantrip_amount = 3;
                spell_1st_amount = 2;
            }
        }
        // Now that we know the character level and the associated spells known, we can generate what they are.
        if (character_class == "artificer") {
            for (let i = 0; i < spell_cantrip_amount; i++) {
                x = Math.floor(Math.random() * artificer_cantrip.length);
                y = artificer_cantrip[x];
                spell_cantrip = spell_cantrip + y + "<br/>";
            }
            for (let i = 0; i < spell_1st_amount; i++) {
                x = Math.floor(Math.random() * artificer_1stlevel.length);
                y = artificer_1stlevel[x];
                spell_1st = spell_1st + y + "<br/>";
            }

        }
        else if (character_class == "bard") {
            for (let i = 0; i < spell_cantrip_amount; i++) {
                x = Math.floor(Math.random() * bard_cantrip.length);
                y = bard_cantrip[x];
                spell_cantrip = spell_cantrip + y + "<br/>";
            }
            for (let i = 0; i < spell_1st_amount; i++) {
                x = Math.floor(Math.random() * bard_1stlevel.length);
                y = bard_1stlevel[x];
                spell_1st = spell_1st + y + "<br/>";
            }
        }
        else if (character_class == "cleric") {
            for (let i = 0; i < spell_cantrip_amount; i++) {
                x = Math.floor(Math.random() * cleric_cantrip.length);
                y = cleric_cantrip[x];
                spell_cantrip = spell_cantrip + y + "<br/>";
            }
            for (let i = 0; i < spell_1st_amount; i++) {
                x = Math.floor(Math.random() * cleric_1stlevel.length);
                y = cleric_1stlevel[x];
                spell_1st = spell_1st + y + "<br/>";
            }
        }
        else if (character_class == "druid") {
            for (let i = 0; i < druid_cantrip; i++) {
                x = Math.floor(Math.random() * druid_cantrip.length);
                y = druid_cantrip[x];
                spell_cantrip = spell_cantrip + y + "<br/>";
            }
            for (let i = 0; i < spell_1st_amount; i++) {
                x = Math.floor(Math.random() * druid_1stlevel.length);
                y = druid_1stlevel[x];
                spell_1st = spell_1st + y + "<br/>";
            }
        }
        else if (character_class == "sorcerer") {
            for (let i = 0; i < spell_cantrip_amount; i++) {
                x = Math.floor(Math.random() * sorcerer_cantrip.length);
                y = sorcerer_cantrip[x];
                spell_cantrip = spell_cantrip + y + "<br/>";
            }
            for (let i = 0; i < spell_1st_amount; i++) {
                x = Math.floor(Math.random() * sorcerer_1stlevel.length);
                y = sorcerer_1stlevel[x];
                spell_1st = spell_1st + y + "<br/>";
            }
        }
        else if (character_class == "warlock") {
            for (let i = 0; i < spell_cantrip_amount; i++) {
                x = Math.floor(Math.random() * warlock_cantrip.length);
                y = warlock_cantrip[x];
                spell_cantrip = spell_cantrip + y + "<br/>";
            }
            for (let i = 0; i < spell_1st_amount; i++) {
                x = Math.floor(Math.random() * warlock_1stlevel.length);
                y = warlock_1stlevel[x];
                spell_1st = spell_1st + y + "<br/>";
            }
        }
        else if (character_class == "wizard") {
            for (let i = 0; i < spell_cantrip_amount; i++) {
                x = Math.floor(Math.random() * wizard_cantrip.length);
                y = wizard_cantrip[x];
                spell_cantrip = spell_cantrip + y + "<br/>";
            }
            for (let i = 0; i < spell_1st_amount; i++) {
                x = Math.floor(Math.random() * wizard_1stlevel.length);
                y = wizard_1stlevel[x];
                spell_1st = spell_1st + y + "<br/>";
            }
        }
    }

    // Now, let's generate the character name (and other racial-based traits) based off of the races
    if (character_race == "dwarf") {
         // Let's set the default variables that occur, regardless of subrace or gender
        character_uniquefeatures = character_uniquefeatures + "darkvision<br/>" + "dwarven resilience<br/>" + "dwarven combat training<br/>" + "stonecunning<br/>";
        character_languages = character_languages + "common<br/>" + "dwarven<br/>";
        constitution = constitution + 2; // dwarves have a bonus to constitution of 2
        character_speed = 25;
        character_size = "Medium";

        // We use the gender to determine the dwarven name...
        if (character_gender == "male") {
            x = Math.floor(Math.random() * name_dwarf_male.length);
            character_name_first = name_dwarf_male[x];
        }
        else if (character_gender == "female") {
            x = Math.floor(Math.random() * name_dwarf_female.length);
            character_name_first = name_dwarf_female[x];
        }
        // Now, we determine the last name
        x = Math.floor(Math.random() * name_dwarf_clan.length);
        character_name_last = name_dwarf_clan[x];

        // Dwarves have a subrace! Let's generate that.
        x = Math.floor(Math.random() * sub_dwarf.length);
        character_subrace = sub_dwarf[x];

        if (character_subrace == "hill") {
            character_uniquefeatures = character_uniquefeatures + "dwarven toughness<br/>"
            hpbonus = 1; // +1 to hp
        }
        else if (character_subrace == "mountain") {
            strength = strength + 2;
            character_uniquefeatures = character_uniquefeatures + "dwarven armor training<br/>";
        }
    }
    else if (character_race == "elf") {
        character_uniquefeatures = character_uniquefeatures + "darkvision<br/>" + "keen senses<br/>" + "fey ancestry<br/>" + "trance<br/>";
        character_languages = character_languages + "common<br/>" + "elven<br/>";
        dexterity = dexterity + 2; // elves have a bonus to dexterity of 2
        character_speed = 30;
        character_size = "Medium";
        // We use the gender to determine the elven name...
        if (character_gender == "male") {
            x = Math.floor(Math.random() * name_elf_male.length);
            character_name_first = name_elf_male[x];
        }
        else if (character_gender == "female") {
            x = Math.floor(Math.random() * name_elf_family.length);
            character_name_first = name_elf_female[x];
        }
        // Now, we determine the last name
        x = Math.floor(Math.random() * name_elf_family.length);
        character_name_last = name_elf_family[x];

        // Elves have a subrace! Let's generate that.
        var x = Math.floor(Math.random() * sub_elf.length);
        var character_subrace = sub_elf[x];

        if (character_subrace == "high") {
            character_uniquefeatures = character_uniquefeatures + "elven weapon training<br/>"
            intelligence = intelligence + 1;
            spell_cantrip_amount = spell_cantrip_amount + 1;
            // High Elves know an extra language
            z = Math.floor(Math.random * 1);
            if (z == 1) { // standard language generation
                x =  Math.floor(Math.random() * language_standard.length);
                y = language_standard[x];
                character_languages = character_languages + y + "<br/>";
            }
            else { // exotic language generation
                x =  Math.floor(Math.random() * language_exotic.length);
                y = language_exotic[x];
                character_languages = character_languages + y + "<br/>";
            }
        }
        else if (character_subrace == "wood") {
            wisdom = strength + 1;
            character_uniquefeatures = character_uniquefeatures + "elven weapon training<br/>";
            character_speed = 35;
        }
        else if (character_subrace == "drow") {
            charisma = charisma + 1;
            character_uniquefeatures = character_uniquefeatures + "superior darkvision<br/>" + "sunlight sensitivity<br/>" + "drow weapon training<br/>";
            spell_cantrip = spell_cantrip + "dancing lights<br/>";
        }
    }
    else if (character_race == "halfling") {
       // Let's set the default variables that occur, regardless of subrace or gender
        character_uniquefeatures = character_uniquefeatures + "lucky<br/>" + "brave<br/>" + "halfling nimbleness<br/>";
        character_languages = character_languages + "common<br/>" + "halfling<br/>";
        dexterity = dexterity + 2; // halflings have a bonus to dexterity of 2
        character_speed = 25;
        character_size = "Small";

        // We use the gender to determine the halfling name...
        if (character_gender == "male") {
            x = Math.floor(Math.random() * name_halfling_male.length);
            character_name_first = name_halfling_male[x];
        }
        else if (character_gender == "female") {
            x = Math.floor(Math.random() * name_halfling_female.length);
            character_name_first = name_halfling_female[x];
        }
        // Now, we determine the last name
        x = Math.floor(Math.random() * name_halfling_family.length);
        character_name_last = name_halfling_family[x];

        // Halflings have a subrace! Let's generate that.
        x = Math.floor(Math.random() * sub_halfling.length);
        character_subrace = sub_halfling[x];

        if (character_subrace == "lightfoot") {
            character_uniquefeatures = character_uniquefeatures + "naturally stealthy<br/>"
            charisma = charisma + 1;
        }
        else if (character_subrace == "stout") {
            constitution = constitution + 1;
            character_uniquefeatures = character_uniquefeatures + "stout resilience<br/>";
        }
    }
    else if (character_race == "human") {
        // Let's set the default variables that occur, regardless of subrace or gender
        character_languages = character_languages + "common<br/>";
        // Humans also know one bonus language, let's create a random one from the standard list
        z = Math.floor(Math.random * 1);
        if (z == 0) { // standard language generation
            x =  Math.floor(Math.random() * language_standard.length);
            y = language_standard[x];
            character_languages = character_languages + y + "<br/>";
        }
        else { // exotic language generation
            x =  Math.floor(Math.random() * language_exotic.length);
            y = language_exotic[x];
            character_languages = character_languages + y + "<br/>";
        }

        // Humans have an ability increase of 1 for all stats
        constitution = constitution + 1;
        dexterity = dexterity + 1;
        strength = strength + 1;
        intelligence = intelligence + 1;
        wisdom = wisdom + 1;
        charisma = charisma + 1;
        character_speed = 30;
        character_size = "Medium";

        // We use the gender to determine the human name...
        // But first, we must determine what subrace we want to go with.
        y = Math.floor(Math.random() * 15); // generates number between 0-15
        character_subrace = sub_human[y];
        if (character_gender == "male") {
            x = Math.floor(Math.random() * name_human_male[x][y].length);
            character_name_first = name_human_male[y][x];
        }
        else if (character_gender == "female") {
            x = Math.floor(Math.random() * name_human_female[x][y].length);
            character_name_first = name_human_female[x][x];
        }
        // Humans do not have last names generated here.
        character_name_last = "";
    }
    else if (character_race == "dragonborn") {
        // Let's set the default variables that occur, regardless of subrace or gender
        character_uniquefeatures = character_uniquefeatures + "breath weapon<br/>" + "damage resistance<br/>";
        strength = strength + 2;
        charisma = charisma + 1;
        character_speed = 30;
        character_size = "Medium";

        // We use the gender to determine the dragonborn name...
        if (character_gender == "male") {
            x = Math.floor(Math.random() * name_dragonborn_male.length);
            character_name_first = name_dragonborn_male[x];
        }
        else if (character_gender == "female") {
            x = Math.floor(Math.random() * name_dragonborn_female.length);
            character_name_first = name_dragonborn_female[x];
        }
        // Now, we determine the last name
        x = Math.floor(Math.random() * name_dragonborn_clan.length);
        character_name_last = name_dragonborn_clan[x];

        // Dragonborns have a subrace! Let's generate that.
        x = Math.floor(Math.random() * sub_dragonborn.length);
        character_subrace = sub_dragonborn[x];
    }
    else if (character_race == "gnome") {
        // Let's set the default variables that occur, regardless of subrace or gender
        character_uniquefeatures = character_uniquefeatures + "darkvision<br/>" + "gnome cunning<br/>";
        character_languages = character_languages + "common<br/>" + "gnomish<br/>";
        intelligence = intelligence + 2; // halflings have a bonus to dexterity of 2
        character_speed = 25;
        character_size = "Small";

        // We use the gender to determine the gnome name...
        if (character_gender == "male") {
            x = Math.floor(Math.random() * name_gnome_male.length);
            character_name_first = name_gnome_male[x];
        }
        else if (character_gender == "female") {
            x = Math.floor(Math.random() * name_gnome_female.length);
            character_name_first = name_gnome_female[x];
        }
        // Now, we determine the last name
        x = Math.floor(Math.random() * name_gnome_clan.length);
        character_name_last = name_gnome_clan[x];

        // Gnomes have a subrace! Let's generate that.
        x = Math.floor(Math.random() * sub_gnome.length);
        character_subrace = sub_gnome[x];

        if (character_subrace == "forest") {
            character_uniquefeatures = character_uniquefeatures + "naturally stealthy<br/>" + "speak with small animals<br/>";
            dexterity = dexterity + 1;
            spell_cantrip = spell_cantrip + "minor illusion<br/>";
        }
        else if (character_subrace == "rock") {
            constitution = constitution + 1;
            character_uniquefeatures = character_uniquefeatures + "artificer's lore<br/>" + "tinker<br/>";
        }
    }
    else if (character_race == "half-elf") {
       // Let's set the default variables that occur, regardless of subrace or gender
        character_uniquefeatures = character_uniquefeatures + "darkvision<br/>" + "fey ancestry<br/>" + "skill versaitility<br/>";
        character_languages = character_languages + "common<br/>" + "elvish<br/>";
        character_speed = 30;
        character_size = "Medium";
        character_subrace = "";

        // Half-elves know a language of their choice...
        z = Math.floor(Math.random * 1);
        if (z == 1) { // standard language generation
            x =  Math.floor(Math.random() * language_standard.length);
            y = language_standard[x];
            character_languages = character_languages + y + "<br/>";
        }
        else { // exotic language generation
            x =  Math.floor(Math.random() * language_exotic.length);
            y = language_exotic[x];
            character_languages = character_languages + y + "<br/>";
        }

        // We use the gender to determine the half-elves name...
        z = Math.floor(Math.random() * 1);
        if (z == 0) { // generate a human name
            y = Math.floor(Math.random() * 15); // generates number between 0-15
            character_subrace = sub_human[y];
            if (character_gender == "male") {
                x = Math.floor(Math.random() * name_human_male[x][y].length);
                character_name_first = name_human_male[y][x];
            }
            else if (character_gender == "female") {
                x = Math.floor(Math.random() * name_human_female[x][y].length);
                character_name_first = name_human_female[x][x];
            }
        // Humans do not have last names generated here.
        character_name_last = "";
        }
        else { // generate an elven name
            if (character_gender == "male") {
                x = Math.floor(Math.random() * name_elf_male.length);
                character_name_first = name_elf_male[x];
            }
            else if (character_gender == "female") {
                x = Math.floor(Math.random() * name_elf_family.length);
                character_name_first = name_elf_female[x];
            }
            // Now, we determine the last name
            x = Math.floor(Math.random() * name_elf_family.length);
            character_name_last = name_elf_family[x];
        }
    }
    else if (character_race == "half-orc") {
        // Let's set the default variables that occur, regardless of subrace or gender
        character_uniquefeatures = character_uniquefeatures + "darkvision<br/>" + "menacing<br/>" + "relentless endurance<br/>" + "savage attacks<br/>";
        character_languages = character_languages + "common<br/>" + "orc<br/>";
        strength = strength + 2;
        constitution = constitution + 2;
        character_speed = 30;
        character_size = "Medium";

        // Let's generate the name!
        if (character_gender == "male") {
            x = Math.floor(Math.random() * name_halforc_male.length);
            character_name_first = name_halforc_male[x];
        }
        else if (character_gender == "female") {
            x = Math.floor(Math.random() * name_halforc_female.length);
            character_name_first = name_halforc_female[x];
        }
        // Orcs do not have last names.
        character_name_last = "";
    }
    else if (character_race == "tiefling") {
       // Let's set the default variables that occur, regardless of subrace or gender
        character_uniquefeatures = character_uniquefeatures + "darkvision<br/>" + "hellish resistance<br/>" + "infernal legacy<br/>";
        character_languages = character_languages + "common<br/>" + "infernal<br/>";
        charisma = charisma + 2;
        intelligence = intelligence + 1;
        character_speed = 30;
        character_size = "Medium";

        // Let's generate the name!
        if (character_gender == "male") {
            x = Math.floor(Math.random() * name_tiefling_male.length);
            character_name_first = name_tiefling_male[x];
        }
        else if (character_gender == "female") {
            x = Math.floor(Math.random() * name_tiefling_female.length);
            character_name_first = name_tiefling_female[x];
        }
        // Tieflings have a virtue instead of a last name
        x = Math.floor(Math.random() * name_tiefling_virtue.length);
        character_name_last = name_tiefling_virtue[x];
    }

    // We need to figure out modifiers!
    strmodifier = modifier(strmodifier, strength);
    dexmodifier = modifier(dexmodifier, dexterity);
    conmodifier = modifier(conmodifier, constitution);
    intmodifier = modifier(intmodifier, intelligence);
    wismodifier = modifier(wismodifier, wisdom);
    charmodifier = modifier(charmodifier, charisma);

    // The first level hitpoints is the hit die type for the class + constitution modifier
    if (character_class == "barbarian") {
        hitpoints = 12 + conmodifier;
    }
    else if (character_class == "fighter" || character_class == "paladin" || character_class == "ranger") {
        hitpoints = 10 + conmodifier;
    }
    else if (character_class == "artificer" || character_class == "bard" || character_class == "cleric" || character_class == "druid" || character_class == "monk" || character_class == "rogue" || character_class == "warlock") {
        hitpoints = 8 + conmodifier;
    }
    else if (character_class == "sorcerer" || character_class == "wizard") {
        hitpoints = 6 + conmodifier;
    }
    if (hpbonus != 0) {
        hitpoints = hitpoints + hpbonus;
    }
    // For future levels, we will use a function to generate further die rolls.

    // Let's figure out equipment and spells based off of domains. Please see note about this generation.
    if (character_class == "barbarian") {
        weapons = weapons + "greataxe<br/>" + "2 handazes<br/>" + "4 javelins<br/>";
        miscequipment = "Explorer's pack<br/>";
        armor = "None";
    }
    else if (character_class == "bard") {
        // can pick any simple weapon or a rapier/longsword
        x = Math.floor(Math.random() * 4); // 0 = rapier, 1 = longsword, 2 = ranged simple, 3 = melee simple
        if (x == 0) {
            weapons = weapons + "rapier<br/>";
        }
        else if (x == 1) {
            weapons = weapons + "longsword<br/>";
        }
        else if (x == 2) {
            x = Math.floor(Math.random() * weapon_simpleranged.length);
            y = weapon_simpleranged[x];
            weapons = weapons + y + "<br/>";
        }
        else {
            x = Math.floor(Math.random() * weapon_simplemelee.length);
            y = weapon_simplemelee[x];
            weapons = weapons + y + "<br/>";
        }
        // Pick a musical instrument
        x = Math.floor(Math.random() * equipment_instruments.length);
        y = equipment_instruments[x];
        miscequipment = y + "<br/>" + "diplomat's pack<br/>";
        armor = "leather";
    }
    else if (character_class == "cleric") {
        weapons = weapons + "mace<br/>";
        x = Math.floor(Math.random() * 1);
        if (x == 0) {
            armor = "scale";
        }
        else {
            armor = "leather";
        }
        x = Math.floor(Math.random() * 1);
        if (x == 0) {
            weapons = weapons + "crossbow, light with 20 bolts<br/>"
        }
        else { // any simple weapon
            x = Math.floor(Math.random() * 1);
            if (x == 0) {
                x = Math.floor(Math.random() * weapon_simpleranged.length);
                y = weapon_simpleranged[x];
                weapons = weapons + y + "<br/>";
            }
            else {
                x = Math.floor(Math.random() * weapon_simplemelee.length);
                y = weapon_simplemelee[x];
                weapons = weapons + y + "<br/>";
            }
        }
        miscequipment = "priest's pack<br/>" + "holy symbol<br/>" + "shield<br/>";
        shield = true;

        // Domains
        if (character_class_specialty == "knowledge") {
            spell_1st = spell_1st + "command<br/>" + "identify<br/>";
        }
        else if (character_class_specialty == "life") {
            spell_1st = spell_1st + "bless<br/>" + "cure wounds<br/>";
        }
        else if (character_class_specialty == "light") {
            spell_1st = spell_1st + "burning hands<br/>" + "faerie fire<br/>";
        }
        else if (character_class_specialty == "nature") {
            spell_1st = spell_1st + "animal friendship<br/>" + "speak with animals<br/>";
        }
        else if (character_class_specialty == "tempest") {
            spell_1st = spell_1st + "fog cloud<br/>" + "thunderwave<br/>";
        }
        else if (character_class_specialty == "trickery") {
            spell_1st = spell_1st + "charm person<br/>" + "disguise self<br/>";
        }
        else if (character_class_specialty == "war") {
            spell_1st = spell_1st + "divine favor<br/>" + "shield of faith<br/>";
        }
    }
    else if (character_class == "druid") {
        x = Math.floor(Math.random() * 2); // shield or simple weapon
        if (x == 0) {
            miscequipment = miscequipment + "shield<br/>";
            shield = true;
        }
        else if (x == 1) {
            x = Math.floor(Math.random() * weapon_simpleranged.length);
            y = weapon_simpleranged[x];
            weapons = weapons + y + "<br/>";
        }
        else {
            x = Math.floor(Math.random() * weapon_simplemelee.length);
            y = weapon_simplemelee[x];
            weapons = weapons + y + "<br/>";
        }
        x = Math.floor(Math.random() * 1); // scimitar or any simple melee weapon
        if (x == 0) {
            weapons = weapons + "scimitar<br/>";
        }
        else {
            x = Math.floor(Math.random() * weapon_simplemelee.length);
            y = weapon_simplemelee[x];
            weapons = weapons + y + "<br/>";
        }
        armor = "leather<br/>";
        miscequipment = "explorer's pack<br/>" + "druidic focus<br/>";
    }
    else if (character_class == "fighter") {
        x = Math.floor(Math.random() * 1); // chain mail or leather w longbow and arrows
        if (x == 0) {
            armor = "chain mail";
        }
        else {
            armor = "leather";
            weapons = weapons + "longbow with 20 arrows<br/>"
        }
        // Assume martial weapon (melee) and shield
        shield = true;
        miscequipment = miscequipment + "shield<br/>";
        x = Math.floor(Math.random() * weapon_martialmelee.length);
        y = weapon_martialmelee[x];
        weapons = weapons + y + "<br/>";

        x = Math.floor(Math.random() * 1);// light crossbow w 20 bolts or 2 handaxes
        if (x == 0) {
            weapons = weapons + "crossbow, light with 20 bolts<br/>"
        }
        else {
            weapons = weapons + "2 handaxes<br/>";
        }
        miscequipment = miscequipment + "dungeoneer's pack<br/>";

        // Fighter's also have a Fighting Style!
        x = Math.floor(Math.random * fighter_style.length);
        y = fighter_style[x];
        character_uniquefeatures = character_uniquefeatures + y + "<br/>";
    }
    else if (character_class == "monk") {
        x = Math.floor(Math.random() * 2); // a shortsword or any simple weapon
        if (x == 0) {
            weapons = weapons + "shortsword<br/>";
        }
        else if (x == 1) {
            x = Math.floor(Math.random() * weapon_simpleranged.length);
            y = weapon_simpleranged[x];
            weapons = weapons + y + "<br/>";
        }
        else {
            x = Math.floor(Math.random() * weapon_simplemelee.length);
            y = weapon_simplemelee[x];
            weapons = weapons + y + "<br/>";
        }
        miscequipment = miscequipment + "dungeoneer's pack<br/>";
        weapons = weapons + "10 darts<br/>";
    }
    else if (character_class == "paladin") {
        x = Math.floor(Math.random() * 1); // martial weapon w shield or two martial weapons
        if (x == 0) {
            x = Math.floor(Math.random() * weapon_martialmelee.length);
            y = weapon_martialmelee[x];
            weapons = weapons + y + "<br/>";
            miscequipment = miscequipment + "shield<br/>";
            shield = true;
        }
        else {
            for (var i = 0; i < 2; i++) {// run the generation twice to get two separate martial weapons
                x = Math.floor(Math.random() * 1); // 0 = ranged, 1 = melee
                if (x == 0) {
                    x = Math.floor(Math.random() * weapon_martialmelee.length);
                    y = weapon_martialmelee[x];
                    weapons = weapons + y + "<br/>";
                }
                else {
                    x = Math.floor(Math.random() * weapon_martialranged.length);
                    y = weapon_martialranged[x];
                    weapons = weapons + y + "<br/>";
                }
            }
        }
        weapons = weapons + "5 javelins<br/>";
        miscequipment = "explorer's pack<br/>" + "holy symbol<br/>";
        armor = "chain mail";
    }
    else if (character_class == "ranger") {
        x = Math.floor(Math.random() * 1); // scale mail or leather for armor
        if (x == 0) {
            armor = "scale mail";
        }
        else {
            armor = "leather";
        }
        x = Math.floor(Math.random() * 1); // 2 shortswords or 2 simple melee weapons
        if (x == 0) {
            weapons = weapons + "shortsword<br/>" + "shortsword<br/>";
        }
        else {
            for (var i = 0; i < 2; i ++) {
                x = Math.floor(Math.random * weapon_simplemelee.length);
                y = weapon_simplemelee[x];
                weapons = weapons + y + "<br/>";
            }
        }
        miscequipment = miscequipment + "explorer's pack<br/>";
        weapons = weapons + "longbow and 20 arrows<br/>";
    }
    else if (character_class == "rogue") {
        x = Math.floor(Math.random() * 1); // rapier or shortsword
        if (x == 0) {
            weapons = weapons + "rapier<br/>";
        }
        else {
            weapons = weapons + "shortsword<br/>";
        }
        x = Math.floor(Math.random() * 1); // shortbow or shortsword
        if (x == 0) {
            weapons = weapons + "shortbow and 20 arrows<br/>";
        }
        else {
            weapons = weapons + "shortsword<br/>";
        }
        weapons = weapons + "dagger<br/>" + "dagger<br/>";
        miscequipment = "burgular's pack<br/>" + "thieves' tools<br/>";
        armor = "leather";
    }
    else if (character_class == "sorcerer") {
        x = Math.floor(Math.random() * 2); // a crossbow or any simple weapon
        if (x == 0) {
            weapons = weapons + "crossbow, light with 20 bolts<br/>";
        }
        else if (x == 1) {
            x = Math.floor(Math.random() * weapon_simpleranged.length);
            y = weapon_simpleranged[x];
            weapons = weapons + y + "<br/>";
        }
        else {
            x = Math.floor(Math.random() * weapon_simplemelee.length);
            y = weapon_simplemelee[x];
            weapons = weapons + y + "<br/>";
        }
        x = Math.floor(Math.random() * 1); // component pouch or arcane focus
        if (x == 0) {
            miscequipment = miscequipment + "component pouch";
        }
        else {
            miscequipment = miscequipment + "arcane focus";
        }
        miscequipment = miscequipment + "dungeoneer's pack";
        weapons = weapons + "dagger<br/>" + "dagger<br/>";
    }
    else if (character_class == "warlock") {
        armor = "leather";
        weapons = weapons + "dagger<br/>" + "dagger<br/>";
        x = Math.floor(Math.random() * 2); // a crossbow or any simple weapon
        if (x == 0) {
            weapons = weapons + "crossbow, light with 20 bolts<br/>";
        }
        else if (x == 1) {
            x = Math.floor(Math.random() * weapon_simpleranged.length);
            y = weapon_simpleranged[x];
            weapons = weapons + y + "<br/>";
        }
        else {
            x = Math.floor(Math.random() * weapon_simplemelee.length);
            y = weapon_simplemelee[x];
            weapons = weapons + y + "<br/>";
        }
        x = Math.floor(Math.random() * 1); // component pouch or arcane focus
        if (x == 0) {
            miscequipment = miscequipment + "component pouch<br/>";
        }
        else {
            miscequipment = miscequipment + "arcane focus<br/>";
        }
        miscequipment = miscequipment + "scholar's pack<br/>"
        x = Math.floor(Math.random() * 1); // any simple weapon
        if (x == 0) {
            x = Math.floor(Math.random() * weapon_simpleranged.length);
            y = weapon_simpleranged[x];
            weapons = weapons + y + "<br/>";
        }
        else {
            x = Math.floor(Math.random() * weapon_simplemelee.length);
            y = weapon_simplemelee[x];
            weapons = weapons + y + "<br/>";
        }
    }
    else if (character_class == "wizard") {
        x = Math.floor(Math.random() * 1);
        if (x == 0) {
            weapons = weapons + "quarterstaff<br/>";
        }
        else {
            weapons = weapons + "dagger<br/>";
        }
        miscequipment = miscequipment + "component pouch<br/>" + "scholar's pack<br/>" + "spellbook<br/>";
    }
    else if (character_class == "artificer") {
        x = Math.floor(Math.random() * 1); // any simple weapon
        if (x == 0) {
            x = Math.floor(Math.random() * weapon_simpleranged.length);
            y = weapon_simpleranged[x];
            weapons = weapons + y + "<br/>";
        }
        else {
            x = Math.floor(Math.random() * weapon_simplemelee.length);
            y = weapon_simplemelee[x];
            weapons = weapons + y + "<br/>";
        }
        weapons = weapons + "crossbow, light and 20 bolts<br/>";
        x = Math.floor(Math.random() * 1); // armor choices
        if (x == 0) {
            armor = "studded leather";
        }
        else {
            armor = "scale mail";
        }
        miscequipment = miscequipment + "thieves' tools<br/>" + "dungeoneer's pack<br/>";
    }

    // Let's figure out armor class.
    if (character_class == "monk" && armor == "") { // monks have a unique ability where if they don't wear armor, they get to add modifiers
        armor_class = 10 + dexmodifier + wismodifier;
    }

    if (armor == "padded") {
        armor_class = 11 + dexmodifier;
        character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
    }
    else if(armor == "leather") {
        armor_class = 11 + dexmodifier;
    }
    else if (armor == "studded leather") {
        armor_class = 12 + dexmodifier;
    }
    else if (armor == "hide") {
        if (dexmodifier > 2) {
            armor_class = 12 + 2;
        }
        else {
            armor_class = 12 + dexmodifier;
        }
    }
    else if (armor == "chain shirt") {
        if (dexmodifier > 2) {
            armor_class = 13 + 2;
        }
        else {
            armor_class = 13 + dexmodifier;
        }
    }
    else if (armor == "scale mail") {
        if (dexmodifier > 2) {
            armor_class = 14 + 2;
        }
        else {
            armor_class = 14 + dexmodifier;
        }
        character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
    }
    else if (armor == "breastplate") {
        if (dexmodifier > 2) {
            armor_class = 15 + 2;
        }
        else {
            armor_class = 15 + dexmodifier;
        }
    }
    else if (armor == "half plate") {
        if (dexmodifier > 2) {
            armor_class = 15 + 2;
        }
        else {
            armor_class = 15 + dexmodifier;
        }
        character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
    }
    else if (armor == "ring mail") {
        character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
        armor_class = 14;
    }
    else if (armor == "chain mail") {
        if (strength < 13) { // first ensures player can wear it
            armor = "ring mail"; // if player cannot wear it, change their armor to ring mail
            character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
            armor_class = 14;
        }
        else {
            character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
            armor_class = 16;
        }
    }
    else if (armor == "splint") {
        if (strength < 15) { // first ensures player can wear it
            armor = "ring mail"; // if player cannot wear it, change their armor to ring mail
            character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
            armor_class = 14;
        }
        else {
            character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
            armor_class = 17;
        }
    }
    else if (armor == "plate") {
        if (strength < 15) { // first ensures player can wear it
            armor = "ring mail"; // if player cannot wear it, change their armor to ring mail
            character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
            armor_class = 14;
        }
        else {
            character_uniquefeatures = character_uniquefeatures + "disadvantage on stealth<br/>";
            armor_class = 18;
        }
    }

    if (shield == true) { // add a bonus if character has a shield
        armor_class = armor_class + 2;
    }

    // Finally, let's create the alignment.
   // x = Math.floor(Math.random() * alignment.length);
   x = alignment.indexOf(getCookie("lnc"));
    character_alignment = alignment[x];

    /* PRINTING SECTION */

    // Let's print the class + the reasoning + the specialty behind it
    document.getElementById("Class").innerHTML = character_class;
    document.getElementById("classback").innerHTML = character_class_story;
    if (character_class_specialty == "") {
        document.getElementById("Specialty").innerHTML = "No specialty unlocked.";
    }
    else {
        document.getElementById("Specialty").innerHTML = character_class_specialty;
    }

    // Let's print the race
    if (character_subrace != "") {
        document.getElementById("Race").innerHTML = character_race + ", " + character_subrace;
    }
    else {
        document.getElementById("Race").innerHTML = character_race;
    }

    // Let's print the alignment.
    document.getElementById("alignment").innerHTML = character_alignment;

    // Let's print the background and the reasoning behind it
    document.getElementById("bck").innerHTML = character_background;
    document.getElementById("bckreason").innerHTML = character_background_story;

    // Let's print the spells
    if (spell_cantrip == "" && spell_1st == "") { // Some players know a cantrip thanks to their class so a general "magic user" comparison cannot be made.
        document.getElementById("spells").innerHTML = "No spells known.";
    }
    else {
        document.getElementById("spells").innerHTML = spell_cantrip + spell_1st;
    }

    // Let's print the character's speed.
    document.getElementById("speed-n").innerHTML = character_speed;

    // Let's print the languages known.
    document.getElementById("languages").innerHTML = character_languages;

    // Let's print the character's unique features
    document.getElementById("features").innerHTML = character_uniquefeatures;

    // Let's update the names
    document.getElementById("firstName").innerHTML = character_name_first;
    document.getElementById("lastName").innerHTML = character_name_last;


    // Let's print stats
    document.getElementById("str-n").innerHTML = strength;
    document.getElementById("dex-n").innerHTML = dexterity;
    document.getElementById("wis-n").innerHTML = wisdom;
    document.getElementById("int-n").innerHTML = intelligence;
    document.getElementById("cha-n").innerHTML = charisma;
    document.getElementById("con-n").innerHTML = constitution;

    // Now let's print our hitpoints!
    document.getElementById("hp-n").innerHTML = hitpoints;

    // let's print equipment
    document.getElementById("Weapons").innerHTML = weapons;
    if (armor == "") {
        document.getElementById("Armor").innerHTML = "No armor equiped.";
    }
    else {
        document.getElementById("Armor").innerHTML = armor;
    }
    document.getElementById("Misc").innerHTML = miscequipment;

    // Finally, let's change the image according to the class.
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
    else if (character_class == "bard" || character_class =="artificer") {
        document.getElementById("charImage").src="pictures/lyre.png";
    }
    else if (character_class == "wizard") {
        document.getElementById("charImage").src="pictures/book.png";
    }
    else if (character_class == "warlock" || character_class == "sorcerer") {
        document.getElementById("charImage").src="pictures/magic.png";
    }
}

function cantripGeneration(character_class, spell_cantrip_amount, spell_cantrip) {
    if (character_class == "artificer") {
        var x = Math.floor(Math.random() * artificer_cantrip.length);
        var y = artificer_cantrip[x];
        var spell_cantrip = spell_cantrip + y + " ";
    }
    else if (character_class == "bard") {
        var x = Math.floor(Math.random() * bard_cantrip.length);
        var y = bard_cantrip[x];
        var spell_cantrip = spell_cantrip + y + " ";

    }
    else if (character_class == "cleric") {
        var x = Math.floor(Math.random() * cleric_cantrip.length);
        var y = cleric_cantrip[x];
        var spell_cantrip = spell_cantrip + y + " ";
    }
    else if (character_class == "druid") {
        var x = Math.floor(Math.random() * druid_cantrip.length);
        var y = druid_cantrip[x];
        var spell_cantrip = spell_cantrip + y + " ";
    }
    else if (character_class == "sorcerer") {
        var x = Math.floor(Math.random() * sorcerer_cantrip.length);
        var y = sorcerer_cantrip[x];
        var spell_cantrip = spell_cantrip + y + " ";
    }
    else if (character_class == "warlock") {
        var x = Math.floor(Math.random() * warlock_cantrip.length);
        var y = warlock_cantrip[x];
        var spell_cantrip = spell_cantrip + y + " ";
    }
    else if (character_class == "wizard") {
        var x = Math.floor(Math.random() * wizard_cantrip.length);
        var y = wizard_cantrip[x];
        var spell_cantrip = spell_cantrip + y + " ";
    }
}

function firstGeneration(character_class, spell_1st_amount, spell_1st) {
    if (character_class == "artificer") {
        var x = Math.floor(Math.random() * artificer_1stlevel.length);
        var y = artificer_1stlevel[x];
        var spell_1st = spell_1st + y + "<br/>";
    }
    else if (character_class == "bard") {
        var x = Math.floor(Math.random() * bard_1stlevel.length);
        var y = bard_1stlevel[x];
        var spell_1st = spell_1st + y + "<br/>";
    }
    else if (character_class == "cleric") {
        var x = Math.floor(Math.random() * cleric_1stlevel.length);
        var y = cleric_1stlevel[x];
        var spell_1st = spell_1st + y + "<br/>";
    }
    else if (character_class == "druid") {
        var x = Math.floor(Math.random() * druid_1stlevel.length);
        var y = druid_1st[x];
        var spell_1st = spell_1st + y + "<br/>";
    }
    else if (character_class == "paladin") {
        var x = Math.floor(Math.random() * paladin_1stlevel.length);
        var y = paladin_1stlevel[x];
        var spell_1st = spell_1st + y + "<br/>";
    }
    else if (character_class == "ranger") {
        var x = Math.floor(Math.random() * ranger_1stlevel.length);
        var y = ranger_1stlevel[x];
        var spell_1st = spell_1st + y + "<br/>";
    }
    else if (character_class == "sorcerer") {
        var x = Math.floor(Math.random() * sorcerer_1stlevel.length);
        var y = sorcerer_1st[x];
        var spell_1st = spell_1st + y + "<br/>";
    }
    else if (character_class == "warlock") {
        var x = Math.floor(Math.random() * warlock_1stlevel.length);
        var y = warlock_1stlevel[x];
        var spell_1st = spell_1st + y + "<br/>";
    }
    else if (character_class == "wizard") {
        var x = Math.floor(Math.random() * wizard_1stlevel.length);
        var y = wizard_1st[x];
        var spell_1st = spell_1st + y + "<br/>";
    }
}

function modifier(mod, modtype) {
    if (modtype == 1) {
        mod = -5;
    }
    else if (modtype == 2 || modtype == 3) {
        mod = -4;
    }
    else if (modtype == 4 || modtype == 5) {
        mod = -3;
    }
    else if (modtype == 6 || modtype == 7) {
        mod = -2;
    }
    else if (modtype == -8 || modtype == -9) {
        mod = -1;
    }
    else if (modtype == 10 || modtype == 11) {
        mod = 0;
    }
    else if (modtype == 12 || modtype == 13) {
        mod = 1;
    }
    else if (modtype == 14 || modtype == 15) {
        mod = 2;
    }
    else if (modtype == 16 || modtype == 17) {
        mod = 3;
    }
    else if (modtype == 18 || modtype == 19) {
        mod = 4;
    }
    else if (modtype == 20 || modtype == 21) {
        mod = 5;
    }
    else if (modtype == 22 || modtype == 23) {
        mod = 6;
    }
    else if (modtype == 24 || modtype == 25) {
        mod = 7;
    }
    else if (modtype == 26 || modtype == 27) {
        mod = 8;
    }
    else if (modtype == 28 || modtype == 29) {
        mod = 9;
    }
    else if (modtype == 30) {
        mod = 10;
    }
    return mod;
}

function classReasoning(character_class, character_class_story, x) {
    if (character_class == "barbarian") {
        x = Math.floor(Math.random() * reason_barbarian.length);
        character_class_story = reason_barbarian[x];
    }
    else if (character_class == "bard") {
        x = Math.floor(Math.random() * reason_bard.length);
        character_class_story = reason_bard[x];
    }
    else if (character_class == "cleric") {
        x = Math.floor(Math.random() * reason_cleric.length);
        character_class_story = reason_cleric[x];
    }
    else if (character_class == "druid") {
        x = Math.floor(Math.random() * reason_druid.length);
        character_class_story = reason_druid[x];
    }
    else if (character_class == "fighter") {
        x = Math.floor(Math.random() * reason_fighter.length);
        character_class_story = reason_fighter[x];
    }
    else if (character_class == "monk") {
        x = Math.floor(Math.random() * reason_monk.length);
        character_class_story = reason_monk[x];
    }
    else if (character_class == "paladin") {
        x = Math.floor(Math.random() * reason_paladin.length);
        character_class_story = reason_paladin[x];
    }
    else if (character_class == "ranger") {
        x = Math.floor(Math.random() * reason_ranger.length);
        character_class_story = reason_ranger[x];
    }
    else if (character_class == "rogue") {
        x = Math.floor(Math.random() * reason_rogue.length);
        character_class_story = reason_rogue[x];
    }
    else if (character_class == "sorcerer") {
        x = Math.floor(Math.random() * reason_sorcerer.length);
        character_class_story = reason_sorcerer[x];
    }
    else if (character_class == "warlock") {
        x = Math.floor(Math.random() * reason_warlock.length);
        character_class_story = reason_warlock[x];
    }
    else if (character_class == "wizard") {
        x = Math.floor(Math.random() * reason_wizard.length);
        character_class_story = reason_wizard[x];
    }
    return character_class_story;
}

function backgroundReasoning(character_background, character_background_story, x) {
    if (character_background == "acolyte") {
        x = Math.floor(Math.random() * reason_acolyte.length);
        character_background_story = reason_acolyte[x];
    }
    else if (character_background == "charlatan") {
        x = Math.floor(Math.random() * reason_charlatan.length);
        character_background_story = reason_charlatan[x];
    }
    else if (character_background == "criminal") {
        x = Math.floor(Math.random() * reason_criminal.length);
        character_background_story = reason_criminal[x];
    }
    else if (character_background == "entertainer") {
        x = Math.floor(Math.random() * reason_entertainer.length);
        character_background_story = reason_entertainer[x];
    }
    else if (character_background == "folk hero") {
        x = Math.floor(Math.random() * reason_folkhero.length);
        character_background_story = reason_folkhero[x];
    }
    else if (character_background == "guild_artisan") {
        x = Math.floor(Math.random() * reason_guildartisan.length);
        character_background_story = reason_guildartisan[x];
    }
    else if (character_background == "hermit") {
        x = Math.floor(Math.random() * reason_hermit.length);
        character_background_story = reason_hermit[x];
    }
    else if (character_background == "noble") {
        x = Math.floor(Math.random() * reason_noble.length);
        character_background_story = reason_noble[x];
    }
    else if (character_background == "outlander") {
        x = Math.floor(Math.random() * reason_outlander.length);
        character_background_story = reason_outlander[x];
    }
    else if (character_background == "sage") {
        x = Math.floor(Math.random() * reason_sage.length);
        character_background_story = reason_sage[x];
    }
    else if (character_background == "sailor") {
        x = Math.floor(Math.random() * reason_sailor.length);
        character_background_story = reason_sailor[x];
    }
    else if (character_background == "soldier") {
        x = Math.floor(Math.random() * reason_soldier.length);
        character_background_story = reason_soldier[x];
    }
    else if (character_background == "urchin") {
        x = Math.floor(Math.random() * reason_urchin.length);
        character_background_story = reason_urchin[x];
    }
    return character_background_story;
}


function classSpecialty(character_class, character_class_specialty, x) {
    if (character_class == "warlock") {
        x = Math.floor(Math.random() * warlock_patron.length);
        character_class_specialty = warlock_patron[x];
    }
    else if (character_class == "sorcerer") {
        x = Math.floor(Math.random() * sorcerer_sub.length);
        character_class_specialty = sorcerer_sub[x];
    }
    else if (character_class == "ranger") {
        x = Math.floor(Math.random() * ranger_favored.length);
        character_class_specialty = ranger_favored[x];
    }
    else if (character_class == "fighter") {
        x = Math.floor(Math.random() * fighter_style.length);
        character_class_specialty = fighter_style[x];
    }
    else if (character_class == "cleric") {
        x = Math.floor(Math.random() * cleric_domain.length);
        character_class_specialty = cleric_domain[x];
    }
    
    return character_class_specialty;
}

document.cookie = "class=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
document.cookie = "race=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
document.cookie = "lnc=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";