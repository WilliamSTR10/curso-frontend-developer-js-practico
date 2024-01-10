const menuEmail = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartProducts = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');

//Evento click de menú para desktop
menuEmail.addEventListener('click', toggleDesktopMenu);
//Evento para menu mobile
menuHamburguesa.addEventListener('click', toggleMobileMenu)
//Evento click de menú sección carrito de compras
menuShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {

    if (!shoppingCartProducts.classList.contains('inactive')) shoppingCartProducts.classList.add('inactive')
    descktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    if (!shoppingCartProducts.classList.contains('inactive')) shoppingCartProducts.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart() {
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isDescktopMenuClosed = descktopMenu.classList.contains('inactive');

    if (!isMenuMobileClosed) mobileMenu.classList.add('inactive');
    if (!isDescktopMenuClosed) descktopMenu.classList.add('inactive')
    shoppingCartProducts.classList.toggle('inactive');
}

const productList = [];

productList.push({
    nombre: 'Cerdo',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    precio: 800000
});
productList.push({
    nombre: 'Pollo criollo',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    precio: 30000
});
productList.push({
    nombre: 'Empanada',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    precio: 2000
});
productList.push({
    nombre: 'Hamburguesa',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    precio: 10000
});
productList.push({
    nombre: 'Perro caliente',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    precio: 7000
});
productList.push({
    nombre: 'Panela',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    precio: 10000
});
productList.push({
    nombre: 'Huevo',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    precio: 600
});
productList.push({
    nombre: 'Banano',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    precio: 4000
});

function renderProducts(arrayProductos) {
    for (product of productList) {

        //product = {nombre, img, orecio} --> product.image
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const divInfo = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;

        const productName = document.createElement('p');
        productName.innerText = product.nombre;

        divInfo.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(divInfo);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);

