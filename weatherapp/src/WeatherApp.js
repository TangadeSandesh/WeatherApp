import { useState } from "react";
import "./style.css";

import ico_01d from "../src/WeatherApp_icons/Assets/01d.png";
import ico_01n from "../src/WeatherApp_icons/Assets/01n.png";
import ico_02dn from "../src/WeatherApp_icons/Assets/02dn.png";
import ico_09dn from "../src/WeatherApp_icons/Assets/09dn.png";
import ico_10d from "../src/WeatherApp_icons/Assets/10d.png";
import ico_10n from "../src/WeatherApp_icons/Assets/10n.png";
import ico_11n from "../src/WeatherApp_icons/Assets/11dn.png";
import ico_13d from "../src/WeatherApp_icons/Assets/13d.png";
import ico_13n from "../src/WeatherApp_icons/Assets/13n.png";
import ico_034dn from "../src/WeatherApp_icons/Assets/034dn.png";
import ico_50dn from "../src/WeatherApp_icons/Assets/50dn.png";
import ico_default from "../src/WeatherApp_icons/Assets/day-and-night.png";
import search_icon from "../src/WeatherApp_icons/Assets/search.png"
import humidity_icon from "../src/WeatherApp_icons/Assets/humidity.png"
import wind_icon from "../src/WeatherApp_icons/Assets/wind.png"

const WeatherApp=() =>{

    const [wicon, setwicon] = useState(ico_default);
const search = async()=>{
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value==="")
    {
        return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=bce2e1b8ed16c7feef62192c642b42c0`;
    const response= await fetch(url);
    const data= await response.json();
    
    const humidity=document.getElementsByClassName("humidity-percent");
    const wind=document.getElementsByClassName("wind-rate");
    const temprature=document.getElementsByClassName("weather-temp");
    const location=document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = Math.floor(data.main.humidity)+" %";
    wind[0].innerHTML=Math.floor(data.wind.speed)+" KM";
    temprature[0].innerHTML=Math.floor(data.main.temp)+" °C";
    location[0].innerHTML =data.name;

    if(data.weather[0].icon==="01d")
    {
        setwicon(ico_01d);
    }
    else if(data.weather[0].icon==="01n")
    {
        setwicon(ico_01n);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
        setwicon(ico_02dn);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
        setwicon(ico_09dn);
    }
    else if(data.weather[0].icon==="10d")
    {
        setwicon(ico_10d);
    }
    else if(data.weather[0].icon==="10n")
    {
        setwicon(ico_10n);
    }
    else if(data.weather[0].icon==="13d")
    {
        setwicon(ico_13d);
    }
    else if(data.weather[0].icon==="13n")
    {
        setwicon(ico_13n);
    }
    else if(data.weather[0].icon==="13d")
    {
        setwicon(ico_13d);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n" || data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
        setwicon(ico_034dn);
    }
    else if(data.weather[0].icon==="50d" || data.weather[0].icon==="50n")
    {
        setwicon(ico_50dn);
    }
    else if (data.weather[0].icon==="11d" || data.weather[0].icon==="11n")
    {
        setwicon(ico_11n);
    }
    else{
        setwicon(ico_default);
    }
    

}

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search City" />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt=""/>
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt=""/>
            </div>
            <div className="weather-temp">Temp°C</div>
            <div className="weather-location">City</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent"   >%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">km</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
                
            </div>
            <center>
                    <div className="footer-panel3">
                    <h2>WeatherApp by Sandesh</h2>
                    <h3>Copyright © 2023</h3>
                    </div>
                </center>

        </div>
    )
}
export default WeatherApp;