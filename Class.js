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
// Declaring Class in TypeScript
var Person_Detail = /** @class */ (function () {
    function Person_Detail(a, b, c, d) {
        this.full_name = a;
        this.email = b;
        this.phone = c;
        this.isProgrammer = d;
    }
    //Method Initilisation in Class
    Person_Detail.prototype.greeting = function () {
        console.log("Full Name: ".concat(this.full_name, "\nEmail: ").concat(this.email, "\nPhone No: ").concat(this.phone, "\nA Programmer ? : ").concat(this.isProgrammer));
    };
    return Person_Detail;
}());
var Jadranka = new Person_Detail("Jadranka Filipović", "JadrankaFilipovic@dayrep.com", 8185928645, true);
Jadranka.greeting();
//Class to perform operation on two object of the same classes
var Coordinates = /** @class */ (function () {
    function Coordinates(a, b) {
        this.x = a;
        this.y = b;
    }
    Coordinates.prototype.add = function (point) {
        return new Coordinates(this.x + point.x, this.y + point.y);
    };
    return Coordinates;
}());
var p1 = new Coordinates(10, 15);
var p2 = new Coordinates(20, 56);
var p3 = p1.add(p2);
console.log(p3);
// Extend Class Performance
var Coordinate3D = /** @class */ (function (_super) {
    __extends(Coordinate3D, _super);
    function Coordinate3D(a, b, c) {
        var _this = _super.call(this, a, b) || this;
        _this.z = c;
        return _this;
    }
    Coordinate3D.prototype.add = function (point) {
        var point2D = _super.prototype.add.call(this, point);
        return new Coordinate3D(point2D.x, point2D.y, this.z + point.z);
    };
    return Coordinate3D;
}(Coordinates));
var z1 = new Coordinate3D(10, 20, 30);
var z2 = new Coordinate3D(20, 30, 40);
var z3 = z1.add(z2);
console.log(z3);
// Static Property of the class
var counter = /** @class */ (function () {
    function counter() {
        counter.instances++;
    }
    counter.instances = 0;
    return counter;
}());
var s1 = new counter();
var s2 = new counter();
console.log(counter.instances);
//Adding Array in class and accessing them as an object
var Foo = /** @class */ (function () {
    function Foo() {
        this.members = []; // Initialize directly
    }
    Foo.prototype.add = function (x) {
        this.members.push(x);
    };
    return Foo;
}());
var addFoo = new Foo();
addFoo.add("Jadranka");
addFoo.add("Mariam Gray");
addFoo.add("Rachel Newbold");
console.log(addFoo.members);
