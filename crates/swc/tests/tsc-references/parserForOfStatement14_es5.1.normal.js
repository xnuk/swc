import * as swcHelpers from "@swc/helpers";
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    //@target: ES6
    for(var _iterator = X[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
        var _value = swcHelpers.slicedToArray(_step.value, 2), a = _value[0], b = _value[1];
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally{
    try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
        }
    } finally{
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
