import axios from "axios";

export const Responses = async (response) => {
    try {
        return await response
    } catch (e) {
        return await e.response
    }
}

export const weatherApi = {
    getWeather: async (lat, lon ) => {
        return await Responses(axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=dcde53876c6d05cbc20a42930beaf3a7&units=metric&lang=ru`))

    }
}

