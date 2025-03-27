document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'http://localhost:3001/products';
    const shopNowBtn = document.querySelector('.shop');
    const productsContainer = document.querySelector('#products'); 
    const products = [];

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            products = data;
        })
    .catch((err) => console.log(err));

function displayProducts(products) { 
     productsContainer.innerHTML = ''; 

    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.className = 'single-product';
        productElement.innerHTML = `
            <h5>${product.name}</h5>
            <img src="${product.image}" alt="${product.name}">
            <p>${product.description}</p>
            <div>${product.category}</div>
            <div>${product.price}</div>
            <div id="buttons">
                <button class="shop-category">Shop Now</button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    
    });



document.querySelectorAll(".shop-category")
shop-category.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});
}



































})