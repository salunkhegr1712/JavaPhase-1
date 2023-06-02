// let us see here how the variables works inside the typescript 
// search for it on internet for better understanding 
// 3 main ways from which you can declare the variables 
// 1) var : can be accessed outside its declaration scope and can be reinitialised
// 2) let : can't be accessed outside its declaration scope and can be reinitialised
// 3) const : can't be accessed outside its declaration scope and can't be reinitialised
// basically what happens is the let and const keywords create keywords that have single scope 
// but the var keywords can have global or local both scope  
// so it is goood idea to use let and const keywords in order to create the variables 
// say for loop 
for (var i = 0; i < 4; i++) {
    i = i + 1;
}
console.log("value of  var i : " + i); //value of  var i : 4
// so we can access var with ease 
for (var j_1 = 0; j_1 < 4; j_1++) {
    j_1++;
    var s_1 = 11;
}
// console.log("value of let j is : "+j) // this will throw error 
// error TS2304: Cannot find name 's'.
// lets see for the const 
// console.log("value of const s is : "+s)
// error TS2304: Cannot find name 's'.
// for the const keywords you have to provide the value at time of declaration after that it is not possible 
var s = 10;
// ex :
// const z;
// s=10;
// 'const' declarations must be initialized.
// you can initialise single var keywords variables multiple time 
var i = 100;
var i = 111;
// but for let and const you cant do it that will throw error
// the let and const are  block scoped variables 
var j = 10;
// let j=111
