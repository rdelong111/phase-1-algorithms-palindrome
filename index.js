function isPalindrome(word) {
  // return word === word.split('').reverse().join('');

  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 
  return condition(word equals to word((split into array)(reverse the array)(join array in a string))

  SECOND SOLUTION:
  Set constant to length of word called len.

  iterate over half the length of the word
    if a letter in word does not equal to another letter in word
      return false

  return true
*/

/*
  I took the string input and then split the string into an array by each letter.
  The array is then reversed.
  The array is then joined back into a string.
  I returned a condition that compared the original string with the reversed.

  SECOND SOLUTION;
  I first set the length of word to a constant to help with clean code later.
  A for loop that iterates through half the length of word is set.
  Inside the for loop, an if statement checks if a letter does not equal to the other letter at the opposite end of the word. 
  If the IF statement is true, then it returns false.
  If the for loop runs through all the way, then the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("aabbbccccddddccccbbbaa"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("asdsakdgjfmrbmrjhskdfh"));
}

module.exports = isPalindrome;
