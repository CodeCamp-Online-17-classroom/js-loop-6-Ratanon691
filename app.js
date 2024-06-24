let num1
do {
  num1 = +prompt(`Give me a number between 0-100`)
  if (num1 < 0 || num1 > 100) {
    alert(`Please input a number between 0-100`)
  }
} while (num1 < 0 || num1 > 100);

let num2 = +prompt(`Guess the number between 0-100`)
if (num2 === num1) {
  alert(`Correct`)
} else if (num2 < num1) {
  alert(`Your number is too small`)
} else if (num2 > num1) {
  alert(`Your number is too big`)
}
