import {API_KEY} from '../js/env.js';

const citySpan = document.querySelector('.city');
const temperatureSpan = document.querySelector('.temperature');
const cur_temperatureSpan = document.querySelector('.cur-temperature')

const sendWeatherRequest = async(lat,lng)=>{
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);
        if(!response.ok){
            throw new Error('fetch Failure');
        }
        const data = await response.json();
        const temp = data.main;
        citySpan.innerText = data.name;
        temperatureSpan.innerText= `최고:${Math.floor(temp.temp_max)} °C / 최저:${Math.floor(temp.temp_min)} °C`;
        cur_temperatureSpan.innerText=`현재:${Math.floor(temp.temp)} °C / 체감:${Math.floor(temp.feels_like)} °C`
    }catch(err){
        alert(err.message);
    }
}
const onGeoListener = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    sendWeatherRequest(lat,lng); 
}

const onGeoError = (err)=> {
    alert(err.message);
}

navigator.geolocation.getCurrentPosition(onGeoListener,onGeoError);