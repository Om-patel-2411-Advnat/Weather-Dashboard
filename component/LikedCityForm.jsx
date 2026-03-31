import useSuggestions from "@/hooks/useSuggestions";
import { useState } from "react";
import { createPortal } from "react-dom"

export default function LikedCityForm({ ShowModal, HandleFormData }) {

    const [isSelected, setIsSelected] = useState(false);

    const { query, setQuery, suggestions, setSuggestions } = useSuggestions();

    function HandleSelectCity(city) {
        setQuery(city.name);
        setSuggestions([]);
        setIsSelected(true);    
    }

    function HandleOutsideClick(event) {
        if (event.target.tagName === "DIALOG") {
            ShowModal(false);
            setQuery("");
            setSuggestions([]);
            setIsSelected(false);
        }
    }
    
    function HandleSubmit(e) {
        e.preventDefault();        
        HandleFormData(query);
    }
    
    const normalize = (str) => str.trim().toLowerCase();

    const isValidCity = suggestions.some(
        (city) => normalize(city.name) === normalize(query)
    );

    return createPortal(
        <dialog
            open
            onClick={HandleOutsideClick}
            className="h-screen w-full flex justify-center items-center bg-black/50 z-500 fixed"
        >   
            <form className="h-50 w-100 flex flex-col bg-white p-3 rounded-xl relative" onSubmit={HandleSubmit}>
                <p className="w-full h-10 flex justify-center items-center text-2xl font-bold text-shadow-lg text-shadow-black/20">Add Your City</p>
                <div className="flex flex-col gap-3 bg-white pt-5">
                    <input 
                        type="text" 
                        name="city-Name" 
                        value={query}
                        onChange={(e)=>{
                            setQuery(e.target.value);
                            setIsSelected(false);
                        }}
                        placeholder="City Name" 
                        className="border border-black/50 outline-none h-10 px-3 rounded-lg"
                    />
                </div>
                { !isSelected && !isValidCity && query.trim().length > 2 && (
                    <p className="text-sm text-red-500">Enter valid city</p>
                )}
                <div className="mt-auto mb-3 ml-auto mr-3">
                    <button 
                        type="submit" 
                        disabled={!isValidCity}
                        className="h-8 px-3 rounded-full shadow-xl border border-stone-700 bg-shadow-black cursor-pointer"
                    >
                        Add City
                    </button>
                </div>
                {!isSelected && suggestions.length > 0 && (
                    <div className="absolute top-28 w-75 sm:w-90 lg:w-95 bg-stone-300 backdrop-blur-2xl rounded-xl shadow-lg z-50">

                        {suggestions.map((city, index) => (
                            <p
                                key={index}
                                onClick={() => HandleSelectCity(city)}
                                className="p-2 hover:text-stone-700 cursor-pointer "
                            >
                                {city.name}, {city.country}
                            </p>
                        ))}

                    </div>
                )}
            </form>
        </dialog>
        , document.getElementById('modal-root')
    )
}