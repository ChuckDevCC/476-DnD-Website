// TABLE OF CONTENTS
/* 
Since linking a Javascript file to another Javascript file is complicated, we will be combining everything here.
    - Line 44: information from the books to aid in generation, starting with the RACES section
    - Line 359: the generation functions, starting with the "generateCharacter()" function
*/

// ----------------------------- REFERENCE SECTION -----------------------------

/* 
This section of code has information from the books to allow for character creation.

    VARIABLES
        - All spaces are represents with _
        - All ' are joint with the word before (ex. hunter's mark is hunters_mark)

    NOTES
        - Currently not compatible with child characters. 
        - Names are from Xanathar's Guide to Everything.
        - Half-elfs currently do not have any names associated with them. Generate a human or elf name.
        - Feats with prerequisites:
            - Defensive Duelist requires dexterity 13 or higher.
            - Grappler requires strength 13 or higher.
            - Heavily armored requires a proficiency with medium armor.
            - Heavy armor master requires a proficiency with heavy armor.
            - Inspiring leader requires charisma 13 or higher.
            - Meidum armor master requires a profiency with medium armor.
            - Ritual caster requires intelligence or wisdom of 13 or higher.
            - Skulker requires a dexterity of 13 or higher.
            Spell sniper requires the ability to cast at least one spell.
            War Caster requires the ablitity to cast at least one spell.
            - Eldritch Adept is not allowed unless the player has spellcasting or pact magic feature.
            - Fighting Intiate requires profiency with a martial weapon.
            - Metamagic Adept requires spellcasting or pact magic features.

    INCLUDES INFORMATION FROM:
        - Player's Handbook
        - Xanthar's Guide to Everything
        - Tasha's Cauldron of Everything
*/

// -------------------------------------

/* RACES */

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
var warlock_patron = ["archfey", "fiend", "great_old_one", "the_celestial", "the_hexblade", "fathomless", "genie"];
var warlock_genie = ["dao", "dijinni", "efreeti", "marid"];
// SORCERER
// Origins 
var sorcerer_sub = ["draconic_bloodline", "wild_magic", "divine_soul", "shadow_magic", "aberrant_mind", "clockwork_soul"];
var sorcerer_draconic = ["black", "blue", "brass", "bronze", "copper", "gold", "green", "red", "silver", "white"];

// RANGER
// Favored Enemy
var ranger_favored = ["aberrations", "beasts", "celestials", "constructs", "dragons", "elementals", "fey", "fiends", "giants", "humanoids", "monstrosities", "oozes", "plants", "undead"];

// FIGHTER
// Fighting Style
var fighter_style = ["archery", "defense", "dueling", "great_weapon_fighting", "protection", "two-weapon_fighting", "blind_fighting", "interception", "superior_technique", "thrown_weapon_fighting", "unarmed_fighting"];
var fighter_maneuver = ["ambush", "bait_and_switch", "brace", "commanding_presence", "grappling_strike", "quick_toss", "tactical_assessment"];

// CLERIC
// Divine Domain
var cleric_domain = ["knowledge", "life", "light", "nature", "tempest", "trickery", "war", "peace", "order", "twilight"];


// -------------------------------------

/* MAGIC */
// ARTIFICER SPELLS
var artificer_cantrip = ["acid_splash", "booming_blade", "create_bonfire", "dancing_lights", "fire_bolt", "frostbite", "greenflame_blade", "guidance", "light", "lightning_lure", "mage_hand", "magic_stone", "mending", "message", "poison_spray", "prestidigitaton", "ray_of_frost", "resistance", "shocking_grasp", "spare_the_dying", "sword_burst", "thorn_whip", "thunderclap"];
var artificer_1stlevel = ["absorb_elements", "alarm_ritual", "catapult", "detect_magic_ritual", "disguise_self", "expeditious_retreat", "faerie_fire", "false_fire", "feather_fall", "grease", "identify_ritual", "jump", "longstrider", "purify_food_and_drink", "sancutary", "Snare", "tashas_caustic_brew"];


