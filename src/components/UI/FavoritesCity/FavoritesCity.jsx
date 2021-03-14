import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getSaveCitySelector} from "../../../Redux/selectors";
import './favoritesCity.css'


const FavoritesCity = () => {
    const saveCity = useSelector(getSaveCitySelector)
    const [arrSaveCity, setArrSaveCity] = useState([])

    useEffect(()=>{
        const arr = [];
        for(let key in saveCity.list){
            arr.push(saveCity.list[key])
        }
        setArrSaveCity(arr)
        console.log(arrSaveCity)
    },[saveCity])

    return(
        <div className='favorites-city-wrapper'>
            <ul>
                {arrSaveCity.map((s, key) => <li key={key}>{s.city}</li> )}
            </ul>
        </div>
    )
}
export default FavoritesCity