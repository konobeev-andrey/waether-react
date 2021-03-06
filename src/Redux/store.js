import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import weatherCitySlice from './weatherCitySlice'
import saveCity from './saveCity'
import {combineReducers} from "redux";


const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

const rootReducer  = combineReducers({
    city: weatherCitySlice,
    saveCity
})
export const store = configureStore({
    reducer: {rootReducer},
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});