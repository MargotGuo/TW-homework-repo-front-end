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
    }
  }
  
}

module.exports = Class;
