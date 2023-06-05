// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// here we will write the employee class
class Employee{
      String name;
      int id;
      double salary;
      protected int hell=100;
      double bonus(){
            return .2*salary;
      }

      // also create a constructor 
      Employee(int id,String name,double salary){
            this.id=id;
            this.name=name;
            this.salary=salary;
      }
}

// the main class
public class EmployeeProb {

      // main function of our java code
      public static void main(String args[]){

            // lets create objects 
            Employee a= new Employee(1,"sham",10000);
            Employee b= new Employee(2,"ghansham",15000);

            System.out.println("bonus of "+a.name+" is : "+a.bonus());
            System.out.println("bonus of "+b.name+" is : "+b.bonus());
            // bonus of sham is : 2000.0
            // bonus of ghansham is : 3000.0

      }     
}