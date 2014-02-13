// Global Variables
var currentLocale = 0;
var nav;
var locale;
var userPoints= new userPoints(0);




function init() {

    document.getElementById("taDisplay").value = "Main Garage";
    document.getElementById("upButton").disabled = true;
    document.getElementById("pointCounter").innerHTML='Points: ' + userPoints.points;
    
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

function showControls() {
    var taPtr = document.getElementById("taDisplay");
    var history = taPtr.value;
    taPtr.value = "To go north, type \"north\" or \"n\" \n" +
                  "To go south, type \"south\" or \"s\" \n" +
                  "To go east, type \"east\" or \"e\" \n" +
                  "To go west, type \"west\" or \"w\" \n" +
                  "To go up, type \"up\" or \"u\" \n" +
                  "To go down, type \"down\" or \"d\" \n" + history;
}

function userPoints(points) {
    this.points = points
    return points;
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
    } else if (command.toLowerCase() =="help" || command.toLowerCase() == "h") {
        var taPtr = document.getElementById("taDisplay");
        var history = taPtr.value;
        taPtr.value = "To go north, type \"north\" or \"n\" \n" +
                      "To go south, type \"south\" or \"s\" \n" +
                      "To go east, type \"east\" or \"e\" \n" +
                      "To go west, type \"west\" or \"w\" \n" +
                      "To go up, type \"up\" or \"u\" \n" +
                      "To go down, type \"down\" or \"d\" \n" + history;
    } else {
        var taPtr = document.getElementById("taDisplay");
        var history = taPtr.value;
        taPtr.value = "Please click help for a list of available commands \n" + history;
    }
    
    if (dir > -1) { // This means a dir was set.
        var newLocation = nav[currentLocale][dir];
        
        if (newLocation != -1) {
            currentLocale = newLocation;
            var taPtr = document.getElementById("taDisplay");
            var history = taPtr.value;
            taPtr.value = locale[currentLocale] + "\n" + history;
            userPoints.points = userPoints.points + 5;
            document.getElementById("pointCounter").innerHTML='Points: ' + userPoints.points;
            
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