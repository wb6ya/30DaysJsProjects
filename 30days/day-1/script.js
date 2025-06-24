const apiKey = "8628e89fc4d9d6f693380bd2d5ebb882"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");



async function fetchWeather(city) {
    const response = await fetch(`${apiUrl} ${city} &appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".city").innerHTML = "City not found";
    } else {
        document.querySelector(".error").style.display = "none";
    }

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/s"

    if (data.weather[0].main === "Clear") {
        weatherIcon.src = "/30days/day-1/imgs/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "/30days/day-1/imgs/rain.png";
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "/30days/day-1/imgs/snow.png";
    } else if (data.weather[0].main === "mist") {
        weatherIcon.src = "/30days/day-1/imgs/mist.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "/30days/day-1/imgs/drizzle.png";
    } else {
        weatherIcon.src = "/30days/day-1/imgs/clouds.png";
    }

    document.querySelector(".weather").style.display = "flex";
}

searchBtn.addEventListener("click", () => {
    fetchWeather(searchBox.value);
});