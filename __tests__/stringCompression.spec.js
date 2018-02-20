const stringCompression = require("../lib/stringCompression.js");

describe("String Compression", () => {
  describe("when the string is all letters", () => {
    test("should return a letter with letter count right behind it", () => {
      const result = stringCompression("ab");
      expect(result).toEqual("a1b1");
    });
  });
});
