import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}",
    "!src/theme/**",
    "!src/declarations.d.ts",
    "!src/utils/constant.tsx",
    "!src/App.tsx",
    "!src/index.tsx",
    "!src/reportWebVitals.ts",
    "!src/store/**",
    "!src/services/**",
  ],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

export default config;
