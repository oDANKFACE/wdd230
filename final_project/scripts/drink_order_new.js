const output = document.querySelector('#output-area');
// const submit = document.querySelector('#fresh-submit');
const form = document.querySelector('#drink-order-form');

const totalDrinks = localStorage.getItem('drinks');

fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then(response => response.json())
    .then(data => {

        const fruits = data;
        form.addEventListener('submit', function () {


            const firstName = form.elements.firstName.value;
            const email = form.elements.email.value;
            const phone = form.elements.phone.value;
            const fruit1 = form.elements.fruit1.value;
            const fruit2 = form.elements.fruit2.value;
            const fruit3 = form.elements.fruit3.value;
            const specialInstructions = form.elements.instructions.value;


            let freshInfo = {
                firstName: firstName,
                email: email,
                phone: phone,
                fruit1: fruit1,
                fruit2: fruit2,
                fruit3: fruit3,
                specialInstructions: specialInstructions,
            }


            let drinks;
            const totalDrinks = localStorage.getItem('drinks');
            if (totalDrinks) {
                drinks = JSON.parse(totalDrinks);
            } else {
                drinks = '0';
            }

            drinks = parseInt(drinks) + 1;
            console.log(drinks);
            localStorage.setItem('drinks', drinks.toString());
            console.log(drinks);


            const selectedFruits = [
                form.elements['fruit1'].value,
                form.elements['fruit2'].value,
                form.elements['fruit3'].value
            ];


            let totalNutrition = {
                carbohydrates: 0,
                protein: 0,
                fat: 0,
                calories: 0,
                sugar: 0
            };


            selectedFruits.forEach(fruitName => {
                const selectedFruit = fruits.find(object => object.name === fruitName);
                // console.log(selectedFruit);
                totalNutrition.carbohydrates += selectedFruit.nutritions.carbohydrates;
                totalNutrition.protein += selectedFruit.nutritions.protein;
                totalNutrition.fat += selectedFruit.nutritions.fat;
                totalNutrition.sugar += selectedFruit.nutritions.sugar;
                totalNutrition.calories += selectedFruit.nutritions.calories;
            })

            output.style.display = 'block';

            output.innerHTML = `
            <div class="fresh-out first-name-out"><strong>First name: </strong><span class="output-calc-val" class="fresh-report-span">${freshInfo.firstName}</span></div>
            <div class="fresh-out email-out"><strong>Email: </strong><span class="output-calc-val" class="fresh-report-span">${freshInfo.email}</span></div>
            <div class="fresh-out phone-out"><strong>Phone: </strong><span id="" class="fresh-report-span">${freshInfo.phone}</span></div>
            <div class="fresh-out fruit-1-out"><strong>Fruit 1: </strong><span class="output-calc-val" class="fresh-report-span">${freshInfo.fruit1}</span></div>
            <div class="fresh-out fruit-2-out"><strong>Fruit 2: </strong><span class="output-calc-val" class="fresh-report-span">${freshInfo.fruit2}</span></div>
            <div class="fresh-out fruit-3-out"><strong>Fruit 3: </strong><span class="output-calc-val" class="fresh-report-span">${freshInfo.fruit3}</span></div>
            <div class="fresh-out special-instructions-out"><strong>Special Instructions: </strong><span id="special-instructions" class="output-calc-val" class="fresh-report-span">${freshInfo.specialInstructions}</span></div>
            <div class="fresh-out carbs-out"><strong>Carbs: </strong><span class="output-calc-val" class="fresh-report-span">${Math.round(totalNutrition.carbohydrates)}</span>g</div>
            <div class="fresh-out protein-out"><strong>Protein: </strong><span class="output-calc-val" class="fresh-report-span">${Math.round(totalNutrition.protein)}</span>g</div>
            <div class="fresh-out fat-out"><strong>Fat: </strong><span class="output-calc-val" class="fresh-report-span">${Math.round(totalNutrition.fat)}</span>g</div>
            <div class="fresh-out sugar-out"><strong>Sugar: </strong><span class="output-calc-val" class="fresh-report-span">${Math.round(totalNutrition.sugar)}</span>g</div>
            <div class="fresh-out calories-out"><strong>Calories: </strong><span class="output-calc-val" class="fresh-report-span">${Math.round(totalNutrition.calories)}</span></div>
            `;

        })
    })



