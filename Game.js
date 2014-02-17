// Global Variables
var currentLocale = 0;
var nav;
var locales;
var userPoints= new userPoints(0);
var timesRoomEntered= new timesRoomEntered(0, 0, 0, 0, 0, 0, 0, 0);
var locale0;

//saved for quick testing
//alert("function was called")

// Set up the location list.
/*var locale = new Array();
    locale[0] = "Main Garage";
    locale[1] = "Waiting Room";
    locale[2] = "Storage Room";
    locale[3] = "Main Office";
    locale[4] = "Junk Yard";
    locale[5] = "Smog Check Garage";
    locale[6] = "Driveway";
    locale[7] = "Under the Car";*/


/*locs = new Array();

            var loc0 = new Locale(0);
            loc0.name = "test 0";
            loc0.desc = "tret etst 0";            
            locs[0] = loc0;
            
            locs[1] = new Locale(1);
            locs[1].name = "test 1";             
            locs[1].desc = "tret etst 1";            
  
            alert(loc0.toString());
            alert(locs[1].toString());*/

//location prototypes
//DONT FORGET TO CHANGES ALL PERTIRNANT LOCALE TO LOCALESSSSSS - done
//this will probably be trashed
/*var locales = new Array();
    var locale0 = new locale(0);
        locales[0] = locale0;
        locale0.name = "Main Garage";
        locale0.desc = "locale0 desc";

    var locale1 = new locale(1);
        locales[1] = locale1;
        locale1.name = "Waiting Room";
        locale1.desc = "locale1 desc";

    var locale2 = new locale(2);
        locales[2] = locale2;
        locale2.name = "Storage Room";
        locale2.desc = "locale2 desc";

    var locale3 = new locale(3);
        localess[3] = locale3;
        locale3.name = "Main Office";
        locale3.desc = "locale3 desc";

    var locale4 = new locale(4);
        locales[4] = locale4;
        locale4.name = "Junk Yard";
        locale4.desc = "locale4 desc";

    var locale5 = new locale(5);
        locales[5] = locale5;
        locale5.name = "Smog Check Garage";
        locale5.desc = "locale5 desc";

    var locale6 = new locale(6);
        locales[6] = locale6;
        locale6.name = "Driveway";
        locale6.desc = "locale6 desc";

    var locale7 = new locale(7);
        locales[7] = locale7;
        locale7.name = "Under the Car";
        locale7.desc = "locale7 desc";*/


function init() {

    document.getElementById("taDisplay").value = "Main Garage";
    document.getElementById("upButton").disabled = true;
    document.getElementById("pointCounter").innerHTML='Points: ' + userPoints.points;
    
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
    this.points = points;
    return points;
}


function pointAdder() {
    //alert("function was called")
    if (currentLocale == 0 && timesRoomEntered.room0 < 1) {
        userPoints.points = userPoints.points + 5;
        timesRoomEntered.room0 = timesRoomEntered.room0 + 1;
    } else if (currentLocale == 1 && timesRoomEntered.room1 < 1) {
        userPoints.points = userPoints.points + 5;
        timesRoomEntered.room1 = timesRoomEntered.room1 + 1;
    } else if (currentLocale == 2 && timesRoomEntered.room2 < 1) {
        userPoints.points = userPoints.points + 5;
        timesRoomEntered.room2 = timesRoomEntered.room2 + 1;
    } else if (currentLocale == 3 && timesRoomEntered.room3 < 1) {
        userPoints.points = userPoints.points + 5;
        timesRoomEntered.room3 = timesRoomEntered.room3 + 1;
    } else if (currentLocale == 4 && timesRoomEntered.room4 < 1) {
        userPoints.points = userPoints.points + 5;
        timesRoomEntered.room4 = timesRoomEntered.room4 + 1;
    } else if (currentLocale == 5 && timesRoomEntered.room5 < 1) {
        userPoints.points = userPoints.points + 5;
        timesRoomEntered.room5 = timesRoomEntered.room5 + 1;
    } else if (currentLocale == 6 && timesRoomEntered.room6 < 1) {
        userPoints.points = userPoints.points + 5;
        timesRoomEntered.room6 = timesRoomEntered.room6 + 1;
    } else if (currentLocale == 7 && timesRoomEntered.room7 < 1) {
        userPoints.points = userPoints.points + 5;
        timesRoomEntered.room7 = timesRoomEntered.room7 + 1;
    } else {
        //userPoints.points = userPoints.points + 5;
    }
}

function timesRoomEntered(room0, room1, room2, room3, room4, room5, room6, room7) {
    this.room0 = room0;
    this.room1 = room1;
    this.room2 = room2;
    this.room3 = room3;
    this.room4 = room4;
    this.room5 = room5;
    this.room6 = room6;
    this.room7 = room7;
}

function go(command) {
    var dir = -1; // This will get set to a value > 0 if a direction command was entered.
    
    //clears the input text
    document.getElementById('userInput').value="";
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
    } else if (command.toLowerCase() == "i") {
        //inventory stuff will go here
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
        taPtr.value = "Please click help or type \"help\" or \"h\" for a list of available commands \n" + history;
    }
    
    if (dir > -1) { // This means a dir was set.
        var newLocation = nav[currentLocale][dir];
        
        if (newLocation != -1) {
            currentLocale = newLocation;
            var taPtr = document.getElementById("taDisplay");
            var history = taPtr.value;
            taPtr.value = locales(locale[currentLocale]).name + "\n" + history;
            pointAdder();
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
            taPtr.value = locales[currentLocale] + "\n" + "You cannot go that way." + "\n" + history;
        }
    }
}


        
        
        
        
        
        