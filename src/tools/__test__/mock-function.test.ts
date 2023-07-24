import { vi, it, expect } from "vitest";
import { sum } from "../math";

vi.mock("../math.ts", () => ({
  sum: vi.fn().mockImplementationOnce(() => 5),
}));

it("mock exported function", () => {
  const result = sum(2, 2);
  expect(result).toBe(5);
});
