class Class {

  constructor(klass) {
    this.number = klass;
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }

  assignLeader(student) {
    if (student.klass.number === this.number) {
      this.leader = student;
    } else {
      console.log("It is not one of us.");
    }
  }

  appendMember(student) {
    student.klass = this;
  }
  
}

module.exports = Class;