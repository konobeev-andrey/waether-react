import {createSelector} from 'reselect'

const getDateToLocaleString = (dt, locales, options) => {
    return new Date( +(dt + '000')).toLocaleString(locales, options)
}
const getHourAndMinuteRuNumeric = (dt) => {
    return getDateToLocaleString(dt, "ru", {hour: 'numeric', minute: 'numeric'})
}
export const getDayRuNumeric = (dt) => {
    return getDateToLocaleString(dt, 'ru', {month: 'short', day: 'numeric'})
}
const getDirectionWind = (wind_deg) => {
    if(wind_deg>23 && wind_deg <= 68) return 'СВ'
    if(wind_deg>68 && wind_deg <= 113) return 'В'
    if(wind_deg>113 && wind_deg <= 158) return 'ЮВ'
    if(wind_deg>158 && wind_deg <= 203) return 'Ю'
    if(wind_deg>203 && wind_deg <= 248) return 'ЮЗ'
    if(wind_deg>248 && wind_deg <= 293) return 'З'
    if(wind_deg>293 && wind_deg <= 337) return 'СЗ'
    return 'С'
    }

const round = (number) => {
    return Math.round(number)
}

const getDateCurrentSelector = (state) =>  state.rootReducer.city.data.current.dt
export const getDateCurrent = createSelector(getDateCurrentSelector, getDayRuNumeric)

const getDaysSelector  = (state) => state.rootReducer.city.data.daily
export const getDays = createSelector(getDaysSelector, (days) => days.filter((day, index) => {
    if(index <= 0 ) return false
    if(index >= 7 ) return false
    return true
}));

const getHourlySelector = (state) => state.rootReducer.city.data.hourly
export const getHourly = createSelector(getHourlySelector, (hourly) => {
    return hourly.reduce((arr, hour, index) => {
        if (24 > index && index % 3 === 0) arr.push(hour)
        return arr
    }, [])  
})

const getWindDegSelector = state => state.rootReducer.city.data.current.wind_deg
export const getWindDeg = createSelector(getWindDegSelector, getDirectionWind);

const getTempCurrentSelector = state => state.rootReducer.city.data.current.temp
export const getTempCurrent = createSelector(getTempCurrentSelector, round)