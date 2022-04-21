// Declaring Class in TypeScript
class Person_Detail {
    full_name: string;
    email: string;
    phone: number;
    isProgrammer: boolean;

    constructor(a: string, b: string, c: number, d: boolean) {
        this.full_name = a;
        this.email = b;
        this.phone = c;
        this.isProgrammer = d;
    }

    //Method Initilisation in Class
    greeting() {
        console.log(`Full Name: ${this.full_name}\nEmail: ${this.email}\nPhone No: ${this.phone}\nA Programmer ? : ${this.isProgrammer}`);
    }
}

const Jadranka = new Person_Detail("Jadranka Filipović", "JadrankaFilipovic@dayrep.com", 8185928645, true)

Jadranka.greeting()

//Class to perform operation on two object of the same classes
class Coordinates {
    x: number;
    y: number;

    constructor(a: number, b: number) {
        this.x = a;
        this.y = b;
    }

    add(point: Coordinates) {
        return new Coordinates(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Coordinates(10, 15);
var p2 = new Coordinates(20, 56);
var p3 = p1.add(p2);

console.log(p3);

