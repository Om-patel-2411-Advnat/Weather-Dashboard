import Image from "next/image";

import humidity from '@/public/StatesIcons/humidity.png';
import wind from '@/public/StatesIcons/wind.png';
import pressure from '@/public/StatesIcons/pressure.png';
import visibility from '@/public/StatesIcons/visibility.png';

export default function WeatherStates({data}){

    const currentTime = data?.current_weather?.time;
    const hourTime = currentTime?.slice(0, 13);

    let index = data?.hourly?.time?.findIndex(
        (t) => t.startsWith(hourTime)
    );

    if (index === -1) index = 0;

    const windData = data?.current_weather?.windspeed;
    const windUnit = data?.current_weather_units?.windspeed;

    const humidityData = data?.hourly?.relative_humidity_2m?.[index];
    const humidityUnit = data?.hourly_units?.relative_humidity_2m;

    const pressureData = data?.hourly?.surface_pressure?.[index];
    const pressureUnit = data?.hourly_units?.surface_pressure;

    const visibilityData = data?.hourly?.visibility?.[index];
    const visibilityUnit = data?.hourly_units?.visibility;


    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 ">
            <div className="h-35 w-full backdrop-blur-sm rounded-xl border border-white/30 p-5 flex flex-col">
                <p className="flex gap-3 justify-center items-center ">
                    <span className="relative h-10 w-10">
                        <Image src={wind} alt="Wind" fill className="object-contain invert"/>
                    </span> 
                    <span className="text-md sm:text-xl text-white/90">Wind</span>
                </p>
                <p className="text-slate-200 mx-auto mt-auto flex gap-1">
                    <span className="text-lg sm:text-3xl font-bold">{windData}</span>
                    <span className="text-sm sm:text-lg flex items-end mb-1 sm:mb-0">{windUnit}</span>
                </p>
            </div>
            <div className="h-35 w-full backdrop-blur-sm rounded-xl border border-white/30 p-5 flex flex-col">
                <p className="flex  gap-1 sm:gap-3 justify-center items-center ">
                    <span className="relative h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                        <Image src={humidity} alt="Humidity" fill className="object-contain" />
                    </span> 
                    <span className="text-md sm:text-xl text-white/90">Humidity</span>
                </p>
                <p className="text-slate-200 mx-auto mt-auto flex gap-1">
                    <span className="text-lg sm:text-3xl font-bold">{humidityData}</span>
                    <span className="text-sm sm:text-lg flex items-end mb-1 sm:mb-0">{humidityUnit}</span>
                </p>
            </div>
            <div className="h-35 w-full backdrop-blur-sm rounded-xl border border-white/30 p-5 flex flex-col">
                <p className="flex gap-3 justify-center items-center ">
                    <span className="relative h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 ">
                        <Image src={pressure} alt="Pressure" fill className="object-contain" />
                    </span> 
                    <span className="text-md sm:text-xl text-white/90">Pressure</span>
                </p>
                <p className="text-slate-200 mx-auto mt-auto flex gap-1">
                    <span className="text-lg sm:text-3xl font-bold">{pressureData}</span>
                    <span className="text-sm sm:text-lg flex items-end mb-1 sm:mb-0">{pressureUnit}</span>
                </p>
            </div>
            <div className="h-35 w-full backdrop-blur-sm rounded-xl border border-white/30 p-5 flex flex-col">
                <p className="flex gap-3 justify-center items-center">
                    <span className="relative h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                        <Image src={visibility} alt="Visibility" fill className="object-contain" />
                    </span> 
                    <span className="text-md sm:text-xl text-white/90">Visibility</span>
                </p>
                <p className="text-slate-200 mx-auto mt-auto flex gap-1">
                    <span className="text-lg sm:text-3xl font-bold">{visibilityData}</span>
                    <span className="text-sm sm:text-lg flex items-end mb-1 sm:mb-0">{visibilityUnit}</span>
                </p>
            </div>
        </div>
    )
}