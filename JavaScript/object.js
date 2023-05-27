// this is direct declaration of object without class and constructor 
const obj={
      name:"ghansham",
      branch:"comp",
      div:1,
      mis:111903033,

      // you can also declare function also 
      msd:()=>{
            console.log("hello world")
      }
}



function displayInfo(grs){
      console.log(typeof(grs))
      console.log("name is : "+grs.name)
      console.log("branch is : "+grs.branch)
      console.log("div is : "+grs.div)
      console.log("mis is : "+grs.mis)
      console.log("completed : "+grs.completed)
}

// displayInfo(obj)

// name is : ghansham
// branch is : comp
// div is : 1
// mis is : 111903033


// this is class declaration and create object using constructor
class Student{
      constructor(name,mis,branch,div,completed){
            this.name=name;
            this.mis=mis;
            this.branch=branch;
            this.div=div;
            this.completed=completed;
      }
}

const st=new Student("grs",111903033,"comp",1,true)

// displayInfo(st)

// name is : grs
// branch is : comp
// div is : 1
// mis is : 111903033
// completed : true

// also adding new property 
st.hell="sham"

console.log(st.hell) //sham


// adding a function inside a class

class Rectangle{
      constructor(length,bredth){
            this.length=length;
            this.bredth=bredth;
      }

      // you dont have to use the function keyword inside class to declare them 
      area(){
            return this.length*this.bredth
      }
      
      perimeter=()=>{
            return 2*this.length+this.bredth*2
      }
}


// so lets declare object of c1ass Rectangle and then print the area and perimeter
// with the function present inside them 

var rect=new Rectangle(10,5)

// console.log(rect.area())
// console.log(rect.perimeter())


// console.log(obj.msd()) //hello world


// declare cat object
cat ={
      eyes:2,
      legs:4,

      voice:()=>{
            console.log("mew mew mew")
      },
      angry:()=>{
            console.log("aww aww aww")
      }
}

// console.log("cat has : "+cat.legs+" legs")
// console.log("cat has : "+cat.eyes+" eyes")
// cat.angry()
// cat.voice()

// cat has : 4 legs
// cat has : 2 eyes
// aww aww aww
// mew mew mew

// now declare cat class 

class Cat{
      constructor(){
            this.legs=4;
            this.eyes=2
      }
      angry(){
            console.log("aww aww aww")
      }
      voice(){
            console.log("mew mew mew")
      }
}

let m=new Cat()
cat.angry()
cat.voice()
console.log("cat has : "+m.legs+" legs")
console.log("cat has : "+m.eyes+" eyes")
// aww aww aww
// mew mew mew
// cat has : 4 legs
// cat has : 2 eyes