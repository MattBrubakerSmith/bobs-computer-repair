import { Action } from '@ngrx/store';
import { UserActionTypes } from "../actions/user.actions";
import { BobJob } from 'src/app/bobs-services/bob-job';

export interface User {
  bobJobs: BobJob[],
  firstName: string,
  lastName: string,
  email: string
}

export const initialState: User = {
  bobJobs: [],
  firstName: null,
  lastName: null,
  email: null
};

export function reducer(state = initialState, action: Action): User {
  switch (action.type) {
    case UserActionTypes.AddBobJob: {
      return {
        ...state,
        bobJobs: [
          ...state.bobJobs
        ]
      }
    }
    default:
      return state;
  }
}
