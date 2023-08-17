function sumInput(){
  let arr = [];
  let sum = 0;
  while(true){
    let input = prompt("Enter numeric value : ")
    if(/[0-9]+/g.test(input)){
      arr.push(input)
    }else{
      break;
    }
  }
  for(elem of arr){
    sum += +elem;
  }
  return sum;
}
console.log(sumInput());