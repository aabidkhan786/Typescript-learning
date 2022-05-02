// Using typeof
var button = document.querySelector('.button');
var firstInput = document.querySelector('#first-input');
var secondInput = document.querySelector('#second-input');
var screen = document.querySelector('.screen');
function addNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        screen.innerHTML = a + b;
    }
    else
        screen.innerHTML = parseInt(a) + parseInt(b);
}
button.addEventListener('click', function () { return addNumbers(firstInput.value, secondInput.value); });
