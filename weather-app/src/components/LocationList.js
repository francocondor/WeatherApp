import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const LocationList = ({cities}) => (
    <div>
        <WeatherLocation city="Barranco, PE" />
        <WeatherLocation city="Bogota,col" />
        <WeatherLocation city="Mexico,mex" />
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;

/*
<WeatherLocation city="Buenos Aires,ar" />
<WeatherLocation city="Washington,us" />
<WeatherLocation city="Barcelona,es" />*/