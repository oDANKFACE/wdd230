const cardsContainer = document.querySelector('.directory-cards-container');

fetch('./jsons/data.json')
    .then(response => response.json())
    .then(data => {
        const companies = data.companies;

        companies.forEach(company => {
            const card = document.createElement("div");
            card.className = "directory-card";

            const thumbnail = document.createElement("img");
            thumbnail.className = "company-thumbnail";
            thumbnail.src = company.thumbnail;

            const bar = document.createElement("div");
            bar.className = "company-bar"

            const name = document.createElement("h2");
            name.className = "company-name";
            name.textContent = company.name;

            const address = document.createElement("p");
            address.className = "company-address";
            address.textContent = company.address;

            const phone = document.createElement("p");
            phone.className = "company-phone";
            phone.textContent = company.phone;

            const membershipLevel = document.createElement("p");
            membershipLevel.classList.add(company.membership_level.toLowerCase(), "company-membership-level");
            membershipLevel.textContent = company.membership_level;

            const companyUrl = document.createElement("a");
            companyUrl.className = "company-url";
            companyUrl.href = company.url;
            companyUrl.textContent = "Visit Website";

            card.appendChild(thumbnail);
            card.appendChild(bar)
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(membershipLevel);
            card.appendChild(companyUrl);

            cardsContainer.appendChild(card);

            //// Old way. Opted for above to help with classes for css
            // card.innerHTML = `
            //   <img src="${company.thumbnail}" alt="${company.name} logo">
            //   <h2>${company.name}</h2>
            //   <p>${company.address}</p>
            //   <p>${company.phone}</p>
            //   <p class="">${company.membership_level}</p>
            //   <p><a href="${company.url}" target="_blank">Visit website</a></p>
            // `;
            // cardsContainer.appendChild(card);


        });
    });



