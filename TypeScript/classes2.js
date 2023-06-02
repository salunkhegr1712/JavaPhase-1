// so we are using smaller notations here 
var Employee = /** @class */ (function () {
    // here you just have pass parameters and else will handled easily 
    function Employee(name, age, gender, contact) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.contact = contact;
    }
    Object.defineProperty(Employee.prototype, "getname", {
        // also declare some get and set property 
        // this are some function which we can use to fetch private value from class
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "contactNo", {
        get: function () {
            return this.contact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "nameSet", {
        // set function 
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "numberSet", {
        set: function (no) {
            this.contact = no;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.displayDetails = function () {
        console.log("name is : ".concat(this.name, " \nage is : ").concat(this.age, "\ngender : ").concat(this.gender, "\nContact : ").concat(this.contact));
    };
    return Employee;
}());
// lets create object 
var m = new Employee("ghansham salunkhe", 21, "male", 8624969401);
m.displayDetails();
// name is : ghansham salunkhe 
// age is : 21
// gender : male
// Contact : 8624969401
// lets get and set value 
console.log(m.getname);
// ghansham salunkhe
console.log(m.contactNo);
// 8624969401
// lets use set 
console.log(m.nameSet);
