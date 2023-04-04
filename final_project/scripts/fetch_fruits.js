fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then(response => response.json())
    .then(data => {
        const fruits = data;
        const selectElements = document.querySelectorAll('.fruit-select');
        selectElements.forEach(selectElement => {
            fruits.forEach(fruit => {
                const optionElement = document.createElement('option');
                // optionElement.value = fruit.name;
                optionElement.textContent = fruit.name;
                selectElement.appendChild(optionElement);
            });
        });
    });
