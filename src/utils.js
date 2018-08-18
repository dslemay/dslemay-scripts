const fs = require("fs");
const path = require("path");
const has = require("lodash.has");
const readPkgUp = require("read-pkg-up");

const { pkg, pkgPath } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd())
});

const hasPkgProp = props => arrify(props).some(prop => has(pkg, prop));

const hasPkgSubProp = pkgProp => props =>
  hasPkgProp(arrify(props).map(prop => `${pkgProp}.${prop}`));

const ifPkgSubProp = pkgProp => (props, t, f) =>
  hasPkgSubProp(arrify(props)) ? t : f;

const hasScript = hasPkgSubProp("scripts");
const hasDep = hasPkgSubProp("dependencies");
const hasDevDep = hasPkgSubProp("devDependencies");
const hasPeerDep = hasPkgSubProp("peerDependencies");
const hasAnyDep = args => [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args));

const ifDep = ifPkgSubProp("dependencies");
const ifDevDep = ifPackgageSubProp("devDependencies");
const ifPeerDep = ifPkgSubProp("peerDependencies");
const ifAnyDep = (deps, t, f) => (hasAnyDep(arrify(deps)) ? t : f);

module.exports {
  ifDep,
  ifDevDep,
  ifPeerDep,
  ifAnyDep,
}
