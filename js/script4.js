//todo https://justacoding.blog/javascript-exercises-for-beginners-part-1-strings/#:~:text=%20The%20JavaScript%20exercises%20%201%20Reverse%20that,find%20the%20most%20commonly%20occurring%20character.%0AIf...%20More%20

let styles = `padding: 5px 10px; color: #fff; font-size: .9rem; border: 1px solid #fff; font-style: italic; font-family: 'fira code'`

{
  let str = "I am a string";
  let count = str.length - 1;
  let temp = '';
  while (count >= 0) {
    temp += str[count];
    count--;
  }
  // console.log(`%c${temp}`, styles);
}

{
  const reverseString = (someString) => {
    let reverseString = '';
    let count = someString.length - 1;
    for (item of someString) {
      reverseString += someString[count]
      count--;
    }
    return reverseString;
  }
  // console.log(`%c${reverseString("I am a string")}`, styles);
}

{
  //* 2. Check two string are palindrome or not
  function isPalindrome(someString) {
    let count = someString.length - 1;
    let reverseString = '';
    while (count >= 0) {
      reverseString += someString[count]
      count--;
    }
    if (someString === reverseString) {
      console.log(`%cstring "${someString}" is palindrome because ("someString === reverseString" : ${someString} === ${reverseString})`, styles);
    } else {
      console.log(`%cstring "${someString}" is not palindrome because ("someString !== reverseString" : ${someString} !== ${reverseString})`, styles);
    }
  }
  // isPalindrome(`madam`);
  // isPalindrome('racecar');
  // isPalindrome('vikash');
}

{
  //* 3. Remove specific characters from a string
  function removeCharacter(someString, charactersToRemove) {
    console.log(`%c${someString.split(charactersToRemove[0]).join('').split(charactersToRemove[1]).join('')}`, styles)
  }
  // removeCharacter("I am an example string", ["a", "x"])
}

{
  //* 4. Find the most common character within the string
  function mostCommonChar(str) {
    let count = 0;
    let char = '';
    str.split('').sort().forEach(element => {
      // console.log(str.split(element).length)
      if (str.split(element).length > count) {
        count = str.split(element).length;
        char = element;
      }
    });
    return `The most common character within the string is "${char}" and it's occur "${count - 1}" times.`;
  }
  // console.log(`%c${mostCommonChar("vikash kumar")}`, styles);
  // todo "find all characters how many occurs in string"
}

{
  //* 5. Find the repeating characters
  const findDuplicates = (str, repeatTimes) => {
    return str.split('').forEach(element =>{
      console.log(element.length)
    })
  }
  // findDuplicates("abcddef", 2);
  // console.log(findDuplicates("abcddef", 2)) // [d]
  // console.log(findDuplicates("tfghhhplffzaaa", 3)) // [h, a]
}

{
  //* 6. Is the nth letter a vowel or a consonant?
  const vowelOrConsonant = (str, position) => {
    if(str[position-1] == 'a' || str[position-1] === 'e' || str[position-1] === 'i' || str[position-1] === 'o' || str[position-1] === 'u'){
      console.log(`%c${position}th position of string "${str}" "${str[position-1]}" is a vowel.`, styles)
    }else if(position > str.length){
      console.log(`%cgiven position value is greater than the length of given string`, styles)
    }else if(position <= 0){
      console.log(`%cgiven position value is less than 0`, styles)
    }
    else{
      console.log(`%c${position}th position of string "${str}" "${str[position-1]}" is a consonant.`, styles)
    }
  }
  // vowelOrConsonant("vikash", 4);
  // vowelOrConsonant("hello", 4);
  // vowelOrConsonant("cat", 5);
}

{
  //* 7. Sort the string alphabetically
  const sortString = (str, order) => {
    let sortedString = '';
    sortedString = str.split('').sort((a, b)=>{
      // console.log(`a : ${a} and b : ${b}`);
      // console.log(a.localeCompare('b'))
      b.localeCompare(a)
    }).join('')
    return sortedString;
  }
  // sortString('vikash', true);
  console.log(sortString('vikash', false));
  console.log('a'.localeCompare('b'))
}



