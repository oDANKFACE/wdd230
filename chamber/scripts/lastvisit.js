
let timeBetween
const myStorage = localStorage.getItem('dates');
let dates
if(myStorage){
    dates = JSON.parse(myStorage);
} else {
    dates = [];
}
const now = new Date();
const lastVisit = dates.at(-1);
dates.push(now);

if(lastVisit){
    timeBetween = Math.floor((now.getTime() - new Date(lastVisit).getTime()) / 1000 / 60 / 60 / 24);
}

localStorage.setItem('dates', JSON.stringify(dates));

console.log(timeBetween)
console.log(now.getTime())
console.log(lastVisit)

document.querySelector('#lastVisit').innerHTML += timeBetween;
