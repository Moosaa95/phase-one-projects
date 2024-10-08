import React, { createContext, ReactNode, useContext, useState } from "react";

interface Weather {
    temp: number;
    city: string;
    description: string;
    icon: string;


}

interface WeatherContextProps {
    weather: Weather | null;
    error: string | null;
    fetchWeather: (city: string) => void;
    loading: boolean;
}


const WeatherContext = createContext<WeatherContextProps | undefined>(undefined)

const WeatherProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [weather, setWeather] = useState<Weather | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

    console.log(API_KEY, 'key');
    
    const fetchWeather = async (city: string) => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            const data = await response.json();
            if (data.cod === 200) {
                const weatherData: Weather = {
                temp: data.main.temp,
                city: data.name,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                };
                setWeather(weatherData);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('An error occured while fetching the weather data')
        } finally {
            setLoading(false)
        }
    }

    return (
        <WeatherContext.Provider value={{weather, error, fetchWeather, loading}}>
            {children}
        </WeatherContext.Provider>

    )
}

const useWeatherContext = () => {
    const context = useContext(WeatherContext)
    if (!context) {
        throw new Error('useweathercontext must be used within a weatherProvide')
    }
    return context
}

export {WeatherProvider, useWeatherContext}