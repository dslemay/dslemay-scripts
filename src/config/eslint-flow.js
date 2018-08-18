module.exports = {
  plugins: ['flowtype', 'flowtype-errors'],
  extends: ['plugin:flowtype/recommended'],
  rules: {
    'flowtype=errors:show-errors',
  },
}
