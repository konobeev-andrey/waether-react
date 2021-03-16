import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getSaveCitySelector} from "../../../Redux/selectors";
import './favoritesCity.css'
import {Link} from "react-router-dom";


const FavoritesCity = () => {
    const saveCity = useSelector(getSaveCitySelector)
    const [arrSaveCity, setArrSaveCity] = useState([])

    useEffect(()=>{
        const arr = [];
        for(let key in saveCity.list){
            arr.push(saveCity.list[key])
        }
        setArrSaveCity(arr)

    },[saveCity])

    return(
        <div className='favorites-city-wrapper'>
            <ul>
                {arrSaveCity.map((s, key) => <li key={key}><Link to={`/${s.lat}/${s.lon}`}>{s.city}</Link></li> )}
            </ul>
        </div>
    )
}
export default FavoritesCity