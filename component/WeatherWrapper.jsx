import Image from "next/image";

import ChartCard from "./ChartCard";
import HourlyCard from "./HourlyCard";
import SearchBar from "./SearchBar";
import LikedCity from "./LikedCity";
import WeatherCard from "./weatherCard";
import WeatherStates from "./WeatherStates";
import WeeklyCard from "./WeeklyCard";
import logo from '@/public/logo.png';

export default function WeatherWrapper({ data, setCity, city, tempState, HandleTempState }){
    return(
        <>
            <div className="w-full h-full grid grid-cols-1 gap-7">
                <div className="w-full h-35 sm:14 gap-2 flex flex-col sm:flex-row sm:items-center px-4">
                    <div className="flex justify-center items-center gap-3 mr-auto">
                        <Image src={logo} alt="Logo"className="h-15 w-15"/>
                        <p className="text-white/90 font-semibold text-2xl">{city.toUpperCase()}</p>
                    </div>
                    <p 
                        onClick={HandleTempState}
                        className="order-2 sm:order-3 h-12 w-12 bg-white rounded-full flex justify-center items-center text-2xl font-bold text-stone-600 cursor-pointer"
                    >
                        °{tempState}
                    </p>
                    <div className="order-3 sm:order-2 ml-auto h-full">
                        <SearchBar setCity={setCity}/>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-7">
                    <div className="flex flex-col w-full lg:w-2/3 gap-7">
                        <div className=" w-full">
                            <WeatherCard data={data} tempState={tempState}/>
                        </div>
                        <div className="w-full">
                            <HourlyCard data={data} tempState={tempState}/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <WeeklyCard data={data} tempState={tempState}/>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-7">
                    <div className="flex flex-col w-full lg:w-2/3 gap-7 flex-shrink-0">
                        <div className="w-full">
                            <WeatherStates data={data}/>
                        </div>
                        <div className="w-full">
                            <ChartCard data={data} />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <LikedCity setCity={setCity}/>
                    </div>
                </div>
            </div>
        </>
    )
}