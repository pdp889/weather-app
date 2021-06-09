import {Weather} from "./weather";
import {DOM} from "./DOM";

const getWeather  = (cityChoice, deg) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityChoice}&appid=8beddfd7dd7c2eba0cfa597f3f09ce16`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            let newWeather = new Weather (response.name, response.sys.country, response.main.temp, response.main.temp_max, response.main.temp_min, response.weather[0].description, deg);
            DOM.createWeatherCard(newWeather);
        })
        .catch(e => {
            alert('not found: ' + e);
        })
    
}

const addFButton = document.querySelector('#add-F');
const addCButton = document.querySelector('#add-C');
const cityInput = document.querySelector('#city');
addFButton.addEventListener('click', ()=> {
    console.log(cityInput.value)
    getWeather(cityInput.value, 'F');
    document.querySelector('#city').value='';
});
addCButton.addEventListener('click', ()=> {
    console.log(cityInput.value)
    getWeather(cityInput.value, 'C');
    document.querySelector('#city').value='';
});