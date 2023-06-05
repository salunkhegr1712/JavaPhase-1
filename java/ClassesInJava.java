// importing basic functionalities from the java library
import java.lang.*;

// a class is abstract if it contain atleast one abstract function
// the abstract function is one whoch child have to implements it is like contract 

 class Quadrangle{

      // here declare some of data members 
      // so any Quadrangle has 4 sides so we just declared them 
      protected int side1 ;
      protected int side2 ;
      protected int side3 ;      
      protected int side4 ;

      // each class has constructor and we can have multiple constructor for class
      // name of constructor is same as name of class

      Quadrangle(int s1,int s2,int s3,int s4){

            // lets assign the imputed value to the its value 
            side1=s1;
            side2=s2;
            side3=s3;
            side4=s4;
      }

      // another constructor
      Quadrangle(){

            // lets assign the imputed value to the its value 
            side1=10;
            side2=10;
            side3=10;
            side3=10;
      }

      // also declare destructor 
      // now lets declare the member function now 
      void printSides(){
            System.out.println("the side1 is : "+side1);
            System.out.println("the side2 is : "+side2);
            System.out.println("the side3 is : "+side3);
            System.out.println("the side4 is : "+side4);            
      }

      void calculatePerimeter(){
            System.out.println("perimeter is :"+ (side1+side2+side3+side4));            
      };

      // abstract void area();
      
}

// now lets declare another class which is child of Quadrangle 

class Rectangle extends Quadrangle{

      // here we will define a constructor 
      // we can acces protected elements from the parent 

      Rectangle(int l,int b){
            // passing sides 
            super(l,b,l,b);
      }

      Rectangle(){
            super(10,10,10,20);
      }

      // lets declare the area function
      void area(){
            System.out.println("area is : "+side1*side2);
      }
      
}

// the main class
public class ClassesInJava {

      // main function of our java code
      public static void main(String args[]){

            // let us the class 
            Rectangle a=new Rectangle();
            a.printSides();
            a.area();
            a.calculatePerimeter();

            // the side1 is : 10
            // the side2 is : 10
            // the side3 is : 10
            // the side4 is : 20
            // area is : 100
            // perimeter is :40

            // we cant instantiate the abstract class
            Quadrangle m= new Quadrangle(10,15,20,15);

            m.printSides();
            m.calculatePerimeter();
            // the side1 is : 10
            // the side2 is : 15
            // the side3 is : 15
            // the side4 is : 0
            // perimeter is :40
      }           

}