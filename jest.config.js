/** @type {import('jest').Config} */

const config = {
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["./jest.setup.ts"],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/test/**/*.[jt]s?(x)",
    "**/test/**/?(*.)+(spec|test).[tj]s?(x)",
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    "src/methods/test",
    "/dist/",
    "test/mocks/",
  ],

  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },

  // axios-curlirize 2.X+ does not ship with CJS so we must transform it via babel
  transformIgnorePatterns: ["node_modules/(?!axios-curlirize)"],
};

module.exports = config;
