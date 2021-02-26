import React from 'react';
import './WeatherHourly.css'
import Item from "../Item/Item";
import {useSelector} from "react-redux";
import {getHourly} from '../../Redux/selectors'

const WeatherHourly = ({hourly}) => {
    const weatherHourly = useSelector(getHourly)
    return (
        <div className="weather-hourly">
            {weatherHourly.map((hour, key) => {
                return (<Item key={key}
                              time={getHourAndMinuteRuNumeric(hour.dt)}
                              temp={Math.round(hour.temp)}
                              iconCode={ hour.weather[0].icon}/>)
            })}
        </div>
    )
}
const getDateToLocaleString = (dt, locales, options) => {
    return new Date( +(dt + '000')).toLocaleString(locales, options)
}
const getHourAndMinuteRuNumeric = (dt) => {
    return getDateToLocaleString(dt, "ru", {hour: 'numeric', minute: 'numeric'})
}
const getDayRuNumeric = (dt) => {
    return getDateToLocaleString(dt, 'ru', {month: 'short', day: 'numeric'})
}
export default WeatherHourly