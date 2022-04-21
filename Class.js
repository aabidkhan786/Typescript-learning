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
