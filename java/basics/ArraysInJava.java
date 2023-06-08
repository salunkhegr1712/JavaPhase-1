// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;


// the main class
public class ArraysInJava {

      // lets create a table creator function
      static int []tableCreator(int num){

            int z[]=new int[10];
            
            for(int x=1;x<=10;x++){
                  z[x-1]=x*num;
            }

            return z;
      }

      // main function of our java code
      public static void main(String args[]){

            int arr[][]=new int[5][5];

            // lets print it 
            // for(int i =0;i<arr.length;i++){
            //       for(int y :arr[i]){
            //             System.out.print(y+" ");
            //       }
            //       System.out.println("");
            // }
            // 0 0 0 0 0 
            // 0 0 0 0 0 
            // 0 0 0 0 0 
            // 0 0 0 0 0 
            // 0 0 0 0 0 

            int table[]=tableCreator(5);

            for(int x: table){
                  System.out.println(x);
            }

            int klpd[][]=new int[10][10];

            for(int i=0;i<10;i++){
                  klpd[i]=tableCreator(i+1);;
            }
            System.out.println("--------------------------------------------------");
            for(int i =0;i<klpd.length;i++){
                  for(int y :klpd[i]){
                        System.out.printf("%4d",y);
                  }
                  System.out.println("");
            }

            // --------------------------------------------------
            // 1   2   3   4   5   6   7   8   9  10
            // 2   4   6   8  10  12  14  16  18  20
            // 3   6   9  12  15  18  21  24  27  30
            // 4   8  12  16  20  24  28  32  36  40
            // 5  10  15  20  25  30  35  40  45  50
            // 6  12  18  24  30  36  42  48  54  60
            // 7  14  21  28  35  42  49  56  63  70
            // 8  16  24  32  40  48  56  64  72  80
            // 9  18  27  36  45  54  63  72  81  90
            // 10  20  30  40  50  60  70  80  90 100
      }     
}