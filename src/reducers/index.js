import { combineReducers } from 'redux';
import ForecastReducer from './reducer_forecast';
import LocationReducer from './reducer_location';

// Represents the entire application state
const rootReducer = combineReducers({
  forecast: ForecastReducer,
  location: LocationReducer
});

export default rootReducer;
