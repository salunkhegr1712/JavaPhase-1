// these are some date and time related functionality which included in java in version 8
// importing basic functionalities from the java library
import java.lang.*;
import java.util.*;

// for using them we have to include java.time 
import java.time.*;
// the main class
public class DateAndTime {

      // main function of our java code
      public static void main(String args[]){

            // so we have function like Localdate localTime etc lets use them 
            
            System.out.println(LocalDate.now());
            // 2023-06-08

            System.out.println(LocalDateTime.now());
            // 2023-06-08T08:51:35.692684544

            System.out.println(LocalTime.now());
            // 08:51:35.692837042

            // such like that we can be able to use the above things 

            // create date
            LocalDate d1= LocalDate.of(2002,1,17);
            LocalDate d2=LocalDate.of(2002,Month.JANUARY,17);
            System.out.println(d1);
            System.out.println(d2);
            // 2002-01-17
            // 2002-01-17
            System.out.println("-------------------- time -----------------------");
            // lets create some time 
            LocalTime t1= LocalTime.of(12,12,12,12);
            LocalTime t2= LocalTime.of(12,12,12);
            LocalTime t3= LocalTime.of(12,12);
            System.out.println(t1);
            System.out.println(t2);
            System.out.println(t3);
            // 12:12:12.000000012
            // 12:12:12
            // 12:12

            System.out.println("--------------------- DateTime--------------------------");
            LocalDateTime m= LocalDateTime.of(d1,t1);
            LocalDateTime n= LocalDateTime.of(2002,1,17,12,12,12);
            System.out.println(m);
            System.out.println(n);
            // 2002-01-17T12:12:12.000000012
            // 2002-01-17T12:12:12
            

            // do a search about localTime, LocalDate,LocalDateTime class in java on internet
            // read about the future or past time and future or past date
            // such like that we can able to see time and date related thing using those java function
            
            // date difference for that we use period 
            System.out.println(Period.between(LocalDate.of(2002,1,17),LocalDate.now()));
            // P21Y4M22D

            // time difference
            System.out.println(Duration.between(LocalTime.of(12,12),LocalTime.of(1,1)));
            // PT-11H-11M

            System.out.println();
            String a="yes";
            String b="yes";
            System.out.println(a==new String("yes"));
      }
}