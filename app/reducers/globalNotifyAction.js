import { GLOBAL_NOTIFICATION } from '../actions/types';

export default (state = { message: '', type: '' }, action = {}) => {
  switch (action.type) {
    case GLOBAL_NOTIFICATION:
      return action.status;
    default:
      return state;
  }
};
