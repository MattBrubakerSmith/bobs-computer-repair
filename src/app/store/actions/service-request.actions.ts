import { Action } from '@ngrx/store';
import { ServiceRequest } from '../reducers/service-request.reducer';

export enum ServiceRequestActionTypes {
  LoadUserActions = '[UserAction] Load UserActions',
  SubmitServiceRequest = '[UserActions] Submit ServiceRequest'
}

export class LoadServiceRequestActions implements Action {
  readonly type = ServiceRequestActionTypes.LoadUserActions;
}

export class SubmitServiceRequest implements Action {
  readonly type = ServiceRequestActionTypes.SubmitServiceRequest;
  constructor(public payload: ServiceRequest) {}
}

export type ServiceRequestActions = LoadServiceRequestActions;
