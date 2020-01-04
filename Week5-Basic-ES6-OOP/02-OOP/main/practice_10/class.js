class Class {

  constructor(klass) {
    this.number = klass;
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }

  isIn(student) {
    return student.klass.number === this.number ? true : false;
  }

  assignLeader(student) {
    this.isIn(student) ? this.leader = student : console.log("It is not one of us.");
  }

  appendMember(student) {
    student.klass = this;
  }
}

module.exports = Class;