export default function NotFound({setCity}){
    return(
        <div className="h-screen w-full bg-black/20 flex justify-center items-center flex-col gap-5">
            <p className="text-white text-3xl">City not found</p>
            <button 
                onClick={() => setCity("Vadodara")}
                className="h-10 px-2 rounded-md border border-gray-700 flex justify-center items-center text-stone-600"
            >
                Go Back
            </button>
        </div>
    )
}