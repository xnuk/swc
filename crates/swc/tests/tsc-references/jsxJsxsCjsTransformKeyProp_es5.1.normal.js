import * as swcHelpers from "@swc/helpers";
// @jsx: react-jsx,react-jsxdev
// @strict: true
// @module: commonjs
/// <reference path="/.lib/react16.d.ts" />
var props = {
    answer: 42
};
var a = /*#__PURE__*/ React.createElement("div", swcHelpers.extends({
    key: "foo"
}, props), "text");
var b = /*#__PURE__*/ React.createElement("div", swcHelpers.extends({}, props, {
    key: "bar"
}), "text");
export { };
