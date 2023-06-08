// importing basic functionalities from the java library
import java.lang.*;
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
// the ArrayList is class from java.util and it is used to create a dynamic lists

// the main class
public class ArrayListInJava {

            // main function of our java code
      public static void main(String args[]) {
            // you can create list using ArrayList or List
            // you have to mention the datatype inside the <>

            ArrayList<String> arr1 = new ArrayList<String>();

            // the list is abstract class for ArrayList so you can use it as reference
            List<String> arr2 = new ArrayList<String>();

            // ArrayList basic operational function
            arr1.add("yellow");
            arr1.add("red");
            arr1.add("green");
            arr1.add("magenta");
            arr1.add("blue");
            arr1.add("pink");
            arr1.add("purple");
            arr1.add("cyan");

            // you can print the arraylist directly using System.out.println("");
            // this is not happend using array
            System.out.println(arr1);
            // [yellow, red, green, magenta, blue, pink, purple, cyan]

            // so lets get and set values
            int index = 2;

            System.out.println("----------------- basic operaions------------------------------");
            // the get function used to get value at a perticular index
            System.out.println(arr1.get(index));

            // the set function is used to set a value at a index
            System.out.println("before set "+ arr1);
            arr1.set(2, "gray");
            System.out.println("after set "+ arr1);
            // before set [yellow, red, green, magenta, blue, pink, purple, cyan]
            // after set [yellow, red, gray, magenta, blue, pink, purple, cyan]

            // remove elements 
            // for thees we have two function

            // clear remove each item in list and make it empty 
            arr2=arr1;

            System.out.println("before clear");
            System.out.println(arr2);
            // arr2.clear();
            System.out.println(arr2);

            // [yellow, red, gray, magenta, blue, pink, purple, cyan]
            // []


            // remove function
            // it remove element at a index or a specific value 
            System.out.println(arr1);
            arr1.remove("blue");
            System.out.println("removing specific blue value : "+arr1);
            // [yellow, red, gray, magenta, blue, pink, purple, cyan]
            // [yellow, red, gray, magenta, pink, purple, cyan]

            arr1.remove(4);
            System.out.println("removing value at index 4 : "+arr1);
            // [yellow, red, gray, magenta, pink, purple, cyan]
            // removing value at index 4 : [yellow, red, gray, magenta, purple, cyan]

            System.out.println("--------------------- search operations --------------------------------");
            // search operaions in arraylist 
            System.out.println("index of green is : "+arr1.indexOf("green")); //-1 as green not in list
            System.out.println("index of green is : "+arr1.indexOf("purple")); // 4

            System.out.println(arr1.contains("green")); //false
            System.out.println(arr1.contains("purple"));//true

            System.out.println("------------------- sublist-------------------");
            
            // sublist isthere to slice a list and it is usefull 
            System.out.println(arr1.subList(1,3));
            // [red, gray]


            // loop over arraylist
            System.out.println("----------------------------- looping over arraylist ---------------------------");

            for(String s:arr1){
                  System.out.print(s+" ");
            }
            // yellow red gray magenta purple cyan 
            System.out.println("");

            System.out.println("iterator for list");

            // so for a arraylist we can create iterator and with that we can iterate through list 

            // the type inside <> should match 
            ListIterator<String> iterator= arr1.listIterator();

            // so iterator has function hasNext() so if there is element further return true else false
            // iterator.next() used to increment iterator 
            while(iterator.hasNext()){
                  System.out.println(iterator.next());
            }
            // OUTPUT :
            // yellow
            // red
            // gray
            // magenta
            // purple
            // cyan

            System.out.println("----------------- other functions------------------------");

            // size function used to print the length of list 
            System.out.println(arr1.size()); 

            // isEmpty used to see that is list is empty or not 
            System.out.println(arr1.isEmpty());

            // toArray function used to convert array to list
            var zz=arr1.toArray();
            System.out.println((Object)zz.getClass().getSimpleName());
            // Object[] as it is string array

            // let try 
            ArrayList<Float> klpd= new ArrayList<Float>();
            klpd.add(1.4f);
            System.out.println(klpd);

      }
}
