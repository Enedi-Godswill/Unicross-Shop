// Light button
const lightBtn = document.querySelector(".light-btn");
const bodyEl = document.body;

function changeBg(){
    lightBtn.classList.toggle("active");
    bodyEl.classList.toggle("active");
}
lightBtn.addEventListener("click", changeBg);

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

// Account tab
const accountEl = document.querySelector(".account");
function showAccount(){
    accountEl.classList.toggle("active");
}
accountEl.addEventListener("click", showAccount);

