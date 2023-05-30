// lets create object in javascript 

let m = { "name": "ghansham", "age": 19, "married": false }

// let convert it in to string using stringify

let op1 = JSON.stringify(m)

console.log("original object : " + m) //run it in console
//original object : {name: 'ghansham', age: 19, married: false}

console.log("stringified object : " + op1)//run it in console
// stringified object : '{"name":"ghansham","age":19,"married":false}'

// reconstruct stringified object to js object 
z = JSON.parse(op1)

console.log("reconstruct : " + z) //run it in console
// reconstruct : {name: 'ghansham', age: 19, married: false}


// lets use localStorage and store the json object and retriev it 
// this store the object inside broswer in string format 
// lets try to get file 

// create a object 
let people = [
      { "name": "ghansham", "edu": "graduate", "age": 21 },
      { "name": "abhi", "edu": "graduate", "age": 23 },
      { "name": "yash", "edu": "graduate", "age": 22 },
      { "name": "nikhil", "edu": "graduate", "age": 20 },
      { "name": "adesh", "edu": "graduate", "age": 22 },
      { "name": "vijay", "edu": "graduate", "age": 22 },
]

// lets convert it into string 
stringifiedObjects = JSON.stringify(people)

// output:
// '[{"name":"ghansham","edu":"graduate","age":21},{"name":"abhi","edu":"graduate","age":23},
// {"name":"yash","edu":"graduate","age":22},
// {"name":"nikhil","edu":"graduate","age":20},
// {"name":"adesh","edu":"graduate","age":22},{"name":"vijay","edu":"graduate","age":22},
// {"name":"hero","edu":"fail","age":90}]'

// now store it in localStorage use setItem function for this
localStorage.setItem("someName", stringifiedObjects)

// now lets extract it back 
// we will use getitem function and format will be string 
outputInString = localStorage.getItem("someName")

// output:
// '[{"name":"ghansham","edu":"graduate","age":21},{"name":"abhi","edu":"graduate","age":23},
// {"name":"yash","edu":"graduate","age":22},
// {"name":"nikhil","edu":"graduate","age":20},
// {"name":"adesh","edu":"graduate","age":22},{"name":"vijay","edu":"graduate","age":22},
// {"name":"hero","edu":"fail","age":90}]'


// now convert incoming input to js objects 
OGpeople = JSON.parse(outputInString)

// 0:{ name: 'ghansham', edu: 'graduate', age: 21 }
// 1:{ name: 'abhi', edu: 'graduate', age: 23 }
// 2:{ name: 'yash', edu: 'graduate', age: 22 }
// 3:{ name: 'nikhil', edu: 'graduate', age: 20 }
// 4:{ name: 'adesh', edu: 'graduate', age: 22 }
// 5:{ name: 'vijay', edu: 'graduate', age: 22 }
// 6:{ name: 'hero', edu: 'fail', age: 90 }

