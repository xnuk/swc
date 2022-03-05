import * as swcHelpers from "@swc/helpers";
// @strict: true
// @target: es6
class A1 {
    constructor(name){
        swcHelpers.classStaticPrivateFieldSpecSet(A1, A1, _prop, "");
        swcHelpers.classStaticPrivateFieldSpecSet(A1, A1, _roProp, ""); // Error
        console.log(swcHelpers.classStaticPrivateFieldSpecGet(A1, A1, _prop));
        console.log(swcHelpers.classStaticPrivateFieldSpecGet(A1, A1, _roProp));
    }
}
var _prop = {
    get: get_prop,
    set: set_prop
};
var _roProp = {
    get: get_roProp,
    set: void 0
};
function get_prop() {
    return "";
}
function set_prop(param) {}
function get_roProp() {
    return "";
}
