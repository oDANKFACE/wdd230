const api_key = '32f60e407429e5c25a0d1f653108f601';
// const city_name = 'Carlsbad';
const city_name = 'Carlsbad';
const units = 'imperial';
const lat = '33.1581';
const lon = '-117.3506';
const exclude = 'minutely,hourly,alerts';

const max1 = document.querySelector('#max1');
const max2 = document.querySelector('#max2');
const max3 = document.querySelector('#max3');
const min1 = document.querySelector('#min1');
const min2 = document.querySelector('#min2');
const min3 = document.querySelector('#min3');
const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');

const date1 = document.querySelector('#date1');
const date2 = document.querySelector('#date2');
const date3 = document.querySelector('#date3');

// Current Weather In Carlsbad
document.querySelector('.city-name').textContent = city_name;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=${units}`)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        document.querySelector(".temp").textContent = `${temperature}°F`;
        document.querySelector(".condition").textContent = description;
        document.querySelector(".humidity").textContent = `Humidity: ${humidity}%`;
    })


// 3-day Forecast for Carlsbad
fetch(`https://api.openweathermap.org/data/3.0/onecall?appid=${api_key}&lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}`)
    .then(response => response.json())
    .then(data => {
        let today = new Date();
        let forecastDate1 = new Date();
        let forecastDate2 = new Date();
        let forecastDate3 = new Date();
        forecastDate1.setDate(today.getDate() + 1);
        forecastDate2.setDate(today.getDate() + 2);
        forecastDate3.setDate(today.getDate() + 3);

        const options = {weekday: 'long'};
        date1.textContent = forecastDate1.toLocaleString('en-US', options);
        date2.textContent = forecastDate2.toLocaleString('en-US', options);
        date3.textContent = forecastDate3.toLocaleString('en-US', options);

        let dailyForecast = [];
        dailyForecast[0] = data.daily[1];
        dailyForecast[1] = data.daily[2];
        dailyForecast[2] = data.daily[3];

        console.log(dailyForecast[0]);
        console.log(dailyForecast[1]);
        console.log(dailyForecast[2]);

        day1.textContent = dailyForecast[0].temp.day;
        min1.textContent = dailyForecast[0].temp.min;
        max1.textContent = dailyForecast[0].temp.max;
        day2.textContent = dailyForecast[1].temp.day;
        min2.textContent = dailyForecast[1].temp.min;
        max2.textContent = dailyForecast[1].temp.max;
        day3.textContent = dailyForecast[2].temp.day;
        min3.textContent = dailyForecast[2].temp.min;
        max3.textContent = dailyForecast[2].temp.max;


    });
