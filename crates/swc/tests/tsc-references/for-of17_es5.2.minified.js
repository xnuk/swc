import * as swcHelpers from "@swc/helpers";
var _iterator = Symbol.iterator, NumberIterator = function() {
    "use strict";
    function NumberIterator() {
        swcHelpers.classCallCheck(this, NumberIterator);
    }
    return swcHelpers.createClass(NumberIterator, [
        {
            key: "next",
            value: function() {
                return {
                    value: 0,
                    done: !1
                };
            }
        },
        {
            key: _iterator,
            value: function() {
                return this;
            }
        }
    ]), NumberIterator;
}(), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
try {
    for(var _step, _iterator1 = (new NumberIterator)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator1.next()).done); _iteratorNormalCompletion = !0)_step.value;
} catch (err) {
    _didIteratorError = !0, _iteratorError = err;
} finally{
    try {
        _iteratorNormalCompletion || null == _iterator1.return || _iterator1.return();
    } finally{
        if (_didIteratorError) throw _iteratorError;
    }
}
