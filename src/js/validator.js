class Validator {
  validateUsername(checkingName) {
    this.check = checkingName;
    if (this.check.match(/^[ ]|\ {2}|[ ]$/) !== null) {
      throw TypeError('Проблемы с пробелами');
    }
    return this.check.match(/[a-zа-я0-9\-\ ]+/gi) !== null;
  }
}

export default Validator;
