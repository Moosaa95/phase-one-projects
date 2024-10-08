Here's a detailed `README.md` for your Day 3 project: the Weather App built with React, TypeScript, Context API, and Tailwind CSS.

---

# Day 3: Weather App 🌤️

## Overview

This is a professional-grade Weather App built as part of the **60-Day React Challenge**. The app allows users to search for the current weather in any city using the [OpenWeather API](https://openweathermap.org/api) and displays the weather information such as temperature, weather description, and location.

The project focuses on:

- Using **React** with **TypeScript**.
- Managing global state using **Context API**.
- Styling components with **Tailwind CSS**.
- Handling API calls with `fetch` and displaying data using React components.

## Features

- 🌎 **Search for Weather**: Enter the name of any city to get the current weather.
- 🌡️ **Display Weather Information**: Shows the temperature, weather description, and an icon representing the weather conditions.
- 🔄 **Loading State**: Displays a loading spinner while fetching data.
- ❗ **Error Handling**: Provides clear error messages if the city is not found or if an API error occurs.

## Project Structure

```
weather-app/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── WeatherDisplay.tsx
│   ├── context/
│   │   ├── WeatherContext.tsx
│   ├── hooks/
│   │   ├── useWeather.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   ├── index.css
│   ├── App.tsx
│   ├── index.tsx
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Tech Stack

- **React** with **TypeScript**
- **Context API** for global state management
- **Tailwind CSS** for styling
- **OpenWeather API** for fetching weather data

## How to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/60-day-react-challenge.git
   cd 60-day-react-challenge
   ```

2. **Navigate to the Day 3 Folder**:

   ```bash
   cd day-3-weather-app
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Add Your API Key**:
   Replace `YOUR_API_KEY` in the `fetchWeather` function in the `WeatherContext.tsx` file with your OpenWeather API key.

   ```typescript
   const response = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
   );
   ```

5. **Start the Development Server**:

   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## How to Use

1. Enter the name of a city in the input field.
2. Click the **Search** button.
3. The current weather information will be displayed, including:
   - Temperature (in Celsius)
   - Weather description (e.g., "Clear sky", "Rainy")
   - A weather icon representing the conditions.

## Screenshots

### Homepage

![Weather App Homepage](./screenshots/homepage.png)

### Weather Display

![Weather Display](./screenshots/weather-display.png)

## Future Enhancements

- 🌍 **Multiple Units**: Add the ability to switch between Celsius and Fahrenheit.
- 📍 **Geolocation**: Use the browser’s geolocation to show weather information based on the user’s current location.
- 🔄 **Forecast**: Display a 5-day weather forecast for the searched city.
- 🕓 **History**: Store the user’s search history to quickly display recent searches.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

---

Feel free to adjust any content based on your implementation details!
