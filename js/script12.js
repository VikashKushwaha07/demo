/*
const marks = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];
console.log(marks);
// console.log(marks.reverse())
console.log(marks)
marks.splice(3, 1, "newThree");
console.log(marks);


console.log(marks.splice(3, 1, "newNewThree"))
console.log(marks)

let newArr = marks.slice(3, 4)
console.log(newArr)

let a = 3;
console.log("type of 3 is", typeof a);

let b = "Scaler";
console.log("type of 'Scaler' is", typeof b);

let c = {name: "John", rollno: 23, isRegular: true};
console.log("type of c is", typeof c); 

let d = [1, 2, "hello", true];
console.log("type of d is", typeof d);
console.log(d.constructor())

let e = new Array("vikash", "kumar");
console.log(e.length);
console.log(e.__proto__);
console.clear();

let values = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]];
console.log(values[5][4]);
console.log(values.length);

console.log(e instanceof Array);
console.log(Array.isArray(e));

let obj = {
  name: "vikash",
  rollNo: "67",
  class: "B.Sc"
}
for(keys in obj){
  console.log(keys)
}

console.log(values.at(-1))
console.log(marks.at(-1))
console.log(marks[marks.length - 1]);
console.log(marks.at(-1) === marks[marks.length - 1]);
*/

{
  let arr = ['apple', "banana", "orange", "grapes"]
  // console.log(arr.at(-1))
  // console.log(arr)
  console.log(arr.push("guava"))
  console.log(arr.length)
  for (fruit in arr) {
    console.log(arr[fruit])
  }
}

{
  let fruits = ["Banana"]
  let arr = fruits; // copy by reference (two variables reference the same array)

  console.log(arr === fruits); // true

  fruits.push("Pear"); // modify the array by reference

  console.log(fruits); // Banana, Pear - 2 items now
  console.log(arr)

  let str = "banana";
  let n = 79;
  for (char in str) {
    console.log(n, char)
    // n++;
  }
  let str2 = str;
  console.log(str === str2)

  str = "orange";
  console.log(str)
  console.log(str2)

  let fruits2 = []; // make an array
  fruits2[99999] = 5; // assign a property with the index far greater than its length
  fruits2.age = 25; // create a property with an arbitrary name
  console.log(fruits2)


}

{
  console.log("This is from line no 100")
  let fruits = [];
  fruits[123] = "Apple";
  console.log(fruits.length); // 124

  let arr = [1, 2, 3, 4, 5];
  arr.length = 2; // truncate to 2 elements
  console.log(arr); // [1, 2]
  arr.length = 5; // return length back
  console.log(arr.length)
  console.log(arr[3]); // undefined: the values do not return
  arr.length = 0;
  console.log(arr)

  console.log(true + true)
  console.log([1, true] + true)
}

{
  let arr = ["vikash"]
  let arr2 = "vikash"
  console.log(arr == arr2)

  let obj = {
    name: "vikash",
    lastName: "kumar",
  }
  console.log(String(obj) === "[object Object]")

  console.log(null == undefined)
  console.log(null === undefined)

  console.log("After line no 132")
  console.log(String([]))
  console.log(String([]) == 0)
  console.log([] == 0)
  console.log([] == "0")

  console.log(Number([]))
}

{
  console.log("After line no 142")
  let fruits = ["Apples", "Pear", "Orange"];

  // push a new value into the "copy"
  let shoppingCart = fruits;
  shoppingCart.push("Banana");

  // what's in fruits?
  console.log(fruits.length); // ? = 4
}

{
  let arr = ["Jazz", "Blues"];
  // arr = ["Apple", "Banana", "Guava", "Litchi"]
  console.log(arr);
  arr.push("Rock-n-Roll");
  console.log(arr);
  let index = Math.floor(arr.length / 2);
  arr[index] = "Classic";
  console.log(arr);
  arr.shift()
  console.log(arr)
  arr.unshift("Rap", "Reggae")
  console.log(arr)
}

{
  let arr = ["a", "b"];

  arr.push(function () {
    console.log(this);
  });

  // arr[2](); // ?
  console.log(arr)
}
