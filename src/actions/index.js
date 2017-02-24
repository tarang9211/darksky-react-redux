import axios from 'axios'

//setting up constants
const rootUrl = 'https://api.darksky.net/forecast';
const API_KEY = '61bbaae2f63f32da32c845cdb2eea9a8';

export const FETCH_FORECAST = 'FETCH_FORECAST';

export function fetchForecast(props) {
  const { latitude, longitude } = props;
  // const request = fetch(`/api/forecast?latitude=${latitude}&longitude=${longitude}`)
  const request = axios.get('/api')
  console.log(request);

  return {
    type: FETCH_FORECAST,
    payload: request,
  }
}
