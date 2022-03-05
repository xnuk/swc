import * as swcHelpers from "@swc/helpers";
import regeneratorRuntime from "regenerator-runtime";
// @target: ES5
// @lib: es5,es2015.promise
// @noEmitHelpers: true
var foo = function() {
    var _ref = swcHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function foo() {
        return _ref.apply(this, arguments);
    };
}();
