import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN
} from '../../constants/Weathers';

const location = "Barranco, PE";
const api_key = "b4f34322ad75d46b137a6e3d9d0aa468";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Barranco",
            data: data
        };
    }

    handleUpdateClick = () => {
        console.log("Actualizado");
        fetch(api_weather);
        this.setState({
            city:"Miraflores"
        });
    }

    render() {
        const { city, data } = this.state;
        return (<div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);
    }
};

export default WeatherLocation;