// module.exports = function uniqueCharacters(str) {
//   const array = str.split();

// const uniqueArray = for (i = 0; i < array.length; i++) {
//     return i === 1;
//   }
// };
// console.log(letter);
// console.log(letter);

module.exports = function uniqueCharacters(str) {
  const characterObject = str.split("").reduce((allLetters, letter) => {
    if (letter in allLetters) {
      allLetters[letter]++;
    } else {
      allLetters[letter] = 1;
    }
    return allLetters;
  }, {});

  let answer = "undefined";
  Object.entries(characterObject).forEach(([key, value]) => {
    if (value === 1) {
      answer = key;
    }
  });
  return answer;
  // .filter(letter => letter.length == 1);
  // console.log(answer);
  // console.log(characterObject)
};
// // console.log(letter);
