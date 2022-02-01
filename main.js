const hamburger = document.getElementById('hamburger'); 
const navTitle = document.getElementById('navTitle');

let img = document.querySelector('#marsID');
let btn1 = document.querySelector('#marginLow');
let btn2 = document.querySelector('#marginLow2');
let diffTitle = document.querySelector('#titleChange');

btn1.addEventListener('click', () => {
    img.src = 'img/MarsTest.JPG';
    document.getElementById("titleChange").innerHTML = "MARS";
    document.getElementById("milesChange").innerHTML = "228.69 million miles";


})
btn2.addEventListener('click', () => {
    img.src = 'img/Neptune3.jpg';
    document.getElementById("titleChange").innerHTML = "NEPTUNE";
    document.getElementById("milesChange").innerHTML = "2.8508 billion miles";


})




hamburger.addEventListener('click', () => {
    navTitle.classList.toggle('show');
})


