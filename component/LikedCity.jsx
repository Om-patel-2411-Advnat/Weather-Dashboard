'use client'

import { useEffect, useState } from "react";
import LikedCityForm from "./LikedCityForm";
import { HiOutlineTrash } from "react-icons/hi";

export default function LikedCity({setCity}){

    const [isOpen , setIsOpen] = useState(false);
    const [cityData , setCityData] = useState(()=>{
        if (typeof window === "undefined") return [];
        return JSON.parse(localStorage.getItem('cities') || "[]");
    });

    useEffect(() => {
        localStorage.setItem("cities", JSON.stringify(cityData));
    }, [cityData]);

    function HandleModalOpen(){
        setIsOpen(true);
    }

    function HandleFormData (cityName){

        const alreadyExists = cityData.some(
            (city) => city.trim().toLowerCase() === cityName.trim().toLowerCase()
        );

        if(alreadyExists){
            alert("City already exists in your list");
            setIsOpen(false);
            return ;
        }

        setCityData(prevData => [...prevData , cityName]);
        setIsOpen(false);
    }
    function HandleDeleteCity(city){
        const updatedCities = cityData.filter(cityName => cityName !== city);

        setCityData(updatedCities);
    }

    return(
        <>
            <div className="h-full w-full backdrop-blur-sm rounded-xl border border-white/30 p-5 flex flex-col">
                <div className="flex justify-between">
                    <p className="flex text-white/90 text-xl sm:text-3xl font-bold gap-5">
                        <span>&#129293;</span>
                        Liked Cities
                    </p>           
                    <p 
                        onClick={HandleModalOpen}
                        className="h-10 px-5 gap-2 rounded-full border border-white/30 bg-white/50 text-stone-700 font-bold flex justify-center items-center cursor-pointer"
                    >
                        <span>Add</span>+
                    </p>
                </div>
                <ul className="h-full w-full mt-5 flex flex-col gap-2">
                    {cityData.map(city => (
                        <li 
                            onClick={() => setCity(city)}
                            key={city}
                            className="group w-full h-10 mx-3 border-b border-white/30 flex items-center px-3 text-slate-200 font-bold text-lg"
                        >
                            {city.toUpperCase()}
                            <p 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    HandleDeleteCity(city)
                                }}
                                className="ml-auto text-2xl opacity-0 group-hover:opacity-100 z-10"
                            >
                                <HiOutlineTrash />
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            {isOpen && <LikedCityForm ShowModal={setIsOpen} HandleFormData={HandleFormData}/>}
        </>
    )
}