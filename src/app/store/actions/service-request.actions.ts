import { Action } from '@ngrx/store';
import { ServiceRequest } from '../reducers/service-request.reducer';
import { CustomAction } from '../custom-action';

export enum ServiceRequestActionTypes {
  LoadServiceRequestActions = '[ServiceRequestAction] Load ServiceRequestActions',
  SubmitServiceRequest = '[ServiceRequestActions] Submit ServiceRequest'
}

export class LoadServiceRequestActions implements Action {
  readonly type = ServiceRequestActionTypes.LoadServiceRequestActions;
  constructor(public payload: any = null) {}
}

export class SubmitServiceRequest implements CustomAction {
  readonly type = ServiceRequestActionTypes.SubmitServiceRequest;
  constructor(public payload: ServiceRequest = null) {}
}

export type ServiceRequestActions = LoadServiceRequestActions;
