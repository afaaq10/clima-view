import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard'; // Import the WeatherCard component

const App: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('baramulla');
    const [isLoading, setIsLoading] = useState(false);

    const getData = () => {
        if (!city) alert("Please enter a valid city name");
        setIsLoading(true);
        const APIKey = '546b8e7bc2e42c8c92a2572386d39b0a';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
        axios.get(url)
            .then(res => setWeatherData(res.data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    console.log(weatherData);
    return (
        <div className='flex flex-col justify-center items-center py-28'>
            <div className="">
                <input ref={inputRef} className="p-3 border mt-1 rounded-xl w-64" type="text" onChange={e => setCity(e.target.value)} placeholder="Enter your city here" />
            </div>
            <div className="mt-3">
                <button type="button" onClick={getData} className="text-center border bg-yellow-600 p-2 w-32 h-10 rounded-xl">Get weather</button>
            </div>
            {isLoading ? (
                <div className='mt-9'>Loading...</div>
            ) : (
                <div className="h-1">
                    {weatherData && <WeatherCard data={weatherData} />} {/* Display WeatherCard if weatherData exists */}
                </div>
            )}
        </div>
    )
}

export default App;
