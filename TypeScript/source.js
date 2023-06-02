"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.math = exports.printValue = exports.Square = exports.Rectangle = exports.Qudrangle = void 0;
// lets declare some function here and some class
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
exports.Qudrangle = Qudrangle;
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
exports.Rectangle = Rectangle;
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
exports.Square = Square;
// lets create a function 
// this function will print Element from 0 to n 
function printValue(n) {
    for (var i = 0; i <= n; i++) {
        console.log("".concat(i, "th value : ").concat(i));
    }
}
exports.printValue = printValue;
// a math object which has some constant stored 
exports.math = {
    pi: 3.14,
    e: 2.714,
};
