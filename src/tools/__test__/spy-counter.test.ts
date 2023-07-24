import { vi, it, expect } from "vitest";
import { Counter } from "../counter";

it("Spying - test counter functionality", () => {
  const counter = new Counter();
  const incrementSpy = vi.spyOn(counter, "increment");
  const incrementBySpy = vi.spyOn(counter, "incrementBy");
  const decrementSpy = vi.spyOn(counter, "decrement");
  const decrementBySpy = vi.spyOn(counter, "decrementBy");

  expect(counter.count).toBe(0);

  counter.increment();

  expect(counter.count).toBe(1);
  expect(incrementSpy).toBeCalledTimes(1);
  expect(incrementBySpy).toBeCalledTimes(0);
  expect(decrementSpy).toBeCalledTimes(0);
  expect(decrementBySpy).toBeCalledTimes(0);

  counter.incrementBy(2);

  expect(counter.count).toBe(3);
  expect(incrementSpy).toBeCalledTimes(1);
  expect(incrementBySpy).toBeCalledTimes(1);
  expect(incrementBySpy).toHaveBeenCalledWith(2);
  expect(decrementSpy).toBeCalledTimes(0);
  expect(decrementBySpy).toBeCalledTimes(0);

  counter.decrement();

  expect(counter.count).toBe(2);
  expect(incrementSpy).toBeCalledTimes(1);
  expect(incrementBySpy).toBeCalledTimes(1);
  expect(decrementSpy).toBeCalledTimes(1);
  expect(decrementBySpy).toBeCalledTimes(0);

  counter.decrementBy(1);

  expect(counter.count).toBe(0);
  expect(incrementSpy).toBeCalledTimes(1);
  expect(incrementBySpy).toBeCalledTimes(1);
  expect(decrementSpy).toBeCalledTimes(1);
  expect(decrementBySpy).toBeCalledTimes(1);
  expect(decrementBySpy).toHaveBeenCalledWith(1);
});
