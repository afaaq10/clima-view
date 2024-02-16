import React from 'react'
import axios from 'axios'
import './App.css'

interface weatherData {
    name: string;
    weather: { description: string }[];
    main: { temp: string };
}

const App = () => {
    const [weatherData, setWeatherData] = React.useState<weatherData | null>(null);
    const [city, setCity] = React.useState('Baramulla');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const getData = () => {
        const APIKey = '546b8e7bc2e42c8c92a2572386d39b0a';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
        axios.get(url).then((res) => setWeatherData(res.data)).catch((err) => console.log(err))
    }

    const name = weatherData ? weatherData?.name : '';
    const desc = weatherData ? weatherData.weather[0]?.description : '';
    const temp = weatherData ? weatherData.main.temp : '';

    React.useEffect(() => {
        getData();
        inputRef.current?.focus();
    },)

    return (
        <div className='flex flex-col justify-center items-center gap-20'>
            <div>
                <input ref={inputRef} className="p-3 border mt-1 rounded-xl" type="text" onChange={e => setCity(e.target.value)} placeholder="Enter your city here" />
                <div>
                    <button type="button" onClick={() => getData()} className="mt-3 text-center border bg-yellow-600 p-2 w-32 h-10">Get weather</button>
                </div>
            </div>
            <div className='bg-slate-900 p-4 rounded-2xl'>
                <h1 className='font-mono text-xl'>{name}</h1>
                <h1 className='font-mono text-xl'>{temp}°C</h1>
                <h1 className='font-mono text-xl'>{desc}</h1>
            </div>
        </div>
    )
}
export default App
