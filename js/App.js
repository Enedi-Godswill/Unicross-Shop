// Menu tab
const menuEl = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

function toggleMenu(){
    menuEl.classList.toggle("active");
    menuBtn.classList.toggle("active");
}
menuBtn.addEventListener("click", toggleMenu);

// Search tab
const inputEl = document.querySelector(".input-tab");
const searchBtn = document.querySelector(".search-img");

function showInput(){
    inputEl.classList.toggle("active");
}
searchBtn.addEventListener("click", showInput);

