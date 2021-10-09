const button = document.querySelector("#submitBtn");
const shoppingCart = document.querySelector(".fa-shopping-cart");
const shoppingCartCounter = document.querySelector(".counter");
const dropdown = document.querySelector("#size");
const popUp = document.querySelector(".popUpContainer");
const validator = document.querySelector(".validator");

let counter = 0;


button.addEventListener("click", function() {
    counter += 1;
    shoppingCartCounter.innerHTML = `<p class="items">${counter}</p>`;

    validator.innerHTML = `<p>${counter} item(s) has been added to cart</p>`;

    console.log(counter);
});