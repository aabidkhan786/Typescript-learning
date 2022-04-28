// Exporting a Module
export let age = 20;
export class Employee {
    constructor(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee() {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    }
}
