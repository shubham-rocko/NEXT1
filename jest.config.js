module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
      "**/*.{js,jsx,ts,tsx}",
      "!**/*.d.ts",
      "!**/node_modules/**",
    ],
    coveragePathIgnorePatterns: [
        "node_modules",
        ".next",
        ".babelrc.js",
        "jest.config.js",
        "components"
    ],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    //additional prop from a github issue: https://github.com/zeit/next.js/issues/8663
    preset: "ts-jest",
    testEnvironment: "jsdom",
    globals: {
      // we must specify a custom tsconfig for tests because we need the typescript transform
      // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
      // can see this setting in tsconfig.jest.json -> "jsx": "react"
      "ts-jest": {
        tsConfig: "tsconfig.jest.json",
      },
    },
  };