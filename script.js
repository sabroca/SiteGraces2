
document.addEventListener('DOMContentLoaded', () => {

let cartCount = 0;
const cartText = document.querySelector('.header-right p');

const buttons = document.querySelectorAll('.product button');

buttons.forEach(button => {
button.addEventListener('click', () => {

cartCount++;

cartText.innerHTML = `sacola • ${cartCount} item(ns)`;

button.innerHTML = 'adicionado ✓';
button.style.background = '#627c4e';

setTimeout(() => {
button.innerHTML = 'adicionar ao carrinho';
button.style.background = '#981e50';
}, 1500);

});
});

const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const products = document.querySelectorAll('.product');

function showAllProducts(){
products.forEach(product=>{
product.style.display = 'block';
});
}

function filterProducts() {

const value = searchInput.value.toLowerCase().trim();

products.forEach(product => {

const title = product.querySelector('h3').innerText.toLowerCase();
const description = product.querySelector('p').innerText.toLowerCase();

if (
title.includes(value) ||
description.includes(value)
) {
product.style.display = 'block';
} else {
product.style.display = 'none';
}

});

}

searchInput.addEventListener('keyup', filterProducts);
searchButton.addEventListener('click', filterProducts);

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {

link.addEventListener('click', (e) => {

e.preventDefault();

const text = link.innerText.toLowerCase();

if(text === 'destaques'){

products.forEach(product => {

if(product.classList.contains('destaque')){
product.style.display = 'block';
}else{
product.style.display = 'none';
}

});

window.scrollTo({
top: document.querySelector('.products').offsetTop - 100,
behavior: 'smooth'
});

}

else if(text === 'coleção'){

showAllProducts();

window.scrollTo({
top: document.querySelector('.products').offsetTop - 100,
behavior: 'smooth'
});

}

else{

showAllProducts();

window.scrollTo({
top: document.querySelector('.products').offsetTop - 100,
behavior: 'smooth'
});

}

});

});

const heroButton = document.querySelector('.hero-text button');

heroButton.addEventListener('click', () => {

showAllProducts();

window.scrollTo({
top: document.querySelector('.products').offsetTop - 100,
behavior: 'smooth'
});

});

});
