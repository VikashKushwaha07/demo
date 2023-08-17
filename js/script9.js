for (let i = 0; i < 10; i++) {
  // task(i);
}

function task(i) {
  setTimeout(function () {
    console.log(i);
  }, 2000 * i);
}

var x = 2;
bool:
for (; ; x++) {
  console.log(x)
  break;
}


const a = ["vikash", "kumar", "theValue", 3, 6, 9, "kushwaha"]
label:
for (let i = 0; i < a.length; i++) {
  // if (a[i] === "theValue") {
  //   break;
  // }
  console.log(a[i])
  if(a[i] === "vikash"){
    for(char of a[i]){
      console.log(char)
      break label;
    }
  }
}

var i;
for (i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i)
  }
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
