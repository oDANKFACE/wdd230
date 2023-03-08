// select the elements to manipulate (output to)
const datefield = document.querySelector("#current-date");
const copyright = document.querySelector('#copyright');

// derive the current date using a date object
const currentDate = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    currentDate
);
datefield.innerHTML = `${fulldate}`;

const hamburger = document.querySelector('.menu-button');
const closeHamburger = document.querySelector('#nav-close');
hamburger.addEventListener('click', () => {
    document.querySelector('nav').style.display = 'block';
});
closeHamburger.addEventListener('click', () => {
    document.querySelector('nav').style.display = 'none';
});


document.querySelector(
    "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

copyright.textContent = currentDate.getFullYear();

// Check if the current day is Monday or Tuesday
if (currentDate.getDay() === 1 || currentDate.getDay() === 2) {
    // Get the banner element
    var homeBanner = document.getElementById("home-banner");

    // Set the banner to be displayed
    homeBanner.style.display = "block";
}






