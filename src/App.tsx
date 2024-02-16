import React from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard'; // Import the WeatherCard component

const App: React.FC = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [weatherData, setWeatherData] = React.useState(null);
    const [city, setCity] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [err, setError] = React.useState("");
    const getData = () => {
        if (!city) {
            alert("Please enter a valid city name");
            return;
        }
        const APIKey = '546b8e7bc2e42c8c92a2572386d39b0a';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
        setIsLoading(true);
        axios.get(url)
            .then(res => { setIsLoading(false); setWeatherData(res.data) })
            .catch((err) => {
                setError(err.response.data.message);
                if (err.response && err.response.data && err.response.data.message === 'city not found') {
                    alert("City not found. Please enter a valid city name.");
                } else {
                    alert("An error occurred while fetching data. Please try again later.");
                }
                setIsLoading(false);
            });
    }

    React.useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center py-28'>
            <div className="">
                <input ref={inputRef} className="p-3 border mt-1 rounded-xl w-64" type="text" onChange={e => setCity(e.target.value)} placeholder="Enter your city here" />
            </div>
            <div className="mt-3">
                <button type="button" onClick={getData} className="text-center border bg-yellow-600 p-2 w-32 h-10 rounded-xl">Get weather</button>
            </div>
            {isLoading ? (
                err === 'city not found' ? "" : <div className='mt-9'>Loading...</div>
            ) : (
                <div className="h-1">
                    {weatherData && <WeatherCard data={weatherData} />}
                </div>
            )}
        </div>
    )
}

export default App;
