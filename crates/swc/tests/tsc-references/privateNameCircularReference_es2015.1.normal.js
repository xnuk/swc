import * as swcHelpers from "@swc/helpers";
var _foo = new WeakMap(), _bar = new WeakMap();
// @strict: true
// @target: es6
class A {
    constructor(){
        swcHelpers.classPrivateFieldInit(this, _foo, {
            writable: true,
            value: swcHelpers.classPrivateFieldGet(this, _bar)
        });
        swcHelpers.classPrivateFieldInit(this, _bar, {
            writable: true,
            value: swcHelpers.classPrivateFieldGet(this, _foo)
        });
        this["#baz"] = this["#baz"] // Error (should *not* be private name error)
        ;
    }
}
