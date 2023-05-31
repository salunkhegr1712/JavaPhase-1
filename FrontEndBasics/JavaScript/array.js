arr=[10,true, "hello world"]

for(let i=0;i<arr.length;i++){
      console.log(arr[i])
}

// arr.length will give the length of Array
// 10
// true
// hello world

console.log(arr)
// [ 10, true, 'hello world' ]


// array functions

// add a value at last of array 

let m=arr.push(100)
console.log(arr)
console.log("value of m : "+m)
// [ 10, true, 'hello world', 100 ]
// value of m : 4


// remove last value in array 
let n=arr.pop()
console.log(arr)
console.log("value of n : "+m)
// [ 10, true, 'hello world' ]
// value of n : 4

// remove first value of array 
arr.shift()
console.log(arr)
// [ true, 'hello world' ]

// add a value at start of array 
arr.unshift(1000)
console.log(arr)
// [ 1000, true, 'hello world' ]

console.log(arr.indexOf(true)) //1

// sort array  (js sort alphabetically)
arr.sort()
console.log(arr)
// [ 1000, 'hello world', true ]

// reverse a array 
arr.reverse()
console.log(arr)
// [ true, 'hello world', 1000 ]

// delete a element in array we have to use indexOf and splice function for this 
arr.splice(arr.indexOf(true),1)
console.log(arr)
// [ 'hello world', 1000 ] true is removed

if(10==10){

}
else if(20==20){

}


// applying foreach loop for array in javascript 
arr=[10,20,30,40,50,60]

arr.forEach(i => {
      console.log(i)
});
// 10
// 20
// 30
// 40
// 50
// 60