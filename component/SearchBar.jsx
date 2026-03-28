import { FaSearch } from "react-icons/fa";

export default function SearchBar({setCity}){

    function HandleSearchCity(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const city = formData.get('city');
        if(!city) return ;
        setCity(city);
    }

    return (
        <div className="h-full flex justify-center items-center">
            <form onSubmit={HandleSearchCity} className="flex">
                <input 
                    type="text" 
                    placeholder="Search for your city" 
                    name="city"
                    className="outline-none w-full bg-white/80 focus:bg-white/80 focus:ring-0 focus:ring-0  h-12 rounded-l-full pl-5"
                />
                <button type="submit" className="h-12 w-8 bg-white/80 rounded-r-full"><FaSearch className="text-stone-700"/></button>
            </form>
        </div>
    )
}