import Image from "next/image";

import { getWeatherType } from "@/utils/getWeatherType";

import clear from '@/public/clear.png';
import cloudy from '@/public/cloudy.png';
import partly_cloudy from '@/public/partly_cloudy.png';
import fog from '@/public/fog.png';
import drizzle from '@/public/drizzle.png';
import rain from '@/public/rain.png';
import snow from '@/public/snow.png';
import thunderstorm from '@/public/thunderstorm.png';
import rain_showers from '@/public/rain_showers.png';

const WeatherIcons ={
    clear,
    cloudy,
    partly_cloudy,
    fog,
    drizzle,
    rain,
    snow,
    thunderstorm,
    rain_showers
}

export default function WeatherIcon({code}){

    const weatherType = getWeatherType(code);

    const logo = WeatherIcons[weatherType] || clear ;

    return (
        <div className="relative w-full h-full">
            <Image src={logo} alt={weatherType} fill sizes="50px" className="object-cover" />
        </div>
    )
}