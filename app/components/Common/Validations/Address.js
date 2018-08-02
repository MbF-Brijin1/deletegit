import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import { COUNTRY_NAME ,POST_CODE, ADDRESS, EMAIL_ADDRESS, CITY,EMPTY_DATA } from './customMessage';

// Signin validation
export function validateInput(data) {
  const errors = {};


  if (Validator.isEmpty(data.countrytName) && Validator.isEmpty(data.postcode) && Validator.isEmpty(data.address) && Validator.isEmpty(data.city)) {
    errors.countrytName = EMPTY_DATA;
  }

 

  if (Validator.isEmpty(data.postcode)) {
    errors.postcode = POST_CODE;
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = ADDRESS;
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = CITY;
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
}

