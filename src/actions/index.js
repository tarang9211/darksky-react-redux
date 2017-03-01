import axios from 'axios'

export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCH_LOCATION = 'FETCH_LOCATION';

export function fetchForecast(props) {
  const { latitude, longitude } = props;
  const request = axios.get(`http://localhost:8081/api/forecast?latitude=${latitude}&longitude=${longitude}`)

  return {
    type: FETCH_FORECAST,
    payload: request,
  }
}

export function fetchLocation(props) {
  const { latitude, longitude } = props;
  const request = axios.get(`http://localhost:8081/api/location?latitude=${latitude}&longitude=${longitude}`)

  return {
    type: FETCH_LOCATION,
    payload: request,
  }
}
