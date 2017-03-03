import axios from 'axios';

export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCH_LOCATION = 'FETCH_LOCATION';

// Action-creator responsible for fetching weather forecast
export function fetchForecast(props) {
  const { latitude, longitude } = props;
  const request = axios.get(`api/forecast?latitude=${latitude}&longitude=${longitude}`);

  return {
    type: FETCH_FORECAST,
    payload: request
  };
}

// Action-creator responsible for fetching location
export function fetchLocation(props) {
  const { latitude, longitude } = props;
  const request = axios.get(`api/location?latitude=${latitude}&longitude=${longitude}`);

  return {
    type: FETCH_LOCATION,
    payload: request
  };
}
