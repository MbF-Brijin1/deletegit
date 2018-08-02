import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import { NAME, MESSAGE, SELECT_CATEGORIES, DATE_CHOOSE, FILE_UPLOAD } from './customMessage';

// Signin validation
export function validateForm(data) {
  const errors = {};

  if (Validator.isEmpty(data.name)) {
    errors.name = NAME;
  }

  if (Validator.isEmpty(data.message)) {
    errors.message = MESSAGE;
  }

  if (Validator.isEmpty(data.selectOne)) {
    errors.selectOne = SELECT_CATEGORIES;
  }

  if (Validator.isEmpty(data.datechoose)) {
    errors.datechoose = DATE_CHOOSE;
  }

  if (Validator.isEmpty(data.fileupload)) {
    errors.fileupload = FILE_UPLOAD;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
