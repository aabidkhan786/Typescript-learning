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
