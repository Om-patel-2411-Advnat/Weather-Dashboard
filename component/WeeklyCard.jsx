import { FaCalendarAlt } from "react-icons/fa";
import WeeklyBar from "./viewBlocks.jsx/WeeklyBar";

export default function WeeklyCard({ data, tempState }){

    const days = data?.daily?.time;



    return(
        <div className="h-full w-full backdrop-blur-sm rounded-xl border border-white/30 p-5 flex flex-col">
            <p className="flex text-xl md:text-3xl items-center gap-4 text-white/80 font-bold">
                <span><FaCalendarAlt  /></span>
                7-Days Forecast
            </p>
            <div className="flex flex-col gap-5 mt-5 lg:mt-auto lg:mb-5">
                {days?.map((day, i) => (
                    <WeeklyBar 
                        key={i}
                        date = {day}
                        tempState={tempState}
                        maxTemp = {data.daily.temperature_2m_max[i]}
                        minTemp = {data.daily.temperature_2m_min[i]}
                        code = {data.daily.weathercode[i]}
                    />
                ))}
            </div>
        </div>
    )
}