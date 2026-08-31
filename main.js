const searchinput =document.querySelector('search-box');
searchinput.addEventListener("input",()=>{
    const searchvalue=searchinput.textContent;
     const result =product.filter(product =>
product.name
.includes(searchvalue)
     );
     displayProduct(result);
})