// BARD SPELLS
var bard_cantrip = ["blade_ward", "dancing_lights", "friends", "light", "mage_hand", "mending", "message", "minor_illusion", "prestidigitation", "true_strike", "vicious_mockery"];
var bard_1stlevel = ["animal_friendship", "bane", "charm_person", "comprehend_languages", "cure_wounds", "detect_magic", "disguise_self", "dissonant_whispers", "faerie_fire", "feather_fall", "healing_word", "heroism", "identify", "illusory_script", "longstrider", "silent_image", "sleep", "speak_with_animals", "tashas_hideous_laughter", "thunderwave", "unseen_servant", "color_spray", "command"];
// CLERIC SPELLS
var cleric_cantrip = ["guidance", "light", "mending", "resistance", "sacred_flame", "spare_the_dying", "thaumaturgy"];
var cleric_1stlevel = ["bane", "bless", "command", "create_or_destroy_water", "cure_wounds", "detect_evil_and_good", "detect_magic", "detect_poison_and_disease", "guiding_bolt", "healing_word", "inflict_wounds", "protection_from_evil_and_good", "purify_food_and_drink", "sanctuary", "shield_of_faith"];
    // domain spells
    var cleric_order1st = ["command, heroism"];
    var cleric_peace1st = ["heroism", "sanctuary"];
    var cleric_twilight1st = ["faerie_fire", "sleep"];
    var cleric_knowledge1st = ["command", "identify"];
    var cleric_life1st = ["bless", "cure_wounds"];
    var cleric_light1st = ["burning_hands", "faerie_fire"];
    var cleric_nature1st = ["animal_friendship", "speak_with_animals"];
    var cleric_tempest1st = ["fog_cloud", "thunderwave"];
    var cleric_trickery1st = ["charm_person", "disguise_self"];
    var cleric_war1st = ["divine_favor", "shield_of_faith"];
// DRUID SPELLS
var druid_cantrip = ["druidcraft", "guidance", "mending", "poison_spray", "produce_flame", "resistance", "shillelagh", "thorn_whip"];
var druid_1stlevel = ["animal_friendship", "charm_person", "create_or_destroy_water", "cure_wounds", "detect_magic", "detect_poison_and_disease", "entangle", "faerie_fire", "fog_cloud", "goodberry", "healing_word", "jump", "longstrider", "purify_food_and_drink", "speak_with_animals", "thunderwave", "protection_from_evil_and_good"];
// PALADIN SPELLS
var paladin_1stlevel = ["bless", "command", "compelled_duel", "cure_wounds", "detect_evil_and_good", "detect_magic", "detect_poison_and_disease", "divine_favor", "heroism", "protection_from_evil_and_good", "purify_food_and_drink", "smearing_smite", "shield_of_faith", "thunderous_smite", "wrathful_smite"];
// RANGER SPELLS
var ranger_1stlevel = ["alarm", "animal_friendship", "cure_wounds", "detect_magic", "detect_poison_and_disease", "ensnaring_strike", "fog_cloud", "goodberyy", "hail_of_thorns", "hunters_mark", "jump", "longstrider", "speal_with_animals"];
// SORCERER SPELLS
var sorcerer_cantrip = ["acid_splash", "blade_ward", "chill_touch", "dancing_lights", "fire_bolt", "friends", "light", "mage_hand", "mending", "message", "minor_illusion", "poison_spray", "prestidigtation", "ray_of_frost", "shocking_grasp", "true_strike", "booming_blade", "greenflame_blade", "lightning_lure", "mind_sliver", "sword_burst"];
var sorcerer_1stlevel = ["burning_hands", "charm_person", "chromatic_orb", "color_spray", "comprehend_languages", "detect_magic", "disguise_self", "expeditious_retreat", "false_life", "feather_fall", "fog_cloud", "jump", "mage_armor", "magic_missile", "ray_of_sickness", "shield", "silent_image", "sleep", "thunderwave", "witch_bolt", "grease", "tashas_caustic_brew"];
    // origin spells
    var sorcerer_aberrant1st = ["arms_of_hadar", "dissonant_whispers", "mind_sliver"];
    var sorcerer_clockwork1st = ["alarm", "protection_from_evil_and_good"];
// WARLOCK SPELLS
var warlock_cantrip = ["blade_ward", "chill_touch", "eldritch_blast", "friends", "mage_hand", "minor_illusion", "poison_spray", "pretidigitation", "true_strike", "booming_blade", "greenflame_blade", "lightning_lure", "mind_sliver", "sword_burst"];
var warlock_1stlevel = ["armor_of_agathys", "arms_of_hadar", "charm_person", "comprehend_languages", "expeditious_retreat", "hellish_rebuke", "hex", "illusory_script", "protection_from_evil_and_good", "unseen_servant", "witch_bolt"];
    // otherworldly patron spells
    var warlock_fathomless1st = ["create_or_destroy_water", "thunderwaves"];
    var warlock_genie1st = ["detect_evil_and_good"];
    var warlock_genie_dao1st = ["sanctuary"];
    var warlock_genie_djinni1st = ["thunderwave"];
    var warlock_genie_efreeti1st = ["burning_hands"];
    var warlock_genie_marid1st = ["fog_cloud"];
    var warlock_archfey1st = ["faerie_fire", "sleep"];
    var warlock_fiend1st = ["burning_hands", "command"];
    var warlock_greatoldone1st = ["dissonant_whispers", "tashas_hideous_laughter"];
