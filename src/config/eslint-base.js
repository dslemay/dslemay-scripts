module.exports = {
  parser: 'babel-eslint',
  settings: {
    ecmascript: 6
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
    },
    sourceType: 'module'
  },
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier']
}
