import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getSaveCitySelector} from "../../../Redux/selectors";

const FavoritesCity = () => {
    const saveCity = useSelector(getSaveCitySelector)
    const [arrSaveCity, setArrSaveCity] = useState([])

    useEffect(()=>{
        console.log(saveCity)
        for(let key in saveCity.list){
            setArrSaveCity([...arrSaveCity, saveCity.list[key]])
        }
        console.log(arrSaveCity)
    },[saveCity])

    return(
        <div>

            <ul>
                {arrSaveCity.map((s, key) => <li key={key}>{s.city}</li> )}
            </ul>
        </div>
    )
}
export default FavoritesCity