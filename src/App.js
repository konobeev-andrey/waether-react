import React, {useEffect} from 'react'
import style from './app.module.css';
import './App.css'
import {UI} from  './components/UI'
// import WeatherCityNow from "./components/WeatherCityNow/WeatherCityNow";
import icon from "./image/IconWeather/04n.png";
import {choose, getWeatherInCity} from "./Redux/weatherCitySlice";
import {connect, useDispatch} from "react-redux";
import WeatherCityNowCopy from "./components/WeatherCityNowCopy/WeatherCityNow";
import WeatherDays from "./components/WeatherDays/WeatherDays";
import FavoritesCity from "./components/UI/FavoritesCity/FavoritesCity.jsx";
import {cityByCoordinates} from "./api/weatherApi";


const {Search} =UI

const App = (props) => {
    const dispatch = useDispatch()

    useEffect(async ()=>{
        const{lat, lon} = props.match.params
        const data = await cityByCoordinates(lat, lon) || {geo_lat:lat, geo_lon:lon}

        dispatch(choose({data}))
    },[props.match.params])

    useEffect( () => {
       if(props.lat && props.lon) {
            dispatch(getWeatherInCity([props.lat, props.lon]));
        }
    }, [props.lat,props.lon])

    return (
        <div className='background_image'>
            <div className='background_shadow'>
                <div className="App">
                    <FavoritesCity history={props.history}/>
                    <Search history={props.history} className='Search--layout'/>
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
export default connect(mstp,{getWeatherInCity,choose})(App);
