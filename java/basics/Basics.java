// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;



// the main class
public class Basics {

      static boolean isPrime(int num){
            if(num==1 || num ==0){
                  return false;
            }
            else{
                  int z=2;
                  while(z<num/2){
                        if(num%z==0){
                              return false;
                        }
                        z=z+1;
                  }
                  return true;
            }
            
      }

      static int fibonacci(int m){
            if(m==2 || m==3 ){
                  return 1;
            }
            else if(m==1){
                  return 0;
            }
            else{
                  return fibonacci(m-1)+fibonacci(m-2);
            }
      }
      // main function of our java code
      public static void main(String args[]){

            // lets run a for loop which alternate number between 1 to 10
            for(int i=0;i<=10;i=i+2){
                  System.out.print(" "+i+" ");
            }
            System.out.println();
            // 0  2  4  6  8  10 

            int[] a=new int[10];

            // created array of size 10
            int j=0; 
            for(int x : a){

                  System.out.println(j++ +"th value is : "+x);
                  // 0th value is : 0
                  // 1th value is : 0
                  // 2th value is : 0
                  // 3th value is : 0
                  // 4th value is : 0
                  // 5th value is : 0
                  // 6th value is : 0
                  // 7th value is : 0
                  // 8th value is : 0
                  // 9th value is : 0
            }

            // let using for loop print prime numbers from 1 to 50 
            for(int k=0;k<50;k+=1){
                  if(isPrime(k))
                        System.out.print(k+" ");
            }
            // 2 3 4 5 7 11 13 17 19 23 29 31 37 41 43 47 
            // System.out.println(isPrime(37)); //true

            System.out.println("\n------------------------------ fibonacci series ----------------------------------\n");
            for(int m=1;m<10;m++){
                  System.out.print(fibonacci(m)+" ");
            }
            // 0 1 1 2 3 5 8 13 21

            
      }
}