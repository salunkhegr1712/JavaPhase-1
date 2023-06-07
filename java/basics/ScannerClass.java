import java.lang.*;
import java.util.Scanner;

public class ScannerClass {

      public static void main(String args[]){

            Scanner input= new Scanner(System.in);

            // take an integer as input
            // System.out.print(" enter number : ");
            // int a = input.nextInt();
            // System.out.println(a);


            // take boolean as input 
            // System.out.print(" enter number : ");
            // boolean b=input.nextBoolean();
            // System.out.println(b);


            // take a word as input
            // System.out.print(" enter number : ");
            // String a=input.next();
            // System.out.println(a);

            // taking a line of string as input 
            System.out.print(" enter number : ");
            String a=input.nextLine();
            System.out.println(a);

            // do a search and you will get a large no of scanner function for many datatypes 

            // it is good practise to close the scanner object last 
            // you can also send scanner class as argument 
            input.close();
      }
}