'use server'

export async function GET(req){
    const {searchParams} = new URL(req.url);

    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    const res = await fetch(`
        https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode,apparent_temperature,relative_humidity_2m,surface_pressure,visibility&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);

    const data = await res.json();

    return Response.json(data);
}