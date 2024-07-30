
const productContainers = [...document.querySelectorAll('.product-container')];
const frontBtn = [...document.querySelectorAll(".front-btn")];
const BackBtn = [...document.querySelectorAll(".back-btn")];

productContainers.forEach((item, i) => {

    frontBtn[i].addEventListener("click", () => {
        item.scrollLeft += 300;
    })
    BackBtn[i].addEventListener("click", () => {
        item.scrollLeft += 300;
    })
})

