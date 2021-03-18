import axios from "axios";

export const Responses = async (response) => {
    try {
        return await response
    } catch (e) {
        return await e.response
    }
}

export const weatherApi = {
    getWeather: async (lat, lon) => {
        return await Responses(axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=dcde53876c6d05cbc20a42930beaf3a7&units=metric&lang=ru`))

    }
}

export const cityByCoordinates = async (lat, lon) => {
    return await Responses(axios.get(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address?lat=${lat}&lon=${lon}&count=1&radius_meters=1000`,
        {
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + '9e301eb40c65b7139ac2be7fec19e0d4bdc53eac'
            }
        }).then(resp => resp.data.suggestions[0])
    )}
