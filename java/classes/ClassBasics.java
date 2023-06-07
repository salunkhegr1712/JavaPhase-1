// importing basic functionalities from the java library
import java.lang.*;

// lets declare a class 
class Animal{

      int legs;
      boolean isHerbivouros;

      // this is function which we are going to override 
      void animalType(){
            System.out.println("I am Animal");
      }
}

class Herbivorous extends Animal{
      
      // also constructor 
      Herbivorous(){
            isHerbivouros=true;
      }
      @Override
      void animalType(){
            System.out.println("I am Herbivorous Animal");
      }
}

class Cornivorous extends Animal{
      
      // also constructor 
      Cornivorous(){
            isHerbivouros=false;
      }
      @Override
      void animalType(){
            System.out.println("I am Cornivorous Animal");
      }
}

// also define 3 more class 
class Cat extends Cornivorous{
      
      String Mew="mew mew";

      @Override
      void animalType(){
            System.out.println("I am Cat");
      }

      // lets declare function which are unique to class and not inherited
      void voice(){
            System.out.println("mew mew");
      }
}

class Dog extends Cornivorous{
      
      String Bow="Bhho Bhho";
      @Override
      void animalType(){
            System.out.println("I am Dog");
      }
}
class Dear extends Herbivorous{
      
      String chii="chhiii chhhii";
      @Override
      void animalType(){
            System.out.println("I am Dear");
      }
}

// the main class
public class ClassBasics {

      // main function of our java code
      public static void main(String args[]){

            // so lets use them 

            Animal a= new Animal();
            Herbivorous b= new Herbivorous();
            Cornivorous c=new Cornivorous();
            Cat d= new Cat();
            Dog e=new Dog();
            Dear f= new Dear();
            
            a.animalType();
            b.animalType();
            c.animalType();
            d.animalType();
            e.animalType();
            f.animalType();
            // I am Animal
            // I am Herbivorous Animal
            // I am Cornivorous Animal
            // I am Cat
            // I am Dog
            // I am Dear

            // the animalType is overrided function 

            System.out.println("--------------------------- parent reference for child-----------------------------------");
            // also we can use parent reference to hold value of child 
            // so a is parent of all so 
            // a=b;a.animalType();
            // a=c;a.animalType();
            // a=d;a.animalType();
            // a=e;a.animalType();
            // a=f;a.animalType();

            // I am Herbivorous Animal
            // I am Cornivorous Animal
            // I am Cat
            // I am Dog
            // I am Dear

            // child cant be reference with the parent object 
            // b=a; incompatible types: Animal cannot be converted to Herbivorous

            // such like that in OOPS we can called polymorphism as for a same reference can hold value of its child 
            
            a=d;  //animal assigned with cat
      //      with parent reference we can access the values which are present in parent not the 
      //      values or function in child 

            // with reference of parent we can only acccess data inherited to child through parent 
            // a.mew; not a statement
            // a.voice();
            // System.out.println(a.Mew);
            System.out.println(d.Mew);;
            d.voice();

            // imp 
      }
}