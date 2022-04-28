// Basic Annotations

var num: number = 123;
function identity(num1: number): number {
    return num1;
}

// The above function will return out the number and will only accept the number parameters

var str: string;
var bool: boolean;

num = 123.456;
// num = '123'; // Error - Type 'string' is not assignable to type 'number'

str = '123';
// str = 123; // Error - Type 'number' is not assignable to type 'string'

bool = true;
bool = false;
// bool = 'false'; // Error - Type 'string' is not assignable to type 'boolean'


// Arrays
var boolArray: boolean[];   // It will only contain boolean array

boolArray = [true, false];
console.log(boolArray[0]);
console.log(boolArray.length);
boolArray[1] = true;
boolArray = [false, false];

// boolArray[0] = 'false'; // Error - Type 'string' is not assignable to type 'boolean'
// boolArray = 'false'; // Error - Type 'string' is not assignable to type 'boolean'
// boolArray = [true, 'false']; // Error - Type 'string' is not assignable to type 'boolean'


// Special Type
var power: any;

// Takes any and all types
power = '123';
console.log(typeof power + ` : ${power}`);
power = 123;
console.log(typeof power + ` : ${power}`);

// Is compatible with all types
power = num;
console.log(typeof power + ` : ${power}`);
num = power;
console.log(typeof num + ` : ${num}`);


// Generics
function reverse<T extends number>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

var sample = [1,2,3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// var sample = ["Aabid", "Aamir"]; // Error - Type String is not assignable to type number
// var reversed = reverse(sample);
// console.log(reversed);

// reversed[0] = '1';     // Error!
// reversed = ['1', '2']; // Error!

reversed[0] = 1;       // Okay
reversed = [1, 2];     // Okay


// Tuples

var nameNumber: [string, number];
nameNumber = ['Jenny', 8675309];
console.log(typeof nameNumber + ` : ${nameNumber}`);

// nameNumber = ['Jenny', '867-5309']; // Error - Type String is not assignable to type number
// console.log(typeof nameNumber + ` : ${nameNumber}`); 

