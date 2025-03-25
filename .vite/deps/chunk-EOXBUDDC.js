import {
  require_react
} from "./chunk-52VOLQIH.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react = __toESM(require_react());
var index = import_react.useLayoutEffect;

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

export {
  _extends,
  _objectWithoutPropertiesLoose,
  index
};
//# sourceMappingURL=chunk-EOXBUDDC.js.map
