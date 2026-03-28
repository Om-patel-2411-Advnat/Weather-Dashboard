import Image from "next/image";

import ChartCard from "./ChartCard";
import HourlyCard from "./HourlyCard";
import SearchBar from "./SearchBar";
import LikedCity from "./LikedCity";
import WeatherCard from "./weatherCard";
import WeatherStates from "./WeatherStates";
import WeeklyCard from "./WeeklyCard";
import logo from '@/public/logo.png';

export default function WeatherWrapper({data , setCity , city}){
    return(
        <>
            <div className="w-full h-full grid grid-cols-1 gap-7">
                <div className="w-full h-30 sm:14 gap-2 flex flex-col sm:flex-row sm:items-center px-4">
                    <div className="flex justify-center items-center gap-3 mr-auto">
                        <Image src={logo} alt="Logo"className="h-15 w-15"/>
                        <p className="text-white/90 font-semibold">{city.toUpperCase()}</p>
                        <p className="bg-black h-10 w-10 sm:hidden">converter</p>
                    </div>
                    <div className="ml-auto h-full">
                        <SearchBar setCity={setCity}/>
                    </div>
                    <p className="hidden sm:flex">converter</p>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-7">
                    <div className="flex flex-col w-full lg:w-2/3 gap-7">
                        <div className=" w-full">
                            <WeatherCard data={data}/>
                        </div>
                        <div className="w-full">
                            <HourlyCard data={data}/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <WeeklyCard data={data}/>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-7">
                    <div className="flex flex-col w-full lg:w-2/3 gap-7 lg:flex-shrink-0">
                        <div className="w-full">
                            <WeatherStates data={data}/>
                        </div>
                        <div className="w-full">
                            <ChartCard data={data}/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <LikedCity />
                    </div>
                </div>
            </div>
        </>
    )
}