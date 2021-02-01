import React, {useEffect} from 'react'
import style from './app.module.css';
import './App.css'
import {UI} from  './components/UI'
import WeatherCityNow from "./components/WeatherCityNow/WeatherCityNow";
import icon from "./image/IconWeather/04n.png";
import {getWeatherInCity} from "./Redux/weatherCitySlice";
import {connect, useDispatch} from "react-redux";


const {Search} =UI

const App = (props) => {
    const dispatch = useDispatch()

    useEffect( () => {
       if(props.lat && props.lon) {
            dispatch(getWeatherInCity([props.lat, props.lon]));
        }
    }, [props.lat,props.lon])

    return (
        <div className={style.background_image}>
            <div className={style.background_shadow}>
                <div className={style.App}>
                    <Search className='Search--layout'/>
                    <div className={style.wrapper_content}>
                        {props.pending ? <h1>22222</h1> : <WeatherCityNow/>}
                        <div className="weather-day">
                            <div className="item">
                                <p className='item__time'>28 Nov</p>
                                <div><img src={icon} alt="Icon"/></div>
                                <p className='item__temperature'>+2.3°</p>
                            </div>
                            <div className="item">
                                <p className='item__time'>29 Nov</p>
                                <div><img src={icon} alt="Icon"/></div>
                                <p className='item__temperature'>+2.3°</p>
                            </div>
                            <div className="item">
                                <p className='item__time'>30 Nov</p>
                                <div><img src={icon} alt="Icon"/></div>
                                <p className='item__temperature'>+2.3°</p>
                            </div>
                            <div className="item">
                                <p className='item__time'>1 Dev</p>
                                <div><img src={icon} alt="Icon"/></div>
                                <p className='item__temperature'>+2.3°</p>
                            </div>
                            <div className="item">
                                <p className='item__time'>2 Dev</p>
                                <div><img src={icon} alt="Icon"/></div>
                                <p className='item__temperature'>+2.3°</p>
                            </div>
                            <div className="item">
                                <p className='item__time'>3 Dev</p>
                                <div><img src={icon} alt="Icon"/></div>
                                <p className='item__temperature'>+2.3°</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mstp = (store) => ({
    lon: store.rootReducer.city.lon,
    lat: store.rootReducer.city.lat,
    pending: store.rootReducer.city.pending,
})
export default connect(mstp,{getWeatherInCity})(App);
