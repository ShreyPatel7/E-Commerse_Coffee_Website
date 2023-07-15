// Select the navbar element with the class 'navbar'
let navbar = document.querySelector('.navbar');

// When the element with the ID 'menu-btn' is clicked, toggle the 'active' class on the navbar element and remove it from the searchForm and cartItem elements
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Select the element with the class 'search-form'
let searchForm = document.querySelector('.search-form');

// When the element with the ID 'search-btn' is clicked, toggle the 'active' class on the searchForm element and remove it from the navbar and cartItem elements
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// Select the element with the class 'cart-items-container'
let cartItem = document.querySelector('.cart-items-container');

// When the element with the ID 'cart-btn' is clicked, toggle the 'active' class on the cartItem element and remove it from the navbar and searchForm elements
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// When the window is scrolled, remove the 'active' class from the navbar, searchForm, and cartItem elements
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
