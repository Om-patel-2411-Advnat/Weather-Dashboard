export default async function getSuggestions(query){

    if(!query && query.trim().length < 2){
        return [];
    }

    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`);

        if(!response.ok){
            throw new Error("Failed to get the Suggestions");
        }

        const data = await response.json();
        return data.results || [] ;

    } catch (error) {
        console.error("Failed to fetch location");
        throw error ;
    }   
}