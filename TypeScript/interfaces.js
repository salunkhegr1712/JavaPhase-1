// so here we are going to create the object and class from the interfaces 
// the interface part is not seen in javascript so it is not compiled by tsc 
// now create a object from interface
// it throws error for object so we leave it 
// let a=Rect{}
// let create class
// to get interface as parent we have to use implements keyword 
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.area = function () {
        return this.length * this.bredth;
    };
    Rectangle.prototype.perimeter = function () {
        return (this.length + this.bredth) * 2;
    };
    return Rectangle;
}());
var x = new Rectangle();
x.length = 100;
x.bredth = 50;
console.log(x.area()); //5000
console.log(x.perimeter()); //300
// thus you can implements class over interface and such like that you can use interface
