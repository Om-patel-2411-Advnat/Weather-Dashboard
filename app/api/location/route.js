export async function GET(req){
    const {searchParams} = new URL(req.url);

    const city = searchParams.get('city');

    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);

    const data = await res.json();

    if (!data.results || data.results.length === 0) {
        return Response.json({ error: "City not found" }, { status: 404 });
    }

    return Response.json(data.results[0]);
}