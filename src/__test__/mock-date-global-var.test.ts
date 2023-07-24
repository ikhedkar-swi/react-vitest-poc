import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Fake date
describe("Faking date", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  it("mock system date", () => {
    // set hour within business hours
    const date = new Date(2000, 1, 1, 13);
    vi.setSystemTime(date);

    console.log(new Date());
    expect(new Date().toUTCString()).toBe(date.toUTCString());
  });
});

// global.__VERSION__ = "1.2.3";

// // Mocking global variables
// it("mock global variables", () => {
//   console.log("Global __VERSION__ value = ", __VERSION__);
//   vi.stubGlobal("__VERSION__", "1.0.0");
//   expect(__VERSION__).toBe("1.0.0");
//   console.log("Mocked __VERSION__ value = ", __VERSION__);
//   vi.unstubAllGlobals();
// });
