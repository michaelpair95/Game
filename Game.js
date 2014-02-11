// Global Variables
var currentLocale = 0;
var nav;
var locale;



function init() {

    document.getElementById("taDisplay").value = "Main Garage";
    document.getElementById("upButton").disabled = true;
    
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

//function getCommand() {
//    command = document.getElementById('enterButton').value;
//}

function go(command) {
    var dir = -1; // This will get set to a value > 0 if a direction command was entered.
    var command = document.getElementById("userInput").value;

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
    } else {
        alert("error");
    }
    if (dir > -1) { // This means a dir was set.
        var newLocation = nav[currentLocale][dir];
        if (newLocation != -1) {
            currentLocale = newLocation;
            var taPtr = document.getElementById("taDisplay");
            var history = taPtr.value;
            taPtr.value = locale[currentLocale] + "\n" + history;
            if (currentLocale == 0) {
                document.getElementById("northButton").disabled = false;
                document.getElementById("southButton").disabled = false;
                document.getElementById("eastButton").disabled = false;
                document.getElementById("westButton").disabled = false;
                document.getElementById("upButton").disabled = true;
                document.getElementById("downButton").disabled = false;
            }
            else if (currentLocale == 1) {
                document.getElementById("northButton").disabled = false;
                document.getElementById("southButton").disabled = true;
                document.getElementById("eastButton").disabled = false;
                document.getElementById("westButton").disabled = true;
                document.getElementById("upButton").disabled = true;
                document.getElementById("downButton").disabled = true;
            }
            else if (currentLocale == 2) {
                document.getElementById("northButton").disabled = true;
                document.getElementById("southButton").disabled = false;
                document.getElementById("eastButton").disabled = true;
                document.getElementById("westButton").disabled = false;
                document.getElementById("upButton").disabled = true;
                document.getElementById("downButton").disabled = true;
            }
            else if (currentLocale == 3) {
                document.getElementById("northButton").disabled = true;
                document.getElementById("southButton").disabled = false;
                document.getElementById("eastButton").disabled = false;
                document.getElementById("westButton").disabled = false;
                document.getElementById("upButton").disabled = true;
                document.getElementById("downButton").disabled = true;
            }
            else if (currentLocale == 4) {
                document.getElementById("northButton").disabled = true;
                document.getElementById("southButton").disabled = true;
                document.getElementById("eastButton").disabled = false;
                document.getElementById("westButton").disabled = true;
                document.getElementById("upButton").disabled = true;
                document.getElementById("downButton").disabled = true;
            }
            else if (currentLocale == 5) {
                document.getElementById("northButton").disabled = true;
                document.getElementById("southButton").disabled = true;
                document.getElementById("eastButton").disabled = true;
                document.getElementById("westButton").disabled = false;
                document.getElementById("upButton").disabled = true;
                document.getElementById("downButton").disabled = true;
            }
            else if (currentLocale == 6) {
                document.getElementById("northButton").disabled = false;
                document.getElementById("southButton").disabled = true;
                document.getElementById("eastButton").disabled = true;
                document.getElementById("westButton").disabled = true;
                document.getElementById("upButton").disabled = true;
                document.getElementById("downButton").disabled = true;
            }
            else if (currentLocale == 7) {
                document.getElementById("northButton").disabled = true;
                document.getElementById("southButton").disabled = true;
                document.getElementById("eastButton").disabled = true;
                document.getElementById("westButton").disabled = true;
                document.getElementById("upButton").disabled = false;
                document.getElementById("downButton").disabled = true;
            }
            
        } else {
            var taPtr = document.getElementById("taDisplay");
            var history = taPtr.value;
            taPtr.value = locale[currentLocale] + "\n" + "You cannot go that way." + "\n" + history;
        }
    }
}