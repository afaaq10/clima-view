import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './App.css'

const App = () => {
    const [weatherData, setWeatherData] = React.useState(null);
    const [city, setCity] = useState('Srinagar');

    const getData = () => {
        const APIKey = '546b8e7bc2e42c8c92a2572386d39b0a';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
        axios.get(url).then((res) => setWeatherData(res.data)).catch((err) => console.log(err))
    }

    const name = weatherData ? weatherData.name : '';
    const desc = weatherData ? weatherData.weather[0].description : '';
    const temp = weatherData ? weatherData.main.temp : '';

    React.useEffect(() => {
        getData();
        document.getElementById('in').focus();
    },)

    return (
        <div className='flex flex-col justify-center items-center gap-20'>
            <div>
                <input id="in" className=" p-2 border mt-1 rounded-xl text-center" type="text" onChange={e => setCity(e.target.value)} placeholder="Enter your city here" />
                <div className="text-center">
                    <button type="button" onClick={() => getData()} className="mt-3 text-center border bg-yellow-600">Get weather</button>
                </div>
            </div>
            <div className=' bg-slate-900 p-4 rounded-2xl'>
                <h1 className='font-mono text-xl'>{name}</h1>
                <h1 className='font-mono text-xl'>  {temp}°C</h1>
                <h1 className='font-mono text-xl'>{desc}</h1>
            </div>
        </div>
    )
}
export default App
