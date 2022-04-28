// Object declaration
let personDetails: {
    full_name: string,
    phone_number: number,
    email: string,
    isProgrammer: boolean
}

personDetails = {
    full_name: 'Ayyub Ruwaid Nader',
    phone_number: 88827121,
    email: "AyyubRuwaidNader@armyspy.com",
    isProgrammer: true
}

console.log(personDetails);

// Interfacing the Objects
interface PersonDetails {
    full_name: string;
    phone_number: number;
    email: string;
    isProgrammer: boolean;
    sayHi: (name: string) => string;
}

let Ayyub: PersonDetails = {
    full_name: 'Ayyub Ruwaid Nader',
    phone_number: 88827121,
    email: "AyyubRuwaidNader@armyspy.com",
    isProgrammer: true,
    sayHi: (name: string) => `Hello, Mr. ${name}`
}

console.log(Ayyub.sayHi(Ayyub.full_name));

let Long_Shih: PersonDetails = {
    full_name: 'Long Shih',
    phone_number: 6077344686,
    email: "LongShih@armyspy.com",
    isProgrammer: true,
    sayHi: (name: string) => `Hello, Mr. ${name}`
}

console.log(Long_Shih);
