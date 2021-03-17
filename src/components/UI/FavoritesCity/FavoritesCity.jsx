import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getSaveCitySelector} from "../../../Redux/selectors";
import './favoritesCity.css'
import {Link} from "react-router-dom";
import {useHorizontalScroll} from './../../../hooks/useHorizontalScroll'




const FavoritesCity = () => {
    const saveCity = useSelector(getSaveCitySelector)
    const [arrSaveCity, setArrSaveCity] = useState([])

    const scrollRef = useHorizontalScroll()

    useEffect(()=>{
        const arr = [];
        for(let key in saveCity.list){
            arr.push(saveCity.list[key])
        }
        setArrSaveCity(arr)

    },[saveCity])

    return(
        <div className='favorites-city-wrapper'>
            <ul className='custom-scroll' ref={scrollRef}>
                {arrSaveCity.map((s, key) => <li key={key}><Link to={`/${s.lat}/${s.lon}`}>{s.city}</Link></li> )}
            </ul>
        </div>
    )
}
export default FavoritesCity