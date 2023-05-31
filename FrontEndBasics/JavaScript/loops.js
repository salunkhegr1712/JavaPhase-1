// loop through Array
arr=[10,20,30,40,50,60]

// with foreach 
arr.forEach(i => {
      console.log(i)
});
// 10
// 20
// 30
// 40
// 50
// 60

// or 
// for each loop 
// the i in loop will gives property name in case of object and gives index in case of array 
for(var i in arr){
      console.log(arr[i]);
}
// 10
// 20
// 30
// 40
// 50
// 60

// with help of for looop 
for(var i=0;i<arr.length;i++){
      // console.log(arr[i]);
}
// 10
// 20
// 30
// 40
// 50
// 60

// with while loop 
var k=0;
while(k<arr.length){
      // console.log(arr[k]);
      k++;
}
// 10
// 20
// 30
// 40
// 50
// 60

// you can iterate throught the object with loop 

obj={
      name:"grs",
      mis:111903033,
      branch:"comp",
      div:1
}

// using for loop on Object
// the i in loop will gives property name in case of object and gives index in case of array 
for(var i in obj){
      console.log(obj[i]);
}
// grs
// 111903033
// comp
// 1
