import { createPortal } from "react-dom"

export default function LikedCityForm({ ShowModal, HandleFormData }) {

    function HandleOutsideClick(event) {
        if (event.target.tagName === "DIALOG") {
           ShowModal(false)
        }
    }

    return createPortal(
        <dialog
            open
            onClick={HandleOutsideClick}
            className="h-screen w-full flex justify-center items-center bg-black/50 z-500 fixed"
        >   
            <form className="h-50 w-100 flex flex-col bg-white p-3 rounded-xl" onSubmit={HandleFormData}>
                <p className="w-full h-10 flex justify-center items-center text-2xl font-bold text-shadow-lg text-shadow-black/20">Add Your City</p>
                <div className="flex flex-col gap-3 bg-white pt-5">
                    <input type="text" name="city-Name" placeholder="City Name" className="border border-black/50 outline-none h-10 px-3 rounded-lg"/>
                </div>
                <div className="mt-auto mb-3 ml-auto mr-3">
                    <button type="submit" className="h-8 px-3 rounded-full shadow-xl border border-stone-700 bg-shadow-black">Add City</button>
                </div>
            </form>
        </dialog>
        , document.getElementById('modal-root')
    )
}