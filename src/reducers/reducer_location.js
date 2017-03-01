import { FETCH_LOCATION } from '../actions/index';

const INITIAL_STATE = { location: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_LOCATION:
    return { ...state, location: action.payload.data };
  default:
    return state;
  }
}
