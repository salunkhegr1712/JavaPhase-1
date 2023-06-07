// importing basic functionalities from the java library
import java.lang.*;
// lets declare some inherited function code 


// you cant use super keyword outside class

class Polygon{
      
      double height;
      double base;

      // lets declare variable for same name  in child and parent 
      int klpd=11000;

      Polygon(){
            System.out.println("object created");
      }
      // // also declare a constructor 
      Polygon(double h, double b){
            this.height=h;
            this.base=b;
      }
      // lets declare a function and we will overide it 
      void displayLength(){
            System.out.println("in polygon Height is : "+height+" base is : "+base);
      }
}

// lets inherit it 
class Rectangle extends Polygon{

      int klpd=102131;

      Rectangle(int length, int breadth){
            
            // with super keyword we can also transfer value to parent 
            super(breadth,length);

            
            // height=breadth;
            // base=length;
      }

      @Override
      void displayLength(){
            System.out.println("in Rectangle length is : "+base+" bredth is : "+height);
      }
      // also another function 
      void area(){
            System.out.println("area is : "+(height*base));
      }

      // lets call displayLength() function from parent
      void parentFunc(){
            super.displayLength();
            System.out.println("value in child : "+this.klpd);
            System.out.println("value in parent : "+ super.klpd);
            
      } 
      //in polygon Height is : 10.0 base is : 20.0
      // value in child : 102131
      // value in parent : 11000

}

// the main class
public class SuperKeyword {

     


      // main function of our java code
      public static void main(String args[]){

            // so lets use it 

            Rectangle hell=new Rectangle(20,10);

            // also a reference from parent 
            Polygon a= hell;

            hell.displayLength();
            // a.displayLength(); it will fetch overrided function 
            // but cant access area function as it is inside child 
            // a.area() ==> cannot find symbol
            // symbol:   method area()
            // location: variable a of type Polygon

            // lets call parent function
            hell.parentFunc(); //in polygon Height is : 10.0 base is : 20.0
            // value in child : 102131
            // value in parent : 11000
      }
}