import WeatherIcon from "./weatherIcon"

export default function WeeklyBar({date , maxTemp , minTemp , code}){

    const dayName = new Date(date).toLocaleDateString("en-US" ,{
        weekday : 'short'
    })

    return(
        <div className="h-10 w-full border-b border-white/30 flex justify-between text-slate-200">
            <p className="w-10 font-bold text-xl">{dayName}</p>
            <div className="h-10 w-10 flex justify-center items-center">
                <WeatherIcon code={code} />
            </div>
            <p>{minTemp}°C</p>
            <p>{maxTemp}°C</p>
        </div>
    )
}