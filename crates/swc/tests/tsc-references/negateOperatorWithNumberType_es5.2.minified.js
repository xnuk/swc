import * as swcHelpers from "@swc/helpers";
var M, A = function() {
    "use strict";
    function A() {
        swcHelpers.classCallCheck(this, A);
    }
    return swcHelpers.createClass(A, null, [
        {
            key: "foo",
            value: function() {
                return 1;
            }
        }
    ]), A;
}();
!function(M1) {
    var n;
    M1.n = n;
}(M || (M = {}));
var objA = new A();
objA.a, M.n, A.foo(), objA.a, M.n, objA.a, M.n;
