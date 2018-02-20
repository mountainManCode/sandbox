module.exports = function stringCompression(str) {
  if (str == undefined) {
    return 0;
  }
  if (typeof str !== "string") {
    return "Error";
  }
  let originalStringArray = str.split("");

  let startPoint = originalStringArray[0];
  let letterCount = 1;
  const mapOfCharacters = originalStringArray
    .slice(1)
    .reduce((result, value, index) => {
      if (value === startPoint) {
        letterCount++;
        return result;
      }
      result = result + letterCount + value;
      startPoint = value;
      letterCount = 1;

      return result;
    }, startPoint);
  const finalString = mapOfCharacters + letterCount;
  return finalString;
};

// module.exports = function stringCompression(str) {
//   const array = str.split().reduce((allLetters, letter) => {
//     if (letter in allLetters) {
//       allLetters[letter]++;
//     } else {
//       allLetters[letter] = 1;
//     }
//     return allLetters;
//   }, []);
// };
// // console.log(stringCompression);
// // const str = "aabbcccc";
