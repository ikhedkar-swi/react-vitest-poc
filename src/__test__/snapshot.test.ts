import { upperCase } from "lodash";
import { expect, it } from "vitest";

it("toUpperCase", () => {
  const result = upperCase("foobar");
  expect(result).toMatchSnapshot();
});

it("toUpperCase inline snapshot", () => {
  const result = upperCase("foobar");
  expect(result).toMatchInlineSnapshot('"FOOBAR"');
});

it("toUpperCase file snapshot", () => {
  const result = upperCase("foobar");
  expect(result).toBeTypeOf("string");
  expect(result).not.toEqual("fooBAR");
  expect(typeof result === "string").toBe(true);
  expect(result).toMatchFileSnapshot(
    "./__snapshots__/file_snapshot.test.ts.snap"
  );
});

it("object matchers", () => {
  const sachin = {
    firstName: "Sachin",
    lastName: "Tendulkar",
  };

  // expect(sachin).toBe({
  //   firstName: "Sachin",
  //   lastName: "Tendulkar",
  // });

  expect(sachin).toStrictEqual({
    firstName: "Sachin",
    lastName: "Tendulkar",
  });
});

it("function should throw error", () => {
  expect(() => {
    throw new Error("I'm an error");
  }).toThrow();
});

it("async function throws an error", async () => {
  await expect(async () => {
    throw new Error("I'm an error");
  }).rejects.toThrowError();
});
