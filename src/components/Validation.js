const isValidate = (value, rules) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'minLength':
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;
      case 'isRequired':
        isValid = isValid && requiredValidator(value);
        break;
      case 'isEmail':
        isValid = isValid && emailValidator(value);
        break;
      case 'isNumeric':
        isValid = isValid && numericValidator(value);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};
const requiredValidator = value => {
  return value.trim() !== '';
};
const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
};

const emailValidator = value => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const numericValidator = value => {
  return /^\d+$/.test(value);
};
export default isValidate;
