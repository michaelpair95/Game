// Global Variables
var currentLocale = "The main Garage";

 // Get the game started.
      init();
      updateDisplay();

      // Game Loop
while (stillPlaying) {
    getCommand();
    navigate();
    updateDisplay();
}

function init() {
    // Initialize any uninitialized globals.
    command = new String();
    stillPlaying = true;   // TODO: Do we need this?
    
    // Set up the location list.
    locale = new String[8];
    locale[0] = "Main Garage";
    locale[1] = "Waiting Room";
    locale[2] = "Storage Room";
    locale[3] = "Main Office";
    locale[4] = "Junk Yard";
    locale[5] = "Smog Check Garage";
    locale[6] = "Driveway";
    locale[7] = "Under the Car";

    }

    // Set up the navigation matrix.
    nav = new int[][] {
                                /* N   S   E   W   U   D */
                                /* 0   1   2   3   4   5 */
        /* nav[0] for loc 0 */  {  2,  6,  5,  1, -1,  7},
        /* nav[1] for loc 1 */  {  3, -1,  0, -1, -1, -1},
        /* nav[2] for loc 2 */  { -1,  0, -1,  3, -1, -1},
        /* nav[3] for loc 3 */  { -1,  1,  2,  4, -1, -1},
        /* nav[4] for loc 4 */  { -1, -1,  3, -1, -1, -1},
        /* nav[5] for loc 5 */  { -1, -1, -1,  0, -1, -1},
        /* nav[6] for loc 6 */  {  0, -1, -1, -1, -1, -1},
        /* nav[7] for loc 7 */  { -1, -1, -1, -1,  0, -1},
    };
}

navigate() {
    int dir = -1;  // This will get set to a value > 0 if a direction command was entered.

    if (        command.toLowerCase("north") || command.toLowerCase("n") ) {
        dir = 0;
    } else if ( command.toLowerCase("south") || command.toLowerCase("s") ) {
        dir = 1;
    } else if ( command.toLowerCase("east")  || command.toLowerCase("e") ) {
        dir = 2;
    } else if ( command.toLowerCase("west")  || command.toLowerCase("w") ) {
        dir = 3;
    } else if ( command.toLowerCase("up")  || command.toLowerCase("u") ) {
        dir = 4;
    } else if ( command.toLowerCase("down")  || command.toLowerCase("d") ) {
        dir = 5;
    };

if (dir > -1) {   // This means a dir was set.
         int newLocation = nav[currentLocale][dir];
         if (newLocation != -1) {
            currentLocale = newLocation;
         } else {
            System.out.println("You cannot go that way.");