fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.292629&lon=-111.744766&units=imperial&APPID=32f60e407429e5c25a0d1f653108f601')
    .then(response => response.json())
    .then(results => {
            const tempDiv = document.querySelector('#current-temp');
            const condition = document.querySelector('#current-condition');
            const icon = document.querySelector('#weather-icon');
            const wind_speed = document.querySelector('#wind-speed');
            const windChill = document.querySelector('#wind-chill');

            let windChillVal = "NA";
            const temp = results.main.temp;
            const windSpeed = results.wind.speed;

            if (temp <= 50 && windSpeed > 3) {
                    windChillVal = String((35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temp * (windSpeed ** 0.16))).toFixed(2));
            }

            windChill.innerHTML = windChillVal;
            tempDiv.innerHTML = temp;
            condition.innerHTML = 'Current Condition: ' + results.weather[0].main;
            icon.src = 'https://openweathermap.org/img/wn/' + results.weather[0].icon + '@2x.png';
            wind_speed.innerHTML = windSpeed;
    });
