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
    if (this.isIn(student)) {
      this.leader = student;
      if (this.leaderListener) {
        this.leaderListener.callLeader(student);
      }
    } else {
      console.log("It is not one of us.");
    }
  }

  appendMember(student) {
    student.klass = this;
    if (this.joinListener) {
      this.joinListener.callMember(student);
    }
  }

  registerAssignLeaderListener(teacher) {
    this.leaderListener = teacher;
  }

  registerJoinListener(teacher) {
    this.joinListener = teacher;
  }
}

module.exports = Class;