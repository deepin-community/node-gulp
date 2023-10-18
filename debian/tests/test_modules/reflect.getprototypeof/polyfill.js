'use strict';

var Type = require('es-abstract/2021/Type');
var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var implementation = require('./implementation');

var hasProto = Object.getPrototypeOf([]) === Array.prototype;

var getProto = function getPrototypeOf(value) {
	if (Type(value) !== 'Object') {
		throw new $TypeError('Reflect.getPrototypeOf called on non-object');
	}
	return Object.getPrototypeOf(value);
};

module.exports = function getPolyfill() {
	if (typeof Reflect === 'object' && Reflect && Reflect.getPrototypeOf) {
		return Reflect.getPrototypeOf;
	}
	if (hasProto) {
		return getProto;
	}
	return implementation;
};
