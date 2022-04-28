// Object initilization and Destructring
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

// function displaySummary(student) {
//     console.log('Hello, ' + student.name);
//     console.log('Your Maths score is ' + (student.scores.maths || 0));
//     console.log('Your English score is ' + (student.scores.english || 0));
//     console.log('Your Science score is ' + (student.scores.science || 0));
// }

// function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }) {
//     console.log('Hello, ' + name);
//     console.log('Your Maths score is ' + maths);
//     console.log('Your English score is ' + english);
//     console.log('Your Science score is ' + science);
// }

// displaySummary(student);

// Class 
// class StudentsData {
//     full_name: string;
//     age: number
//     scores: {
//         maths: number;
//         science: number;
//     }

//     constructor(a: string, b: number, c: number, d: number) {
//         this.full_name = a;
//         this.age = b;
//         this.scores.maths = c;
//         this.scores.science = d;
//     }

//     displayResults = () => {
//         console.log("Hello, " + this.full_name);
//         console.log("You have scored, In Maths: " + this.scores.maths);
//         console.log("In Science: " + this.scores.science);
//     }
// }

// const Ruby = new StudentsData("Ruby Walker", 25, 89, 95)
// Ruby.displayResults()