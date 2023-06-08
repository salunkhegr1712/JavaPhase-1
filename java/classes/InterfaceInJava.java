// importing basic functionalities from the java library
import java.lang.*;


// you cant use super keyword outside class
interface Polygon{

      // we cant have data members inside th interface
      // all variable are final and static by default 

      int height=20;
      int base=10;

      // the interfaces can have default or static function
      static void func1(){
            System.out.println(" this is static class from interface Polygon");
      }

      default void func2(){
            System.out.println(" this is default class from interface Polygon");
      }

      // let write some abstract function
      // public is default access specifier inside interface 
      // interface also cant have constructor 
      void area();
      void perimeter();
}
// so as we extending abstract class we have to implements the abstract function from abstract class 
class Rectangle implements Polygon{

      int klpd=102131;


      // here we are implementing  abstract function from interface
      // also another function 
      @Override
      public void area(){
            System.out.println("area is : "+(height*base));
      }

      @Override
      public void perimeter(){
            System.out.println("perimeter is : "+(2*(height+base)));
      }

      // from interface you can Override default function but not static one 
      public void func2(){
            System.out.println("default function from interface Polygon is Override by Rectangle class");
      }
}


// also lets create another interface which is implements first one 
interface SecondInterface extends Polygon{

      void displayLength();
}

class Hell implements SecondInterface{
      @Override
      public void displayLength(){

      };
      public void area(){

      };
      public void perimeter(){
            
      }
}


// the main class
public class InterfaceInJava {

      // main function of our java code
      public static void main(String args[]){

            // Polygon.height=111; // cannot assign a value to final variable height
            System.out.println(Polygon.height); //20

            // lets try to use interface as reference 
            
            Polygon a= new Rectangle();

      }      
}      

// you can use abstract class as parent but you are not have right to create object out of it 

