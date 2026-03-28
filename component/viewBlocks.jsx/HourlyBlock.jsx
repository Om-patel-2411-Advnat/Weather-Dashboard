import WeatherIcon from "./weatherIcon";

export default function HourlyBlock({ time, temp, code }) {

    const formattedTime = new Date(time).toLocaleTimeString([], {
        hour: "numeric",
        hour12: true
    });

    return (
        <div className="h-40 w-25 flex-shrink-0 border border-white/30 rounded-md p-2 flex flex-col justify-center items-center gap-3">
            <p className="text-white/90 flex justify-center text-xl font-semibold">{formattedTime.toUpperCase()}</p>
            <div className="h-16 w-16 justify-center items-center">
                <WeatherIcon code={code} />
            </div>
            <p className="text-white/90">{temp}°C</p>
        </div>
    )
}