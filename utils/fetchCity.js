export default async function fetchCity(city){
    
    const res = await fetch(`/api/location?city=${city}`);

    if (!res.ok) {
        throw new Error("City not found");
    }

    const location = await res.json();

    return JSON.parse(JSON.stringify(location));
}