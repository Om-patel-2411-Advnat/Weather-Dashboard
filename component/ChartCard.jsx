'use client';

import { LineChart , Line , XAxis , Tooltip , ResponsiveContainer, YAxis, CartesianGrid } from "recharts";

export default function ChartCard({data}){

    const currentTime = data?.current_weather?.time;
    const hourTime = currentTime?.slice(0, 13);

    let startIndex = data?.hourly?.time?.findIndex(
        (t) => t.startsWith(hourTime)
    );

    if (startIndex === -1 || startIndex === undefined) startIndex = 0;

    const TimeData = data?.hourly?.time?.slice(startIndex, startIndex + 24) ;


    const chartData = TimeData?.map((time, i) => ({
            time: new Date(time).toLocaleTimeString([], {
                hour: "numeric",
                hour12: true
            }),
            temp: data?.hourly?.temperature_2m[startIndex + i]
        }));

    return (
        <div className="h-full w-full backdrop-blur-sm rounded-xl border border-white/30 flex flex-col gap-5">
            <p className="flex text-xl sm:text-3xl items-center gap-2 text-white/80 font-bold px-5 pt-5">
                Hourly Temperature  
            </p>
            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 10, right: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" tick={{fill : "#fff" , fontSize : 12}} />
                        <YAxis dataKey="temp" tick={{fill : "#fff" , fontSize : 12}} />
                        <Tooltip/>
                        <Line type="monotone" dataKey="temp" stroke="#38bdf8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}