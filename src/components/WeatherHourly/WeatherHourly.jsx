import React from 'react';
import './WeatherHourly.css'
import Item from "../Item/Item";

const WeatherHourly = ({hourly,icon}) => {
    const g = hourly.map((hour) => {
       return (<div className="item">
            <p className='item__time'>00:00</p>
            <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
            <p className='item__temperature'>{hour.temp}°</p>
        </div>)
    })

    return (
        <div className="weather-hourly">
            {hourly.map((hour, key) => {
                return (<Item key={key}
                              time={new Date( +(hour.dt + '000')).toLocaleString("ru", {hour: 'numeric', minute: 'numeric'})}
                              temp={Math.round(hour.temp)}
                              iconCode={ hour.weather[0].icon}/>)
            })}
        </div>
    )
}

export default WeatherHourly