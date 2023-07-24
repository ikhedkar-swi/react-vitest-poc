import { afterAll, afterEach, beforeAll, beforeEach, it } from "vitest";

beforeAll(() => {
  console.log("Before all called...");
});

beforeEach(() => {
  console.log("Before each called...");
});

afterEach(() => {
  console.log("After each called...");
});

afterAll(() => {
  console.log("After all called...");
});

it("setup and teardown test", () => {
  console.log("setup and teardown test");
});
