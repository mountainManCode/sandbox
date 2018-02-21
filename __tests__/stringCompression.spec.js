const stringCompression = require("../lib/stringCompression.js");

describe("String Compression", () => {
  describe("when the string is all letters", () => {
    test("should return a letter with letter count right behind it", () => {
      const result = stringCompression("ab");
      expect(result).toEqual("a1b1");
    });
  });
  describe("when the string is empty", () => {
    test("should return 0", () => {
      const result = stringCompression();
      expect(result).toEqual(0);
    });
  });
  describe("when stringCompression is not a string", () => {
    test("should return Error", () => {
      const result = stringCompression(1);
      expect(result).toEqual("Error");
    });
  });
  describe("when there are spaces", () => {
    test("should return string with no spaces", () => {
      const result = stringCompression("abb ccd");
      expect(result).toEqual("a1b2c2d1");
    });
  });
  describe("when giving a string with same letters, return preserved order", () => {
    test("should return a sorted order", () => {
      const result = stringCompression("aabbbaa");
      expect(result).toEqual(a4b3);
    });
  });
});