// WIZARD SPELLS
var wizard_cantrip = ["acid_splash", "blade_ward", "chill_touch", "dancing_lights", "fire_bolt", "friends", "light", "mage_hand", "mending", "message", "minor_illusion", "poison_spray", "prestidigitation", "ray_of_frost", "shocking_grasp", "true_strike", "booming_blade", "greenflame_blade", "lightning_lure", "mind_sliver", "sword_burst"];
var wizard_1stlevel = ["alarm", "burning_hands", "charm_person", "chromatic_orb", "color_spray", "comprehend_languages", "detect_magic", "disguise_self", "expeditious_retreat", "false_life", "feather_fall", "find_familiar", "fog_cloud", "grease", "identify", "illusory_script", "jump", "longstrider", "mage_armor", "magic_missile", "protection_from_evil_and_good", "ray_of_sickness", "shield", "silent_image", "sleep", "tashas_hideous_laughter", "tensers_floating_disk", "thunderwave", "unseen_servant", "witch_bolt", "tashas_caustic_brew"];

// -------------------------------------

/* ITEMS */

// Weapons
var weapon_simplemelee = ["club", "dagger", "greatclub", "handaxe", "javelin", "light_hammer", "mace", "quarterstaff", "sickle", "spear"]; 
var weapon_simpleranged = ["crossbow_light", "dart", "shortbow", "sling"];
var weapon_martialmelee = ["battleaxe", "flail", "glaive", "greataxe", "greatsword", "halberd", "lance", "longsword", "maul", "morningstar", "pike", "rapier", "scimitar", "shortsword", "trident", "war_pick", "warhammer", "whip"];
var weapon_martialranged = ["blowgun", "crossbow_hand", "crossbow_heavy", "longbow", "net"];

// Armor
var armor_light = ["padded", "leather", "studded leather"];
var armor_medium = ["hide", "chain_shirt", "scale_mail", "breatplate", "half_plate"];
var armor_heavy = ["ring_mail", "chain_mail", "splint", "plate"];

// Equipment
var equipment_pack = ["burglars_pack", "diplomats_pack", "dungeoneers_pack", "entertainers_pack", "explorers_pack", "priests_pack", "scholars_pack"];
var equipment_instruments = ["bagpipes", "drum", "dulcimer", "flute", "lute", "lyre", "horn", "pan_flute", "shawm", "viol"];
var equipment_artisan = ["alchemists_supplies", "brewers_supplies", "calligraphers_supplies", "carpenters_tools", "cartographers_tool", "cobblers_tools", "cooks_utensils", "glassblowers_tools", "jewelers_tools", "leatherworkers_tools", "masons_tools", "painters_supplies", "potters_tools", "smiths_tools", "tinkers_tool", "weavers_tool", "woodcarvers_tools"];
var equipment_gaming = ["dice_set", "dragonchess_set", "playing_card_set", "three-dragon_ante_set"];

// Vehicles
var vehicle_mount = ["camel", "donkey", "elephant", "horse", "mastiff", "pony", "warhorse"];
var vehicle_waterborne = ["galley", "keelboat", "longsoap", "rowboat", "sailing_ship", "warship"];

// -------------------------------------

/* BACKGROUNDS */
var background = ["acolyte", "charlatan", "criminal", "entertainer", "folk_hero", "guild_artisan", "hermit", "noble", "outlander", "sage", "sailor", "soldier", "urchin"];

