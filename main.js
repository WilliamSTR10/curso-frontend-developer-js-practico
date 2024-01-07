const menuEmail = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartProducts = document.querySelector('.product-detail');

//Evento click de menú para desktop
menuEmail.addEventListener('click', toggleDesktopMenu);
//Evento para menu mobile
menuHamburguesa.addEventListener('click', toggleMobileMenu)
//Evento click de menú sección carrito de compras
menuShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){

    if(!shoppingCartProducts.classList.contains('inactive')) shoppingCartProducts.classList.add('inactive')
    descktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    if(!shoppingCartProducts.classList.contains('inactive')) shoppingCartProducts.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart(){
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isDescktopMenuClosed = descktopMenu.classList.contains('inactive');

    if(!isMenuMobileClosed) mobileMenu.classList.add('inactive');
    if(!isDescktopMenuClosed) descktopMenu.classList.add('inactive')
    shoppingCartProducts.classList.toggle('inactive');
}