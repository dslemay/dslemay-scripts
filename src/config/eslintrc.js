const { ifAnyDep } = require("../utils");

module.exports = {
  extends: [
    require.resolve("./eslint-base"),
    ifAnyDep("react", require.resolve("./eslint-react")),
    ifAnyDep("flow-bin", require.resolve("./eslint-flow"))
  ].filter(Boolean)
};
