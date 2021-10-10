const button = document.querySelector("#completeBtn");
const main = document.querySelector("main");


button.addEventListener("click", function() {
    main.innerHTML = `<div class="validationContainer">
                                <section class="successCard">
                                    <i class="fas fa-check"></i>
                                    <h1>Thank you for your purchase</h1>
                                    <p>Your payment has been successful.</p>
                                    <p>You will soon recieve a confirmation e-mail with the order details.</p>
                                </section>
                                <div class="exploreBtn">
                                <a href="/ourjackets.html">Explore more</a>
                                </div>
                            </div>`;
});