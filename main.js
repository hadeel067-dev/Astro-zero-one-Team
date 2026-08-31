const searchinput =document.querySelector('#search-box');
searchinput.addEventListener("input",()=>{
    const searchvalue=searchinput.textContent;
     const result =product.filter(product =>
product.name
.includes(searchvalue)
     );
     displayProduct(result);
})

const categoryButtons=document.querySelectorAll('.category-btn');
categoryButtons.forEach(div =>{
categoryButtons.addEventListener("click",()=>{
     
    const category=div.dataset.category;
    const result=product.filter(product=> 
        product.category===category
    );
    displayProduct(result);
});
});
