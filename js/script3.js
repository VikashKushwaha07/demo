let str = "vikash kumar";
let str2 = "kushwaha";
let index = -1;
console.log("This is from at(): " + str.at(index))
console.log("This is from CharAt(): " + str.charAt(index));
console.log("This is from CharCodeAt(): " + str.charCodeAt(index));
console.log("This is from concat(): " + str.concat(" ", str2));
console.log("This is from concat(): " + "".concat(true));
let obj = "".concat({});
let arr = "arr".concat([]);
console.log(obj, arr)
str = "The quick brown fox jumps over the lazy dog";
console.log(str, str.includes("i", 1809));

