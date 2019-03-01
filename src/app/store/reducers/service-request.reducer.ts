import { Action } from '@ngrx/store';
import { ServiceRequestActionTypes } from '../actions/service-request.actions';

export interface ServiceRequest {
  repairServices: number[],
  firstName: string,
  lastName: string,
  email: string
}

export const initialState: ServiceRequest = {
  repairServices: [],
  firstName: "Blort",
  lastName: null,
  email: null
};

export function reducer(state = initialState, action: Action): ServiceRequest {
  switch (action.type) {
    case ServiceRequestActionTypes.SubmitServiceRequest: {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}
