import * as swcHelpers from "@swc/helpers";
function getFoo1() {
    return /*#__PURE__*/ (function() {
        "use strict";
        function _class() {
            swcHelpers.classCallCheck(this, _class);
        }
        swcHelpers.createClass(_class, [
            {
                key: "method1",
                value: function method1(arg) {
                    arg.numProp = 10;
                }
            },
            {
                key: "method2",
                value: function method2(arg) {
                    arg.strProp = "hello";
                }
            }
        ]);
        return _class;
    })();
}
function getFoo2() {
    return function _class() {
        "use strict";
        swcHelpers.classCallCheck(this, _class);
        this.method1 = function(arg) {
            arg.numProp = 10;
        };
        this.method2 = function(arg) {
            arg.strProp = "hello";
        };
    };
}
function getFoo3() {
    return function _class() {
        "use strict";
        swcHelpers.classCallCheck(this, _class);
        this.method1 = function(arg) {
            arg.numProp = 10;
        };
        this.method2 = function(arg) {
            arg.strProp = "hello";
        };
    };
}
