import Image from 'next/image';

import { getWeatherType } from '@/utils/getWeatherType';

import clear from '@/public/BG/clear-bg.jpg';
import cloudy from '@/public/BG/cloudy-bg.jpg';
import partly_cloudy from '@/public/BG/partly_cloudy-bg.jpg';
import fog from '@/public/BG/fog-bg.jpg';
import drizzle from '@/public/BG/drizzle-bg.jpg';
import rain from '@/public/BG/rain-bg.jpg';
import snow from '@/public/BG/snow-bg.jpg';
import thunderstorm from '@/public/BG/thunderstorm-bg.jpg';
import rain_showers from '@/public/BG/rain_showers-bg.jpg';


const WeatherBgImages = {
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

export default function BgImage({code}){

    const weatherType = getWeatherType(code);

    const logo = WeatherBgImages[weatherType] || clear;

    return(
        <div className='fixed inset-0 -z-10'>
            <Image src={logo} alt={weatherType} fill priority className='object-cover' />
            <div className="absolute inset-0 bg-black/20" />
        </div>
    )
}