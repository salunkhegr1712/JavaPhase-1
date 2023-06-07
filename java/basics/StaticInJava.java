// importing basic functionalities from the java library
import java.lang.*;

class Hell{

      // static variables and function are unique to class 
      static int val=1;
}

// the main class
public class StaticInJava {

      // main function of our java code
      public static void main(String args[]){
            Hell a= new Hell();
            Hell b= new Hell();  
            
            a.val=1100;
            System.out.println("value of val in Hell is : "+b.val); //1100

            // also can access static variables like : 
            Hell.val=555;
            System.out.println("value of val in Hell is : "+Hell.val); //555
      }

      // inside a class if we want to access function from it so first create object of self an use or 
      // delcare the class as static 
}