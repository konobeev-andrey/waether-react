import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherApi} from "../api/weatherApi";

export const getWeatherInCity = createAsyncThunk('weatherCity/getWeather',
    async ([lat, lon]) => {
        const r = await weatherApi.getWeather(lat, lon).then(response => {
           const  {current, hourly, daily, alerts, timezone_offset} = {...response.data}
           return {current, hourly, daily, alerts, timezone_offset}
        })
        return r
    })


const weatherCitySlice = createSlice({
    name: 'weatherCity',
    initialState: {
        pending: true,
        value: 'Россия, г Москва',
        lat: 55.75396,
        lon: 37.620393,
        geoname_id: 524894,
        data: null
    },
    reducers: {
        choose(state, action) {
            state.lat = action.payload.data.geo_lat
            state.lon = action.payload.data.geo_lon
            state.value = action.payload.value
            state.geoname_id = action.payload.data.geoname_id
        },
        setWeatherCity(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: {
        [getWeatherInCity.pending]: (state, action) => {
            state.pending = true
        },
        [getWeatherInCity.fulfilled]: (state, action) => {
            state.data = action.payload
            state.pending = false
        },
        [getWeatherInCity.rejected]: (state, action) => {

        },
    }
})

export const {choose} = weatherCitySlice.actions

export default weatherCitySlice.reducer
