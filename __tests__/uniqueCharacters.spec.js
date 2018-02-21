const uniqueCharacters = require("../lib/uniqueCharacters.js");

describe("Finding unique characters", () => {
  describe("when the string is all letters", () => {
    test("should return a single unique letter === 1", () => {
      const result = uniqueCharacters("dddeeefggghhh");
      expect(result).toEqual("f");
    });
  });
  describe("when the whole string is made up of the same letter", () => {
    test("should return undefined", () => {
      const result = uniqueCharacters("ttttt");
      expect(result).toEqual("undefined");
    });
  });
  describe("when there are 2 unique character", () => {
    test("should return first unique character", () => {
      const result = uniqueCharacters("terfg");
      expect(result).toEqual("t");
    });
  });
  // describe("when there is a number in the string", () => {
  //   test("should return error")
  // })
});
