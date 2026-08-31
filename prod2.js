const productsContainer =
    document.getElementById("productsContainer");


function displayProducts(productsToDisplay) {

    const productsContainer = document.getElementById("productsContainer");
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

         <button class="add-to-card" onclick="addToCart(${product.id})"> أضف إلى السلة <i class="fa-solid fa-cart-shopping" style="color: rgb(255, 255, 255);"> </i> </button> ;`
            console.log(card);
            productsContainer.appendChild(card);
        });

        displayProducts(products);
    }
}
