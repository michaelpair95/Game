// Global Variables
var currentLocale = "theLab";

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

    System.out.println("All game locations:");
    for (int i = 0; i < locations.length; ++i) {
        System.out.println(i + ":" + locations[i]);
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