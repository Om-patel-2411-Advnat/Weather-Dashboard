import { MdAccessTime } from "react-icons/md";
import HourlyBlock from "./viewBlocks.jsx/HourlyBlock";

export default function HourlyCard({ data, tempState }){

    const currentTime = data?.current_weather?.time;

    const hourTime = currentTime?.slice(0, 13);

    let startIndex = data?.hourly?.time?.findIndex(
        (t) => t.startsWith(hourTime)
    );

    if (startIndex === -1) startIndex = 0;

    const next24Hours = data?.hourly?.time?.slice(startIndex, startIndex + 24);

    return(
        <div className="h-full w-full backdrop-blur-sm rounded-xl border border-white/30 p-5 flex flex-col gap-5">
            <p className="flex text-xl md:text-3xl items-center gap-2 text-white/80 font-bold">
                <span><MdAccessTime /></span>
                24 Hours Forecast
            </p>
            <div className="w-full h-full p-2 gap-4 flex overflow-x-auto scrollbar-hide">
                {next24Hours?.map((time, i) => (
                    <HourlyBlock
                        key={i}
                        time={time}
                        tempState={tempState}
                        temp={data.hourly.temperature_2m[startIndex + i]}
                        code={data.hourly.weathercode[startIndex + i]}
                    />
                ))} 
            </div>
        </div>
    )
}