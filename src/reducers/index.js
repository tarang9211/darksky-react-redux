import { combineReducers } from 'redux';
import ForecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  forecast: ForecastReducer
});

export default rootReducer;
