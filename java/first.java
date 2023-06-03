import java.lang.*;


public class first {
    
      // lets declare some function 
      static int addition(int a, int b){
            return a+b;
      }

      static int substraction(int a, int b){
            return a/b;
      }
    
      static int multiplication(int a, int b){
            return a*b;
      }
      
      static double division(int a, int b){
            return (float)a/(float)b;
      }

      // this function will return the reverse of entered number 
      static int reverseNumber(int num){
            int reverse=0;
            int b=1;
            int j=0;

            while(num>0){
                  b=num%10;
                  j++;
                  reverse=reverse*10+b;
                  num=num/10;
                  // System.out.println("value of reverse is : "+reverse);
            }
            return reverse; 
      }

      // lets declare a exam score function 
      static void grade(int num){

            // here we are using both nested if else and also else if ladder 
            if(num>40){
                  if(num>90){
                        System.out.println("marks are : "+num+" you are in A+ grade !");
                  }
                  else if(num>75){
                        System.out.println("marks are : "+num+" you are in A grade !");
                  }
                  else if(num>60){
                        System.out.println("marks are : "+num+" you are in B grade !");
                  }
                  else if(num>50){
                        System.out.println("marks are : "+num+" you are in C grade !");
                  }
                  else{
                        System.out.println("marks are : "+num+" you are in D grade !");
                  }
            }      
            

            else{
                  System.out.println("marks are : "+num+" you are fail !");
            }
      }

      // in following code we are going to use the ternary operator 
      static int maxAmongThree(int a, int b, int c){

            // this ternary operator is same in cpp , javascript and also in typescript
            return (a>b && a>c) ?a:(c>b)?c: b;
      }     

      // main function 
      public static void main(String args[]){
            System.out.println("Hello world");
            int a=10;
            char c='a';
            // the following code is one of the basic code to get the datatype of variable 
            System.out.println(((Object)a).getClass().getSimpleName());

            System.out.println(10+(int)c);

            // we use the math function abs in order to find out the absolute value of number 
            int d=-111;
            d=Math.abs(d);

            System.out.println("the absolute value of d is : "+d); //111
            // the absolute value of d is : 111

            System.out.printf("the value of 100/9 is : %.2f\n",division(100,9));
            // the value of 100/9 is : 11.11
            
            System.out.println("reverse of the number 19203 is : "+reverseNumber(19203));
            // reverse of the number 19203 is : 30291

            System.out.println(16 & 32); //0
            System.out.println(16 | 32); //48
            System.out.println(~16); //-17

            grade(56);
            // marks are : 56 you are in C grade !

            System.out.println("max among 10,15,66 is : "+maxAmongThree(10,15,66));
            // max among 10,15,66 is : 66
      }
}
