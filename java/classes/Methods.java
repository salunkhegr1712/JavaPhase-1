// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;



// the main class
public class Methods {
      
      // a few Methods 
      int add(int a, int b){
            return a+b;
      }

      int add(float a,int b){
            return (int)a+b;
      }

      int add(float a, float b){
            return (int)a+(int)b;
      }

      int add(int a,int b,int c){
            return a+b+c;
      }
      // this above 3 functions are overloaded function and they have same returntype
      // but they only differe on type and count of parameters 

      // main function of our java code
      public static void main(String args[]){

      }
}