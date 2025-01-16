const apikey = "88715b137bbe7c7d29c1f520543fba8a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search #btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);

        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();

            // Update weather details
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
            document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
            document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;

            // Update weather icon based on condition
            if (data.weather[0].main.toLowerCase() === "clouds") {
                weatherIcon.src = "https://img.icons8.com/?size=100&id=Ub1ytGWJRXdH&format=png&color=000000";
            } else if (data.weather[0].main.toLowerCase() === "rain") {
                weatherIcon.src = "https://img.icons8.com/?size=100&id=8cDNraQqdlD2&format=png&color=000000";
            } else if (data.weather[0].main.toLowerCase() === "fog") {
                weatherIcon.src = "https://img.icons8.com/?size=100&id=67556&format=png&color=000000";
            } else if (data.weather[0].main.toLowerCase() === "drizzle") {
                weatherIcon.src = "https://img.icons8.com/?size=100&id=9249&format=png&color=000000";
            } else if (data.weather[0].main.toLowerCase() === "mist") {
                weatherIcon.src = "https://img.icons8.com/?size=100&id=HJopFxGRhC67&format=png&color=000000";
            } else if (data.weather[0].main.toLowerCase() === "clear") {
                weatherIcon.src = "https://img.icons8.com/?size=100&id=bILLAxIx8ASv&format=png&color=000000";
            } else if (data.weather[0].main.toLowerCase() === "smoke") {
                weatherIcon.src = "https://img.icons8.com/?size=100&id=bILLAxIx8ASv&format=png&color=000000";
            }

            // Display weather and hide error
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

            console.log(data); // Log the data for debugging
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Add event listener for the search button
searchbtn.addEventListener("click", () => {
    const city = searchbox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});
