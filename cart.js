let products=document.querySelectorAll(".add-to-card");
let productrmv=document.querySelectorAll(".removefromcard");
let list=document.querySelector(".cart-list");
let total=document.querySelector(".total");
let price=0;
let title=null;
let product=[]
function addToCard(){
    products.forEach((el,index) => {
    
    el.onclick =(event)=>{ 
        event.preventDefault()
         title=el.getAttribute('title')
         price+=Number(el.getAttribute('price'))
         product[index]=document.createElement('li')
        product[index].innerText=title
        list.appendChild(product[index])
        
        total.innerHTML=`$${price}`


    }
    
})};function removefromcard(){ productrmv.forEach((el,index) => {
    
    el.onclick =(event)=>{ 
        event.preventDefault()
         if(product[index]){price-=Number(el.getAttribute('price'))
        product[index].remove()}
        total.innerHTML=`$${price}`}
         


    }
    
)}

