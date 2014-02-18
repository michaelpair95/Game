// Global Variables
var currentLocale = 0;
var nav;
var locale;
var userPoints= new userPoints(0);
var timesRoomEntered= new timesRoomEntered(0, 0, 0, 0, 0, 0, 0, 0);
var item

//saved for quick testing
//alert("function was called")

//Locations prototype 1
var locale = new Array();
    locale[0] = new loc(0);
        locale[0].name = "Main Garage";
        locale[0].desc = "locale0 desc";
        locale[0].toString();
        mite(0);
        locale[1] = new loc(1);
        locale[1].name = "Waiting Room";
        locale[1].desc = "locale1 desc";
        locale[1].toString();
    locale[2] = new loc(2);
        locale[2].name = "Storage Room";
        locale[2].desc = "locale2 desc";
        locale[2].toString();
    locale[3] = new loc(3);
        locale[3].name = "Main Office";
        locale[3].desc = "locale3 desc";
        locale[3].toString();
        mite(2);
    locale[4] = new loc(4);
        locale[4].name = "Junk Yard";
        locale[4].desc = "locale4 desc";
        locale[4].toString();
        mite(3);
    locale[5] = new loc(5);
        locale[5].name = "Smog Check Garage";
        locale[5].desc = "locale5 desc";
        locale[5].toString();
    locale[6] = new loc(6);
        locale[6].name = "Driveway";
        locale[6].desc = "locale6 desc";
        locale[6].toString();
    locale[7] = new loc(7);
        locale[7].name = "Under the Car";
        locale[7].desc = "locale7 desc";
        locale[7].toString();
        mite(1);

/*function showRooms() {
    //document.getElementById('roomList').style.display = 'block';
    locale.name.toString();
    var x=document.getElementById("roomList");
        x.innerHTML=locale;
} */

function loc(id) {
    this.id = id;        
    
    this.name = "";
    this.desc = "";
    this.toString = function() {
        return "[Locale id=" + this.id + " name=" + this.name + " desc=" + this.desc + "]";
    }
}
//Item protoype
var item = new Array();
    item[0] = new mite(0); /* mite is item backwards :) */
        item[0].name = "Wrench";
    item[1] = new mite(1);
        item[1].name = "Muffler";
    item[2] = new mite(2);
        item[2].name = "Pen"
    item[3] = new mite(3);
        item[3].name = "Gun"

function mite(id) {
    this.id = id;        
    this.name = "";
}

function init() {

    document.getElementById("taDisplay").value = "Main Garage";
    document.getElementById("upButton").disabled = true;
    document.getElementById("pointCounter").innerHTML='Points: ' + userPoints.points;
    //document.getElementById("roomList").style.display = 'none';
    
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
            taPtr.value = locale[currentLocale].toString() + "\n" + history;
            //taPtr.value = loc(currentLocale).toString + "\n" + history;
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
            taPtr.value = locale[currentLocale].name + "\n" + "You cannot go that way." + "\n" + history;
        }
    }
}


