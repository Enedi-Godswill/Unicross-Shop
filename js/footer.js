
const createFooter = () => {
    let footer = document.querySelector("footer");

    footer.innerHTML = `
        <div class="footer-content">
            <h1 class="logo">Unicross</h1>
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="footer-link" class="footer-link">t-shirts</a></li>
                    <li><a href="footer-link" class="footer-link">sweatshirts</a></li>
                    <li><a href="footer-link" class="footer-link">shirts</a></li>
                    <li><a href="footer-link" class="footer-link">jeans</a></li>
                    <li><a href="footer-link" class="footer-link">trousers</a></li>
                    <li><a href="footer-link" class="footer-link">shoes</a></li>
                    <li><a href="footer-link" class="footer-link">casuals</a></li>
                    <li><a href="footer-link" class="footer-link">formals</a></li>
                    <li><a href="footer-link" class="footer-link">sports</a></li>
                    <li><a href="footer-link" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="footer-link" class="footer-link">t-shirts</a></li>
                    <li><a href="footer-link" class="footer-link">sweatshirts</a></li>
                    <li><a href="footer-link" class="footer-link">shirts</a></li>
                    <li><a href="footer-link" class="footer-link">jeans</a></li>
                    <li><a href="footer-link" class="footer-link">trousers</a></li>
                    <li><a href="footer-link" class="footer-link">shoes</a></li>
                    <li><a href="footer-link" class="footer-link">casuals</a></li>
                    <li><a href="footer-link" class="footer-link">formals</a></li>
                    <li><a href="footer-link" class="footer-link">sports</a></li>
                    <li><a href="footer-link" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ut voluptate mollitia, molestias, non necessitatibus excepturi illum dolores cupiditate possimus repellendus odio quisquam ab vitae voluptatibus eaque repudiandae, eos veniam sapiente? Vel delectus totam numquam.</p>
        <div class="info">support emails - help@unicross.com, </br> customersupport@unicross.com</div>
        <p class="info">telephone - 180 00 00 03 005, 180 09 90 000</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-links">terms and services</a>
                <a href="#" class="social-links">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-links">Instagram</a>
                <a href="#" class="social-links">Facebook</a>
                <a href="#" class="social-links">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();
