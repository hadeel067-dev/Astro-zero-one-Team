let products=document.querySelectorAll(".add-to-card");
let list=document.querySelector(".cart-list");
let calculation=document.querySelector("#cal-btn");
let total=document.querySelector(".total");
let price=0;
let title=null;
prouducts.forEach((el) => {
    el.preventDefault();
    el.onclick =()=>{ 
         title=el.getAttribute('title')
         price=el.Number(getAttribute('price'))
        const product=document.createElement('li')
        product.innerText=title
        list.appendChild(product)


    }
});
