console.log("from worker.js");
// worker.js
function findPrimes(start, end) {
  const primes = [];
  for (let number = start; number <= end; number++) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }
  return primes;
}

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

onmessage = function (event) {
  const start = event.data.start;
  const end = event.data.end;
  const primes = findPrimes(start, end);
  postMessage(primes);
};
