// so here we are going to create the object and class from the interfaces 
// the interface part is not seen in javascript so it is not compiled by tsc 

// this is rect interface and we will create a class object from it 
interface Rect{
      
      length:number,
      bredth:number,
      
      // create a readonly Element 
      readonly base:number,

      // also create a non mandatory proprty
      digonal?:number

      // and we keep two unimplemented function as contract so its subsequent class and object have to
      // implement them 
      area():number;
      perimeter():number;
}


// now create a object from interface
// it throws error for object so we leave it 
// let a=Rect{}

// let create class
// to get interface as parent we have to use implements keyword 

class Rectangle implements Rect{
      length: number;
      bredth: number;
      digonal?: number | undefined;
      base: number;
      area(): number {
          return this.length*this.bredth
      }
      perimeter(): number {
          return (this.length+this.bredth)*2
      }

      // you implement all things in interface then all errors will gone 
}

let x=new Rectangle()
x.length=100
x.bredth=50

console.log(x.area()) //5000
console.log(x.perimeter()) //300


// thus you can implements class over interface and such like that you can use interface