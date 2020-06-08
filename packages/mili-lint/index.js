const eslint = require.resolve('@umijs/fabric/dist/eslint');
const fabric = require('@umijs/fabric');
const stylelint = require.resolve('@umijs/fabric/dist/stylelint')
module.exports = {
  eslint: {
    extends: [eslint]
  },
  prettier: fabric.prettier,
  stylelint,
};