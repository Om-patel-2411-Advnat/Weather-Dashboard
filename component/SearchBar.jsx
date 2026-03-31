import useSuggestions from "@/hooks/useSuggestions";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({setCity}){

    const { query, setQuery, suggestions, setSuggestions } = useSuggestions();

    function HandleSearchCity(e){
        e.preventDefault();

        const isValid = suggestions.some(
            (city) => city.name.toLowerCase() === query.toLowerCase()
        );

        if (!isValid) {
            alert("Please select a valid city");
            return;
        }

        setCity(query);
    }

    function HandleSelectCity(city){
        setQuery(city.name);
        setCity(city.name);
        setSuggestions([])
    }

    const isValidCity = suggestions.some(
        (city) => city.name.toLowerCase() === query.toLowerCase()
    );

    return (
        <div className="h-full flex justify-center items-center relative">
            <form onSubmit={HandleSearchCity} className="flex">
                <input 
                    type="text" 
                    placeholder="Search for your city" 
                    name="city"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="outline-none h-12 w-full bg-white/80 focus:bg-white/80 focus:ring-0 focus:ring-0 rounded-l-full pl-5"
                />
                <button 
                    type="submit" 
                    disabled ={!isValidCity}
                    className="h-12 w-8 bg-white/80 rounded-r-full"
                >
                    <FaSearch className="text-stone-700"/>
                </button>
            </form>
            {suggestions.length > 0 && (
                <div className="absolute top-13 sm:top-24 w-full bg-white/80 backdrop-blur-2xl rounded-xl shadow-lg z-50">

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
            {query.length > 0 && suggestions.length === 0 && (
                <div className="absolute top-24 w-full bg-white/80 backdrop-blur-2xl rounded-xl shadow-lg z-50">
                    <p className="p-2 hover:text-stone-700 cursor-pointer">
                        No City Found
                    </p>
                </div>
            )}
        </div>
    )
}