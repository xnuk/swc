import * as swcHelpers from "@swc/helpers";
var my = my || {};
my.method = function(n) {
    return n + 1;
}, my.number = 1, my.object = {}, my.predicate = my.predicate || {}, my.predicate.query = function() {
    var me = this;
    me.property = !1;
}, new my.predicate.query(), my.predicate.query.another = function() {
    return 1;
}, my.predicate.query.result = "none", my.predicate.sort = my.predicate.sort || function(first, second) {
    return first > second ? first : second;
}, my.predicate.type = (function() {
    "use strict";
    function _class() {
        swcHelpers.classCallCheck(this, _class);
    }
    return swcHelpers.createClass(_class, [
        {
            key: "m",
            value: function() {
                return 101;
            }
        }
    ]), _class;
})();
var min = window.min || {};
min.nest = this.min.nest || function() {}, min.nest.other = self.min.nest.other || function _class() {
    "use strict";
    swcHelpers.classCallCheck(this, _class);
}, min.property = global.min.property || {};
