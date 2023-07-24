import { vi, it, expect, afterEach } from "vitest";
import { Counter } from "../counter";

afterEach(() => {
  vi.resetAllMocks();
});

vi.mock("../counter.ts", () => {
  const Counter = {
    count: 999,
    increment: vi.fn().mockImplementationOnce(() => 10),
    incrementBy: vi.fn().mockImplementationOnce((num: number) => num * 5),
    decrement: vi.fn().mockImplementationOnce(() => 5),
    decrementBy: vi.fn().mockImplementationOnce((num: number) => num * 1),
  };
  return { Counter };
});

it("Mocking - test counter functionality", () => {
  // expect(Counter.count).toBe(999);
  // expect(Counter.increment()).toBe(10);
  // expect(Counter.incrementBy(4)).toBe(20);
  // expect(Counter.decrement()).toBe(5);
  // expect(Counter.decrementBy(5)).toBe(5);
});
