import 'whatwg-fetch';
import { GLOBAL_NOTIFICATION } from './types';

export function setGlobalMessage(status) {
  return {
    type: GLOBAL_NOTIFICATION,
    status,
  };
}

export function globalNotificationAction(status) {
  return dispatch => dispatch(setGlobalMessage(status));
}
