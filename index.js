document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'http://localhost:3001/products';
    const shopNowBtn = document.querySelector('.shop');
    const makeup = document.querySelector('.makeup-products');
    const jewelry = document.querySelector('.jewelry-products');
    const clothing = document.querySelector('.clothing-products');
    const companyName = document.querySelector('.CompanyName');
    const body = document.body;
    const productsContainer = document.querySelector('#products'); 

    fetch(baseUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error(res);
            }
            return response.json();
        })
        .then(data => {
            const products = data.products;
            const categories = data.categories;

            shopNowBtn.addEventListener('click', function(e) {
                e.preventDefault();
                displayProducts(products); 
            });
        })
        .catch(err => {
            return (err);
        });
});


