// in this code im going to implement function inside the javascript 

// in this code we going to give function name as parameter and call that function also
function calculator(operation,op1,op2){
      return operation(op1,op2)
}

function sum(a,b){
      return a+b
}

function mul(a,b){
      return a*b
}

function sub(a,b){
      return a-b
}

function div(a,b){
      return a/b
}

console.log("sum is : "+calculator(sum,10,5))
console.log("sub is : "+calculator(sub,10,5))
console.log("mul is : "+calculator(mul,10,5))
console.log("div is : "+calculator(div,10,5))

// sum is : 15
// sub is : 5
// mul is : 50
// div is : 2
let b=1

let c1=1,c2=1,c3=0;
// this is function called after seeing some event 
function hello(){
      
      let msg="hello world"
      let m=document.querySelector("h1")
      m.innerText=msg+b
      console.log(m.innerText)
      b++
}

function hello1(){
      let msg="counter 1 : "+c1
      let m=document.querySelector(".bt1")
      m.innerText=msg
      console.log(m.innerText)
      c1++
}
function hello2(){

      let msg="counter 2 : "+c2
      let m=document.querySelector(".bt2")
      m.innerText=msg
      console.log(m.innerText)
      c2++
      
}

function hello3(){

      let msg= "counter 3 : "+c3
      let m=document.querySelector(".bt3")
      m.innerText=msg
      console.log(m.innerText)
      c3++
}

// also we can able to declare function with different type 

var abc=function(){
      return 10+9
}

console.log(abc()) //19

// also we can do 
var mpt=()=>{
      return 10+20
}

console.log(mpt()) //30 