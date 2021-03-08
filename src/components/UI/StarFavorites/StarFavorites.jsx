import React, {useEffect, useState} from "react";
import iconStar from "../../../image/icons8-star-50.png";
import iconStar2 from "../../../image/star-2.png";
import './starFavorites.css'
import {useDispatch, useSelector} from "react-redux";
import {addCity, deleteSaveCity, getSaveCityOfLocalStorage} from "../../../Redux/saveCity";
import {getFavoritesCity, getSaveCitySelector} from "../../../Redux/selectors";


const StarFavorites = () => {
    const [favorites, setFavorites] = useState(false)

    const saveCity = useSelector(getSaveCitySelector)
    const city = useSelector(getFavoritesCity)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSaveCityOfLocalStorage())
    },[])

    useEffect(() => {
        for(let key in saveCity.list) {
            if( key === city.city) {
                setFavorites(true)
                return
            }
        }
        setFavorites(false)
    },[saveCity])

    return (
        <div className='wrapperImg wrapper-sity-date__star-favorites'>
            {favorites
                ? <img onClick={()=> dispatch(deleteSaveCity(city))} src={iconStar2}/>
                :  <img onClick={()=> dispatch(addCity(city))}  src={iconStar}/>}
        </div>
    )
}

export default StarFavorites