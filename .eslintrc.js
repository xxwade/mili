const miliLint  = require('mili-lint')

module.exports = {
  ...miliLint.eslint,
  ignorePatterns: ["**/*.js", "dist/", "node_modules/", "**/node_modules/", "lib/", "scripts/"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
