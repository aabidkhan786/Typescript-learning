// Object initilization and Destructring
var student = {
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
function displaySummary(_a) {
    var name = _a.name, _b = _a.scores, _c = _b.maths, maths = _c === void 0 ? 0 : _c, _d = _b.english, english = _d === void 0 ? 0 : _d, _e = _b.science, science = _e === void 0 ? 0 : _e;
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}
displaySummary(student);
// Class 
var StudentsData = /** @class */ (function () {
    function StudentsData(a, b, c, d) {
        var _this = this;
        this.displayResults = function () {
            console.log("Hello, " + _this.full_name);
            console.log("You have scored, In Maths: " + _this.scores.maths);
            console.log("In Science: " + _this.scores.science);
        };
        this.full_name = a;
        this.age = b;
        this.scores.maths = c;
        this.scores.science = d;
    }
    return StudentsData;
}());
var Ruby = new StudentsData("Ruby Walker", 25, 89, 95);
Ruby.displayResults();
