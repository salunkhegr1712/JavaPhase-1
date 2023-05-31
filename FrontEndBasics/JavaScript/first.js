console.log("hello world")
let g='10';
if(g===10){
      console.log("value of g is 10")
}
else{
      console.log("the value of g is not 10")
}
console.dir(document)

// alert("hello world 3")
// m=prompt("what is your name?")
// console.log("your name is : "+m)

function hello(){

      // shuffle between two names in html with javascript 

      console.log("clicked")
      let m=document.querySelector("h1")
      console.log(m.innerText)
      if(m.innerText==="Hello World"){
            m.innerText="JAVASCRIPT"
            console.log("called")
      }
      else{
            m.innerText="Hello World"
      }
}

// setInterval(()=>{
//       let m=document.querySelector("h1")
//       m.innerText="the text has been changed"
      
// },5000)
// in order to run java script html is important 