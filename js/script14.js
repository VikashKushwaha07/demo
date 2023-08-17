//* "pizza", "ice cream", "salad"
let arr = Array.of("pizza", "ice cream", "salad")
console.log(Array.isArray(arr));
console.log(arr["v"])

const values = [];
for (let x = 0; x < 10; x++) {
  values.push([
    2 ** x,
    2 * x ** 2,
  ]);
}
console.log(values);
console.table(values);

let arr2 = new Array(2);
console.log(arr2[0])
