import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo'; 
import {
    SUN
} from '../constants/Weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={SUN}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;