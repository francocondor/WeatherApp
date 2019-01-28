const location = "Barranco, PE";
const api_key = "b4f34322ad75d46b137a6e3d9d0aa468";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;