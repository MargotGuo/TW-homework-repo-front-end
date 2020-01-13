"use strict";
import chai from "chai";
import sinonChai from "sinon-chai";
const expect = chai.expect;
chai.use(sinonChai);

import Person from "../../main/practice_1/person.js";

describe("Person", () => {
    it("should have field name and age", () => {
        const person = new Person("Tom", 21);
        expect(person.name).to.equal("Tom");
        expect(person.age).to.equal(21);
    });

    it("should have a method introduce, introduce person with name and age", () => {
        const person = new Person("Tom", 21);
        const introduce = person.introduce();
        expect(introduce).to.equal("My name is Tom. I am 21 years old.");
    });
});
