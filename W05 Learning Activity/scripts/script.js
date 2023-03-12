const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    console.log(button)
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });
        input.focus();
        input.value = '';
    }
});
