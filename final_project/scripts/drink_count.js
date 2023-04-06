let drinks;
const totalDrinks = localStorage.getItem('drinks');
if (totalDrinks) {
    drinks = JSON.parse(totalDrinks);
} else {
    drinks = '0';
    localStorage.setItem('drinks', '0');
}

const scoreTitle = document.querySelector('.score-card-title');
const score = document.querySelector('.score');
const scoreMessage = document.querySelector('.congrats-msg');

score.textContent = drinks;

if (drinks > 19) {
    scoreMessage.textContent = "You've entered a new league of smoothie drinkers. Welcome.";
} else if (drinks > 9) {
    scoreMessage.textContent = "That's a ton of drinks!";
} else if (drinks > 4) {
    scoreMessage.textContent = "That's quite a few drinks!";
} else {
    scoreMessage.textContent = "Keep ordering more!";
}