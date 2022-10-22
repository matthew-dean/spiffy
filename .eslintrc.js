module.exports = {
  extends: 'standard-with-typescript',
  rules: {
    'eol-last': 0,
    '@typescript-eslint/explicit-function-return-type': 0
  },
  parserOptions: {
    project: './tsconfig.json'
  }
}
