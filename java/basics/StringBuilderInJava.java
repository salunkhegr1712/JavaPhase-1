// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;


// the main class
class StringBuilderInJava{

      // main function of our java code
      public static void main(String args[]){

            // for normal String they are immutable to they exist in memory and acqyuire lot of resources
            String m="i";
            m=m+" like";
            m=m+" java";
            System.out.println(m); // i love java

            // but for these memory contains -> i / like / java / i like / i like java  5 diff String
            // so using normal string function is inqdequate

            // lets create a StringBuilder and use there function 
            StringBuilder k=new StringBuilder("i");
            
            // app is used to add string after end of current 
            k.append(" like");
            k. append(" java");

            System.out.println(k); // i like java : same output but with more efficient way 

            // so also learn about more function : insert, reverse,delete,replace  and many more

            System.out.println("index of java in string : "+k.indexOf("java")); //7
            System.out.println("character at 5 position is : "+k.charAt(5));//e

            System.out.println(k.replace(7,11,"ruby")); //i like ruby
            System.out.println(k.delete(7,11)); // i like 
            System.out.println(new StringBuilder("hello how are you").reverse());
            //uoy era woh olleh
            System.out.println(k.insert(1,"hello world"));

      }
}