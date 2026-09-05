const apiKey = "my api key";

async function testWeatherAPI() {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);
}

testWeatherAPI();