// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// the main class
public class Exercise {

      // main function of our java code
      public static void main(String args[]){

            String pat="(www.).*(.[a-z]*)";

            System.out.println("www.edurekha.us".matches(pat));//true
            System.out.println("www.edurekha.com".matches(pat));// true
            System.out.println("www.edu.us".matches(pat));// true
            System.out.println("www.edu.com".matches(pat));// true
            System.out.println("www.ekha.org".matches(pat));// true

            System.out.println("------------------------- ex 2---------------------------------");

            double z=19.00;
            pat="\\d+\\.\\d+";
            System.out.println(Double.toString(z).matches(pat));

            
      }
}