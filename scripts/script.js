const d = new Date;
const year = d.getFullYear();

document.querySelector('#year').textContent = String(year);
document.querySelector('#last_modified').textContent = document.lastModified;