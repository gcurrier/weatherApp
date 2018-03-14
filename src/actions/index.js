import axios from 'axios';

const OPEN_WEATHER_API_KEY = '5fa998c8439776c11ccff3aa4e462972';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},DE`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}