import * as swcHelpers from "@swc/helpers";
var Foo = function Foo() {
    "use strict";
    swcHelpers.classCallCheck(this, Foo);
};
module.exports = Foo;
// @Filename: foo_1.ts
var foo = require("./foo_0");
var x = new foo();
var y = x.test;
// @module: commonjs
// @Filename: foo_0.ts
export { };
