const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData(url);



const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('div');
        birthdate.className = 'birthdate';
        let birthplace = document.createElement('div');
        birthplace.className = 'birthplace';

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ______________`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        birthdate.innerHTML = 'Birthday: ' + prophet.birthdate;
        birthplace.innerHTML = 'Birthplace: ' + prophet.birthplace;

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(birthdate);
        card.appendChild(birthplace);

        cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression
