const api_key = '32f60e407429e5c25a0d1f653108f601';
// const city_name = 'Carlsbad';
const city_name = 'Salt Lake City';

// Current Weather In Carlsbad
document.querySelector('.city-name').textContent = city_name;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        document.querySelector(".temp").textContent = `${temperature}°F`;
        document.querySelector(".condition").textContent = description;
        document.querySelector(".humidity").textContent = `Humidity: ${humidity}%`;
    })

https://api.openweathermap.org/data/3.0/onecall

// 3-day Forecast for Carlsbad
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // let dailyData = [];
        // data.list.forEach(item => {
        //     console.log(item)
        //     const date = new Date(item.dt * 1000);
        //     const hours = date.getHours();
        //     if (hours === 12) {
        //         dailyData.push(item);
        //     }
        // });
        // console.log(dailyData)
        // for (let i = 0; i < dailyData.length; i++) {
        //     const date = new Date(dailyData[i].dt * 1000);
        //     const day = date.toLocaleString("en-US", {weekday: "short"});
        //     const temp = Math.round(dailyData[i].main.temp);
        //     document.querySelectorAll(".date")[i].textContent = day;
        //     document.querySelectorAll(".temp")[i + 3].textContent = `${temp}°C`;
        // }
    });
