//? Sample numbers : -5, -2, -6, 0, -1
//? Output : 0
let a = -5;
let b = -2;
let c = -6;
let d = 0;
let e = -1;
if(a > b && a > c && a > d && a > e) 
  console.log(a)
else if(b > a && b > c && b > d && d > e)
  console.log(b)
else if(c > a && c > b && c > d && c > e)
  console.log(c)
else if(d > a && d > b && d > c && d > e)
  console.log(d)
else
  console.log(e)


  //* Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
  {
    for(var i = 0; i<=15; i++){
      // console.log(i)
      if(i%2 == 0) console.log(`${i} is even`);
      else console.log(`${i} is odd`)
    }
  }

  // *  Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade
  {
    let marks = {
      David: 80,
      Vinoth: 77,
      Divya: 88,
      Ishitha: 95,
      Thomas: 68,
    }
    let grad = {}
    for(student in marks){
      console.log(marks[student])
      if(marks[student] < 60){
        console.log(`Grad of ${student}: F`)
        grad[student] = "F"
      }else if(marks[student] < 70){
        console.log(`Grad of ${student}: D`)
        grad[student] = "D"
      }else if(marks[student] < 80){
        console.log(`Grad of ${student}: C`)
        grad[student] = "C"
      }else if(marks[student] < 90){
        console.log(`Grad of ${student}: B`)
        grad[student] = "B"
      }else if(marks[student] < 100){
        console.log(`Grad of ${student}: A`)
        grad[student] = "A"
      }
    }
    console.table(grad)
  }
console.clear()
  // * Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
  {
    for(var i = 1; i<=100; i++){
      // console.log(i)
      if(i%3 == 0 && i%5 == 0){
        console.log(i + " Fizz")
      }else if(i%3 == 0){
        console.log(i + " Buzz")
      }else if(i%5 == 0){
        console.log(i + ' FizzBuzz')
      }else{
        console.log(i)
      }
    }
  }
console.clear();
  // * Write a JavaScript program to find the armstrong numbers of 3 digits.
  // Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
  {
    function checkArmNum(num) {
      // * first way to check an Armstrong number
	  
      let newNum = 0;
      for(char of String(num)){
        newNum += char**String(num).length;
      }
      if(newNum == num){
        console.log("The given num " + num + " is an Armstrong number")
      }else{
        console.log("The given num " + num + " is not an Armstrong number")
      }
	  

      //* Second way to check an Armstrong number
      // let sum = 0;
      // let temp = num;
      // while(temp > 0){
      //   let reminder = temp%10;
      //   sum += reminder * reminder * reminder;
      //   temp = parseInt(temp/10);
      // }
      // if(sum == num){
      //   console.log(`Number ${num} is an Armstrong number`)
      // }else{
      //   console.log(`Number ${num} is an not Armstrong number`)
      // }


    }
    checkArmNum(1634);
  }

  // * According to Wikipedia a happy number is defined by the following process :
  // "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
  // Write a JavaScript program to find and print the first 5 happy numbers.
  {
    function happyNum(num){

    }
    happyNum(49);
  }
  //! Remain to do this work
