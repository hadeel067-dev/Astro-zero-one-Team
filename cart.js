let cart = JSON.parse(localStorage.getItem("cart")) || [];

let list = document.querySelector(".cart-list");
let total = document.querySelector(".total");

function displayCart() {

    list.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((product, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button class="removefromcard" data-index="${index}">
                حذف
            </button>
        `;

        list.appendChild(li);

        totalPrice += product.price;
    });

    total.innerHTML = `$${totalPrice}`;

    // أزرار الحذف
    let removeButtons = document.querySelectorAll(".removefromcard");

    removeButtons.forEach(button => {

        button.onclick = function () {

            let index = Number(this.getAttribute("data-index"));

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            displayCart();
        };
    });
}

displayCart();