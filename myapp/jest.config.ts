import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageReporters: ["lcov", "text"],
  // Collect coverage for these files (include)
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Include all TypeScript and TSX files in src
  ],

  // Exclude the following files from coverage
  coveragePathIgnorePatterns: [
    "src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}", // Exclude component-related types, stories, constants, tests, and specs
    "src/theme/**", // Exclude theme files
    "src/declarations.d.ts", // Exclude TypeScript declaration files
    "src/utils/constant.tsx", // Exclude specific utility file
    // "src/App.tsx", // Exclude main app file
    // "src/index.tsx", // Exclude index entry point
    // "src/reportWebVitals.ts", // Exclude reportWebVitals file
    "src/store/**", // Exclude store directory
    "src/services/**", // Exclude services directory
  ],

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS module imports
  },
};

export default config;
