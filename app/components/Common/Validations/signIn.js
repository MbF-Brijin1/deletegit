import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import { EMAIL_ADDRESS, INVALID_EMAIL_ADDRESS, PASSWORD_INVALID,PASSWORD_INVALIDLENGTH,EMPTY_DATA } from './customMessage';

// Signin validation
export function validateInput(data) {
  const errors = {};



  if (Validator.isEmpty(data.emailId)) {
    errors.emailId = EMAIL_ADDRESS;
  }

  if (Validator.isEmpty(data.emailId) && Validator.isEmpty(data.password) ) {
    errors.emailId = EMPTY_DATA;
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
  if (Validator.isEmpty(data.email)) {
    errors.email = EMAIL_ADDRESS;
  }

  if (!Validator.isEmail(data.email) && !Validator.isEmpty(data.email)) {
    errors.email = INVALID_EMAIL_ADDRESS;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
