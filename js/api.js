const apiKey = "5158ffc9ed082ffc6975a93143ff964b";

async function getWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();

    return data;
}
async function getForecast(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
        throw new Error("Forecast not available");
    }

    const data = await response.json();

    return data;
}