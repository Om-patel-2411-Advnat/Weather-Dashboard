  "use client";

  import { useEffect, useState } from "react";
  import { useQuery } from "@tanstack/react-query";
  import { useMemo } from "react";

  import fetchCity from "@/utils/fetchCity";
  import fetchWeatherData from "@/utils/fetchWeatherData";
  import WeatherWrapper from "@/component/WeatherWrapper";
  import BgImage from "@/component/BgImage";
  import Loading from "./loading";
  import NotFound from "./not-found";
  import { revalidatePath } from "next/cache";

  export default function Home() {
    const [city, setCity] = useState('');
    const [tempState, setTempState] = useState("C");
    const [loc , setLoc] = useState(null);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          setLoc({latitude , longitude});
        },
        () => {
          setCity("Vadodara"); 
        }
      );
    }, []);

    const { data, error, isLoading } = useQuery({
      queryKey: ["weather", city],
      queryFn: async () => {
        if(loc){
          return await fetchWeatherData(loc);
        }
        const location = await fetchCity(city);
        const weather = await fetchWeatherData(location);
        return weather;
      },
      enabled: !!loc || !!city,
      staleTime: 10 * 60 * 1000,
    })

    const modifiedData = useMemo(() => {
      if (!data) return null;

      const convert = (temp) =>{
        return tempState === "F" ? Math.round((temp * 9 / 5) + 32) : Math.round(temp);
      }
      
      return {
        ...data,

        current_weather : {
          ...data.current_weather,
          temperature : convert(data.current_weather.temperature)
        },

        hourly : {
          ...data.hourly,
          temperature_2m : data.hourly?.temperature_2m?.map(temp => convert(temp))
        },

        daily : {
          ...data.daily ,
          temperature_2m_max : data.daily?.temperature_2m_max?.map(temp => convert(temp)),
          temperature_2m_min : data.daily?.temperature_2m_min?.map(temp => convert(temp)),
        }

      };

    }, [data, tempState]);

    if (isLoading) return <Loading />
    if (error) return <NotFound setCity={setCity}/>;

    function HandleTempState() {
      setTempState(prev => prev ==='C' ? 'F' : 'C');
    }
    // console.log(data);

    return (
      <>
        <BgImage code={data?.current_weather?.weathercode} />
        <div className="relative z-10 min-h-screen w-full px-7 lg:px-20 py-10 overflow-x-hidden overflow-y-auto">
          <WeatherWrapper data={modifiedData} setCity={setCity} city={!city ? "Current_Location" : city} tempState={tempState} HandleTempState={HandleTempState} />
        </div>
      </>
    );
  }