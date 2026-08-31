// const searchInput = document.querySelector("#search-box");
// searchInput.addEventListener("input",
//      () => {
//           const searchValue = searchInput.value.trim().toLowerCase();
//           const results = products.filter(product => product.name.toLowerCase().includes(searchValue)); displayProducts(results);
//      });
// const categoryButtons = document.querySelectorAll(".category-btn");
// categoryButtons.forEach(button => {
//      button.addEventListener("click",
//           () => {
//                const category = button.dataset.category;
//                if (category === "الكل") {
//                     displayProducts(products);

//                } else {
//                     const results = products.filter(product => product.category === category);
//                     displayProducts(results);
//                }
//           });
// });
const searchinput =document.querySelector("#search-box");
searchinput.addEventListener("input",()=>{
    const searchvalue=searchinput.value;
     const result =product.filter(product =>
product.name
.includes(searchvalue)
     );
     displayProducts(result);
})

const categoryButtons=document.querySelectorAll(".category-btn");
 categoryButtons.forEach(div =>{
 div.addEventListener("click",()=>{
     
    const category=div.dataset.category;
    const result=product.filter(product=> 
        product.category===category
    );
    displayProducts(result);
});
});

