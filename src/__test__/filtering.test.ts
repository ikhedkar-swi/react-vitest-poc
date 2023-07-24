import { test, assert, describe, it } from "vitest";
import { sleep } from "../tools/sleep";

//#region Skipping Suites and Tests

describe.skip("skipped suite", () => {
  it("test", () => {
    // Suite skipped, no error
    assert.equal(Math.sqrt(4), 3);
  });
});

const isDev = process.env.NODE_ENV === "development";
describe.skipIf(isDev)("skipped suite", () => {
  it("test", () => {
    // Suite skipped, no error
    assert.equal(Math.sqrt(4), 2);
  });
});

describe("suite", () => {
  it.skip("skipped test", () => {
    // Test skipped, no error
    assert.equal(Math.sqrt(4), 2);
  });
  it.skipIf(isDev)("skipped test", () => {
    // Test skipped, no error
    assert.equal(Math.sqrt(4), 2);
  });
  it.runIf(isDev)("skipped test", () => {
    // Test skipped, no error
    assert.equal(Math.sqrt(4), 2);
  });
});

//#endregion

//#region Selecting Suites and Tests to Run

// describe.only("suite", () => {
//   it("test", () => {
//     assert.equal(Math.sqrt(4), 2);
//   });
// });

// describe("another suite", () => {
//   it("skipped test", () => {
//     // Test skipped, as tests are running in Only mode
//     assert.equal(Math.sqrt(4), 3);
//   });

//   it.only("test", () => {
//     // Only this test (and others marked with only) are run
//     assert.equal(Math.sqrt(4), 2);
//   });
// });
//#endregion

//#region Unimplemented Suites and Tests

// describe.todo("unimplemented suite");

// // An entry will be shown in the report for this test
// describe("suite", () => {
//   it.todo("unimplemented test");
// });

//#endregion

//#region Specifying a Timeout

// test("test timeout scenario", async () => {
//   await sleep(1200);
// }, 1000);

// test("test executing within timeout period", async () => {
//   await sleep(500);
// }, 1000);

// test.only(
//   "test running within timeout period with retries",
//   async () => {
//     await sleep(1000);
//   },
//   { retry: 2, timeout: 2000, repeats: 3 }
// );

// test(
//   "test timeout scenario with retries",
//   async () => {
//     await sleep(1200);
//   },
//   { retry: 2, timeout: 1000 }
// );

// test(
//   "test timeout scenario with retries and repeats",
//   async () => {
//     await sleep(1200);
//   },
//   { retry: 2, timeout: 1000, repeats: 3 }
// );

//#endregion
