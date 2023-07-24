export function sum(...numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array is empty");
  }

  return numbers.reduce((acc, num) => acc + num, 0);
}

export function multiply(a: number, b: number): number {
  return a * b;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("2 multiplied by 2 equals 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });
}
