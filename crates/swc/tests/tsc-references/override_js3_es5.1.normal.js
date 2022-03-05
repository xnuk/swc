import * as swcHelpers from "@swc/helpers";
var B = // @noImplicitOverride: true
// @allowJs: true
// @checkJs: true
// @noEmit: true
// @Filename: a.js
/*#__PURE__*/ function() {
    "use strict";
    function B() {
        swcHelpers.classCallCheck(this, B);
    }
    swcHelpers.createClass(B, [
        {
            key: "foo",
            value: function foo(v) {}
        },
        {
            key: "fooo",
            value: function fooo(v) {}
        }
    ]);
    return B;
}();
var D = /*#__PURE__*/ function(B) {
    "use strict";
    swcHelpers.inherits(D, B);
    var _super = swcHelpers.createSuper(D);
    function D() {
        swcHelpers.classCallCheck(this, D);
        return _super.apply(this, arguments);
    }
    swcHelpers.createClass(D, [
        {
            key: "foo",
            value: function foo(v) {}
        },
        {
            /** @override */ key: "fooo",
            value: function fooo(v) {}
        }
    ]);
    return D;
}(B);
