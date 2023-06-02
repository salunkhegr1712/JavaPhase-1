import { Rectangle,printValue,math } from "./source";
// so here we had name collision but we used alias using as keyword 
import { Rectangle as rect } from "./classes";

// lets see how can we use alias
// now lets use
printValue(10)
// 0th value : 0
// 1th value : 1
// 2th value : 2
// 3th value : 3
// 4th value : 4
// 5th value : 5
// 6th value : 6
// 7th value : 7
// 8th value : 8
// 9th value : 9
// 10th value : 10


// lets print variable from MathMLElement

console.log("value of pi : "+math.pi)
console.log("value of e : "+math.e)