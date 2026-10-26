const searchForm = document.querySelector(".search-form");
const cityInput = document.querySelector('input[name="city"]');

function createDailyForecast(forecast) {
    const dailyForecast = [];

    for (let i = 0; i < forecast.list.length; i++) {
        const item = forecast.list[i];

        const date = item.dt_txt.split(" ")[0];
        const time = item.dt_txt.split(" ")[1];

        if (time === "12:00:00") {
            dailyForecast.push({
                date: date,
                temp: item.main.temp,
                condition: item.weather[0].description,
                icon: item.weather[0].icon
            });
        }

        if (dailyForecast.length === 5) {
            break;
        }
    }

    return dailyForecast;
}

searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
        return;
    }

    try {
    document.querySelector("#loading").style.display = "block";
    document.querySelector("#error-message").style.display = "none";

    const weather = await getWeather(city);
    const forecast = await getForecast(city);

    displayWeather(weather);

    const dailyForecast = createDailyForecast(forecast);

    displayForecast(dailyForecast);

} catch (error) {
    console.error(error.message);

    const errorMessage = document.querySelector("#error-message");

    errorMessage.textContent = error.message;
    errorMessage.style.display = "block";

} finally {
    document.querySelector("#loading").style.display = "none";
}
});