import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import { CARD_NUMBER, EXPIRY_DATE, CITY, CCV, PROMOCODE,EMPTY_DATA } from './customMessage';

// Signin validation
export function validateInput(data) {
  const errors = {};

  if (Validator.isEmpty(data.cardNumber) && Validator.isEmpty(data.expiryDate) && Validator.isEmpty(data.city) && Validator.isEmpty(data.ccv) && Validator.isEmpty(data.promoCode)) {
    errors.cardNumber = EMPTY_DATA;
  }

  if (!Validator.isLength(data.cardNumber, { min: 6 }) && !Validator.isEmpty(data.cardNumber)) {
    errors.cardNumber = CARD_NUMBER;
  }

  if (Validator.isEmpty(data.expiryDate)) {
    errors.expiryDate = EXPIRY_DATE;
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = CITY;
  }
  if (Validator.isEmpty(data.ccv)) {
    errors.ccv = CCV;
  }
  if (Validator.isEmpty(data.promoCode)) {
    errors.promoCode = PROMOCODE;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

