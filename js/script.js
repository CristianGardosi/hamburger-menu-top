const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
    // Toggle: al primo click hamburger = X e al secondo X = hamburger
    navBar.classList.toggle('change')
});

