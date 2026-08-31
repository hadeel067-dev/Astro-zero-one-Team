const products = [
    {
        id: 1,
        name: "سوار يدوي بتصاميم تراثية",
        price: 8,
        category: "إكسسوارات",
        Image: "./imgs/سوار.jfif",
        description: "سوار مستوحى من النقش الفلسطيني العربي الأصيل"
    },

    {
        id: 2,
        name: "كوب خزفي بتصميم الزيتون",
        price: 10,
        category: "هدايا",
        Image: "./imgs/Handmade Nature Inspired Mug.jfif",
        description: "كوب خزفي بتصميم الزيتون يتحمل الحرارة"
    },

    {
        id: 3,
        name: "حقيبة قماش مطرزة",
        price: 18,
        category: "هدايا",
        Image: "./imgs/Handmade Nature Inspired Mug.jfif",
        description: "حقيبة قماش مطرزة مخيطة بخيوط ذات جودة عالية"
    },

    {
        id: 4,
        name: "شمعة عطرية",
        price: 12,
        category: "هدايا",
        Image: "./imgs/Vela Aromática Lavanda _ Lumina Collection.jfif",
        description: "شمعة عطرية مميزة"
    },


    {
        id: 5,
        name: "ثوب فلسطيني",
        price: 70,
        category: "ملابس",
        Image: "./imgs/download (3).jpg",
        description: "ثوب فلسطيني أبيض وأحمر بجودة عالية"
    }
];





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

<<<<<<< HEAD
         <button class="add-to-card" onclick="addToCart(${product.id})"> أضف إلى السلة <i class="fa-solid fa-cart-shopping" style="color: rgb(255, 255, 255);"> </i> </button> ;`
            console.log(card);
            productsContainer.appendChild(card);
        });

        displayProducts(products);
    }
}


=======
         <button class="add-to-card" onclick="addToCart(${product.id})"> أضف إلى السلة <i class="fa-solid fa-cart-shopping" style="color: rgb(255, 255, 255);"> </i> </button>;
          <button class="add-to-card" onclick="addToCart(${product.id})"> أضف إلى السلة <i class="fa-solid fa-cart-shopping" style="color: rgb(255, 255, 255);"> </i> </button> `;
            console.log(card);
            productsContainer.appendChild(card);
        });
    }
    displayProducts(products);

}
//malak
let productss=document.querySelectorAll(".add-to-card");
let productrmv=document.querySelectorAll(".removefromcard");
let list=document.querySelector(".cart-list");
let total=document.querySelector(".total");
let price=0;
let title=null;
let productsss=[]
function addToCard(){
    products.forEach((el,index) => {
    
    el.onclick =(event)=>{ 
        event.preventDefault()
         title=el.getAttribute('title')
         price+=Number(el.getAttribute('price'))
         productsss[index]=document.createElement('li')
        productsss[index].innerText=title
        list.appendChild(productsss[index])
        
        total.innerHTML=`$${price}`


    }
    
})};function removefromcard(){ productrmv.forEach((el,index) => {
    
    el.onclick =(event)=>{ 
        event.preventDefault()
         if(productsss[index]){
            price-=Number(el.getAttribute('price'))
             productsss[index].remove()
         }
        total.innerHTML=`$${price}`}
         


    }
    
)}
>>>>>>> 0c153c86cefaa83b12f08d380994bcfd39e1616c

//     <button class="add-to-card" onclick="addToCart(${product.id})"> أضف إلى السلة <i class="fa-solid fa-cart-shopping" style="color: rgb(255, 255, 255);"> </i> </button>;
//     <button class="removefromcard" onclick="removefromcart(${product.id})"> احذف من السلة <i class="fa-solid fa-cart-shopping" style="color: rgb(255, 255, 255);"> </i> </button> `;
//         console.log(card);
//         productsContainer.appendChild(card);
//     })};
<<<<<<< HEAD
// }0
=======
// }
>>>>>>> 0c153c86cefaa83b12f08d380994bcfd39e1616c
