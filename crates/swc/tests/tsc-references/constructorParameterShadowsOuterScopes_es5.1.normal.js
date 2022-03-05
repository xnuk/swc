import * as swcHelpers from "@swc/helpers";
// Initializer expressions for instance member variables are evaluated in the scope of the class constructor 
// body but are not permitted to reference parameters or local variables of the constructor.
// This effectively means that entities from outer scopes by the same name as a constructor parameter or 
// local variable are inaccessible in initializer expressions for instance member variables
var x = 1;
var C = function C(x1) {
    "use strict";
    swcHelpers.classCallCheck(this, C);
    this.b = x // error, evaluated in scope of constructor, cannot reference x
    ;
    x1 = 2; // error, x is string
};
var y = 1;
var D = function D(x) {
    "use strict";
    swcHelpers.classCallCheck(this, D);
    this.b = y // error, evaluated in scope of constructor, cannot reference y
    ;
    var y1 = "";
};
