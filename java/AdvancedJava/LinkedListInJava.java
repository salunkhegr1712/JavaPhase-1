// importing basic functionalities from the java library
import java.lang.*;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

// the main class
public class LinkedListInJava {

      // main function of our java code
      public static void main(String args[]){

            // you can use any function which you apply on list can apply on linked list 
            
            LinkedList<String> ll1= new LinkedList<String>();

            // also you can reference LinkedList using list 
            List<String> ll2=new LinkedList<String>();

            // LinkedList basic operational function
            ll1.add("yellow");
            ll1.add("red");
            ll1.add("green");
            ll1.add("magenta");
            ll1.add("blue");
            ll1.add("pink");
            ll1.add("purple");
            ll1.add("cyan");
            System.out.println(ll1);

            System.out.println("----------------------- functions special to linkedlist -------------------------");
            // all function which you can use on list that can used on LinkedList
            // additional function

            System.out.println("----- peek function -----------");

            // only returns the first and last value 
            System.out.println(ll1.peekFirst());// just return value at head 
            System.out.println(ll1.peekLast());// just return tail value
            System.out.println("list after peek operaions : "+ll1);

            System.out.println("---------- poll operaions----------");
            System.out.println(ll1.pollFirst());// delete head value and return it 
            System.out.println(ll1.pollLast());// delete tail value and return it 
            System.out.println("list after poll operaions : "+ll1);


            // output : 
            // ----- peek function -----------
            // yellow
            // cyan
            // list after peek operaions : [yellow, red, green, magenta, blue, pink, purple, cyan]
            // ---------- poll operaions----------
            // yellow
            // cyan
            // list after poll operaions : [red, green, magenta, blue, pink, purple]


            System.out.println("-------- LINKED LIST ADD function-------------");
            // with add you can add value at specific index
            System.out.println(ll1);
            ll1.add(2,"hell");
            ll1.add(5,"sdhgkbs");






            System.out.println(ll1);
            // [red, green, magenta, blue, pink, purple, cyan]
            // [red, green, hell, magenta, blue, sdhgkbs, pink, purple, cyan]
 
             // you can print the LinkedList directly using System.out.println("");
             // this is not happend using array
             // [yellow, red, green, magenta, blue, pink, purple, cyan]
 
             // so lets get and set values
             int index = 2;
 
             System.out.println("----------------- basic operaions------------------------------");
             // the get function used to get value at a perticular index
             System.out.println(ll1.get(index));
 
             // the set function is used to set a value at a index
             System.out.println("before set "+ ll1);
             ll1.set(2, "gray");
             System.out.println("after set "+ ll1);
             // before set [yellow, red, green, magenta, blue, pink, purple, cyan]
             // after set [yellow, red, gray, magenta, blue, pink, purple, cyan]
 
             // remove elements 
             // for thees we have two function
 
             // clear remove each item in list and make it empty 
             ll2=ll1;
 
             System.out.println("before clear");
             System.out.println(ll2);
             // ll2.clear();
             System.out.println(ll2);
 
             // [yellow, red, gray, magenta, blue, pink, purple, cyan]
             // []
 
 
             // remove function
             // it remove element at a index or a specific value 
             System.out.println(ll1);
             ll1.remove("blue");
             System.out.println("removing specific blue value : "+ll1);
             // [yellow, red, gray, magenta, blue, pink, purple, cyan]
             // [yellow, red, gray, magenta, pink, purple, cyan]
 
             ll1.remove(4);
             System.out.println("removing value at index 4 : "+ll1);
             // [yellow, red, gray, magenta, pink, purple, cyan]
             // removing value at index 4 : [yellow, red, gray, magenta, purple, cyan]
 
             System.out.println("--------------------- search operations --------------------------------");
             // search operaions in LinkedList 
             System.out.println("index of green is : "+ll1.indexOf("green")); //-1 as green not in list
             System.out.println("index of green is : "+ll1.indexOf("purple")); // 4
 
             System.out.println(ll1.contains("green")); //false
             System.out.println(ll1.contains("purple"));//true
 
             System.out.println("------------------- sublist-------------------");
             
             // sublist isthere to slice a list and it is usefull 
             System.out.println(ll1.subList(1,3));
             // [red, gray]
 
 
             // loop over LinkedList
             System.out.println("----------------------------- looping over LinkedList ---------------------------");
 
             for(String s:ll1){
                   System.out.print(s+" ");
             }
             // yellow red gray magenta purple cyan 
             System.out.println("");
 
             System.out.println("iterator for list");
 
             // so for a LinkedList we can create iterator and with that we can iterate through list 
 
             // the type inside <> should match 
             ListIterator<String> iterator= ll1.listIterator();
 
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
             System.out.println(ll1.size()); 
 
             // isEmpty used to see that is list is empty or not 
             System.out.println(ll1.isEmpty());
 
             // toArray function used to convert array to list
             var zz=ll1.toArray();
             System.out.println((Object)zz.getClass().getSimpleName());
             // Object[] as it is string array
             

             
           
      }
}