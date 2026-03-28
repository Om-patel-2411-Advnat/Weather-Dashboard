export function getWeatherType(code) {
    if (code === 0) return "clear";
    if (code === 1 || code === 2) return "partly_cloudy";
    if (code === 3) return "cloudy";

    if (code === 45 || code === 48) return "fog";

    if (code >= 51 && code <= 57) return "drizzle";
    if (code >= 61 && code <= 67) return "rain";

    if (code >= 71 && code <= 77) return "snow";

    if (code >= 80 && code <= 82) return "rain_showers";

    if (code >= 95) return "thunderstorm";

    return "unknown";
}