const jacketQuery = document.location.search;
const params = new URLSearchParams(jacketQuery);
const jacketID = params.get("id")

console.log(jacketID);

const url = "https://vildehalvorsen.one/rainydays/wp-json/wc/store/products/" + jacketID;
const jacketContainer = document.querySelector(".jacketContainer");
const jacketDescription = document.querySelector(".jacketDescription");
const jacketImg = document.querySelector(".jackets");

const headTitle = document.querySelector("title");
const headMetaText = document.querySelector("head");

console.log(url);


async function getJacketDetail() {
    const response = await fetch(url);
    const jacket = await response.json();

    console.log(jacket);

    createJacketHtml(jacket);
}

getJacketDetail();

function createJacketHtml(jacket) {
    headTitle.innerText = `Rainydays | ${jacket.name}`;
    headMetaText.innerHTML += `<meta name="description" content="${jacket.name} - ${jacket.description}">`;

    jacketImg.innerHTML = `<div class="mainImg">
                                <img src="${jacket.images[0].src}" alt="${jacket.images[0].alt}">
                            </div>
                            <div class="subImg">
                                <div class="sub">
                                    <img src="${jacket.images[0].src}" alt="${jacket.images[0].alt}">
                                </div>
                                <div class="sub">
                                    <img src="${jacket.images[0].src}" alt="${jacket.images[0].alt}">
                                </div>
                            </div>`;

    jacketDescription.innerHTML = `<h2>${jacket.name}</h2>
                                    ${jacket.description}
                                    <h3 class="price">NOK ${jacket.prices.price}</h3>`;
}