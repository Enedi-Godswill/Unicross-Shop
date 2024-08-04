
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML =
            `<div class="logo">
                <h1>
                    <a href="#">Unicross Shop</a>
                </h1>
            </div>

            <div class="others">
                <button class="light-btn">
                    <img class="dark-icon" src="./icons/dark.svg" alt="">
                    <img class="sun-icon" src="./icons/sunny.svg" alt="">
                </button>
                <div class="search-box">
                    <div class="input-box">
                        <img class="search-img" src="./icons/search.svg" alt="">
                        <input class="input-tab" type="text" placeholder="Search, products, brands and categories">
                    </div>
                    <button>
                        <a href="./search.html">Search</a>
                    </button>
                </div>
                <div class="menu">
                    <button class="btn account">
                        <img src="./icons/person.svg" alt="">
                        <p>Account</p>
                        <img src="./icons/keyboard_arrow_down.svg" alt="">
                    </button>
                    <button class="btn help">
                        <img src="./icons/help.svg" alt="">
                        <p>Help</p>
                        <img src="./icons/keyboard_arrow_down.svg" alt="">
                    </button>
                    <button class="btn cart">
                        <img src="./icons/shopping_cart.svg" alt="">
                        <a href="./product.html">Product</a>
                    </button>
                </div>
                <button class="menu-btn">
                    <img class="open-btn" src="./icons/menu.svg" alt="">
                    <img class="close-btn" src="./icons/close.svg" alt="">
                </button>
            </div>

            <!-- Account tab -->
            <div class="account-tab">
                <div class="account-content">
                    <div class="account-card">
                        <h2>
                            <a href="./Account/sign up/index.html">
                                Sign up
                            </a>
                        </h2>
                    </div>
                    <div class="account-card">
                        <h2>
                            <a href="./Account/login/index.html">
                                Login
                            </a>
                        </h2>
                    </div>
                </div>
            </div>
            <!-- Help tab -->
            <div class="help-tab">
                <div class="account-content">
                    <div class="account-card">
                        <h2>
                            <a href="./Help/">
                                FAQ
                            </a>
                        </h2>
                    </div>
                    <div class="account-card">
                        <h2>
                            <a href="./Help/">
                                Contact
                            </a>
                        </h2>
                    </div>
                </div>
            </div>
    `;
}

createNav();


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
const accountTabEl = document.querySelector(".account-tab");

function showAccount(){
    accountTabEl.classList.toggle("active");
}
accountEl.addEventListener("click", showAccount);

// Help tab
const helpEl = document.querySelector(".help");
const helpTabEl = document.querySelector(".help-tab");

function showHelp(){
    helpTabEl.classList.toggle("active");
}
helpEl.addEventListener("click", showHelp);

