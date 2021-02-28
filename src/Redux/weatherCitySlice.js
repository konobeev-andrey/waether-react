import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherApi} from "../api/weatherApi";

export const getWeatherInCity = createAsyncThunk('weatherCity/getWeather',
    async ([lat, lon]) => {
        const r = await weatherApi.getWeather(lat, lon).then(response => {
           const  {current, hourly, daily, alerts, timezone} = {...response.data}
           return {current, hourly, daily, alerts, timezone}
        })
        return r
    })

const getReductionValue = (action) => {
    return action.payload.data.settlement ?
        `${action.payload.data.settlement_type}. ${action.payload.data.settlement}`:
        `${action.payload.data.city_type}. ${action.payload.data.city}`;
}

const weatherCitySlice = createSlice({
    name: 'weatherCity',
    initialState: {
        pending: true,
        value: 'г. Москва',
        lat: 55.75396,
        lon: 37.620393,
        geoname_id: 524894,
        data: null
    },
    reducers: {
        choose(state, action) {
            console.log(action.payload.settlement_with_type)
            state.lat = action.payload.data.geo_lat
            state.lon = action.payload.data.geo_lon
            state.value =  getReductionValue(action)
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
