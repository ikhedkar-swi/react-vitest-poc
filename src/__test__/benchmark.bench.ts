import { bench, describe } from "vitest";

describe("sort", () => {
  bench("normal", () => {
    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    x.sort((a, b) => {
      return a - b;
    });
  });

  bench("reverse", () => {
    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    x.reverse().sort((a, b) => {
      return a - b;
    });
  });
});
