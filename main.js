const hamburger = document.getElementById('hamburger'); 
const navTitle = document.getElementById('navTitle');

hamburger.addEventListener('click', () => {
    navTitle.classList.toggle('show');
})