// so we are using smaller notations here 
class Employee{

      // here you just have pass parameters and else will handled easily 
      constructor(
            protected name:string,
            protected age:number,
            protected gender:string,
            protected contact:number,
      ){}

      // also declare some get and set property 
      // this are some function which we can use to fetch private value from class
      get getname():string{
            return this.name
      }

      get contactNo():number{
            return this.contact;
      }

      // set function 
      set nameSet(name:string){
            this.name=name
      }

      set numberSet(no:number){
            this.contact=no
      }

      displayDetails(){
            console.log(`name is : ${this.name} \nage is : ${this.age}\ngender : ${this.gender}\nContact : ${this.contact}`)
      }
}

// lets create object 

let m=new Employee("ghansham salunkhe",21,"male",8624969401)
m.displayDetails()
// name is : ghansham salunkhe 
// age is : 21
// gender : male
// Contact : 8624969401


// lets get and set value 
console.log(m.getname)
// ghansham salunkhe
console.log(m.contactNo)
// 8624969401

// lets use set 
console.log(m.nameSet)