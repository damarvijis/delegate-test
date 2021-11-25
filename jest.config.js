/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = async () => {
  return {
    verbose: true,
    moduleFileExtensions: [
      "js", "jsx", "json", "node"
    ],
    transform: {"\\.[jt]sx?$": "babel-jest"},
    testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
    PathIgnorePatterns: [
      "/node_modules","enzyme.js"
    ],
    setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
    coverageReporters: [
      "json",
      "lcov",
      "text",
      "text-summary"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png)$": "<rootDir>/public",
      "\\.(css|less|scss)$": "<rootDir>/styles"
    }
  }
};
