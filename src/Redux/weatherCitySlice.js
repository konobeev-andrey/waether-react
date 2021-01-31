import {createSlice} from "@reduxjs/toolkit";


const citySlice = createSlice({
    name: 'city',
    initialState: {
        value: null,
        lat: null,
        lon: null,
        geoname_id:null,
    },
    reducers: {
        choose (state, action) {
                state.lat = action.payload.data.geo_lat
                state.lon = action.payload.data.geo_lon
                state.value = action.payload.value
                state.geoname_id = action.payload.data.geoname_id
            }
    }
})

export const {choose} = citySlice.actions

export default citySlice.reducer
