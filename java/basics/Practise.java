// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// the main class
public class Practise {

      // main function of our java code
      public static void main(String args[]){

            String str = "Java class";

            System.out.println(str.length()); 
            System.out.println("The String length is: "+str.length());

            System.out.println("abc".matches("abc*"));

            Set <String> a= new TreeSet<String>();
            a.add("hello");
            a.add("hello1");
            a.add("hello2");
            a.add("hello3");

            System.out.println(a);

      
      }
}

