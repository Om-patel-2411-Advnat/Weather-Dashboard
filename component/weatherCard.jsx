import { getWeatherType } from "@/utils/getWeatherType";
import WeatherIcon from "./viewBlocks.jsx/weatherIcon";

export default function WeatherCard({ data }) {

    const code = data?.current_weather?.weathercode;
    const weatherType = getWeatherType(code);
    const currentTime = data?.current_weather?.time;
    const temperature = data?.current_weather?.temperature;

    const hourTime = currentTime?.slice(0, 13);

    let index = data?.hourly?.time?.findIndex(
        (t) => t.startsWith(hourTime)
    );
    if (index === -1) index = 0;

    const feelsLike = data?.hourly?.apparent_temperature?.[index];

    return (
        <div className="h-full w-full backdrop-blur-sm rounded-xl border border-white/30 p-5 flex flex-col">
            <div className="flex">
                <p className="text-3xl md:text-5xl lg:text-7xl text-slate-100 font-bold">{temperature}°C</p>
                <div className="ml-auto h-16 md:h-24 lg:h-32 w-16 md:w-24 lg:w-32">
                    <WeatherIcon code={code} />
                </div>
            </div>
            <div className="mt-auto flex flex-col gap-2 text-white/90">
                <p className="w-full text-xl lg:text-2xl ">{weatherType}</p>
                <p className="w-full text-sm lg:text-lg flex gap-2">Feels Like :<span>{feelsLike}°C</span></p>
            </div>
        </div>
    )
}