// Alignments
var alignment = ["chaotic_evil", "neutral_evil", "lawful_evil", "chaotic_neutral", "neutral", "lawful_neutral", "chaotic_good", "neutral_good", "lawful_good"];

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
var language_exotic = ["abyssal", "celestial", "deep_speech", "draconic", "infernal", "primordial", "sylvan", "undercommon"];

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
var feat = ["alert", "athlete", "actor", "charger", "crossbow expert", "defensive duelist", "dual wielder", "dungeon delver", "durable", "elemental adept", "grappler", "great weapon master", "healer", "heavily armored", "heavy armor master", "inspiring leader", "keen mind", "lightly armored", "linguist", "lucky", "mage slayer", "magic initiate", "martial adept", "medium armor master", "mobile", "moderately armored", "mounted combatant", "observant", "polearm master", "resilient", "ritual caster", "savage attacker", "sentinel", "sharpshooter", "shield master", "skilled", "skulker", "spell sniper", "tavern brawler", "tough", "war caster", "weapon master", "artificer_intiiate", "chef", "crusher", "eldritch_adept", "fey_touched", "fighting_intiate", "gunner", "metamagic_adept", "piercer", "poisoner", "shadow_touched", "skill_expert", "slasher", "telekinetic", "telepathic"];
var feat_halfling = ["bountiful_luck", "second_chance"];
var feat_dargonborn = ["dragon_fear", "dragon_hide"];
var feat_elf_drow = ["drow_high_magic"];
var feat_dwarf = ["dwarven_fortitude", "squat_nimbleness"];
var feat_elf = ["elven accuracy"];
var feat_elf_half = ["elven_accuracy", "prodigy"];
var feat_elf_high = ["fey_teleportation"];
var feat_elf_wood = ["wood_elf_magic"];
var feat_gnome = ["fade_away", "squat_nimbleness"];
var feat_tiefling = ["flames_of_phlegethos", "infernal_constitution"];
var feat_orc_half = ["orcish_fury", "prodigy"];
var feat_human = ["prodigy"];

// -------------------------------------

/* Generation Functions */

/*
This code references "reference.js" to fill out the variables recreated for the character sheet.

Possible future features:
    - Have code that prevents duplicate results for spells and languages.
    - Allow for special features of classes (ex. ).
    - Generate equipment.
*/

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
    var spell_cantrip = "";
    var spell_1st = ""; 
    var spell_cantrip_amount = 0;
    var spell_1st_amount = 0;
    var character_size = ""; 
    var character_magic_user = false;
    var character_alignment = ""; // this will store the character's alignment
    var hitpoints = 0;
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

    // First, let's generate the character's race
    var x = Math.floor(Math.random() * race_option.length);
    var character_race = race_option[x];
    document.getElementById("Race").innerHTML = character_race + character_subrace;
    
    // Next, let's generate the character's gender
    var x = Math.floor(Math.random() * 1);
    if (x == 0) {
        character_gender = "male";
    }
    else {
        character_gender = "female";
    }
    
    // Let's generate the character's base stats.
   for (let i = 0; i < 6; i++) {
    x = Math.floor((Math.random() * 18) + 3);
    if (i == 0) {
        strength = x;
        document.getElementById("str-n").innerHTML = strength;
    }
    else if (i == 1) {
        constitution = x;
        document.getElementById("con-n").innerHTML = constitution;
    }
    else if (i == 2) {
        dexterity = x;
        document.getElementById("dex-n").innerHTML = dexterity;
    }
    else if (i == 3) {
        wisdom = x; 
        document.getElementById("wis-n").innerHTML = wisdom;
    }
    else if (i == 4) {
        intelligence = x; 
        document.getElementById("int-n").innerHTML = intelligence;
    }
    else if (i == 5) {
        charisma = x; 
        document.getElementById("cha-n").innerHTML = charisma;
    }    
   }

   // Let's generate the character's background.
   x = Math.floor(Math.random() * background.length);
   character_background = background[x];

   /* ERROR: does not generate anything... for some reason
   // Now let's generate the reasoning for being the background they chose.
   backgroundReasoning(character_background, character_background_story);
   alert (character_background_story);
   */ 

   // Let's generate the character's class
    x = Math.floor(Math.random() * class_option.length);
    character_class = class_option[x];
    document.getElementById("Class").innerHTML = character_class;

    /* ERROR: does not generate anything... for some reason
    // Now, we shall select the reasoning for why the became who they are.
    classReasoning(character_class, character_background_story);
    alert(character_background_story);
    */

   // Now that we know the player's class, we need to determine if they have spells at level 1.
    if (character_class == "artificer" || character_class == "bard" || character_class == "cleric" || character_class == "druid" || character_class == "paladin" || character_class == "ranger" || character_class == "sorcerer" || character_class == "warlock" || character_class == "wizard") {
        character_magic_user = true;
    }
     


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
        // Now that we know the character level and the associated spells known, we can generate what they are.
        /* ERROR: functions don't work cantripGeneration and firstGeneration 
        cantripGeneration(character_class, spell_cantrip_amount, spell_cantrip);
        firstGeneration(character_class, spell_1st_amount, spell_1st);
        */
        }
    }

    // Now, let's generate the character name (and other racial-based traits) based off of the races
    /* ERROR: function calling don't work
    if (character_race == "dwarf") {
        dwarfGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma);
    }
    else if (character_race == "elf") {
        elfGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma);
    }
    else if (character_race == "halfling") {
        halflingGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma);
    }
    else if (character_race == "human") {
        humanGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma);
    }
    else if (character_race == "dragonborn") {
        dragonbornGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma);
    }
    else if (character_race == "gnome") {
        gnomeGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma);
    }
    else if (character_race == "half-elf") {
        halfElfGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma);
    }
    else if (character_race == "half-orc") {
        halfOrcGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma);
    }
    else if (character_Race == "tiefling") {
        tieflingGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma);
    }
    */

    // We need to figure out modifiers! 
    /* ERROR: function calling don't work
    modifier(strmodifier, strength);
    modifier(dexmodifier, dexterity);
    modifier(conmodifier, constitution);
    modifier(intmodifier, intelligence);
    modifier(wismodifier, wisdom);
    modifier(charmodifier, charisma);
    */

    // The first level hitpoints is the hit die type for the class + constitution modifier
   /* ERROR: uncomment this out whenn we have the modifiers working
    if (character_class == "barbarian") {
        hitpoints = 12 + conmodifier;
    }
    else if (character_class == "fighter" || character_class == "paladin" || character_class == "ranger") {
        hitpoints = 10 + condmodifier;
    }
    else if (character_class == "artificer" || character_class == "bard" || character_class == "cleric" || character_class == "druid" || character_class == "monk" || character_class == "rogue" || character_class == "warlock") {
        hitpoints = 8 + conmodifier;
    }
    else if (character_class == "sorcerer" || character_class == "wizard") {
        hitpoints = 6 + condmodifier;
    }
    */
    // For future levels, we will use a function to generate further die rolls.

}

