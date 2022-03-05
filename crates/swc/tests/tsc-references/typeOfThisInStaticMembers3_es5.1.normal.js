import * as swcHelpers from "@swc/helpers";
var C = function C() {
    "use strict";
    swcHelpers.classCallCheck(this, C);
};
C.a = 1;
C.b = C.a + 1;
var D = /*#__PURE__*/ function(C) {
    "use strict";
    swcHelpers.inherits(D, C);
    var _super = swcHelpers.createSuper(D);
    function D() {
        swcHelpers.classCallCheck(this, D);
        return _super.apply(this, arguments);
    }
    return D;
}(C);
D.c = 2;
D.d = D.c + 1;
D.e = swcHelpers.get(swcHelpers.getPrototypeOf(D), "a", D) + D.c + 1;
