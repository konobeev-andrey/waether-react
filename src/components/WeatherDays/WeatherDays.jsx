import React from "react";
import {useSelector} from "react-redux";
import Item from "../Item/Item";
import './WeatherDays.css'


const WeatherDays = () => {
    const days = useSelector(state => state.rootReducer.city.data.daily).filter((day, index) => {
        if(index === 0 ) return false
        if(index ===7 ) return false
        return true
    })
    const getDate = (dt) => {
        const currentDate = new Date(+(dt + '000')).toLocaleString('ru', {
            month: 'short',
            day: 'numeric'
        })
        return currentDate
    }
    console.log(days)
    return (<div className="weather-day">
        {days.map((day, key) => <Item key={key}
                                      temp={Math.round(day.temp.day)}
                                      iconCode={day.weather[0].icon}
                                      time={getDate(day.dt)}
        />)}
    </div>)
}
export default WeatherDays;