"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import fetchCity from "@/utils/fetchCity";
import fetchWeatherData from "@/utils/fetchWeatherData";
import WeatherWrapper from "@/component/WeatherWrapper";
import BgImage from "@/component/BgImage";

export default function Home() {
  const [city, setCity] = useState('Vadodara');

  const {data , error , isLoading} = useQuery({
    queryKey : ["weather" , city] ,
    queryFn : async ()=>{
      const location = await fetchCity(city);
      const weather = await fetchWeatherData(location);
      return weather ;
    }
  })

  if (isLoading) return <p>Loading...</p>;
  if(error) return <p>{error.message}</p>;

  console.log(data);

  return (
    <>
      <BgImage code={data?.current_weather?.weathercode}/>
      <div className="relative z-10 min-h-screen w-full px-7 lg:px-20 py-10 overflow-x-hidden overflow-y-auto">
        <WeatherWrapper data = {data} setCity={setCity} city={city}/>
      </div>
    </>
  );
}