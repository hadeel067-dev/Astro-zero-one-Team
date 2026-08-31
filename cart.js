let products=document.querySelectorAll(".add-to-card");
let list=document.querySelector(".cart-list");
let calculation=document.querySelector("#cal-btn");
let total=document.querySelector(".total");
let price=0;
let title=null;
products.forEach((el) => {
    
    el.onclick =(event)=>{ 
        event.preventDefault()
         title=el.getAttribute('title')
         price+=Number(el.getAttribute('price'))
        const product=document.createElement('li')
        product.innerText=title
        list.appendChild(product)
        
        total.innerHTML=price


    }
    
});

