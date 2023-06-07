// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// the main class
public class JavaNewFeatures {

      static int add(){
            return 10+10;
      }

      int z;
      
      // Note [IMP] : you cant create var variables as data members inside the class 
      // var za;//'var' is not allowed here


      // lets try to create function with return type of var 

      // static var func(){
      //       // 'var' is not allowed here 
      // }
      // main function of our java code
      public static void main(String args[]){

            // some details about var 
            var ka=10;
            // var ka=10.6;  java automatically detect type
            // let print type of ka 
            System.out.println(((Object)ka).getClass().getSimpleName()); //Integer
            // variable ka is already defined in method main(java.lang.String[])

            var m="hello world";
            System.out.println(((Object)m).getClass().getSimpleName()); // String
            
            var l=10.45f;
            var ll=10.45;

            l=10;
            System.out.println(((Object)l).getClass().getSimpleName()); // float
            System.out.println(((Object)ll).getClass().getSimpleName()); // double


            // declare class 
            // creating Object with var 
            var a= new Random();

            // grab function output 
            var c=add();

            // also can create array you dont have to use [] here 
            var arr=new int[5];
      }     
}