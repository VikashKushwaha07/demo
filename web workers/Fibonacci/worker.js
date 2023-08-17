const getNum = (nthNum) => {
  if (!nthNum) return;
  let firstNum = 0;
  let secondNum = 1;
  while (nthNum >= 2) {
    let sum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sum;
    nthNum--;
  }
  return secondNum;
};

onmessage = (event) => {
  console.log(event);
  const n = event.data.nthNum;
  const result = getNum(n);
  postMessage({ n, result });
};
