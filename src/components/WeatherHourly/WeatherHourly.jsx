import React from 'react';
import './WeatherHourly.css'
import Item from "../Item/Item";
import {useSelector} from "react-redux";
import {getHourAndMinuteRuNumeric, getHourly, getTimeZoneSelector} from '../../Redux/selectors'

const WeatherHourly = () => {

    const weatherHourly = useSelector(getHourly)
    const timeZone = useSelector(getTimeZoneSelector)

    return (
        <div className="weather-hourly">
            {weatherHourly.map((hour, key) => {
                return (<Item key={key}
                              time={getHourAndMinuteRuNumeric(hour.dt, timeZone)}
                              temp={Math.round(hour.temp)}
                              iconCode={hour.weather[0].icon}/>)
            })}
        </div>
    )
}

export default WeatherHourly