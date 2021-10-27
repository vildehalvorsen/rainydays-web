const url = "https://vildehalvorsen.one/wp-json/wc/store/products";
const resultsContainer = document.querySelector(".getJackets");

async function getJackets(url) {

    const response = await fetch(url)
    const products = await response.json();

    products.forEach(function(jacket) {
        resultsContainer.innerHTML +=
            `<div class="jackets">
                <a href="/jacket-specific.html?id=${jacket.id}"><img src="${jacket.images[0].src}" alt="${jacket.description}" /> 
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