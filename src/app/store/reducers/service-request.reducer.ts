import { ServiceRequestActionTypes } from '../actions/service-request.actions';
import { CustomAction } from '../custom-action';

export interface ServiceRequest {
  repairServices: boolean[],
  firstName: string,
  lastName: string,
  email: string
}

export const initialState: ServiceRequest = {
  repairServices: [
    true,
    false,
    false,
    true,
    false,
    true,
    false
  ],
  firstName: "Dee",
  lastName: "Fault",
  email: "theoriginal@standard.com"
};

export function reducer(state = initialState, action: CustomAction): ServiceRequest {
  switch (action.type) {
    case ServiceRequestActionTypes.SubmitServiceRequest: {
      console.log(action)
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
}
