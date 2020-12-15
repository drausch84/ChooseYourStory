console.clear();

//Different Variables for User Choices
    //Rooms of Mansion notated by id:
        // foyer
        // dining-room
        // art-room
        // bar
    //Objects required to enter areas or defend against monsters
        // !crow-key for the library
        // combat-knife to kill dining-room-door monster
        // !clover-key for study room
var CHOICES = [{
    //**Foyer of the Mansion**
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
        //Choose the first door on the left **Dining Room**
        id: "dining-room",
        text: "You enter the first door on the left and find yourself in a grand dining room." + "This must have been very elegant long ago, " +
        "but now there are cobwebs affixed to the chandeliers hanging overhead and cracks in the stone tile floor.  The large banquet table in the middle " +
        "of the room is littered with leaves, more cobwebs, and rotted food resting on silver platters.  In the far right corner you notice a door.  However, you " +
        "also see what appears to be a fresh puddle of blood on the stone floor right in front of the door.  Do you continue through?",
        options: [{
            text: "Go through the door with the knife you found ready.",
            requires: "combat-knife",
            goto: "dining-hall-door-monster-killed"
        }, {
            text: "Go through the door.",
            goto: "dining-room-door-no-knife"
        }, {
            text: "Head toward the mansion foyer",
            goto: "foyer"
        }]
    }, {
        //Kill dining hall door monster
        id: "dining-hall-door-monster-killed",
        text: "As you enter through the door, the smell of rotted flesh permeates the air.  You notice you are standing in a hallway with puddles of blood staining " +
        "the musty carpets below your feet.  The flickering lights of the hallway makes it hard to see, but you notice an approaching figure to your right!" +
        "You raise the combat knife you found and immediately slash at the approaching figure. As the figure slumps down to the carpets, the flickering lights " +
        "reveal what appears to be a reanimated corpse with flesh and sinew still entrenched within its jaws.  Catching your breath and attempting to process " +
        "what just happened, you notice a door at the left end of the hallway.",
        takes: "combat-knife",
        next: "bar"
    }, {
        //Enter dining room hallway door **Bar**
        id: "bar",
        text: "You enter the door at the end of the hallway and notice a rather elaborate bar.  It appears as if this was the most recently occupied room so far, with no cobwebs or dust to " +
        "be found.  Alongside the wall near the end of the main bar area you notice a safe.  As you walk toward the wall-safe, you see a few crumpled pieces of paper on a bar stool in the corner." +
        "You uncrumple one piece of paper and see a number sequence written down, '12-7-2-15'.  The second piece of paper has the sequence, '2-5-1-10' written down.  And the third and final piece " +
        "of paper has the sequence, '3-11-5-19', written down.  One of these must be the combination to the safe, but which one?",
        options: [{
            text: "Try sequence, '12-7-2-15"
        }]

}];