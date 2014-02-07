import java.util.Scanner;

public class Game {

   // Globals
   public static final int MAX_LOCALES = 2;   // Total number of rooms/locations we have in the game.
   public static int currentLocale = 0;       // Player starts in locale 0.
   public static String command;              // What the player types as he or she plays the game.
   public static boolean stillPlaying = true; // Controls the game loop.
   public static String[] locations;          // An uninitialized array of type String. See init() for initialization.
   public static int[][]  nav;                // An uninitialized array of type int int.

   public static void main(String[] args) {
      // Display the command line args.
      System.out.println("Starting with args:");
      for (int i = 0; i < args.length; i++) {
         System.out.println(i + ":" + args[i]);
      }

      // Set starting locale, if it was provided as a command line parameter.
      if (args.length > 0) {
         int startLocation = Integer.parseInt(args[0]);    // TODO We need to catch a possible exception here.
         // Check that the passed-in value for startLocation is within the range of actual locations.
         if ( startLocation >= 0 && startLocation <= MAX_LOCALES) {
            currentLocale = startLocation;
         }
      }

      // Get the game started.
      init();
      updateDisplay();

      // Game Loop
      while (stillPlaying) {
         getCommand();
         navigate();
         updateDisplay();
      }

      // We're done. Thank the player and exit.
      System.out.println("Thank you for playing.");
   }


   private static void init() {
      // Initialize any uninitialized globals.
      command = new String();
      stillPlaying = true;   // TODO: Do we need this?

      // Set up the location list.
      locations = new String[3];
      locations[2] = "TARDIS";   //  ^
      locations[0] = "The Lab";  //  N
      locations[1] = "Dungeon";  //  |

      System.out.println("All game locations:");
      for (int i = 0; i < locations.length; ++i) {
         System.out.println(i + ":" + locations[i]);
      }

      // Set up the navigation matrix.
      nav = new int[][] {
                                 /* N   S   E   W */
                                 /* 0   1   2   3 */
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
      command = inputReader.nextLine();  // command is global.
   }

   private static void navigate() {
      int dir = -1;  // This will get set to a value > 0 if a direction command was entered.

      if (        command.equalsIgnoreCase("north") || command.equalsIgnoreCase("n") ) {
         dir = 0;
      } else if ( command.equalsIgnoreCase("south") || command.equalsIgnoreCase("s") ) {
         dir = 1;
      } else if ( command.equalsIgnoreCase("east")  || command.equalsIgnoreCase("e") ) {
         dir = 2;
      } else if ( command.equalsIgnoreCase("west")  || command.equalsIgnoreCase("w") ) {
         dir = 3;
      } else if ( command.equalsIgnoreCase("quit") ) {
         stillPlaying = false;
      };

      if (dir > -1) {   // This means a dir was set.
         int newLocation = nav[currentLocale][dir];
         if (newLocation != -1) {
            currentLocale = newLocation;
         } else {
            System.out.println("You cannot go that way.");
         }
      }
   }

}