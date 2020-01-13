import Person from "./person.js"

class Teacher extends Person {

  constructor(id, name, age, klasses) {
    super(id, name, age);
    if (klasses) {
      this.klasses = klasses.map((klass) => {
        return klass;
      });
    }
  }

  introduce() {
    let klassDetail;
    if (this.klasses) {
      klassDetail = this.klasses.reduce((temp, klass) => {
        return temp + ", " + klass.number
      }, "");
      klassDetail = "Class " + klassDetail.substring(2, klassDetail.length)
    } else {
      klassDetail = "No Class";
    }
    return `${super.introduce()} I am a Teacher. I teach ${klassDetail}.`;
  }

  introduceWith(student) {
    if (this.klass.number === student.klass.number) {
      return `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
    } else {
      return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
    }
  }

  isTeaching(student) {
    this.klasses.includes(student.klass) ? true : false;
  }

  callLeader(student) {
    console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
  }

  callMember(student) {
    console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`)
  }
}

module.exports = Teacher;