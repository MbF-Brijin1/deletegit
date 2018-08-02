// Empty placeholder to reserve reducer namespace.
// Otherwise redux may complain when we asyncrhonously
// inject reducers.

/**
 * Routing to be implemented
 */
import { combineReducers } from 'redux';
import dashboard from 'reducers/dashboard';
import globalAction from 'reducers/globalNotifyAction';
import collapsMenu from 'reducers/collapsMenu';

export default combineReducers({
  dashboard,
  globalAction,
  collapsMenu,
});
