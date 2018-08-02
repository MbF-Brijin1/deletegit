import { COLLAPSE_MENU_ACTIONS } from '../actions/types';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case COLLAPSE_MENU_ACTIONS:
      return action.collapse;
    default:
      return state;
  }
};
