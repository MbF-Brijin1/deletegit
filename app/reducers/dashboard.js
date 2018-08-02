import { FETCH_DASHBOARD_DATA } from 'actions/types';

const initialState = {
  jobs: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA:
      return action.dashboard;
    default:
      return state;
  }
};
