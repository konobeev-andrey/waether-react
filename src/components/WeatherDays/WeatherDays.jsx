import React from "react";
import {useSelector} from "react-redux";
import Item from "../Item/Item";
import './WeatherDays.css'
import {getDays, getDayRuNumeric, getTimeZoneSelector} from '../../Redux/selectors'


const WeatherDays = () => {
    
    const days = useSelector(getDays)
    const timeZone = useSelector(getTimeZoneSelector)

    return (<div className="weather-day">
        {days.map((day, key) => <Item key={key}
                                      temp={Math.round(day.temp.day)}
                                      iconCode={day.weather[0].icon}
                                      time={getDayRuNumeric(day.dt, timeZone)}
        />)}
    </div>)
}
export default WeatherDays;