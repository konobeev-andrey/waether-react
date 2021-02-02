import React from 'react';
import './WeatherCityNow.css';
import cn from 'classnames'
import icon from '../../image/IconWeather/04n.png'
import iconWind from '../../image/wind.png'
import iconHumidity from '../../image/humidity.png'
import iconPressure from '../../image/pressure.png'
import {connect} from "react-redux";

const WeatherCityNow = (props) => {


    return props.pending ? <h1>111111</h1> :(
        <div className='weather-toDay'> 
        <div className='weather-toDay__block-now'>
            <div className='wrapper-sity-date'>
                <div className='wrapper-sity-date__name-sity'>{props.city}</div>
                <div className='wrapper-sity-date__today-date'>{props.date}</div>
            </div>
            <div className="weather-now">
                <div className="weather-now__temperature">
                    <p>{props.temp}°</p>
                    <img src={icon} alt="Icon"/>
                </div>
                <div className="weather-now__description">
                    <p>{props.description}</p>
                    <p>ощущается как {props.feelsLike}°</p>
                </div>
                <div className="weather-now__wind-humidity-pressure">
                    <div className="weather-now__wind">
                        <img src={iconWind} alt="Icon"/>
                        <p>{props.windSpeed} м/с, ЮЗ</p>
                    </div>
                    <div className="weather-now__humidity">
                        <img src={iconHumidity} alt="Icon"/>
                        <p>{props.humidity}%</p>
                    </div>
                    <div className="weather-now__pressure">
                        <img src={iconPressure} alt="Icon"/>
                        <p>{props.pressure} мм</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="weather-hourly">
                <div className="item">
                    <p className='item__time'>00:00</p>
                    <div><img src={icon} alt="Icon"/></div>
                    <p className='item__temperature'>+2.3°</p>
                </div>
                <div className="item">
                    <p className='item__time'>00:00</p>
                    <div><img src={icon} alt="Icon"/></div>
                    <p className='item__temperature'>+2.3°</p>
                </div>
                <div className="item">
                    <p className='item__time'>00:00</p>
                    <div><img src={icon} alt="Icon"/></div>
                    <p className='item__temperature'>+2.3°</p>
                </div>
                <div className="item">
                    <p className='item__time'>00:00</p>
                    <div><img src={icon} alt="Icon"/></div>
                    <p className='item__temperature'>+2.3°</p>
                </div>
                <div className="item">
                    <p className='item__time'>00:00</p>
                    <div><img src={icon} alt="Icon"/></div>
                    <p className='item__temperature'>+2.3°</p>
                </div>
                <div className="item">
                    <p className='item__time'>00:00</p>
                    <div><img src={icon} alt="Icon"/></div>
                    <p className='item__temperature'>+2.3°</p>
                </div>
                <div className="item">
                    <p className='item__time'>00:00</p>
                    <div><img src={icon} alt="Icon"/></div>
                    <p className='item__temperature'>+2.3°</p>
                </div>
                <div className="item">
                    <p className='item__time'>00:00</p>
                    <div><img src={icon} alt="Icon"/></div>
                    <p className='item__temperature'>+2.3°</p>
                </div>

            </div>
        </div>
    );
};

const getDate = (store) => {
    const dt = store.rootReducer.city.data.current.dt
    const currentDate =  new Date(+(dt + '000')).toLocaleString('ru', {
        month: 'short',
        day: 'numeric'
    })
    return currentDate
}
const mstp = (store) => ({
    city: store.rootReducer.city.value,
    date: getDate(store),
    temp: store.rootReducer.city.data.current.temp,
    feelsLike: store.rootReducer.city.data.current.feels_like,
    humidity: store.rootReducer.city.data.current.humidity,
    windSpeed: store.rootReducer.city.data.current.wind_speed,
    pressure: store.rootReducer.city.data.current.pressure,
    description: store.rootReducer.city.data.current.weather[0].description,
})
export default connect(mstp,{})(WeatherCityNow);

