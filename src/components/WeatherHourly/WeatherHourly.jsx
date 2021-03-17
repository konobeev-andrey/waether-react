import React from 'react';
import './WeatherHourly.css'
import Item from "../Item/Item";
import {useSelector} from "react-redux";
import {getHourAndMinuteRuNumeric, getHourly, getTimeZoneSelector} from '../../Redux/selectors'
import {useHorizontalScroll} from './../../hooks/useHorizontalScroll'

const WeatherHourly = () => {

    const weatherHourly = useSelector(getHourly)
    const timeZone = useSelector(getTimeZoneSelector)
    const scrollRef = useHorizontalScroll()

    return (
        <div className="weather-hourly custom-scroll" ref={scrollRef}>
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