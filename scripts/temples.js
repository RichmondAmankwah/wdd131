document.getElementById("currentyear").textContent = 
    `©  ${new Date().getFullYear()} Richmond Amankwah-Ghana`;

document.getElementById("lastModified").textContent= 
    `last modified: ${document.lastModified}`;

const mainnav = document.querySelector('.frt');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle("show");
});