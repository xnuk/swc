import * as swcHelpers from "@swc/helpers";
// @module: system
// @target: es5
// @lib: es6
// @filename: 0.ts
export function foo() {
    return "foo";
}
// @filename: 1.ts
import("./0");
var p1 = import("./0");
p1.then(function(zero) {
    return zero.foo();
});
export var p2 = import("./0");
function foo() {
    var p2 = import("./0");
}
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        swcHelpers.classCallCheck(this, C);
    }
    swcHelpers.createClass(C, [
        {
            key: "method",
            value: function method() {
                var loadAsync = import("./0");
            }
        }
    ]);
    return C;
}();
export var D = /*#__PURE__*/ function() {
    "use strict";
    function D() {
        swcHelpers.classCallCheck(this, D);
    }
    swcHelpers.createClass(D, [
        {
            key: "method",
            value: function method() {
                var loadAsync = import("./0");
            }
        }
    ]);
    return D;
}();
