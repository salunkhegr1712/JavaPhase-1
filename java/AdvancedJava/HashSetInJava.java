// importing basic functionalities from the java library
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;
// import java.util.LinkedHashMap;
// the main class
public class HashSetInJava {

      // main function of our java code
      public static void main(String args[]){

            // set do not contains duplicate element
            // the hashset donot maintain insertion order but linkedhashset do
            var hash= new HashSet<Integer>();


            // also you can create linkedhashset and it has same methods like hashset 
            // this uses same function that of hash set 
            var llhashset=new LinkedHashSet<Integer>();

            // so lets use some methods
            hash.add(10);hash.add(30);
            hash.add(20);hash.add(50);

            System.out.println(hash);
            // [50, 20, 10, 30]

            // lets try to add 10 again 
            hash.add(10);
            System.out.println(hash);
            // [50, 20, 10, 30] not added 

            // remove is used to remove element
            hash.remove(10);
            hash.remove(2);
            // as hash dont support indexing you just have to use value  inorder to remove 
            System.out.println(hash);

            // clear used to free up hashtable 
            // hash.clear();
            // System.out.println(hash); // []

            // size will print the size 
            System.out.println("size of hash is : "+hash.size()); //3

            // contains will check is a value there in hashset or not 
            System.out.println(hash.contains(20)); //true


            System.out.println("------------ set based function----------------");
            
            var hash1= new HashSet<Integer>();
            
            hash1.add(10);hash1.add(19);hash1.add(70);hash1.add(30);hash1.add(60);
            System.out.println("hash1 : "+hash1);
            System.out.println("hash : "+hash);

            // lets check intersction adnunion
            // addAll function is used to find out the union between two sets 
            hash.addAll(hash1);

            // retainALL used to find out intersection 
            // hash.retainAll(hash1);

            System.out.println(hash);
            // [50, 19, 20, 70, 10, 60, 30] for union
            // [30] for intersection


            
            System.out.println("---------- tree set--------------------");
            // also there exist treeset which make order of insertion in asceding order
            TreeSet<String> treeset= new TreeSet<String>();

            // lets add siome value 
            treeset.add("roman");treeset.add("hello");
            treeset.add("grs");treeset.add("blah");
            treeset.add("avbds");treeset.add("xyz");

            System.out.println(treeset);
            // [avbds, blah, grs, hello, roman, xyz] asceding order set 
            // all other function are just same 

            System.out.println("------------ loop over hashset---------------");
            System.out.println("----- for each loop -----");
            for(int x:hash){
                  System.out.println(x);
            }
            // output for union set 
            // 50
            // 19
            // 20
            // 70
            // 10
            // 60
            // 30
      
            System.out.println("----- intertor");
            Iterator<String> m =treeset.iterator();

            while(m.hasNext()){
                  System.out.print(m.next()+" ");
            }
            // such like that using for each loop or using iterator we can access nad iterate set cd
      }     

}