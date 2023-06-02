// there are 5 primitive datatypes are there inside the ts 
// number
// string 
// boolean
// null
// undefined
// lets learn more about them 
// to initialise a variable of a perticular type we use colon for initialisation 
// create a variable of boolean type 
var a;
var b;
var c;
var d;
var e;
// so now you cant able to assign a specific type variable to value of another datatype and 
// if you do it that will throw error 
a = true;
a = false;
// in typescript you cant change type of variable after assigning 
// a=10 Type 'number' is not assignable to type 'boolean'.
var z = 10;
// z=true Type 'boolean' is not assignable to type 'number'. 
a = false;
b = 111;
c = "dsdsd";
// a=null //Type 'null' is not assignable to type 'boolean'.
// b=undefined //Type 'undefined' is not assignable to type 'number'.
// for null and undefined you also cant change there values to another datatype
// a null variable should stay null and a undefined variable should stay undefined 
// for number you can assign any type of number to it 
b = 10;
b = -1000;
b = 10.281;
b = -191.213;
b = 21; //binary
b = 10002; //octal
b = 0x342; //hexadecimal
console.log(b); //output will be decimal value
// lets create a variable of multiple type 
var g;
// so g can get value of number boolean and string 
g = true;
g = 11999;
g = "sbfsdjfdsf";
// so if you dont know which variable to use at such cases you can use | operator to create
// variable of multiple type support 
c = "hello";
console.log(c);
// now we will go further and learn about the reference type and special type 
// 1) void 
// 2) Array
// 3) tuple
// the void keyword is used to create a function which has no return value 
function hell() {
    console.log("a void function");
}
hell();
// Array : lets see how arrays declared inside the typescript
//  a non initialised string 
var aa = [10, 2, 2, 3, "string"];
// initialising a number array 
var zz;
zz = [1, 3, 44, 2, 2, 2, 3, 2, "srdsds"];
// also there exist another way 
var yy;
yy = [12, true, false, 10.4, 0x833];
console.log(yy);
// [ 12, true, false, 10.4, 2099 ]
// lets create a number array 
var nn;
var nnn;
nn = [19, 23, 11, 2, 1, 21];
nnn = [19, 23, 11, 2, 1, 21];
console.log(nn + "\n " + nnn);
// 19,23,11,2,1,21 
// 19,23,11,2,1,21
// lets create array of string 
var ss;
var sss;
ss = ["ee", 'ee', "dsdf"]; //you can use single quotes double quotes or backticks to create the string 
sss = ["ssfdfs", "fdsf", 'ddsf'];
console.log(ss + "\n" + sss);
// ee,ee,dsdf
// ssfdfs,fdsf,ddsf
// lets create hybrid array 
var h;
h = [1, null, "sds", undefined, false];
console.log(h);
// [ 1, null, 'sds', undefined, false ]
// tuple 
var m;
// while assigning value to tuple you should fill all values else throw error
m = [1, true, "std", null];
// multi datatype typle 
var k;
k = ["str", undefined];
k = [true, null];
k = [11, null];
// such like that you can define tuple
// lets create object 
var obj = {
    // object properties 
    name: "grs",
    mis: 111903033,
    // declaring function inside the object 
    func: function (name, mis) {
        this.name = name;
        this.mis = mis;
    },
    display: function () {
        console.log("value of name : " + this.name);
        console.log("value of mis : " + this.mis);
    }
};
// lets see object in action 
obj.display();
// value of name : grs
// value of mis : 111903033
obj.func("ghansham", 111903033);
obj.display();
// value of name : ghansham
// value of mis : 111903033
// lets create enum 
// enum is used for using some set of values 
var MathConstants;
(function (MathConstants) {
    MathConstants[MathConstants["pi"] = 2.14] = "pi";
    MathConstants[MathConstants["e"] = 2.718] = "e";
    MathConstants[MathConstants["wenesday"] = 2] = "wenesday";
})(MathConstants || (MathConstants = {}));
// and we can create varible of that type 
var aaa;
aaa = MathConstants.pi;
console.log(aaa); //2.14 
// at above cases where we need some value we can use enum 
// # any keyword
var grs;
grs = "asads";
grs = true;
grs = null;
grs = [1, 3, 4, 21];
grs = ["sdsa", "sadd", null];
