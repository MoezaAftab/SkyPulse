function displayWeather(data) {
    document.querySelector("#weather-city").textContent = data.name;

    document.querySelector("#weather-temp").textContent =
        `${Math.round(data.main.temp)}°C`;

    document.querySelector("#weather-condition").textContent =
        data.weather[0].description;

    document.querySelector("#weather-humidity").textContent =
        `${data.main.humidity}%`;

    document.querySelector("#weather-wind").textContent =
        `${data.wind.speed} m/s`;

    document.querySelector("#weather-feels").textContent =
        `${Math.round(data.main.feels_like)}°C`;
}


function displayForecast(forecastData) {
    const forecastContainer =
        document.querySelector("#forecast-container");

    forecastContainer.innerHTML = "";

    forecastData.forEach(function (day) {

        console.log("Icon ID:", day.icon);

        const card = document.createElement("div");

        card.classList.add("forecast-card");

       const iconUrl =
    `https://openweathermap.org/img/wn/${day.icon}@2x.png`;
    
        console.log("Icon URL:", iconUrl);

        card.innerHTML = `
            <h3>${day.date}</h3>
            <img src="${iconUrl}" alt="${day.condition}">
            <p class="forecast-temp">${Math.round(day.temp)}°C</p>
            <p>${day.condition}</p>
        `;

        forecastContainer.appendChild(card);
    });
}