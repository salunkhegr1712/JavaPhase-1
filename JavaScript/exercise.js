
// first add a event listener to button 

let m=document.querySelector("h1")
let n=document.querySelector("#text")
let k=document.querySelector("#btn")

k.addEventListener("click",trigger)

// function to write the msg 
function msg(content){
      m.innerText=content
}

function oddOrEven(num){
     
      if(num%2==0){
            msg("number "+ num +" is even")
            return;
      }
      msg("number "+ num +" is odd")
}     
// function which invoked when we click on button 
function trigger(){
      oddOrEven(n.value)
}

