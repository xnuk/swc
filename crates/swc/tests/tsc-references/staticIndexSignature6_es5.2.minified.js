import * as swcHelpers from "@swc/helpers";
var C = function() {
    "use strict";
    function _class() {
        swcHelpers.classCallCheck(this, _class);
    }
    return swcHelpers.createClass(_class, [
        {
            key: "foo",
            value: function(v) {
                return v;
            }
        }
    ]), _class;
}();
C.a, C.a = 1, C[2], C[2] = 42, new C().foo(1);
