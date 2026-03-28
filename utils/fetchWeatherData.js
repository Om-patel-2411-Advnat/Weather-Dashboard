export default async function fetchWeatherData(location){
    const weatherRes = await fetch(`http://localhost:3000/api/weather?lat=${location.latitude}&lon=${location.longitude}`);

    const weather = await weatherRes.json();

    return JSON.parse(JSON.stringify(weather)) ;
}