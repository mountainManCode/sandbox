const findMissingInteger = require("../lib/findMissingInteger.js");

describe("Finding missing integer, else return the next largest integer", () => {
  describe("when the integer is missing inbetween min/max", () => {
    test("should return a missing integer", () => {
      const result = findMissingInteger([1, 3]);
      expect(result).toEqual(2);
    });
  });
  describe("when the array is not sorted", () => {
    test("should return the missing integer", () => {
      const result = findMissingInteger([1, 4, 2]);
      expect(result).toEqual(3);
    });
  });
  describe("when the array is not missing an integer", () => {
    test("should return next largest integer", () => {
      const result = findMissingInteger([1, 2, 3]);
      expect(result).toEqual(4);
    });
  });
  describe("when the array has duplicate integer", () => {
    test("should return the missing integer", () => {
      const result = findMissingInteger([1, 3, 3, 4]);
      expect(result).toEqual(2);
    });
  });
});
