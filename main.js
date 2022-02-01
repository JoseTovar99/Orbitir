const hamburger = document.getElementById('hamburger'); 
const navTitle = document.getElementById('navTitle');

let img = document.querySelector('#marsID');
let btn1 = document.querySelector('#marginLow');
let btn2 = document.querySelector('#marginLow2');
let btn3 = document.querySelector('#marginLow3');
let diffTitle = document.querySelector('#titleChange');

btn1.addEventListener('click', () => {
    img.src = 'img/MarsTest.JPG';
    document.getElementById("titleChange").innerHTML = "MARS";
    document.getElementById("milesChange").innerHTML = "228.69 million miles";
    document.getElementById("marsChange").innerHTML = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Referred to as the Red Planet, it features a rocky terrain with a red-orange tone.";
    document.getElementById('dateChange').innerHTML = "May 1, 2022";
})

btn2.addEventListener('click', () => {
    img.src = 'img/Neptune3.jpg';
    document.getElementById("titleChange").innerHTML = "NEPTUNE";
    document.getElementById("milesChange").innerHTML = "2.8508 billion miles";
    document.getElementById("marsChange").innerHTML = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter. It features a water layer with no solid surface. Habitable locations will be located up in the clouds. ";
    document.getElementById('dateChange').innerHTML = "July 8, 2022";
})

btn3.addEventListener('click', () => {
    img.src = 'img/jupiter1.JPG';
    document.getElementById("titleChange").innerHTML = "JUPITER";
    document.getElementById("milesChange").innerHTML = "545.17 million miles";
    document.getElementById("marsChange").innerHTML = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined";
    document.getElementById('dateChange').innerHTML = "June 19, 2022";
})


hamburger.addEventListener('click', () => {
    navTitle.classList.toggle('show');
})


