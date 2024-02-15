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
        <div>
            <div className="weather">
                <input id="in" className="form-control form-control-lg mt-1" type="text" onChange={e => setCity(e.target.value)} placeholder="Enter your city here" aria-label=".form-control-lg example" />
                <div className="text-center">
                    <button type="button" onClick={() => getData()} className="btn btn-outline-primary mt-3 text-center">Get weather</button>
                </div>
            </div>
            <div className="cen">
                <h1 className='mx-2 flex font-monospace text-xl '>{name}</h1>
                <h1 className='mx-2 flex font-monospace text-xl' >  {temp}°C</h1>
                <h1 className='mx-2 flex font-monospace text-xl'>{desc}</h1>
            </div>
        </div>
    )
}
export default App
