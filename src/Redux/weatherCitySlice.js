import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherApi,cityByCoordinates} from "../api/weatherApi";


export const getWeatherInCity = createAsyncThunk('weatherCity/getWeather',
    async ([lat, lon]) => {
        const r = await weatherApi.getWeather(lat, lon).then(response => {
           const  {current, hourly, daily, alerts, timezone} = {...response.data}
           return {current, hourly, daily, alerts, timezone}
        })
        return r
    })

    export const getCityByCoordinates = createAsyncThunk('weatherCity/getCityByCoordinates',
    async ([lat, lon]) => {
        const r = await cityByCoordinates(lat, lon).then(response => {
            console.log(response)
           return response || {geo_lat:lat, geo_lon:lon}
        })
        return r
    })

const getReductionValue = (data) => {
    if(!data.settlement && !data.city) return 'Неизвестный населенный пункт'
    return data.settlement ?
        `${data.settlement_type}. ${data.settlement}`:
        `${data.city_type}. ${data.city}`;
}
const setChooseState = (state, action) => {
    const data = action.payload.data
    state.lat = data.geo_lat
    state.lon = data.geo_lon
    state.value =  getReductionValue(data)
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
            setChooseState(state, action)
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
            state.data = action.payload;
            state.pending = false
        },
        [getWeatherInCity.rejected]: (state, action) => {

        },
        [getCityByCoordinates.pending]: (state, action) => {
            state.pending = true
        },
        [getCityByCoordinates.fulfilled]: (state, action) => {
            setChooseState(state, action);
        },
        [getCityByCoordinates.rejected]: (state, action) => {

        },
    }
})

export const {choose} = weatherCitySlice.actions

export default weatherCitySlice.reducer
