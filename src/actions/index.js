import axios from 'axios';

//const API_KEY = 'dj0yJmk9ejlCMjd6ZFI5c21VJmQ9WVdrOVNHMWhhMFoyTjJNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1jMQ--';
export const FETCH_WEATHER = 'FETCH_WEATHER';

//AJAX:GET using axios
export function fetchWeather(city){
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
    var url = 'https://query.yahooapis.com/v1/public/yql?q=' + searchtext + '&format=json'


    const request = axios.get(url)

    console.log('request',request)

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}