//* Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
{
  let a = "";
  let n = 5;
  while(n>0){
    a += "*"
    console.log(a)
    n--;
  }
}

//* Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 
{
  function sumUnder1000(num){
    let n = 1;
    let sum = 0;
    while(n<=num){
      if(n%3 == 0 || n%5 == 0){
        sum += n;
      }
      n++
    }
    console.log(sum)
  }
  sumUnder1000(1000)
  
}