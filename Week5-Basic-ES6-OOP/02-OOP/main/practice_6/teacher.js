import Person from "./person.js"

class Teacher extends Person {

  constructor() {
    super(arguments[0], arguments[1]);
    if (arguments[2]) {
      this.klass = arguments[2];
    }
  }

  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${this.klass ? "Class " + this.klass : "No Class"}.`;
  }
}

module.exports = Teacher;

