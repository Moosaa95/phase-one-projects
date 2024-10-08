import useWeather from "../hooks/useWeather";

const WeatherDisplay: React.FC = () => {
    const {weather, error, loading} = useWeather()

    if (loading) return <div className="text-center text-blue-500">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    if (!weather) return <div className="text-center">No weather data to display</div>;

    return (
        <div className="text-center">
          <h1 className="text-3xl font-bold">{weather.city}</h1>
          <p className="text-2xl">{weather.temp} °C</p>
          <p className="text-xl capitalize">{weather.description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
          />
        </div>
      );



}

export default WeatherDisplay;