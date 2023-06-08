// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// the main class
public class ExceptionHandling {


      // main function of our java code
      public static void main(String args[]){

            // lets create a exception condition and handle it 
            int z=231941432;
            int k=2;

            // following is code and also the try catch block which will handle the exception 
            
            // let create divide by zero exception 
            try{

            System.out.println(z/k);
            // throw GhanshamException;

      //       Exception in thread "main" java.lang.ArithmeticException: / by zero
      //       at ExceptionHandling.main(ExceptionHandling.java:17)
            
            }
            catch(ArithmeticException a){
                  System.out.println("ArithmeticException exception arised");
                  k=1;
                  System.out.println(z/k);
            }
            catch(Exception m){
                  System.out.println("exception class called");
            }
            // ArithmeticException exception arised
            // 231941432

            finally{
                  System.out.println("the finally block is executed");
            }
            // the finally block is executed
      }
}