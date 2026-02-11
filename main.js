console.log("hello main.js");

const url = "https://api.weatherapi.com/v1/current.json?q=%22toronto%22&key=a051a60cf1ac40b6b08232626260302"

// function to get current weather details from the API
async function getWeatherDetails() {
    const response = await fetch (url);
    const jsonResponse = await response.json();

    // extract necessary values from the API response
    const cityName = jsonResponse.location.name;
    const tempInCelcius = jsonResponse.current.temp_c;
    const country = jsonResponse.location.country;
    const currentCondition_icon = jsonResponse.current.condition.icon;
    const currentCondition_text = jsonResponse.current.condition.text;

    // innerHTML template to form HTML code and over-write existing div section
    const placeholder = document.querySelector ("#weather-info-placeholder");
    placeholder.innerHTML = `
        <p> Right now it is ... </p>
        <p>${cityName}, ${country}</p>
        <p> 
            <img src="${currentCondition_icon}" alt="${currentCondition_text}"/> 
        </p>
        <p> ${tempInCelcius} C </p>
    `;
}

getWeatherDetails();