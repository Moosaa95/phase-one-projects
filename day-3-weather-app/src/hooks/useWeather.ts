import { useWeatherContext } from "../context/WeatherContext";

const useWeather = () => {
    return useWeatherContext()
}

export default useWeather