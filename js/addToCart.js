const button = document.querySelector("#submitBtn");
const shoppingCartCounter = document.querySelector(".counter");
const validator = document.querySelector(".validator");

let counter = 0;


button.addEventListener("click", function() {
    counter += 1;
    shoppingCartCounter.innerHTML = `<p class="items">${counter}</p>`;

    validator.innerHTML = `<p>${counter} item(s) has been added to cart</p>`;
});