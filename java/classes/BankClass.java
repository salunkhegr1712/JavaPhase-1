// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

class Bank{
      private int accountNo;
      private String  accountName;
      private double accountBalance;

      // getters 
      int getAccountNo(){
            return accountNo;     
      }
      String getAccountName(){
            return accountName;
      }
      double getAccountBalance(){
            return accountBalance;
      }

      //setters
      void setAccountNo(int acc){
            accountNo=acc;
      }

      void setAccountName(String n){
            accountName=n;
      }

      void setAccountBalance(double b){
            accountBalance=b;
      }


      void withdraw(int amount){
            accountBalance=accountBalance-amount;
            System.out.println("Withdrawed "+amount +" !");
            System.out.println("balance is : "+accountBalance);
      }

      void deposit(int amount){
            accountBalance=accountBalance+amount;
            System.out.println("deposited "+amount +" !");
            System.out.println("balance is : "+accountBalance);
      }

      Bank(int acno,String ba,double am){
            accountName=ba;
            accountBalance=am;
            accountNo=acno;
      }
}

// the main class
public class BankClass {

      // main function of our java code
      public static void main(String args[]){

            Bank l=new Bank(111,"sham",3490);
            l.withdraw(1000);
            l.deposit(93494);
            l.withdraw(54346);
      }
      // Withdrawed 1000 !
      // balance is : 2490.0
      // deposited 93494 !
      // balance is : 95984.0
      // Withdrawed 54346 !
      // balance is : 41638.0
}