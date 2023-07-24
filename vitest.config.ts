import { defineConfig } from "vitest/config";

export default defineConfig({
  define: { "import.meta.vitest": undefined },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    // include: [],
    // exclude: [],
    // runner: "node", // Default: node, when running tests, or benchmark, when running benchmarks
    // update: false, // To update snapshot files
    // watch: true, // Enable watch mode
    // reporters: ["default", "html"],
    // outputFile: { html: "./reports/tests-reports/index.html" },
    // coverage: {
    //   provider: "v8",
    //   reportsDirectory: "./reports/coverage",
    //   reporter: ["text", ["html"], ["json", { file: "coverage.json" }]],
    //   watermarks: {
    //     statements: [50, 80],
    //     functions: [50, 80],
    //     branches: [50, 80],
    //     lines: [50, 80],
    //   },
    // },
    // isolate: true, // Isolate environment for each test file. Does not work if you disable --threads.
    // testTimeout: 5000, // Default timeout of a test in milliseconds
    // globals: false, // By default, vitest does not provide global APIs for explicitness. If you prefer to use the APIs globally like Jest, you can pass the --globals option to CLI or add globals: true in the config.
    // bail: 0,
    // retry: 0,
  },
});
