
const productContainers = document.querySelector('.product-container');
const frontBtn = document.querySelector(".front-btn");
const BackBtn = document.querySelector(".back-btn");

frontBtn.addEventListener("click", () => {
    productContainers.scrollLeft += 300;
})
BackBtn.addEventListener("click", () => {
    productContainers.scrollLeft -= 300;
});
