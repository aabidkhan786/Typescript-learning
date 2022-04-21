// Type Aliases allow defining types with a custom name (an Alias).
type FullName = string
type EmailId = string
type PhoneNo = number
type SayHi = (name: string) => string

type Person = {
    full_name: FullName,
    emailId: EmailId,
    phoneNo: PhoneNo,
    sayHi: SayHi
}

const Christoffer: Person = {
    full_name: "Christoffer N. Nielsen",
    emailId: "ChristofferNNielsen@jourrapide.com",
    phoneNo: 9085923850,
    sayHi: (name: string) => `Hello, Mr. ${name}`
}

console.log(Christoffer.sayHi(Christoffer.full_name));
