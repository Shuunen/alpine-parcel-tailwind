const rules = require('./.eslintrc.rules.js')

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:unicorn/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'html',
    'unicorn',
  ],
  rules,
}
