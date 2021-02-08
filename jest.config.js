module.exports = {
    "moduleDirectories": [
      "node_modules",
      "src"
    ],
    "transformIgnorePatterns": [
      "/node_modules/(?!react-jss)"
    ],
    "moduleNameMapper": {
      "@memoir(.*)$": "<rootDir>/src/$1"
    }
}