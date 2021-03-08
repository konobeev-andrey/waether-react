import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherApi} from "../api/weatherApi";

const saveCity = createSlice({
    name: 'saveCity',
    initialState:{},
    reducers: {
        addCity(state, action) {
            const city = action.payload.city
            state.list[action.payload.city] = {...action.payload}
            
            let saveCity = JSON.parse(localStorage.getItem('saveCity')) || {}
            saveCity[city] =  {...action.payload}
            localStorage.setItem('saveCity', JSON.stringify( saveCity ))
        },
        getSaveCityOfLocalStorage(state, action) {
             state.list = JSON.parse(localStorage.getItem('saveCity')) || {}
        },
        deleteSaveCity(state, action) {
            // delete saveCity[action.payload.city]

            // delete state.list[action.payload.city]
            const newState = {}
            for(let key in state.list) {
                if (key !== action.payload.city) newState[key] = state.list[key]
            }
            state.list = newState
            localStorage.setItem('saveCity', JSON.stringify( newState ))

        }
        
    },
})

export const {addCity, getSaveCityOfLocalStorage,deleteSaveCity} = saveCity.actions

export default saveCity.reducer