import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromServiceRequest from "./service-request.reducer";

export interface State {
  serviceRequest: fromServiceRequest.ServiceRequest
}

export const reducers: ActionReducerMap<State> = {
  serviceRequest: fromServiceRequest.reducer
};
