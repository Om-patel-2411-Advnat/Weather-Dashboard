export default async function fetchWeatherData(location){
    const weatherRes = await fetch(`/api/weather?lat=${location.latitude}&lon=${location.longitude}`);

    const weather = await weatherRes.json();

    return JSON.parse(JSON.stringify(weather)) ;
}