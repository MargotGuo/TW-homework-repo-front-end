"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require("sinon-chai");

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _srcPractice_1Person = require("../../src/practice_1/person");

var _srcPractice_1Person2 = _interopRequireDefault(_srcPractice_1Person);

var expect = _chai2["default"].expect;

_chai2["default"].use(_sinonChai2["default"]);

describe("Person", function () {
    it("should have field name and age", function () {
        var person = new _srcPractice_1Person2["default"]("Tom", 21);expect(person.name).to.equal("Tom");
        expect(person.age).to.equal(21);
    });

    it("should have a method introduce, introduce person with name and age", function () {
        var person = new _srcPractice_1Person2["default"]("Tom", 21);

        var introduce = person.introduce();

        expect(introduce).to.equal("My name is Tom. I am 21 years old.");
    });
});