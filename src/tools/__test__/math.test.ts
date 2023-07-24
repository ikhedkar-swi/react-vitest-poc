import { expect, it, test } from "vitest";
import { sum } from "../math";

test("two plus three equals five", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});

it("sum of three numbers", () => {
  const result = sum(1, 2, 3);
  expect(result).toBe(6);
});

it("empty list throws an error", () => {
  expect(() => sum()).toThrowError("Array is empty");
});
