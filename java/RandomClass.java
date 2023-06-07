import java.util.Random;
import java.util.UUID;
// the main class
public class RandomClass {

      // main function of our java code
      public static void main(String args[]){

            // here inside this code i will learn about the random class inside java 
            Random hell= new Random();
      
            for (int a=0;a<10 ; a++) {
                System.out.println(a+"th random no : "+hell.nextInt());
            }   
            // 0th random no : -1404699062
            // 1th random no : 901171677
            // 2th random no : 231666354
            // 3th random no : 43851719
            // 4th random no : -171596096
            // 5th random no : -528012457
            // 6th random no : -1544749731
            // 7th random no : -949432585
            // 8th random no : 1890600137
            // 9th random no : 2114557633  
            
            // if we want to create universally unique id so we use uuid class

            // return 128 bit unique id 
            for(var a=0;a<5;a++){
                  System.out.println(UUID.randomUUID());
            }
            // example : 
            // 903667d8-c22f-4f26-bb7d-b71af0039dc7
            // 3ce20f34-0dda-4ca7-8f88-b72bd8175025
            // b2f7c1ab-346b-4359-8afd-2bc79b67e74c
            // 39d0fb34-c853-4b53-a86a-897370ad2d87
            // afb0091f-3683-41b3-9837-3614296988e9


            
      }
}