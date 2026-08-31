const productsContainer =
    document.getElementById("productsContainer");


function displayProducts(productsToDisplay) {

    productsContainer.innerHTML = "";

    productsToDisplay.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.Image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <strong>$${product.price}</strong>

            <button class="add-to-card">
                أضف إلى السلة
                <i class="fa-solid fa-cart-shopping"
                   style="color: rgb(255, 255, 255);">
                </i>
            </button>
        `;

        console.log(card);

        productsContainer.appendChild(card);

        
        const addButton = card.querySelector(".add-to-card");

        addButton.onclick = function () {

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            alert("تمت إضافة المنتج إلى السلة ");
        };
    });
}


displayProducts(products);