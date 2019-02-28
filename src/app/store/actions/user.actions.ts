import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUserActions = '[UserAction] Load UserActions',
  AddBobJob = '[UserAction] Add BobJob',
  RemoveBobJob = '[UserAction] Remove BobJob',
  SubmitServiceRequest = '[UserActions] Submit ServiceRequest'
}

export class LoadUserActions implements Action {
  readonly type = UserActionTypes.LoadUserActions;
}

export class AddBobJob<BobJob> implements Action {
  readonly type = UserActionTypes.AddBobJob;
  
}

export class RemoveBobJob implements Action {
  readonly type = UserActionTypes.RemoveBobJob;
}

export class SubmitServiceRequest implements Action {
  readonly type = UserActionTypes.SubmitServiceRequest;
}

export type UserActions = LoadUserActions;
