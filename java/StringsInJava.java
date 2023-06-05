// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// the main class
public class StringsInJava {
      
      static void printReverseString(String a){
            for(int i=a.length()-1;i>=0;i--){
                  System.out.print(a.charAt(i));
            }
      }
      // main function of our java code
      public static void main(String args[]){

            String a=" a b c ";
            String b="x y z";

            String c=a+b;


            System.out.println(c);
            // a b c x y z
            System.out.println(1000+200 +"abscd");
            // 1200abscd
            System.out.println(a.charAt(1)); //a

            System.out.println(a.trim());
            System.out.println(a.toUpperCase()); //all letters converted to upper case
            System.out.println(a.toLowerCase());// all letters converted to small case

            System.out.println("".isEmpty()); //true
            System.out.println("".isBlank()); //true

            // blank find that is string contains any character or not 
            // is isEmpty only check length

            System.out.println(" ".isEmpty()); //false
            System.out.println(" ".isBlank()); //true 

            System.out.println("------------------------------ string comparisions----------------------------------");

            // string comparisions 
            a="hell";
            b="HEll";
            c="hell";
            
            System.out.println(a.equals(b)); //false
            System.out.println(a.equals(c)); //true
            System.out.println(a.equalsIgnoreCase(b));//true

            String aa= new String("hell");
            String bb= new String("hell");

            if (aa==bb) // not same
                  System.out.println("same");
            else
                  System.out.println("not same");
            
            if (a==c) //same
                  System.out.println("same");
            else
                  System.out.println("not same");

            // if you have two string and they are not dynamcially created so they in same pool

            // check which string is big 
            a="klpfafds";b="cat";

            System.out.println(a.compareTo(b)); //value should be positive -> 8

            System.out.println("hell@1".matches("[a-z0-9@]+")); //false


            // string slicing 
            a="sdhbdksgkhsdkhgkfhd";
            System.out.println(a.subSequence(1,5));
            System.out.println(a.substring(1,5));

            for(int i=0;i<a.length();i++){
                  System.out.print(a.charAt(i)+" ");
            }
            // s d h b d k s g k h s d k h g k f h d 
            
            // System.out.println(a.split("d",6));

            // lets print reverse string 
            printReverseString(a);

            // dhfkghkdshkgskdbhds

            // split is used to split a string on some basis
            a="a_b_c_d_e_f";
            
            String ff[]=a.split("_");

           for(String s:ff){
            System.out.println(s);
           }
      //      a
            // b
            // c
            // d
            // e
            // f

            a="klpdklpd";

            // use replace function 
            System.out.println(a.replace("l","zz"));
            // kzzpdkzzpd


            System.out.println("1hkbkh33hbh3".replaceAll("[0-9]","bts"));
            // btshkbkhbtsbtshbhbts

            // all number will be replaced by "bts"


            // string conversion operations

            // number to string 
            int z=11111;
            System.out.println(Integer.toString(z)); // 11111
            System.out.println(Integer.toBinaryString(z));//10101101100111
            System.out.println(Integer.toOctalString(z));//25547
            System.out.println(Integer.toHexString(z));//2b67

            
            // string to number
            // for that we use function called parseint 

            // output of parseInt is decimal number always 
            System.out.println(Integer.parseInt("11111",2)); // binary number string to decimal
            System.out.println(Integer.parseInt("11111",8)); // octal string to decimal 
            System.out.println(Integer.parseInt("11111",10));// decimal string to decimal
            System.out.println(Integer.parseInt("11111",16));// hexadecimal string to decimal

            // 31
            // 4681
            // 11111
            // 69905
      }     

}