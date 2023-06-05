// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// the main class
public class StringsInJava {

      // main function of our java code
      public static void main(String args[]){

            String a=" a b c ";
            String b="x y z";

            String c=a+b;


            System.out.println(c);
            // a b c x y z
            System.out.println(1000+200 +"abscd");
            // 1200abscd
            System.out.println(a.charAt(1)); //a

            System.out.println(a.trim());
            System.out.println(a.toUpperCase()); //all letters converted to upper case
            System.out.println(a.toLowerCase());// all letters converted to small case

            System.out.println("".isEmpty()); //true
            System.out.println("".isBlank()); //true

            // blank find that is string contains any character or not 
            // is isEmpty only check length
            
            System.out.println(" ".isEmpty()); //false
            System.out.println(" ".isBlank()); //true 
            
      }
}