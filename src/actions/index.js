import axios from 'axios'

//setting up constants
const rootUrl = 'https://api.darksky.net/forecast';
const API_KEY = '61bbaae2f63f32da32c845cdb2eea9a8';

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
