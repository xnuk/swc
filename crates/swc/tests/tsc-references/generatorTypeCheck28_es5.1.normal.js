import * as swcHelpers from "@swc/helpers";
import regeneratorRuntime from "regenerator-runtime";
var _marked = regeneratorRuntime.mark(g);
//@target: ES6
function g() {
    return regeneratorRuntime.wrap(function g$(_ctx1) {
        while(1)switch(_ctx1.prev = _ctx1.next){
            case 0:
                return _ctx1.delegateYield(swcHelpers.defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return function(x) {
                                    return x.length;
                                };
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                })), "t0", 1);
            case 1:
            case "end":
                return _ctx1.stop();
        }
    }, _marked);
}
