import * as swcHelpers from "@swc/helpers";
var MyClass = function MyClass() {
    "use strict";
    swcHelpers.classCallCheck(this, MyClass);
};
export var fn = function() {
    var _class = /*#__PURE__*/ function(MyClass) {
        "use strict";
        swcHelpers.inherits(_class, MyClass);
        var _super = swcHelpers.createSuper(_class);
        function _class() {
            swcHelpers.classCallCheck(this, _class);
            return _super.apply(this, arguments);
        }
        return _class;
    }(MyClass);
    _class.x = 5;
    return _class;
};
