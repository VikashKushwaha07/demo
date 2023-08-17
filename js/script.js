let style = `padding: 5px; font-size: 1.4rem; color: green; font-style: italic;`
let style2 = `background-color: red;`

console.time('timeTaken')
var x = 3;
var y = x++;
y = x;
console.log(x, y);
console.log(y);
console.log('%cVikash Kumar', style)

// console.table()
let arr = [1, 4, 6, "vikash", true, null, undefined]
console.table(arr)
let obj = {
  name: "vikash",
  class: "XII",
  "roll no": 68,
  college: "Raja singh college, Siwan",
}
console.table(obj)
console.dir(obj)

let a = "akash", b = "7 September", c = "vikash";
console.log(a)

console.timeEnd('timeTaken')