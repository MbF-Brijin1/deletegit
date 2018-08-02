import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import { FIRST_NAME, SECOND_NAME, EMAIL_ADDRESS, INVALID_EMAIL_ADDRESS, PASSWORD_INVALID, PASSWORD_INVALIDLENGTH, EMPTY_DATA} from './customMessage';

// Signin validation
export function validateInput(data) {
  const errors = {};

  if (Validator.isEmpty(data.firstName) && Validator.isEmpty(data.password) && Validator.isEmpty(data.secondName) && Validator.isEmpty(data.emailId)) {
    errors.firstName = EMPTY_DATA;
  } 
  if (Validator.isEmpty(data.secondName)) {
    errors.secondName = SECOND_NAME;
  }

  if (Validator.isEmpty(data.emailId)) {
    errors.emailId = EMAIL_ADDRESS;
  }

  if (!Validator.isEmail(data.emailId) && !Validator.isEmpty(data.emailId)) {
    errors.emailId = INVALID_EMAIL_ADDRESS;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = PASSWORD_INVALID;
  }

  if (!Validator.isLength(data.password, { min: 6 }) && !Validator.isEmpty(data.password)) {
    errors.password = PASSWORD_INVALIDLENGTH;
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
}

// ForgetPassword validation
export function validatePassword(data) {
  const errors = {};

  if (Validator.isEmpty(data.password)) {
    errors.password = PASSWORD_INVALID;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
