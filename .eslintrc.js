module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    commonjs: true,
    jest: 'true',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: '16.6.1',
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {},
}
