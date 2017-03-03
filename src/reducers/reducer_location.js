import { FETCH_LOCATION } from '../actions/index';

const INITIAL_STATE = { location: {} };

// Return the location from the api.
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_LOCATION:
    return { ...state, location: action.payload.data };
  default:
    return state;
  }
}
