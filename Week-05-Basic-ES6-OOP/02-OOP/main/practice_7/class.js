class Class {

  constructor(klass) {
    this.number = klass;
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }
}

module.exports = Class;
