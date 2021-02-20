import React from 'react';
import './WeatherHourly.css'

const WeatherHourly = ({icon}) => {

    return (
        <div className="weather-hourly">
            <div className="item">
                <p className='item__time'>00:00</p>
                <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
                <p className='item__temperature'>+2.3°</p>
            </div>
            <div className="item">
                <p className='item__time'>00:00</p>
                <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
                <p className='item__temperature'>+2.3°</p>
            </div>
            <div className="item">
                <p className='item__time'>00:00</p>
                <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
                <p className='item__temperature'>+2.3°</p>
            </div>
            <div className="item">
                <p className='item__time'>00:00</p>
                <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
                <p className='item__temperature'>+2.3°</p>
            </div>
            <div className="item">
                <p className='item__time'>00:00</p>
                <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
                <p className='item__temperature'>+2.3°</p>
            </div>
            <div className="item">
                <p className='item__time'>00:00</p>
                <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
                <p className='item__temperature'>+2.3°</p>
            </div>
            <div className="item">
                <p className='item__time'>00:00</p>
                <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
                <p className='item__temperature'>+2.3°</p>
            </div>
            <div className="item">
                <p className='item__time'>00:00</p>
                <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
                <p className='item__temperature'>+2.3°</p>
            </div>
        </div>
    )
}

export default WeatherHourly