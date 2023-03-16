

const temp = document.querySelector('#current-temp').innerHTML;
const windSpeed = document.querySelector('#wind-speed').innerHTML;
const windChill = document.querySelector('#wind-chill');

let windChillVal = "NA";
console.log(temp, windSpeed)

if (temp <= 50 && windSpeed > 3) {
    windChillVal = String((35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temp * (windSpeed ** 0.16))).toFixed(2));
}

windChill.innerHTML = windChillVal;
