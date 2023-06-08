// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// the main class
public class RegexJava {

      // main function of our java code
      public static void main(String args[]){

            String a="hfd21 h3k13 43j4b1 23k1n23 12j3n12";

            // we want to remove number so how can we do it  
            // use replace function
            a=a.replaceAll("[123]","");

            System.out.println(a);
            // hfd hk jb kn jn

            System.out.println("--------------------------- information about quantifier ----------------------");
            // + : last character or set of character occurs atleast 1 or more times
            System.out.println("abc".matches("abc+")); // true
            System.out.println("ab".matches("abc+")); //false
            System.out.println("abc".matches("[abc]+")); //true
            System.out.println("vds".matches("[abc]+")); //false
            
            
            // *  : last character or set occurs atleast 0 or more 
            System.out.println("abc".matches("abc*")); //true
            System.out.println("ab".matches("abc*")); // true
            System.out.println("vds".matches("[abc]*")); //false

            // ? : occur 0 or 1 time else never
            System.out.println("abc".matches("abc?"));//true
            System.out.println("abcc".matches("abc?"));//false
            System.out.println("ab".matches("abc?"));//true 

            System.out.println("------------------------------ COMPLEX quantifier --------------------------------");

            // not much used 
            // usinf {n} : occurs only n times
            // {n,} : occurs min n upto any number
            // {n,m} : occur min n upto m times

            System.out.println("abxyzxyzxyz".matches("ab(xyz){3}")); // true
            System.out.println("abxyzxyz".matches("ab(xyz){1,3}"));//true
            System.out.println("abcxyzxyzxyzxyz".matches("ab(xyz){4,}")); //true
 
            System.out.println("---------------------------- blocling multiple characters ------------------------------------");
            // we can sum up multiple character in one using ()

            System.out.println("abc".matches("abc(xyz)*")); // true
            System.out.println("abcxyz".matches("abc(xyz)*"));//true
            System.out.println("abcxyzxyz".matches("abc(xyz)*")); //true

            System.out.println("abc".matches("abc(xyz)+")); //false
            System.out.println("abcxyz".matches("abc(xyz)+"));// true
            System.out.println("abcxyzxyz".matches("abc(xyz)+")); //true

            System.out.println("abc".matches("abc(xyz)?")); //true
            System.out.println("abcxyz".matches("abc(xyz)?")); //true
            System.out.println("abcxyzxyz".matches("abc(xyz)?"));// false




            // character classes 

            // \d : any number 
            // \w : any number plus alphabet [a-zA-Z0-9]
            // \s : spaces
            // \W : any non number or non alphabet
            // \D : any non number

            System.out.println("replace all number ");
            System.out.println("dh2342kh323hk423kh4".replaceAll("\\d*",""));
            System.out.println("dh2342kh323hk423kh4".replaceAll("[0-9]*",""));
            // replace all number 
            // dhkhhkkh
            // dhkhhkkh

            
            System.out.println("replace all character ");
            System.out.println("dh2342kh323hk423kh4".replaceAll("\\D",""));
            System.out.println("dh2342kh323hk423kh4".replaceAll("[a-zA-Z]*",""));
            // replace all character 
            // 23423234234
            // 23423234234

            // also we can use \\w 
            System.out.println("lets remove all special character");
            System.out.println("n5$%#$@!$sadfds#@%bjk$%$#n1@#41!$#21".replaceAll("\\W",""));
            // n5sadfdsbjkn14121

            System.out.println("remove word character");
            System.out.println("n5$%#$@!$sadfds#@%bjk$%$#n1@#41!$#21".replaceAll("\\w",""));
            System.out.println("n5$%#$@!$sadfds#@%bjk$%$#n1@#41!$#21".replaceAll("[a-zA-Z0-9]",""));
            // $%#$@!$#@%$%$#@#!$#
            System.out.println("n5$%#$@!$sadfds#@%bjk$%$#n1@#41!$#21".replaceAll("[^a-zA-Z0-9]",""));
            // n5sadfdsbjkn14121

            System.out.println("8624969401".matches("[987]\\d{9}"));//true
            System.out.println("9096549401".matches("[987]\\d{9}"));//true
            System.out.println("7776983673".matches("[987]\\d{9}"));//true

      }
}