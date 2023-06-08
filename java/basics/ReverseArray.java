// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// the main class
public class ReverseArray {

      // main function of our java code
      public static void main(String args[]){

            var arr= new int[10];
            // lets create a table of 10 in for loop 
            for(var i=1;i<=10;i++){
                  arr[i-1]=i*10;
            }
            System.out.println("------------------------ original array -------------------------------");
            // lets use for each loop tp print it 
            for(int x:arr){
                  System.out.println(x);
            }

            System.out.println("------------------------- reversed array ------------------------------");

            // create another arr 
           int temp;
            for(var i=0;i<arr.length/2;i++){
                  temp=arr[arr.length-i-1];
                  arr[arr.length-i-1]=arr[i];
                  arr[i]=temp;
            }

            // lets use for each loop tp print it 
            for(int x:arr){
                  System.out.println(x);
            }
      }
}