// here in this file we are going to learn about the typescript class and how they work 
// lets create a class qudrangle and from this we will also declare the rectangle and square class

// class heiarchy 

// Qudrangle
//     ||
//     ||
//     \/
// Rectangle
//     ||
//     ||
//     \/
//   Square

// default access specifier for class is public 

// a class name should start with capital letter  
class Qudrangle {

      // this are the four property of class qudrangle 
      protected side1: number;
      protected side2: number;
      protected side3: number;
      protected side4: number;

      // also create a constructor which take the side of Qudrangle
      // unlike cpp and python you have to use constructor keyword to create constructor 
      constructor(a: number, b: number, c: number, d: number) {
            console.log("qudrangle constructor called !")

            this.side1 = a
            this.side2 = b
            this.side3 = c
            this.side4 = d
      }

      // now lets declare functions inside the class 

      // perimeter function which has return type number 
      perimeter(): number {
            return this.side1 + this.side2 + this.side3 + this.side4
      }

      // function of void type and this will display length of Qudrangle
      displayLength(): void {
            console.log("side1 is : " + this.side2)
            console.log("side2 is : " + this.side2)
            console.log("side3 is : " + this.side3)
            console.log("side4 is : " + this.side4)
      }
}

// lets create child of class qudrangle like java it used extends keyword to create child class
export class Rectangle extends Qudrangle {

      // lets create constructor first and constructors for derived classes must contain a 'super' call.
      // also you can create new property directly inside the class
      // protected digonal?:number question tag is used as we are going to calculate it not going to take it from function
      constructor(length: number, bredth: number,protected digonal?:number) {

            console.log("rectangle constructor called")
            // pass value of side to parent that is Qudrangle
            // super keyword is must in constructor of child class 
            super(length, bredth, length, bredth)

            // lets calculate and assign value to the this.digonal 
            this.digonal = (length ** 2 + bredth ** 2) ** (1 / 2)
      }

      // now overide the function 
      displayLength(): void {
            console.log(`length is : ${this.side1}`)
            console.log(`bredth is : ${this.side2}`)
            console.log(`digonal is : ${this.digonal}`)
      }

      // also create another function called area of return type number
      area(): number {
            return this.side1 * this.side2
      }
}


// lets create object of that class 
class Square extends Rectangle {
     
      // lets create constructor first and constructors for derived classes must contain a 'super' call.
      constructor(side: number,) {
            console.log("square constructor called")
            // pass value of side to parent that is Qudrangle
            // super keyword is must in constructor of child class 
            super(side, side)
            
      }

      // now overide the function 
      displayLength(): void {
            console.log(`length is : ${this.side1}`)

            console.log(`digonal is : ${this.digonal}`)
      }

      // also create another function called area of return type number
      area(): number {
            return this.side1*this.side1
      }
}

console.log("---------------------- Qudrangle class -------------------------")
let obj = new Qudrangle(10, 15, 2, 3) //object is created !

obj.displayLength()
// side1 is : 15
// side2 is : 15
// side3 is : 2
// side4 is : 3

console.log("perimeter of qudrangle is : ", obj.perimeter())
// perimeter of qudrangle is :  30

console.log("-------------------- rectangle class ---------------------------")

// lets see working of the rectangle class here 

let rect = new Rectangle(20, 15)
// rectangle constructor called
// qudrangle constructor called 

// working  rectangle constructor ----super()----> Qudrangle

// lets create square as the child class of Rectangle where length and bredth is same 


rect.displayLength()
// length is : 20
// bredth is : 15
// digonal is : 25

console.log(`area is : ${rect.area()}`) //area is : 300
console.log(`perimeter is : ${rect.perimeter()}`) //perimeter is : 70


console.log("-------------------- square class ---------------------------")

let sq=new Square(20)
// square constructor called
// rectangle constructor called
// qudrangle constructor called !

sq.displayLength()
// length is : 20
// digonal is : 28.284271247461902

console.log("area is : ",sq.area())
// area is :  80
console.log("perimeter is : ",sq.perimeter())
// perimeter is :  80
