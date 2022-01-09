const cta = document.querySelector(`.cta`);
const blur = document.querySelector(`.blur`);
const formContainer = document.querySelector(`.form-container`);


// console.log(cta);

cta.addEventListener(`click`,() => {
    blur.classList.toggle(`active`);
    formContainer.classList.toggle(`active`)

})

blur.addEventListener(`click`,() => {
    blur.classList.toggle(`active`)
    formContainer.classList.toggle(`active`)
})