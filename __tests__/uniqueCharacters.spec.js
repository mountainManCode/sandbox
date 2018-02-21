const uniqueCharacters = require("../lib/uniqueCharacters.js");

describe("Finding unique characters", () => {
  describe("when the string is all letters", () => {
    test("should return a single unique letter === 1", () => {
      const result = uniqueCharacters("abcab");
      expect(result).toEqual("c");
    });
  });
  describe("when the whole string is made up of the same letter", () => {
    test("should return undefined", () => {
      const result = uniqueCharacters("aaaa");
      expect(result).toEqual("undefined");
    });
  });
});
