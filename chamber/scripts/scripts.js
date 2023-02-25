// select the elements to manipulate (output to)
const datefield = document.querySelector("#current-date");
const copyright = document.querySelector('#copyright');

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
);
datefield.innerHTML = `${fulldate}`;

const hamburger = document.querySelector('.hamburger-menu');
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

copyright.textContent = now.getFullYear();