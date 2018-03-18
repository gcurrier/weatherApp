import axios from 'axios';
import apiKeys from '../keys/api_keys';

const OPEN_WEATHER_API_KEY = apiKeys.OpenWeatherApiKey ;
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