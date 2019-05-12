import { createSelector } from '@ngrx/store';

import { getRouterState } from './router.reducer';

/**
 * Returns only the params from the router state. If
 * params don't exist, then return null
 */
export const getRouterParams = createSelector(getRouterState, routerState => {
  if (!routerState.state && routerState.state.params) {
    return null;
  }

  return routerState.state.params;
});

export const getRouterQueryParams = createSelector(getRouterState, routerState => {
  if (!routerState.state && routerState.state.queryParams) {
    return null;
  }

  return routerState.state.queryParams;
});

/**
 * Returns the value of the given param string (or undefined)
 */
export const getParam = (name: string) =>
  createSelector(getRouterParams, params => params[name]);
