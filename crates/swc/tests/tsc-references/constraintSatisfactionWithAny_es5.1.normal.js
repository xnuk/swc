import * as swcHelpers from "@swc/helpers";
// any is not a valid type argument unless there is no constraint, or the constraint is any
function foo(x) {
    return null;
}
function foo2(x) {
    return null;
}
//function foo3<T extends T[]>(x: T): T { return null; }
function foo4(x) {
    return null;
}
var a;
foo(a);
foo2(a);
//foo3(a);
foo4(a);
var b;
foo(b);
foo2(b);
//foo3<any>(b);
foo4(b);
var C = function C(x) {
    "use strict";
    swcHelpers.classCallCheck(this, C);
    this.x = x;
};
var c1 = new C(a);
var c2 = new C(b);
var C2 = function C2(x) {
    "use strict";
    swcHelpers.classCallCheck(this, C2);
    this.x = x;
};
var c3 = new C2(a);
var c4 = new C2(b);
var C4 = function C4(x) {
    "use strict";
    swcHelpers.classCallCheck(this, C4);
    this.x = x;
};
var c7 = new C4(a);
var c8 = new C4(b);
