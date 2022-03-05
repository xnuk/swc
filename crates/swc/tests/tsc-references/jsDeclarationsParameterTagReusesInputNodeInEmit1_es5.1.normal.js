import * as swcHelpers from "@swc/helpers";
var Base = function Base() {
    "use strict";
    swcHelpers.classCallCheck(this, Base);
};
var BaseFactory = function() {
    return new Base();
};
BaseFactory.Base = Base;
module.exports = BaseFactory;
// @filename: file.js
/** @typedef {import('./base')} BaseFactory */ /**
 * @callback BaseFactoryFactory
 * @param {import('./base')} factory
 */ /** @enum {import('./base')} */ var couldntThinkOfAny = {};
/**
 *
 * @param {InstanceType<BaseFactory["Base"]>} base
 * @returns {InstanceType<BaseFactory["Base"]>}
 */ var test = function(base) {
    return base;
};
