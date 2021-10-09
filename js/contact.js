const contactContainer = document.querySelector(".contactContainer")
const form = document.querySelector("form");
const submitBtn = document.querySelector(".btn");


const firstName = document.querySelector("#firstname");
const firstNameError = document.querySelector("#firstNameError");
const firstNameCheck = document.querySelector("#firstNameCheck");

const surName = document.querySelector("#surname");
const surNameError = document.querySelector("#surNameError");
const surNameCheck = document.querySelector("#surNameCheck");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailCheck = document.querySelector("#emailCheck");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageCheck = document.querySelector("#messageCheck");


function validateContactForm() {
    event.preventDefault();

    if (checkValue(firstName.value.trim(), 1)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
    if (checkValue(surName.value.trim(), 2)) {
        surNameError.style.display = "none";
    } else {
        surNameError.style.display = "block";
    }
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkValue(message.value, 10)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (checkValue(firstName.value.trim(), 1) && checkValue(surName.value.trim(), 2) && validateEmail(email.value) && checkValue(message.value, 10)) {
        submitContactForm();
    }

}


form.addEventListener("submit", validateContactForm);



function submitContactForm() {
    contactContainer.innerHTML += `<div class="cardWrap">
                                    <section class="successCard">
                                        <i class="fas fa-check"></i>
                                        <h1>Your message has been sent</h1>
                                        <p>We will answer you as soon as possible.</p>
                                    <div class="exploreBtn">
                                        <a href="/index.html">Home</a>
                                    </div>
                                    </section>
                                </div>`;

    form.reset();
}

function checkValue(value, length) {
    if (value.length >= length) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    const testEmail = reg.test(email);
    return testEmail;
}