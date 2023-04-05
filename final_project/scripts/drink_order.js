// get the form and the output area
const form = document.querySelector('#drink-order-form');
const output = document.querySelector('#output');

// fetch the fruit data
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then(response => response.json())
    .then(data => {
        const fruits = data;

        // calculate the total nutritional values for the selected fruits
        function calculateNutrition() {
            // get the selected fruit ids
            const selectedFruitIds = [
                form.elements['fruit1'].value,
                form.elements['fruit2'].value,
                form.elements['fruit3'].value
            ];
            console.log(selectedFruitIds[0]);
            console.log(selectedFruitIds[1]);
            console.log(selectedFruitIds[2]);

            // calculate the total nutritional values
            let totalNutrition = {
                carbohydrates: 0,
                protein: 0,
                fat: 0,
                calories: 0,
                sugar: 0
            };

            selectedFruitIds.forEach(fruitId => {
                const selectedFruit = fruits.find(fruit => fruit.id === fruitId);
                totalNutrition.carbohydrates += selectedFruit.nutritions.carbohydrates;
                totalNutrition.protein += selectedFruit.nutritions.protein;
                totalNutrition.fat += selectedFruit.nutritions.fat;
                totalNutrition.sugar += selectedFruit.nutritions.sugar;
                totalNutrition.calories += selectedFruit.nutritions.calories;
            });

            return totalNutrition;
        }

        // handle the form submission
        form.addEventListener('submit', event => {
            event.preventDefault();

            // get the form inputs
            const firstName = form.elements['firstName'].value;
            const email = form.elements['email'].value;
            const phone = form.elements['phone'].value;
            const instructions = form.elements['instructions'].value;

            // calculate the nutritional values
            const nutrition = calculateNutrition();

            // create the output string
            const outputString = `
        <h2>Your Order:</h2>
        <p>Name: ${firstName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Fruit 1: ${form.elements['fruit1'].options[form.elements['fruit1'].selectedIndex].text}</p>
        <p>Fruit 2: ${form.elements['fruit2'].options[form.elements['fruit2'].selectedIndex].text}</p>
        <p>Fruit 3: ${form.elements['fruit3'].options[form.elements['fruit3'].selectedIndex].text}</p>
        <p>Special Instructions: ${instructions}</p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
        <h2>Total Nutritional Values:</h2>
        <p>Carbohydrates: ${nutrition.carbohydrates.toFixed(2)}g</p>
        <p>Protein: ${nutrition.protein.toFixed(2)}g</p>
        <p>Fat: ${nutrition.fat.toFixed(2)}g</p>
        <p>Calories: ${nutrition.calories.toFixed(2)}</p>
        <p>Sugar: ${nutrition.sugar.toFixed(2)}g</p>
      `;

            // display the output
            output.innerHTML = outputString;
        });
    })
    .catch(error => {
        console.error('Error fetching fruit data:', error);
    });
