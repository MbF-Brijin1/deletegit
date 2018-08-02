import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import { PASSWORD_INVALID,PASSWORD_INVALIDLENGTH } from './customMessage';

// Signin validation
export function validateInput(data) {
  const errors = {};

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

