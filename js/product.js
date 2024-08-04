const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");

productImages.forEach((item, i) => {
    item.addEventListener("click", () => {
        // activeImages = i;
        // productImages[activeImages].classList.remove('active');
        // item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
    })
})

// toggle size buttons
const sizeBtns = document.querySelectorAll(".size-radio-btn");
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener("click", () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})



