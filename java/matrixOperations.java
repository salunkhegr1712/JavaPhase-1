import java.lang.*;
import java.util.*;

public class matrixOperations {
    
      static void displayMatrix(int a[][]){

            for(int i=0;i<=2;i++){
                  for(int j=0;j<=2;j++){
                        System.out.print(a[i][j] + " ");
                  }
                  System.out.println();
            }

      }

      static int[][] matrixSub(int a[][],int b[][]){
            int sub[][]=new int[3][3];
            for(int i=0;i<=2;i++){
                  for(int j=0;j<=2;j++){
                        sub[i][j]=a[i][j]-b[i][j];
                  }
            }
            return sub;
      }

      static int[][] matrixSum(int a[][],int b[][]){
            int sum[][]=new int[3][3];
            for(int i=0;i<=2;i++){
                  for(int j=0;j<=2;j++){
                        sum[i][j]=a[i][j]+b[i][j];
                  }
            }
            return sum;
      }

      static int[][] matrixMul(int a[][],int b[][]){
            int mul[][]=new int[3][3];
            for(int i=0;i<=2;i++){
                  for(int j=0;j<=2;j++){
                        for(int k=0;k<=2;k++){
                            mul[i][j]+=a[i][k]*b[k][j];  
                        }     
                  }
            }
            return mul;
      }
      public static void main(String[] args){

            int a[][]={{1,2,3},{1,2,3},{1,2,3}};
            int b[][]={{9,8,7},{9,8,7},{9,8,7}};
            
            int mul[][]=matrixMul(a,b);
            displayMatrix(mul);

      }
      //done                                          
}