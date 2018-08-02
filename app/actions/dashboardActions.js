import 'whatwg-fetch';
import { FETCH_DASHBOARD_DATA } from './types';
import { handleResponse } from './utils';

export function fetchDashboardData(dashboard) {
  return {
    type: FETCH_DASHBOARD_DATA,
    dashboard,
  };
}

export function getDashboardAction() {
  return dispatch =>
    fetch('https://codepen.io/jobs.json', {
      method: 'get',
    })
      .then(handleResponse)
      .then(res => dispatch(fetchDashboardData(res)));
}
