import axios from 'axios';

// const API_KEY = '858bf0dcb836c4e83d66fed23438eb0d';


const API_KEY = '6a78596d062df78380eff5944c4e5567';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


// const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH-WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    // ajax request which returns a promise, which is then passed to the actions payload property
    const request = axios.get(url);

    // returning an action, always has to have a type
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}