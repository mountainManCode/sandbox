const frogJumps = require("../lib/frogJumps.js");

// Frog jump suite
describe("Frogs a jumpin", () => {
  describe("when start is equal to end", () => {
    test("should return 0", () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });

  describe("when start is less than end", () => {
    test("should return integer > 0", () => {
      const result = frogJumps(5, 10, 5);
      expect(result).toEqual(1);
    });
  });

  describe("when start is greater than end", () => {
    test("should return interger < 0", () => {
      const result = frogJumps(15, 10, 5);
      expect(result).toEqual(-1);
    });
  });

  describe("when jumpDistance === 0", () => {
    test("should return infinity", () => {
      const result = frogJumps(5, 10, 0);
      expect(result).toEqual(Infinity);
    });
  });

  describe("when jumpDistance > totalDistance", () => {
    test("should return whole integer", () => {
      const result = frogJumps(5, 10, 15);
      expect(result).toEqual(1);
    });
  });

  describe("when destination is exactly one jump away", () => {
    it("should return 1", () => {
      expect(frogJumps(5, 15, 10)).toEqual(1);
    });
  });

  describe("when input is NaN", () => {
    it("should return input NaN", () => {
      expect(frogJumps(5, k, 10)).toEqual("not defined");
    });
  });
});
