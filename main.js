const menuEmail = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Evento click de menú para desktop
menuEmail.addEventListener('click', toggleDesktopMenu);
//Evento para menu mobile
menuHamburguesa.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu(){
    descktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}