let num1 = +prompt(`Give me a number`)
let num2 = +prompt(`Guess the number`)
if(num2 == num1){
  alert(`correct`)
}
else if(num2 < num1){
  alert(`your number is too small`)
}
else if(num2 > num1){
  alert(`your number is too big`)
}
