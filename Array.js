// Declaring Array in Typescript of String Types
var names = [];
names.push("Benjamin");
names.push("Susan M. Gorman");
names.push("Stephanie L. McVicker");
console.log(names);
// Readonly keyword prevent array from being changed
var name_stack1 = ["Jesus P. Dutra", "Camille V. Miles", "Bill J. Newton", "Annette A. White"];
//trying to add name in the array
// name_stack1.push("Lisa D. Hanson")
//The push method above will create an error as we use readonly method, so we can't push a string into it.
console.log(name_stack1);
//Declaring Array in Typescript of Number Types
var ids = [1, 2, 3, 4, 5];
console.log(ids);
// But if i try to add a string value into the ids array then:
// ids.push("Peter Decker")
// It will generate an error : Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(ids);
// Similarly we have the boolean type array
var options = [true, true, false, true, false];
console.log(options);
// Array of object types would be like: 
var books = [
    { name: "JavaScript: The Good Parts", author: "Douglas Crockford" },
    { name: "Effective JavaScript: 68 Specific Ways to Harness the Power of Javascript", author: "David Herman" }
];
console.log(books);
// And now we have the array of any types
var arrStack = ["Peter Decker", 5025745514, true];
arrStack.push("PeterDecker@teleworm.us");
console.log(arrStack);
