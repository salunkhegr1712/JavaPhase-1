// here we will learn about the different operators which we can see inside typescript 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// spread function is usefull to transfer data from one Array to another or one object to another 
// (...) triple dots are used for spread function 
// you can initialise and declare  values at once like below 
var a = ["brs", "sa", 1, 34, 13, true];
var b = [10, 2, 3, 1, 2, "steing"];
var d = 10;
// so lets create new array and extend above array
// ... is spread operator 
var c;
c = __spreadArray(__spreadArray(__spreadArray([], a, true), b, true), ["new val", "new val", "new val"], false);
// so lets see 
console.log(a); // [ 'brs', 'sa', 1, 34, 13, true ]
console.log(b); // [ 10, 2, 3, 1, 2, 'steing' ]
console.log(c); // ['brs','sa',1,34,13,true,10,2,3,1,2,'steing','new val','new val','new val']
// so c takes value from a and b using spread operator 
// lets use spread for object
var obj1 = {
    name: "grs",
    mis: 111903033
};
var obj2 = __assign(__assign({}, obj1), { branch: "comp", div: 1 });
// lets print obj1 and obj2
console.log(obj1);
// { name: 'grs', mis: 111903033 }
console.log(obj2);
// { name: 'grs', mis: 111903033, branch: 'comp', div: 1 }
// so : datatype after function is used to declare returntype of function
// a:number so parameter a is mandatory and should be of type number 
// b ?: a string parameter which is not mandatory
// c? is parameter which is not mandatory and also we have not specified the type of c
function abc(a, b, c) {
    // console.log(c)
    return a + 10;
}
abc(10); // here we not pass second argument still we not get error
abc(10, "str"); // passing non mandatory argument
// # backticks
// it is just like fstrings but here ${} is used instead of {}
var num = 199;
var str = "the num is ".concat(num);
console.log(str); //the num is 199 
// backticks are usefull in typescript and make messy code small and efficient 
// some issue is there with backticks as it stringify things inside it 
var kk = ["bts", 1, 2, 3, true];
console.log("the content inside kk is ".concat(kk));
// the content inside kk is bts,1,2,3,true
// # destructure 
var l = {
    name: "ghansham",
    clg: "COEP",
    edu: "graduate",
    mis: 111903033
};
// lets destructure and grab values from l 
var n = l.name, clg = l.clg, mis = l.mis;
console.log(n, clg, mis); //ghansham COEP 111903033
// such like that we can grab the values from the object using destructor
// lets apply it on array 
var arr = ["ghansham", "rajaram", "salunkhe"];
// lets use destructor to get values from arr 
var _a = [1, 2, 3], one = _a[0], two = _a[1], third = _a[2];
console.log(one, two, third);
// rest (...args)
// it is similar to arbitary positional argument inside the python 
// this is used to take infinite number of parameters as arguments 
// args is list unlike python that was tuple 
// you can use rest arguments only as last parameter inside a function 
// so here we are taking rest arguments of type number[] 
function maxAmongALl() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var max = args[0];
    for (var i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
    }
    return max;
}
// so this function taking any number of numbers as argument and provide max among them 
console.log("max among all numbers are : ".concat(maxAmongALl(10, 23, 4, 32234, 1, 213, 12, 1, 1, 3, 24, 23, 3243, 1, 3, 22, 24, 2, 4)));
// max among all numbers are : 32234
// lets create a arrow or fat function
// function will take number and find that is it even or odd 
// a void function
var fatfunction = function (a) {
    if (a % 2 === 0) {
        console.log("".concat(a, " is even"));
        return;
    }
    console.log("".concat(a, " is odd"));
};
fatfunction(10); //10 is even
// console.log("sadbjskf")
// lets declare a oneline arrow function
var mm = function (a) { return console.log("value entered is : " + a); };
mm(10000000);
