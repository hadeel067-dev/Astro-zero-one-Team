<<<<<<< HEAD
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
=======
<<<<<<< HEAD
 const searchInput = document.querySelector("#search-box");
  searchInput.addEventListener("input",
 () => { const searchValue = searchInput.value.trim().toLowerCase(); 
     const results = products.filter(product => product.name.toLowerCase().includes(searchValue) ); displayProducts(results); }); 
     const categoryButtons = document.querySelectorAll(".category-btn");
      categoryButtons.forEach(button => { button.addEventListener("click", 
          () => { const category = button.dataset.category;
                if (category === "الكل") { displayProducts(products); 
=======
>>>>>>> 231180de45f8fcfd6810258024cc9305b8142abc

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
>>>>>>> 2d9b10c8d58ff8ba27e8ab774b799eb5e11c8e96

<<<<<<< HEAD
const categoryButtons=document.querySelectorAll(".category-btn");
=======
<<<<<<< HEAD
                } else { const results = products.filter(product => product.category === category ); 
                    displayProducts(results); } }); });
=======
const categoryButtons=document.querySelectorAll('.category-btn');
>>>>>>> 231180de45f8fcfd6810258024cc9305b8142abc
 categoryButtons.forEach(div =>{
 div.addEventListener("click",()=>{
     
    const category=div.dataset.category;
    const result=product.filter(product=> 
        product.category===category
    );
    displayProducts(result);
});
});
<<<<<<< HEAD
>>>>>>> 5d483956929862e31dd9fd823679402ced942996
=======

>>>>>>> 2d9b10c8d58ff8ba27e8ab774b799eb5e11c8e96
