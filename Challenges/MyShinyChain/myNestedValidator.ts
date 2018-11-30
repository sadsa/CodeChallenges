/*
 * Our PM ask us to create a function for password validation
 * Some of the validation rules are the following:
 * - Password cannot be less than 8 characters
 * - Password cannot be greater than 20 characters
 * - Password must have, at least, one capital letter
 * - Password must have, at least, one number
 * - Password must have, at least, one special character from this list !@#$%^&*
 *
 * The following is our first solution
 */

interface Validator {
  name: string;
  validation: (value: any) => boolean;
}

// Validation Functions
function minLengthValidator(value: string, minLength: number): boolean {
  return value && value.length > minLength;
}

function maxLengthValidator(value: string, maxLength: number): boolean {
  return value && value.length < maxLength;
}

function containsCapitalLetterValidator(value: string): boolean {
  const capitalLetterRegex = /[A-Z]/;
  return value && capitalLetterRegex.test(value);
}

function containsNumberValidator(value: string): boolean {
  const capitalLetterRegex = /[0-9]/;
  return value && capitalLetterRegex.test(value);
}

function containsSpecialCharsValidator(value: string): boolean {
  const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/g;
  return value && specialCharsRegex.test(value);
}

function isPasswordValid(password: string, validators: Validator[]): boolean {
  let isValid = validators.every(validator => validator.validation(password));
  return isValid;
}

// Constants
const MIN_LENGTH = 8;
const MAX_LENGTH = 20;

// Validators
const passwordValidators: Validator[] = [
  {
    name: "min-length",
    validation: value => minLengthValidator(value, MIN_LENGTH)
  },
  {
    name: "max-length",
    validation: value => maxLengthValidator(value, MAX_LENGTH)
  },
  {
    name: "contains-capital",
    validation: containsCapitalLetterValidator
  },
  {
    name: "contains-number",
    validation: containsSpecialCharsValidator
  },
  {
    name: "contains-special-chars",
    validation: containsCapitalLetterValidator
  }
];

isPasswordValid("P4ssw0rd$~!", passwordValidators);

/*
 * The PM now is asking us to reuse the password validator function
 * in other part of the solution, but without applying max length restriction
 * additionally, we will need to include another rule that must apply only
 * for this call, but that functionality will be provided later.
 *
 * HINT: There is a design pattern called "chain of responsability" that could
 * fit perfectly for this case. Try to apply it.
 */
