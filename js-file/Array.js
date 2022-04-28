"use strict";
// Declaring Array in Typescript of String Types
const names = [];
names.push("Benjamin");
names.push("Susan M. Gorman");
names.push("Stephanie L. McVicker");
console.log(names);
// Readonly keyword prevent array from being changed
const name_stack1 = ["Jesus P. Dutra", "Camille V. Miles", "Bill J. Newton", "Annette A. White"];
//trying to add name in the array
// name_stack1.push("Lisa D. Hanson")
//The push method above will create an error as we use readonly method, so we can't push a string into it.
console.log(name_stack1);
//Declaring Array in Typescript of Number Types
let ids = [1, 2, 3, 4, 5];
console.log(ids);
// But if i try to add a string value into the ids array then:
// ids.push("Peter Decker")
// It will generate an error : Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(ids);
// Similarly we have the boolean type array
let options = [true, true, false, true, false];
console.log(options);
// Array of object types would be like: 
let books = [
    { name: "JavaScript: The Good Parts", author: "Douglas Crockford" },
    { name: "Effective JavaScript: 68 Specific Ways to Harness the Power of Javascript", author: "David Herman" }
];
console.log(books);
// And now we have the array of any types
let arrStack = ["Peter Decker", 5025745514, true];
arrStack.push("PeterDecker@teleworm.us");
console.log(arrStack);
// Union type : It's also used to store data of multiple types.
let person_Details = ["Ayyub Ruwaid Nader", 288827121, "49 years old", true];
for (let i = 0; i < person_Details.length; i++) {
    console.log(person_Details[i]);
}
//Tuples : It's similar to the Union but different in rules. A tuple is an array with fixed size and known datatypes. They are stricter than regular arrays.
let personStack = ["Ayyub Ruwaid Nader", "49 years old", 288827121, "AyyubRuwaidNader@armyspy.com", true];
console.log(personStack);
// personStack[0] = 35;
// It will error out Type 'number' is not assignable to type 'string'.
// console.log(personStack);
// For...in to print out the index of array
var someArray = [9, 2, 5];
for (let item1 in someArray) {
    console.log(item1); // 0,1,2
}
// For...of to print the value of index
var some_Array = [9, 2, 5];
for (var item of someArray) {
    console.log(item); // 9,2,5
}
