import * as swcHelpers from "@swc/helpers";
var aString;
for(aString in {}){}
var anAny;
for(anAny in {}){}
for(var x in {}){}
for(var x in []){}
for(var x in [
    1,
    2,
    3,
    4,
    5
]){}
function fn() {}
for(var x in fn()){}
for(var x in /[a-z]/){}
for(var x in new Date()){}
var c, d, e;
for(var x in c || d){}
for(var x in e ? c : d){}
for(var x in 42 ? c : d){}
for(var x in '' ? c : d){}
for(var x in 42 ? d[x] : c[x]){}
for(var x in c[d]){}
for(var x in function(x1) {
    return x1;
}){}
for(var x in function(x2, y) {
    return x2 + y;
}){}
var A = /*#__PURE__*/ function() {
    "use strict";
    function A() {
        swcHelpers.classCallCheck(this, A);
    }
    swcHelpers.createClass(A, [
        {
            key: "biz",
            value: function biz() {
                for(var x in this.biz()){}
                for(var x in this.biz){}
                for(var x in this){}
                return null;
            }
        }
    ], [
        {
            key: "baz",
            value: function baz() {
                for(var x in this){}
                for(var x in this.baz){}
                for(var x in this.baz()){}
                return null;
            }
        }
    ]);
    return A;
}();
var B = /*#__PURE__*/ function(A) {
    "use strict";
    swcHelpers.inherits(B, A);
    var _super = swcHelpers.createSuper(B);
    function B() {
        swcHelpers.classCallCheck(this, B);
        return _super.apply(this, arguments);
    }
    swcHelpers.createClass(B, [
        {
            key: "boz",
            value: function boz() {
                for(var x in this.biz()){}
                for(var x in this.biz){}
                for(var x in this){}
                for(var x in swcHelpers.get(swcHelpers.getPrototypeOf(B.prototype), "biz", this)){}
                for(var x in swcHelpers.get(swcHelpers.getPrototypeOf(B.prototype), "biz", this).call(this)){}
                return null;
            }
        }
    ]);
    return B;
}(A);
var i;
for(var x in i[42]){}
var M;
(function(M1) {
    var X = function X() {
        "use strict";
        swcHelpers.classCallCheck(this, X);
    };
    M1.X = X;
})(M || (M = {}));
for(var x in M){}
for(var x in M.X){}
var Color;
(function(Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
for(var x in Color){}
for(var x in Color.Blue){}
