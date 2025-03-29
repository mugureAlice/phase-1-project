document.addEventListener("DOMContentLoaded", function () {
    const baseUrl = "https://phase-1-project-server-nine.vercel.app/products";
    
    const shopNowBtn = document.querySelector(".shop");
    const productsContainer = document.querySelector("#products");
    let products = [];

    
    fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => {
            products = data;
            displayProducts(products);
        })
        .catch((err) => {return(err)});


    function displayProducts(products) {
        
        products.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.className = "single-product";

            productElement.innerHTML = `
                <h5>${product.name}</h5>
                <img src="${product.image}" alt="${product.name}">
                <p>${product.description}</p>
                <div>${product.category}</div>
                <div>Price: $${product.price}</div>
                <button class="shop-category">Shop Now</button>
            `;
            
            productsContainer.appendChild(productElement);
        });

       const shop_category = document.querySelectorAll(".shop-category")
       shop_category .forEach((button) => {
            button.addEventListener("click", () => {
               return ('Item added to cart!')
            });
        });
    }

    const jewelery_products = document.querySelector(".jewelry-products")
    jewelery_products .addEventListener("click", () => {
        const filteredProducts = products.filter(product => product.category === "jewelry");
        displayProducts(filteredProducts);
    });

    shopNowBtn.addEventListener("click", function (e) {
        e.preventDefault();
        displayProducts(products);
    });

    const form = document.querySelector("form")
    form.addEventListener("submit", function(event){
        event.preventDefault();
    })
    
});

