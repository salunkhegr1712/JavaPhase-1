// here in this file we are going to learn about the typescript class and how they work 
// lets create a class qudrangle and from this we will also declare the rectangle and square class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class heiarchy 
// Qudrangle
//     ||
//     ||
//     \/
// Rectangle
//     ||
//     ||
//     \/
//   Square
// default access specifier for class is public 
// a class name should start with capital letter  
var Qudrangle = /** @class */ (function () {
    // also create a constructor which take the side of Qudrangle
    // unlike cpp and python you have to use constructor keyword to create constructor 
    function Qudrangle(a, b, c, d) {
        console.log("qudrangle constructor called !");
        this.side1 = a;
        this.side2 = b;
        this.side3 = c;
        this.side4 = d;
    }
    // now lets declare functions inside the class 
    // perimeter function which has return type number 
    Qudrangle.prototype.perimeter = function () {
        return this.side1 + this.side2 + this.side3 + this.side4;
    };
    // function of void type and this will display length of Qudrangle
    Qudrangle.prototype.displayLength = function () {
        console.log("side1 is : " + this.side2);
        console.log("side2 is : " + this.side2);
        console.log("side3 is : " + this.side3);
        console.log("side4 is : " + this.side4);
    };
    return Qudrangle;
}());
// lets create child of class qudrangle like java it used extends keyword to create child class
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    // lets create constructor first and constructors for derived classes must contain a 'super' call.
    // also you can create new property directly inside the class
    // protected digonal?:number question tag is used as we are going to calculate it not going to take it from function
    function Rectangle(length, bredth, digonal) {
        var _this = this;
        console.log("rectangle constructor called");
        // pass value of side to parent that is Qudrangle
        // super keyword is must in constructor of child class 
        _this = _super.call(this, length, bredth, length, bredth) || this;
        _this.digonal = digonal;
        // lets calculate and assign value to the this.digonal 
        _this.digonal = Math.pow((Math.pow(length, 2) + Math.pow(bredth, 2)), (1 / 2));
        return _this;
    }
    // now overide the function 
    Rectangle.prototype.displayLength = function () {
        console.log("length is : ".concat(this.side1));
        console.log("bredth is : ".concat(this.side2));
        console.log("digonal is : ".concat(this.digonal));
    };
    // also create another function called area of return type number
    Rectangle.prototype.area = function () {
        return this.side1 * this.side2;
    };
    return Rectangle;
}(Qudrangle));
// lets create object of that class 
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    // lets create constructor first and constructors for derived classes must contain a 'super' call.
    function Square(side) {
        console.log("square constructor called");
        // pass value of side to parent that is Qudrangle
        // super keyword is must in constructor of child class 
        return _super.call(this, side, side) || this;
    }
    // now overide the function 
    Square.prototype.displayLength = function () {
        console.log("length is : ".concat(this.side1));
        console.log("digonal is : ".concat(this.digonal));
    };
    // also create another function called area of return type number
    Square.prototype.area = function () {
        return this.side1 * this.side1;
    };
    return Square;
}(Rectangle));
console.log("---------------------- Qudrangle class -------------------------");
var obj = new Qudrangle(10, 15, 2, 3); //object is created !
obj.displayLength();
// side1 is : 15
// side2 is : 15
// side3 is : 2
// side4 is : 3
console.log("perimeter of qudrangle is : ", obj.perimeter());
// perimeter of qudrangle is :  30
console.log("-------------------- rectangle class ---------------------------");
// lets see working of the rectangle class here 
var rect = new Rectangle(20, 15);
// rectangle constructor called
// qudrangle constructor called 
// working  rectangle constructor ----super()----> Qudrangle
// lets create square as the child class of Rectangle where length and bredth is same 
rect.displayLength();
// length is : 20
// bredth is : 15
// digonal is : 25
console.log("area is : ".concat(rect.area())); //area is : 300
console.log("perimeter is : ".concat(rect.perimeter())); //perimeter is : 70
console.log("-------------------- square class ---------------------------");
var sq = new Square(20);
// square constructor called
// rectangle constructor called
// qudrangle constructor called !
sq.displayLength();
// length is : 20
// digonal is : 28.284271247461902
console.log("area is : ", sq.area());
// area is :  80
console.log("perimeter is : ", sq.perimeter());
// perimeter is :  80
