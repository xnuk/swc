import * as swcHelpers from "@swc/helpers";
function a1(param) {
    var _param = swcHelpers.slicedToArray(param, 3), a = _param[0], b = _param[1], ref = swcHelpers.slicedToArray(_param[2], 1), ref1 = swcHelpers.slicedToArray(ref[0], 1);
    ref1[0];
}
function b2() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
}
function c0(param) {
    var _z = param.z;
    _z.x, _z.y.j;
}
function c1() {
    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        z: 10
    }).z;
}
function c2(param) {
    param.z;
}
function c5(param) {
    var _param = swcHelpers.slicedToArray(param, 3), a = _param[0], b = _param[1], ref = swcHelpers.slicedToArray(_param[2], 1), ref2 = swcHelpers.slicedToArray(ref[0], 1);
    ref2[0];
}
a1([
    1,
    2,
    [
        [
            "world"
        ]
    ]
]), a1([
    1,
    2,
    [
        [
            "world"
        ]
    ],
    3
]), (function() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
})([
    1,
    2,
    3
]), b2("string", {
    x: 200,
    y: "string"
}), b2("string", {
    x: 200,
    y: !0
}), (function(Foo) {
    Foo[Foo.a = 0] = "a";
})(Foo || (Foo = {})), c0({
    z: {
        x: 1,
        y: {
            j: "world"
        }
    }
}), c0({
    z: {
        x: "string",
        y: {
            j: !0
        }
    }
}), c1(), c1({
    z: 1
}), c2({}), c2({
    z: 1
}), (function() {
    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        b: "hello"
    }).b;
})({
    b: 1
}), c5([
    1,
    2,
    [
        [
            "string"
        ]
    ]
]), c5([
    1,
    2,
    [
        [
            "string"
        ]
    ],
    !1,
    !0
]);
var Foo, C2 = function() {
    "use strict";
    function C2() {
        swcHelpers.classCallCheck(this, C2);
    }
    return swcHelpers.createClass(C2, [
        {
            key: "d3",
            value: function() {}
        },
        {
            key: "d4",
            value: function() {}
        },
        {
            key: "e0",
            value: function(param) {
                var _param = swcHelpers.slicedToArray(param, 3);
                _param[0], _param[1], _param[2];
            }
        }
    ]), C2;
}(), C3 = function() {
    "use strict";
    function C3() {
        swcHelpers.classCallCheck(this, C3);
    }
    return swcHelpers.createClass(C3, [
        {
            key: "d3",
            value: function(param) {
                var _param = swcHelpers.slicedToArray(param, 3);
                _param[0], _param[1], _param[2];
            }
        },
        {
            key: "d4",
            value: function(param) {
                param.x, param.y, param.z;
            }
        },
        {
            key: "e0",
            value: function(param) {
                var _param = swcHelpers.slicedToArray(param, 3);
                _param[0], _param[1], _param[2];
            }
        }
    ]), C3;
}();
!function() {
    var ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        x: 1,
        y: 2
    };
    ref.x, ref.y;
}();
