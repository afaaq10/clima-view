import React from "react"
interface WeatherData {
    name: string;
    weather: { description: string }[];
    main: { temp: number; feels_like: number; humidity: number };
    wind: { speed: number };
    clouds: { all: number };
    sys: { country: string };
}

interface WeatherDataProps {
    data: WeatherData;
}
const WeatherCard: React.FC<WeatherDataProps> = ({ data }) => {
    return (
        <div className="max-w-md mx-auto rounded-xl overflow-hidden shadow-lg bg-white mt-8">
            <div className="px-6 mb-8">
                <div className="font-bold text-xl mb-2">{data.name}, {data.sys.country}</div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-700">Temperature</p>
                        <p className="text-gray-900 font-semibold">{data.main.temp}°C</p>
                    </div>
                    <div>
                        <p className="text-gray-700">Feels Like</p>
                        <p className="text-gray-900 font-semibold">{data.main.feels_like}°C</p>
                    </div>
                    <div>
                        <p className="text-gray-700">Humidity</p>
                        <p className="text-gray-900 font-semibold">{data.main.humidity}%</p>
                    </div>
                    <div>
                        <p className="text-gray-700">Wind Speed</p>
                        <p className="text-gray-900 font-semibold">{data.wind.speed} m/s</p>
                    </div>
                    <div>
                        <p className="text-gray-700">Weather</p>
                        <p className="text-gray-900 font-semibold">{data.weather[0].description}</p>
                    </div>
                    <div>
                        <p className="text-gray-700">Cloudiness</p>
                        <p className="text-gray-900 font-semibold">{data.clouds.all}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
