const rules = require('./.eslintrc.rules.js')

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'html',
  ],
  rules
}
