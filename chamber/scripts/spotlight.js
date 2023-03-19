
const oneSpotlightTitle = document.querySelector('#spotlight-1 .box-title');
const oneSpotlightLogo = document.querySelector('#spotlight-1 .spotlight-logo img');
const oneSpotlightAddress = document.querySelector('#spotlight-1 .spotlight-slogan')
const oneSpotlightEmail = document.querySelector('#spotlight-1 .spotlight-contact .spotlight-email');
const oneSpotlightPhone = document.querySelector('#spotlight-1 .spotlight-contact .spotlight-phone');

const twoSpotlightTitle = document.querySelector('#spotlight-2 .box-title');
const twoSpotlightLogo = document.querySelector('#spotlight-2 .spotlight-logo img');
const twoSpotlightAddress = document.querySelector('#spotlight-2 .spotlight-slogan')
const twoSpotlightEmail = document.querySelector('#spotlight-2 .spotlight-contact .spotlight-email');
const twoSpotlightPhone = document.querySelector('#spotlight-2 .spotlight-contact .spotlight-phone');

const threeSpotlightTitle = document.querySelector('#spotlight-3 .box-title');
const threeSpotlightLogo = document.querySelector('#spotlight-3 .spotlight-logo img');
const threeSpotlightAddress = document.querySelector('#spotlight-3 .spotlight-slogan')
const threeSpotlightEmail = document.querySelector('#spotlight-3 .spotlight-contact .spotlight-email');
const threeSpotlightPhone = document.querySelector('#spotlight-3 .spotlight-contact .spotlight-phone');

let randomOne;
let randomTwo;
let randomThree;

fetch('./jsons/data.json')
    .then(response => response.json())
    .then(data => {
        const companies = data.companies;
        let spotlightCompanies = [];
        companies.forEach(company => {
            if (company.membership_level.toLowerCase() === 'silver' || company.membership_level.toLowerCase() === 'gold') {
                spotlightCompanies.push(company);
            }
        })

        console.log(spotlightCompanies)
        const randomNumOne = Math.floor(Math.random() * (spotlightCompanies.length));
        randomOne = spotlightCompanies[randomNumOne];
        spotlightCompanies.splice(randomNumOne, 1);

        console.log(spotlightCompanies)
        const randomNumTwo = Math.floor(Math.random() * (spotlightCompanies.length));
        randomTwo = spotlightCompanies[randomNumTwo];
        spotlightCompanies.splice(randomNumTwo, 1);

        console.log(spotlightCompanies)
        const randomNumThree = Math.floor(Math.random() * (spotlightCompanies.length));
        randomThree = spotlightCompanies[randomNumThree];
        spotlightCompanies.splice(randomNumThree, 1);
        console.log(spotlightCompanies)


        console.log(randomOne);
        console.log(randomTwo);
        console.log(randomThree);



        oneSpotlightTitle.innerHTML = randomOne.name;
        oneSpotlightLogo.src = randomOne.thumbnail;
        oneSpotlightLogo.alt = randomOne.alt;
        oneSpotlightAddress.innerHTML = randomOne.address;
        oneSpotlightEmail.innerHTML = randomOne.email;
        oneSpotlightPhone.innerHTML = randomOne.phone;

        twoSpotlightTitle.innerHTML = randomTwo.name;
        twoSpotlightLogo.src = randomTwo.thumbnail;
        twoSpotlightLogo.alt = randomTwo.alt;
        twoSpotlightAddress.innerHTML = randomTwo.address;
        twoSpotlightEmail.innerHTML = randomTwo.email;
        twoSpotlightPhone.innerHTML = randomTwo.phone;

        threeSpotlightTitle.innerHTML = randomThree.name;
        threeSpotlightLogo.src = randomThree.thumbnail;
        threeSpotlightLogo.alt = randomThree.alt;
        threeSpotlightAddress.innerHTML = randomThree.address;
        threeSpotlightEmail.innerHTML = randomThree.email;
        threeSpotlightPhone.innerHTML = randomThree.phone;

    })



