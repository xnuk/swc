import * as swcHelpers from "@swc/helpers";
var C = function() {
    "use strict";
    function C() {
        var _this = this;
        swcHelpers.classCallCheck(this, C), this.prop = function() {
            Math.random() ? _this.inPropertyDeclaration = 0 : _this.inPropertyDeclaration = "string";
        }, Math.random() ? this.inConstructor = 0 : this.inConstructor = "string", this.inMultiple = 0;
    }
    return swcHelpers.createClass(C, [
        {
            key: "method",
            value: function() {
                Math.random() ? (this.inMethod = 0, this.inMethodNullable = null) : (this.inMethod = "string", this.inMethodNullable = void 0), this.inMultiple = "string", this.inMultipleMethods = "string";
            }
        },
        {
            key: "get",
            value: function() {
                Math.random() ? this.inGetter = 0 : this.inGetter = "string", this.inMultiple = !1, this.inMultipleMethods = !1;
            }
        },
        {
            key: "set",
            value: function() {
                Math.random() ? this.inSetter = 0 : this.inSetter = "string";
            }
        }
    ], [
        {
            key: "method",
            value: function() {
                Math.random() ? this.inStaticMethod = 0 : this.inStaticMethod = "string";
            }
        },
        {
            key: "get",
            value: function() {
                Math.random() ? this.inStaticGetter = 0 : this.inStaticGetter = "string";
            }
        },
        {
            key: "set",
            value: function() {
                Math.random() ? this.inStaticSetter = 0 : this.inStaticSetter = "string";
            }
        }
    ]), C;
}();
C.prop = function() {
    Math.random() ? C.inStaticPropertyDeclaration = 0 : C.inStaticPropertyDeclaration = "string";
};
var c = new C();
c.inConstructor, c.inMethod, c.inGetter, c.inSetter, c.inPropertyDeclaration, c.inNestedArrowFunction, c.inMultiple, c.inMultipleMethods, c.inMethodNullable, C.inStaticMethod, C.inStaticGetter, C.inStaticSetter, C.inStaticPropertyDeclaration, C.inStaticNestedArrowFunction;
