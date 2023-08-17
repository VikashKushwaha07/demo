const img = document.querySelector("img");
// console.log(img);

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async operation completed!");
      resolve();
    }, 1000);
  });
}

function callbackFunction() {
  console.log("Microtask executed!");
}

async function main() {
  console.log("Starting the async operation...");
  await doSomethingAsync();
  console.log("After async operation...");

  queueMicrotask(callbackFunction);

  console.log("End of the main function...");
}

main();
