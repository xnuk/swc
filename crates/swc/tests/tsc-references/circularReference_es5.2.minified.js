import * as swcHelpers from "@swc/helpers";
var M1, foo2 = require("./foo2");
!function(M11) {
    var C1 = function() {
        "use strict";
        swcHelpers.classCallCheck(this, C1), this.m1 = new foo2.M1.C1(), this.m1.y = 10, this.m1.x = 20;
    };
    M11.C1 = C1;
}(M1 || (M1 = {}));
var foo1 = require("./foo1");
!function(M12) {
    var C1 = function() {
        "use strict";
        swcHelpers.classCallCheck(this, C1), this.m1 = new foo1.M1.C1(), this.m1.y = 10, this.m1.x = 20;
        var tmp = new M1.C1();
        tmp.y = 10, tmp.x = 20;
    };
    M12.C1 = C1;
}(M1 || (M1 = {}));
