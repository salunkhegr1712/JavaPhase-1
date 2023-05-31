// find biggest among three 

let a=10,b=20,c=30

if(a>b && a>c){
      console.log("a is biggest among three");
}
else if(b>c){
      console.log("b is biggest among three");
}
else{
      console.log("c is biggest among three");
}

function msg(content){
      let m=document.querySelector("h1")
      m.innerHTML=content
}

function isPrime(num){
      if(num==0 || num==1){
            msg("number "+num +" is not prime number")
      }
      else if(num==2){
            msg("number "+num +" is prime number")
      }
      else{
            let k=2
            while(k<num/2){
                  if(num%k==0){
                        msg("number "+num +" is not prime number")
                        return;
                  }     
                  k++;
            }
            msg("number "+num +" is prime number")
      }
}

let m=10;
switch(m){
      case 5:
            console.log("m is less than 10")
            break
      case 12:
            console.log("m is greater than 10")
            break
      case 10:
            console.log("m is equal to 10");
            break;
      default:
            console.log("some error arised");
}

let f=document.querySelector("#btn")
f.addEventListener("click",functionTOTrigger)
function func(){
      // add event listerner to button 
      

      let g=document.querySelector("#mytext")

      msg(g.value)
}

function functionTOTrigger(){
      console.log("clicked")
      let m=document.querySelector("h1")
      let g=document.querySelector("#mytext")
      m.innerHTML=g.value
}
