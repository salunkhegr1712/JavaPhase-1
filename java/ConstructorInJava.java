// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

class Toll{
      private String type;
      private int tyreCount;

      // lets create some geteres and setter so that not any one can directly access data members 
      // getters 
      String getType(){
            return type;
      }

      int getTyreCount(){
            return tyreCount;
      }

      // setters 
      void setType(String t){
            type=t;
      }

      void setTyreCount(int tc){
            tyreCount=tc;
      }

      int tollValue(){
            if(tyreCount==2){
                  return 0;
            }
            else if(tyreCount==4){

                  return 10;
            }

            else if(tyreCount>4){
                  return 20;
            }
                  
            else{
                  return -1;
            }
      }

      // constructor of class and it is used to instantiate class 
      Toll(int tyre){
            this.tyreCount=tyre;
            if(tyre==2){
                  this.type="bike";
            }
            else if(tyre==4){
                  this.type="car";
            }
            else{
                  type="large-Vehicles";
            }
      }


}

// the main class
public class ConstructorInJava {

      // main function of our java code
      public static void main(String args[]){

            Toll a= new Toll(6);
            System.out.println("toll of "+a.getType()+ " is : "+a.tollValue());
      
      }
      // toll of large-Vehicles is : 20
}