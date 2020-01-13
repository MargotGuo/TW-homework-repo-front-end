"use strict";
import chai from "chai";
import sinonChai from "sinon-chai";
const expect = chai.expect;
chai.use(sinonChai);

import Person from "../../main/practice_2/person.js";
import Student from "../../main/practice_2/student.js";

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

    describe("Student", () => {
        it("should have field name, age and class number", () => {
            const student = new Student("Tom", 21, 2);
            expect(student.name).to.equal("Tom");
            expect(student.age).to.equal(21);
            expect(student.klass).to.equal(2);
        });

        it("should overwrite Person introduce, introduce student with class", () => {
            const student = new Student("Tom", 21, 2);
            const introduce = student.introduce();
            expect(introduce).to.equal("I am a Student. I am at Class 2.");
        });
    })
});
