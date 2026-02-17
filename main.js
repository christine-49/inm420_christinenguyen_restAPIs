console.log("hello main.js");
//get dynamic URL
function generateWeatherApiUrl(city, apiKey) {
  return `https://api.weatherapi.com/v1/forecast.json?q=${city}&key=${apiKey}`;
}

//function to get current weather details from the API
async function getWeatherDetails(url) {
  const response = await fetch(url);
  const jsonResponse = await response.json();

  //extract necessary values from the API response
  const { name, country } = jsonResponse.location;
  const { temp_c, condition } = jsonResponse.current;
  const { icon, text } = condition;

  const placeHolderValue = "#weather-info-placeholder"

  //innerHTML template to form HTML code and over-write existing div section
  displayWeatherInfo(name, country, temp_c, icon, text, placeHolderValue);
}

//displays a template innerHTML code
function displayWeatherInfo(name, country, temp_c, icon, text, placeHolderValue) {
  const placeholder = document.querySelector(placeHolderValue);
  placeholder.innerHTML = `
    <div class="weather-card">
      <div class="location">${name}, ${country}</div>
      <div class="temperature">${temp_c}°</div>
      <div class="condition">
        <img src="https:${icon}" alt="${text}" />
        <span>${text}</span>
      </div>
    </div>
  `;
}

//update this url to dynamically assign city and api key value
const url = generateWeatherApiUrl("Toronto", "a051a60cf1ac40b6b08232626260302");

//call entry point for our function
getWeatherDetails(url);