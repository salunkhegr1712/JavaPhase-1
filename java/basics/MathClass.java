// importing basic functionalities from the java library
import java.lang.*;
// importing math 


// the main class
public class MathClass {

      // main function of our java code
      public static void main(String args[]){

            // let us use math
            double a=10.23;
            double b=19.45;
            
            
            // find max and min s=using java math
            System.out.println("min is " +Math.min(a,b));  
            System.out.println("max is " +Math.max(a,b));
            
            // write function for floor ceil and round 
            // convert no to next integer ignoreing float value
            System.out.println("ceil of "+a+" is : "+Math.ceil(a));
            System.out.println("ceil of "+b+" is : "+Math.ceil(b));
            // ceil of 10.23 is : 11.0
            // ceil of 19.45 is : 20.0

            // floor function
            // convert to previous integer ignoreing float value
            System.out.println("floor of "+a+" is : "+Math.floor(a));
            System.out.println("floor of "+b+" is : "+Math.floor(b));
            // floor of 10.23 is : 10.0
            // floor of 19.45 is : 19.0
            

            // round function 
            System.out.println("round of "+a+" is : "+Math.round(a));
            System.out.println("round of "+b+" is : "+Math.round(b));
            // round of 19.45 is : 19
            // round of 10.23 is : 10


            // also there many function are there inside the math class
            System.out.println(Math.sin(Math.PI/2));

            // creating random number 
            // math.random function create the random number between 0 to 1
            System.out.println(Math.random());
            // 0.37134329005706856
            // 0.9374282340697593
            // 0.24900237937024083
      }
}