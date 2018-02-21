module.exports = function uniqueCharacters(str) {
  const characterObject = str.split("").reduce((allLetters, letter) => {
    if (letter in allLetters) {
      allLetters[letter]++;
    } else {
      allLetters[letter] = 1;
    }
    return allLetters;
  }, {});

  let answer = Object.entries(characterObject);

  const uniqueAnswer = answer.find(characterObject =>
    characterObject.includes(1)
  );
  return uniqueAnswer ? uniqueAnswer[0] : "undefined";
};
