module.exports = {
  env: {
    browser: true,
  },
  settings: {
    jsx: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
  }
}
