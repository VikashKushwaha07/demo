//* make a simple calculator using switch statement
let num1 = parseInt(prompt("Enter your first num : "));
let operator = prompt("Enter operator (+, -, *, and /)");
let num2 = parseInt(prompt("Enter your second num : "));

// console.log(operator)
let result;

switch(operator){
  case "+":
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;
  case "-":
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    break;
  case "*":
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
    break;
  case "/":
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
    break;
  default:
    console.log("Please enter a valid operator")
}
