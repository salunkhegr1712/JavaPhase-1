// here we will learn about the different operators which we can see inside typescript 

// spread function is usefull to transfer data from one Array to another or one object to another 
// (...) triple dots are used for spread function 

// you can initialise and declare  values at once like below 

let a: Array<any>=["brs","sa",1,34,13,true]
let b:Array<any>=[10,2,3,1,2,"steing"]
let d:number=10
// so lets create new array and extend above array

// ... is spread operator 
let c:any[]
c=[...a,...b,"new val","new val","new val"]

// so lets see 
console.log(a)// [ 'brs', 'sa', 1, 34, 13, true ]
console.log(b)// [ 10, 2, 3, 1, 2, 'steing' ]
console.log(c)// ['brs','sa',1,34,13,true,10,2,3,1,2,'steing','new val','new val','new val']

// so c takes value from a and b using spread operator 


// lets use spread for object
let obj1={
      name:"grs",
      mis:111903033
}

let obj2={
      ...obj1,
      branch:"comp",
      div:1
}

// lets print obj1 and obj2

console.log(obj1)
// { name: 'grs', mis: 111903033 }
console.log(obj2)
// { name: 'grs', mis: 111903033, branch: 'comp', div: 1 }

// so : datatype after function is used to declare returntype of function
// a:number so parameter a is mandatory and should be of type number 
// b ?: a string parameter which is not mandatory
// c? is parameter which is not mandatory and also we have not specified the type of c
function abc(a:number,b?:string,c?):number{
      // console.log(c)
      return a+10
}

abc(10) // here we not pass second argument still we not get error
abc(10,"str") // passing non mandatory argument

// # backticks
// it is just like fstrings but here ${} is used instead of {}
let num=199

let str=`the num is ${num}`
console.log(str) //the num is 199 

// backticks are usefull in typescript and make messy code small and efficient 

// some issue is there with backticks as it stringify things inside it 

let kk:Array<any> =["bts",1,2,3,true]

console.log(`the content inside kk is ${kk}`)
// the content inside kk is bts,1,2,3,true

// # destructure 
const l={
      name:"ghansham",
      clg:"COEP",
      edu:"graduate",
      mis:111903033
}

// lets destructure and grab values from l 

let {name:n,clg,mis}=l
console.log(n,clg,mis) //ghansham COEP 111903033

// such like that we can grab the values from the object using destructor

// lets apply it on array 
let arr:Array<string>=["ghansham","rajaram","salunkhe"]

// lets use destructor to get values from arr 
let [one,two,third]=[1,2,3]
console.log(one,two,third)


// rest (...args)
// it is similar to arbitary positional argument inside the python 
// this is used to take infinite number of parameters as arguments 
// args is list unlike python that was tuple 
// you can use rest arguments only as last parameter inside a function 

// so here we are taking rest arguments of type number[] 
function maxAmongALl(...args:number[]):number{

      let max=args[0]

      for(let i =0; i<args.length;i++){
            if(args[i]>max){
                  max=args[i]
            }
      }
      return max
}

// so this function taking any number of numbers as argument and provide max among them 

console.log(`max among all numbers are : ${maxAmongALl(10,23,4,32234,1,213,12,1,1,3,24,23,3243,1,3,22,24,2,4)}`)
// max among all numbers are : 32234

// lets create a arrow or fat function

// function will take number and find that is it even or odd 

// a void function
let fatfunction=(a):void=>{
      if(a%2===0){
            console.log(`${a} is even`)
            return
      }
      console.log(`${a} is odd`)
}

fatfunction(10) //10 is even

// console.log("sadbjskf")

// lets declare a oneline arrow function

let mm=(a)=> console.log("value entered is : "+a)

mm(10000000)
// value entered is : 10000000