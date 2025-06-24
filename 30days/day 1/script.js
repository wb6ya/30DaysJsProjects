const apiKey = "8628e89fc4d9d6f693380bd2d5ebb882"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function fetchWeather(city) {
    const response = await fetch(`${apiUrl} ${city} &appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/s"
}

searchBtn.addEventListener("click", () => {
    fetchWeather(searchBox.value);
});