const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        // Call the weather API here
        // For example:
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
            .then(response => response.json())
            .then(data => {
                cityName.textContent = data.name;
                weatherDescription.textContent = data.weather[0].description;
                temperature.textContent = `${data.main.temp}°C`;
                humidity.textContent = `${data.main.humidity}%`;
            })
            .catch(error => console.error(error));
    }
});```
