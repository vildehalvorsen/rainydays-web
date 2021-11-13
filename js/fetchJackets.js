/** Home page */


const firstUrl = "https://vildehalvorsen.one/rainydays/wp-json/wc/store/products";
const featuredContainer = document.querySelector(".featuredJackets");

async function getFeaturedJackets(firstUrl) {

    const response = await fetch(firstUrl)
    const results = await response.json();

    results.forEach(function(jacket) {
        featuredContainer.innerHTML +=
            `<div class="jackets">
                <a href="/jacket-specific.html?id=${jacket.id}">
                    <img src="${jacket.images[0].src}" alt="${jacket.images[0].alt}" />
                </a>
            </div>`;
    })
}

getFeaturedJackets(firstUrl);

/** Jackets page */

const url = "https://vildehalvorsen.one/wp-json/wc/store/products";
const resultsContainer = document.querySelector(".getJackets");

async function getJackets(url) {

    const response = await fetch(url)
    const products = await response.json();

    products.forEach(function(jacket) {
        resultsContainer.innerHTML +=
            `<div class="jackets">
                <a href="/jacket-specific.html?id=${jacket.id}"><img src="${jacket.images[0].src}" alt="${jacket.images[0].alt}" /> 
                    <div class="tag">
                        <h3>${jacket.name}</h3>
                        ${jacket.short_description}
                        <p class="price">NOK ${jacket.prices.price}</p>
                    </div>
                </a>
            </div>`;
    })
}

getJackets(url);