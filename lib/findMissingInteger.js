module.exports = function findMissingInteger(oArray) {
  Array.prototype.removeDuplicates = function() {
    return this.filter((item, index, self) => self.indexOf(item) == index);
  };

  let sortedArray = oArray.sort();
  let finalArray = sortedArray.removeDuplicates();
  for (let i = 0; i <= finalArray.length; i++) {
    if (finalArray[i] === i + 1) {
    } else {
      answer = i + 1;
      return answer;
    }
  }
  // console.log(sortedArray);
};
