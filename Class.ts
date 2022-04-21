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
