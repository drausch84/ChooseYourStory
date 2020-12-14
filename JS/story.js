console.clear();

var CHOICES = [{
    //Foyer of the Mansion
    id: "foyer",
    text: "Your eyes flutter open.  As you look around you notice that you're in the foyer of a decrepit old mansion." +
        "You're unsure how you ended up here, as your thoughts seem to be hazy.  As you look behind you, you notice that there is " +
        "an entry-way door to the mansion covered with chains and locks.  You realize the only way to leave this mansion is to find the keys " +
        "to open the locks.  Ahead in the foyer is a large continous staircase that leads left or right." + 
        "On the floor you're on, you also notice 2 doors on the left side of the foyer hall and 2 doors on the right side of the foyer hall, each about " +
        "10 feet apart."
    extra: [{
        requires: "!crow-key",
        text: "You decide to start off by examining the mansion on the bottom floor"
    }],
    options: [{
        text: "Choose first door on the left.",
        goto: "dining-room",
    }, {
        text: "Choose second door on the left.",
        goto: "crow-door",
        requires: "!crow-key"
    }, {
        text: "Choose first door on the right.",
        goto: "art-room"
    }. {
        text: "Choose second door on the right.",
        goto: "clover-door",
        requires: "!clover-key"
    }],
    start: true;
}, {
    //Choose the first door on the left
    id: "dining-room",
    text: "You enter the first door on the left and find yourself in a grand dining room." + "This must have been very elegant long ago, " +
    "but now there are cobwebs affixed to the chandeliers hanging overhead and cracks in the stone tile floor.  The large banquet table in the middle " +
    "of the room is littered with leaves, more cobwebs, and rotted food resting on silver platters.  In the far right corner you notice a door.  However, you " +
    "also see what appears to be a fresh puddle of blood on the stone floor right in front of the door.  Do you continue through?",
    options: [{
        text: "Defend yourself from the decaying ghoul.",
        requires: "combat-knife",
        goto: "dining-room-hallway-monster-killed"
    }, {
        text: "Head toward the mansion foyer",
        goto: "foyer"
    }]
}, {
    
}];