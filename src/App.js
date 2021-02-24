import React, {useEffect} from 'react'
import style from './app.module.css';
import './App.css'
import {UI} from  './components/UI'
// import WeatherCityNow from "./components/WeatherCityNow/WeatherCityNow";
import icon from "./image/IconWeather/04n.png";
import {getWeatherInCity} from "./Redux/weatherCitySlice";
import {connect, useDispatch} from "react-redux";
import WeatherCityNowCopy from "./components/WeatherCityNowCopy/WeatherCityNow";
import WeatherDays from "./components/WeatherDays/WeatherDays";


const {Search} =UI

const App = (props) => {
    const dispatch = useDispatch()

    useEffect( () => {
       if(props.lat && props.lon) {
            dispatch(getWeatherInCity([props.lat, props.lon]));
        }
    }, [props.lat,props.lon])

    return (
        <div className='background_image'>
            <div className='background_shadow'>
                <div className="App">
                    <Search className='Search--layout'/>
                    <div className='wrapper_content'>
                        {props.pending ? <h1>22222</h1> : <WeatherCityNowCopy/>}
                        {props.pending ? <h1>22222</h1> : <WeatherDays/>}
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
