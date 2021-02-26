import React from "react";
import {useSelector} from "react-redux";
import Item from "../Item/Item";
import './WeatherDays.css'
import {getDays, getDayRuNumeric} from '../../Redux/selectors'


const WeatherDays = () => {
    
    const days = useSelector(getDays)

    return (<div className="weather-day">
        {days.map((day, key) => <Item key={key}
                                      temp={Math.round(day.temp.day)}
                                      iconCode={day.weather[0].icon}
                                      time={getDayRuNumeric(day.dt)}
        />)}
    </div>)
}
export default WeatherDays;