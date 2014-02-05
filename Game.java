import java.util.Scanner;

public class Game {

  // Globals
  public static final int MAX_LOCALES = 2;   // Total number of rooms/locations we have in the game.
  public static int currentLocale = 0;       // Player starts in locale 0.
  public static String command;              // What the player types as he or she plays the game.
  public static boolean stillPlaying = true; // Controls the game loop.
  public static String[] locations;          // An uninitialized array of type String. See init() for initialization.

  public static void main(String[] args) {
     // Display the command line args.
     System.out.println("Starting with args:");
     for (int i = 0; i < args.length; i++) {
        System.out.println(i + ":" + args[i]);
     }

     // Set starting locale, if any.
	 // TODO: What happens is there are no args given when the game is invoked? Fix that.
	 int startLocation = Integer.parseInt(args[0]);
     if ( startLocation >= 0 && startLocation <= MAX_LOCALES) {
        currentLocale = startLocation;
     }

     init();
     updateDisplay();

     // Game Loop
     while (stillPlaying) {
        getCommand();
        navigate();
        updateDisplay();
     }
     System.out.println("Thank you for playing.");
  }

  private static void init() {
	  // Initialize any uninitialized globals.
     command = new String();
     stillPlaying = true;	// TODO: Do we need this?

     // Set up the location list.
     locations = new String[3];
     locations[2] = "TARDIS";   //  â†‘
     locations[0] = "The Lab";  //  N
     locations[1] = "Dungeon";  //  â†‘

     System.out.println("All game locations:");
     for (int i = 0; i < locations.length; ++i) {
        System.out.println(i + ":" + locations[i]);
     }

     // Set up the navigation matrix.
	 int[][] nav = new int[][]
	 {                         /* N   S   E   W */
       /* nav[0] for loc 0 */  {  2,  1, -1, -1 },
       /* nav[1] for loc 1 */  {  0, -1, -1, -1 },
       /* nav[2] for loc 2 */  { -1,  0, -1, -1 }		   
	 };	 
  }

  private static void updateDisplay() {
     System.out.println(locations[currentLocale]);
  }

  private static void getCommand() {
     Scanner inputReader = new Scanner(System.in);
     // command is global.
     command = inputReader.nextLine();
  }

  private static void navigate() {
	  // TODO Separate directional navigataion (n, s, e, w) from other commands (like quit).
     if ( command.equals("north") || command.equals("n") ) {
        // We are going NORTH. But from where...?
        if (currentLocale == 1) {
           currentLocale = 0;
        } else if (currentLocale == 0) {
           currentLocale = 2;
        }

     } else if ( command.equals("south") || command.equals("s") ) {
        // We are going SOUTH. But from where...?
        if (currentLocale == 2) {
           currentLocale = 0;
        } else if (currentLocale == 0) {
           currentLocale = 1;
        }


     } else if ( command.equals("quit") ) {
        stillPlaying = false;
     }
  }

}