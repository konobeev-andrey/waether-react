import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherApi} from "../api/weatherApi";

const saveCity = createSlice({
    name: 'saveCity',
    initialState:{list:{}},
    reducers: {
        addCity(state, action) {
            const value = action.payload.value
            state.list[action.payload.value] = {...action.payload}
            
            let saveCity = JSON.parse(localStorage.getItem('saveCity')) || {}
            saveCity[value] =  {...action.payload}
            localStorage.setItem('saveCity', JSON.stringify( saveCity ))
        },
        
    },
})

export const {addCity} = saveCity.actions

export default saveCity.reducer