/* 
    // Just like that, we are all done! Let's print the results.
    document.getElementById("Class").innerHTML = character_class;
    document.getElementById("Specialty").innerHTML = character_class_specialty;
    document.getElementById("Race").innerHTML = character_race + character_subrace;
    document.getElementById("firstName").innerHTML = character_name_first;
    document.getElementById("lastName").innerHTML = character_name_last;

    // Stat Prints
    document.getElementById("str-n").innerHTML = strength;
    document.getElementById("dex-n").innerHTML = dexterity;
    document.getElementById("con-n").innerHTML = constitution;
    document.getElementById("int-n").innerHTML = intelligence;
    document.getElementById("wis-n").innerHTML = wisdom;
    document.getElementById("cha-n").innerHTML = charisma;

    // Background Information / Languages
    document.getElementById("charback").innerHTML = character_background_story;
    document.getElementById("language").innerHTML = character_languages;
    document.getElementById("classback").innerHTML = character_class_story;
    */

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
        var spell_1st = spell_1st + y + " ";
    }
    else if (character_class == "bard") {
        var x = Math.floor(Math.random() * bard_1stlevel.length);
        var y = bard_1stlevel[x];
        var spell_1st = spell_1st + y + " ";
    }
    else if (character_class == "cleric") {
        var x = Math.floor(Math.random() * cleric_1stlevel.length);
        var y = cleric_1stlevel[x];
        var spell_1st = spell_1st + y + " ";
    }
    else if (character_class == "druid") {
        var x = Math.floor(Math.random() * druid_1stlevel.length);
        var y = druid_1st[x];
        var spell_1st = spell_1st + y + " ";
    }
    else if (character_class == "paladin") {
        var x = Math.floor(Math.random() * paladin_1stlevel.length);
        var y = paladin_1stlevel[x];
        var spell_1st = spell_1st + y + " ";
    }
    else if (character_class == "ranger") {
        var x = Math.floor(Math.random() * ranger_1stlevel.length);
        var y = ranger_1stlevel[x];
        var spell_1st = spell_1st + y + " ";
    }
    else if (character_class == "sorcerer") {
        var x = Math.floor(Math.random() * sorcerer_1stlevel.length);
        var y = sorcerer_1st[x];
        var spell_1st = spell_1st + y + " ";
    }
    else if (character_class == "warlock") {
        var x = Math.floor(Math.random() * warlock_1stlevel.length);
        var y = warlock_1stlevel[x];
        var spell_1st = spell_1st + y + " ";
    }
    else if (character_class == "wizard") {
        var x = Math.floor(Math.random() * wizard_1stlevel.length);
        var y = wizard_1st[x];
        var spell_1st = spell_1st + y + " ";
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
} 

