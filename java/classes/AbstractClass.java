// you can use abstract class as parent but you are not have right to create object out of it 

// importing basic functionalities from the java library
import java.lang.*;
// lets declare some inherited function code 


// you cant use super keyword outside class

abstract class Polygon{
      
      double height;
      double base;
   

      // abstract class can have constructor 
      Polygon(int h, int b){
            height=h; base=b;
      }

      // the abstract class have abstract functionalities

      abstract void area();
      abstract void perimeter();

}
// so as we extending abstract class we have to implements the abstract function from abstract class 
class Rectangle extends Polygon{

      int klpd=102131;

      Rectangle(int length, int breadth){
            
            super(breadth,length);
            // height=breadth;
            // base=length;
      }


      // also another function 
      void area(){
            System.out.println("area is : "+(height*base));
      }

      void perimeter(){
            System.out.println("perimeter is : "+(2*(height+base)));
      }
}

// the main class
public class AbstractClass {

     


      // main function of our java code
      public static void main(String args[]){

            // so lets use it 

            Rectangle hell=new Rectangle(20,10);
            hell.area();hell.perimeter();
            // area is : 200.0
            // perimeter is : 60.0

            // also a reference from parent 
            // and we cant create object for abstract class but we can use a reference 
            Polygon a= hell;
            a.area();
            a.perimeter();
            // area is : 200.0
            // perimeter is : 60.0
            
      }
}