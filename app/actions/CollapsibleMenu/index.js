import 'whatwg-fetch';
import { COLLAPSE_MENU_ACTIONS } from '../types';

export function setCollapse(collapse) {
  return {
    type: COLLAPSE_MENU_ACTIONS,
    collapse,
  };
}

export function collapsibleActions(collapse) {
  return dispatch => dispatch(setCollapse(collapse));
}