function classReasoning(character_class, character_class_story) {
    var x = 0;
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
}

function backgroundReasoning(character_background, character_background_story) {
    var x = 0;
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
    else if (character_background == "folk_hero") {
        x = Math.floor(Math.random() * reason_folkhero.length);
        character_background_story = reason_folkhero[x];
    }
    else if (character_background == "guild_artisan") {
        x = Math.floor(Math.random() * reason_guildartisan.length);
        character_background_story = reason_guildartisan[x];
    }
    else if (character_background == "chermit") {
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
}

function dwarfGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma) {
    // Let's set the default variables that occur, regardless of subrace or gender
    var character_uniquefeatures = character_uniquefeatures + "darkvision " + "dwarven resilience " + "dwarven combat training " + "stonecunning ";
    var character_languages = character_languages + " common" + " dwarven";
    var constitution = constitution + 2; // dwarves have a bonus to constitution of 2
    var character_speed = 25;
    var character_size = "Medium";

    // We use the gender to determine the dwarven name... 
    if (character_gender == "male") {
        var x = Math.floor(Math.random() * name_dwarf_male.length);
        var character_name = name_dwarf_male[x];
    }
    else if (character_gender == "female") {
        var x = Math.floor(Math.random() * name_dwarf_female.length);
        var character_name = name_dwarf_female[x];
    }
    // Now, we determine the last name
    var x = Math.floor(Math.random() * name_dwarf_clan.length);
    var character_name_last = name_dwarf_clan[x];

    // Dwarves have a subrace! Let's generate that.
    var x = Math.floor(Math.random() * sub_dwarf.length);
    var character_subrace = sub_dwarf[x];

    if (character_subrace == "hill") {
        var character_uniquefeatures = character_uniquefeatures + "dwarven toughness "
        var hitpoints = hitpoints + 1;
    }
    else if (character_subrace == "mountain") {
        var strength = strength + 2;
        var character_uniquefeatures = character_uniquefeatures + "dwarven armor training ";
    }
}

// ERROR: drows know the "dancing lights" cantrip.... help with that
function elfGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma) {
    // Let's set the default variables that occur, regardless of subrace or gender
    var character_uniquefeatures = character_uniquefeatures + "darkvision " + "keen senses " + "fey ancestry " + "trance ";
    var character_languages = character_languages + "common " + "elven ";
    var dexterity = dexterity + 2; // elves have a bonus to dexterity of 2
    var character_speed = 30;
    var character_size = "Medium";

    // We use the gender to determine the elven name... 
    if (character_gender == "male") {
        var x = Math.floor(Math.random() * name_elf_male.length);
        var character_name = name_elf_male[x];
    }
    else if (character_gender == "female") {
        var x = Math.floor(Math.random() * name_elf_family.length);
        var character_name = name_elf_female[x];
    }
    // Now, we determine the last name
    var x = Math.floor(Math.random() * name_elf_family.length);
    var character_name_last = name_elf_family[x];

    // Elves have a subrace! Let's generate that.
    var x = Math.floor(Math.random() * sub_elf.length);
    var character_subrace = sub_elf[x];

    if (character_subrace == "high") {
        var character_uniquefeatures = character_uniquefeatures + "elven weapon training "
        var intelligence = intelligence + 1;
        var spell_cantrip_amount = spell_cantrip_amount + 1;
        // High Elves know an extra language 
        var z = Math.floor(Math.random * 1);
        if (z == 1) { // standard language generation
            var x =  Math.floor(Math.random() * language_standard.length);
            var y = language_standard[x]; 
            var character_languages = character_languages + y + " ";
        }
        else { // exotic language generation
            var x =  Math.floor(Math.random() * language_exotic.length);
            var y = language_exotic[x]; 
            var character_languages = character_languages + y + " ";
        }
    }
    else if (character_subrace == "wood") {
        var wisdom = strength + 1;
        var character_uniquefeatures = character_uniquefeatures + "elven weapon training  ";
        var character_speed = 35;
    }
    else if (character_subrace == "drow") {
        var charisma = charisma + 1;
        var character_uniquefeatures = character_uniquefeatures + "superior darkvision " + "sunlight sensitivity " + "drow weapon training ";
    }
}

function halflingGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma) {
    // Let's set the default variables that occur, regardless of subrace or gender
    var character_uniquefeatures = character_uniquefeatures + "lucky " + "brave " + "halfling nimbleness ";
    var character_languages = character_languages + "common " + "halfling ";
    var dexterity = dexterity + 2; // halflings have a bonus to dexterity of 2
    var character_speed = 25;
    var character_size = "Small";

    // We use the gender to determine the halfling name... 
    if (character_gender == "male") {
        var x = Math.floor(Math.random() * name_halfling_male.length);
        var character_name = name_halfling_male[x];
    }
    else if (character_gender == "female") {
        var x = Math.floor(Math.random() * name_halfling_female.length);
        var character_name = name_halfling_female[x];
    }
    // Now, we determine the last name
    var x = Math.floor(Math.random() * name_halfling_family.length);
    var character_name_last = name_halfling_family[x];

    // Halflings have a subrace! Let's generate that.
    var x = Math.floor(Math.random() * sub_halfling.length);
    var character_subrace = sub_halfling[x];

    if (character_subrace == "lightfoot") {
        var character_uniquefeatures = character_uniquefeatures + "naturally stealthy "
        var charisma = charisma + 1;
    }
    else if (character_subrace == "stout") {
        var constitution = constitution + 1;
        var character_uniquefeatures = character_uniquefeatures + "stout resilience ";
    
    }
}

function humanGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma) {
    // Let's set the default variables that occur, regardless of subrace or gender
    var character_languages = character_languages + "common ";
    // Humans also know one bonus language, let's create a random one from the standard list
    var z = Math.floor(Math.random * 1);
    if (z == 1) { // standard language generation
        var x =  Math.floor(Math.random() * language_standard.length);
        var y = language_standard[x]; 
        var character_languages = character_languages + y + " ";
    }
    else { // exotic language generation
        var x =  Math.floor(Math.random() * language_exotic.length);
        var y = language_exotic[x]; 
        var character_languages = character_languages + y + " ";
    }

    // Humans have an ability increase of 1 for all stats
    var constitution = constitution + 1;
    var dexterity = dexterity + 1;
    var strength = strength + 1;
    var intelligence = intelligence + 1;
    var wisdom = wisdom + 1;
    var charisma = charisma + 1;

    var character_speed = 30;
    var character_size = "Medium";

    // We use the gender to determine the human name... 
    // But first, we must determine what subrace we want to go with.
    var y = Math.floor(Math.random() * 15); // generates number between 0-15 
    var character_subrace = sub_human[y];
    if (character_gender == "male") {
        var x = Math.floor(Math.random() * name_human_male[x][y].length);
        var character_name = name_human_male[y][x];
    }
    else if (character_gender == "female") {
        var x = Math.floor(Math.random() * name_human_female[x][y].length);
        var character_name = name_human_female[x][x];
    }
    // Humans do not have last names generated here.
    var character_name_last = "";
}

function dragonbornGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma) {
    // Let's set the default variables that occur, regardless of subrace or gender
    var character_uniquefeatures = character_uniquefeatures + "breath weapon " + "damage resistance  ";
    var strength = strength + 2;
    var charisma = charisma + 1;
    var character_speed = 30;
    var character_size = "Medium";

    // We use the gender to determine the dragonborn name... 
    if (character_gender == "male") {
        var x = Math.floor(Math.random() * name_dragonborn_male.length);
        var character_name = name_dragonborn_male[x];
    }
    else if (character_gender == "female") {
        var x = Math.floor(Math.random() * name_dragonborn_female.length);
        var character_name = name_dragonborn_female[x];
    }
    // Now, we determine the last name
    var x = Math.floor(Math.random() * name_dragonborn_clan.length);
    var character_name_last = name_dragonborn_clan[x];

    // Dragonborns have a subrace! Let's generate that.
    var x = Math.floor(Math.random() * sub_dragonborn.length);
    var character_subrace = sub_dragonborn[x];
}

// ERROR: Forest gnomes know the minor illusion cantrip
function gnomeGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma) {
    // Let's set the default variables that occur, regardless of subrace or gender
    var character_uniquefeatures = character_uniquefeatures + "darkvision " + "gnome cunning ";
    var character_languages = character_languages + "common " + "gnomish ";
    var intelligence = intelligence + 2; // halflings have a bonus to dexterity of 2
    var character_speed = 25;
    var character_size = "Small";

    // We use the gender to determine the halfling name... 
    if (character_gender == "male") {
        var x = Math.floor(Math.random() * name_gnome_male.length);
        var character_name = name_gnome_male[x];
    }
    else if (character_gender == "female") {
        var x = Math.floor(Math.random() * name_gnome_female.length);
        var character_name = name_gnome_female[x];
    }
    // Now, we determine the last name
    var x = Math.floor(Math.random() * name_gnome_clan.length);
    var character_name_last = name_gnome_clan[x];

    // Gnomes have a subrace! Let's generate that.
    var x = Math.floor(Math.random() * sub_gnome.length);
    var character_subrace = sub_gnome[x];

    if (character_subrace == "forest") {
        var character_uniquefeatures = character_uniquefeatures + "naturally stealthy " + "speak with small animals ";
        var dexterity = dexterity + 1;
    }
    else if (character_subrace == "rock") {
        var constitution = constitution + 1;
        var character_uniquefeatures = character_uniquefeatures + "artificer's lore " + "tinker ";
    }
}

function halfElfGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma) {
    // Let's set the default variables that occur, regardless of subrace or gender
    var character_uniquefeatures = character_uniquefeatures + "darkvision " + "fey ancestry " + "skill versaitility ";
    var character_languages = character_languages + "common " + "elvish ";
    var character_speed = 30;
    var character_size = "Medium";

    // Half-elves know a language of their choice...
    var z = Math.floor(Math.random * 1);
    if (z == 1) { // standard language generation
        var x =  Math.floor(Math.random() * language_standard.length);
        var y = language_standard[x]; 
        var character_languages = character_languages + y + " ";
    }
    else { // exotic language generation
        var x =  Math.floor(Math.random() * language_exotic.length);
        var y = language_exotic[x]; 
        var character_languages = character_languages + y + " ";
    }

    // We use the gender to determine the half-elves name... 
    var z = Math.floor(Math.random() * 1); 
    if (z == 0) { // generate a human name
        var y = Math.floor(Math.random() * 15); // generates number between 0-15 
        var character_subrace = sub_human[y];
        if (character_gender == "male") {
            var x = Math.floor(Math.random() * name_human_male[x][y].length);
            var character_name = name_human_male[y][x];
        }
        else if (character_gender == "female") {
            var x = Math.floor(Math.random() * name_human_female[x][y].length);
            var character_name = name_human_female[x][x];
        }
    // Humans do not have last names generated here.
    var character_name_last = "";
    }
    else { // generate an elven name
        if (character_gender == "male") {
            var x = Math.floor(Math.random() * name_elf_male.length);
            var character_name = name_elf_male[x];
        }
        else if (character_gender == "female") {
            var x = Math.floor(Math.random() * name_elf_family.length);
            var character_name = name_elf_female[x];
        }
        // Now, we determine the last name
        var x = Math.floor(Math.random() * name_elf_family.length);
        var character_name_last = name_elf_family[x];
    }
}

function halfOrcGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma) {
    // Let's set the default variables that occur, regardless of subrace or gender
    var character_uniquefeatures = character_uniquefeatures + "darkvision " + "menacing " + "relentless endurance " + "savage attacks";
    var character_languages = character_languages + "common " + "orc ";
    var strength = strength + 2;
    var constitution = constitution + 2;
    var character_speed = 30;
    var character_size = "Medium";


    // Let's generate the name!
    if (character_gender == "male") {
        var x = Math.floor(Math.random() * name_halforc_male.length);
        var character_name = name_halforc_male[x];
    }
    else if (character_gender == "female") {
        var x = Math.floor(Math.random() * name_halforc_female.length);
        var character_name = name_halforc_female[x];
    }
    // Orcs do not have last names.
    var character_name_last = "";
}

// ERROR: tieflings know the thaumaturgy cantrip
function tieflingGeneration(character_gender, character_uniquefeatures, character_speed, character_languages, character_size, constitution, dexterity, strength, intelligence, wisdom, charisma) {
    // Let's set the default variables that occur, regardless of subrace or gender
    var character_uniquefeatures = character_uniquefeatures + "darkvision " + "hellish resistance " + "infernal legacy ";
    var character_languages = character_languages + "common " + "infernal ";
    var charisma = charisma + 2;
    var intelligence = intelligence + 1;
    var character_speed = 30;
    var character_size = "Medium";


    // Let's generate the name!
    if (character_gender == "male") {
        var x = Math.floor(Math.random() * name_tiefling_male.length);
        var character_name = name_tiefling_male[x];
    }
    else if (character_gender == "female") {
        var x = Math.floor(Math.random() * name_tiefling_female.length);
        var character_name = name_tiefling_female[x];
    }
    // Tieflings have a virtue instead of a last name
    var x = Math.floor(Math.random() * name_tiefling_virtue.length);
    var character_name_last = name_tiefling_virtue[x];
}