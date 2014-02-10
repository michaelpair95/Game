// Global Variables
var currentLocale = 0;
var nav;
var locale;

function init() {
    document.getElementById("taDisplay").value = "Main Garage";  
    locale = ["Main Garage",
              "Waiting Room",
              "Storage Room",
              "Main Office",
              "Junk Yard",
              "Smog Check Garage",
              "Driveway",
              "Under the Car"];
    
    // Set up the navigation matrix.
    nav = [
   /* N   S   E   W   U   D */
   /* 0   1   2   3   4   5 */
    [ 2,  6,  5,  1, -1,  7],
    [ 3, -1,  0, -1, -1, -1],
    [-1,  0, -1,  3, -1, -1],
    [-1,  1,  2,  4, -1, -1],
    [-1, -1,  3, -1, -1, -1],
    [-1, -1, -1,  0, -1, -1],
    [ 0, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1,  0, -1]];

}

function go(command) {
    var dir = -1; // This will get set to a value > 0 if a direction command was entered.

    if (command.toLowerCase() == "north" || command.toLowerCase() == "n") {
        dir = 0;
    } else if (command.toLowerCase() == "south" || command.toLowerCase() == "s") {
        dir = 1;
    } else if (command.toLowerCase() == "east" || command.toLowerCase() == "e") {
        dir = 2;
    } else if (command.toLowerCase() == "west" || command.toLowerCase() == "w") {
        dir = 3;
    } else if (command.toLowerCase() == "up" || command.toLowerCase() == "u") {
        dir = 4;
    } else if (command.toLowerCase() == "down" || command.toLowerCase() == "d") {
        dir = 5;
    }
    if (dir > -1) { // This means a dir was set.
        var newLocation = nav[currentLocale][dir];
        if (newLocation != -1) {
            currentLocale = newLocation;
            var taPtr = document.getElementById("taDisplay");
            var history = taPtr.value;
            taPtr.value = locale[currentLocale] + "\n" + history;
        } else {
            var taPtr = document.getElementById("taDisplay");
            var history = taPtr.value;
            taPtr.value = "You cannot go that way." + "\n" + history;
        }
    }
}