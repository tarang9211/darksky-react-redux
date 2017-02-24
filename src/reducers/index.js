import { combineReducers } from 'redux';
import ForecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  forecase: ForecastReducer
});

export default rootReducer;
