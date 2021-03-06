const vuePath = "vue/dist/vue.cjs";
module.exports = {
    "roots": [
      "<rootDir>/src/core/__tests__",
      "<rootDir>/tools"
    ],
    "transform": {
      "^.+\\.(j|t)sx?$": "ts-jest"
    },
    "testURL": "http://localhost",
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "moduleNameMapper": {
      "^vue$": vuePath,
      "^@/(.*)$": "<rootDir>/src/$1"
    }
};