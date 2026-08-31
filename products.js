
const product =[{
    id: 1,
    name: "  سوار يدوي بتصاميم تراثية",
    price: 8,
    category: "اكسسوارات",
    image: "./imgs/سوار.jfif",
    description: "سوار مستوحاة من النقش الفلسطيني العربي الاصيل ",

},{
    id:2,
    name: "كوب خزفي بتصميم الزيتون",
    price: 10,
    category: "هدايا",
    image: "./imgs/Handmade Nature Inspired Mug.jfif",
    description: "كوب خزفي بتصميم الزيتون يتحمل الحرارة ",

}
,

{
 id:3,
    name:" حقيبة قماش مطرزة",
    price: 18,
    category: "هدايا",
    image: "./imgs/Handmade Nature Inspired Mug.jfif",
    description: "حقيبة قماش مطرزة مخيطة بخيوط ذاات جودة عالية",


}
,
{
 id:4,
    name: "شمعة عطرية",
    price: 12,
    category: "هدايا",
    image: "./imgs/Vela Aromática Lavanda _ Lumina Collection.jfif",
    description: "كوب خزفي بتصميم الزيتون يتحمل الحرارة ",


}
,
{
    id:5,
    name: "ثوب فلسطيني ",
    price: 70,
    category: "ملابس",
    image: "./imgs/download (3).jpg",
    description: "ثوب فلسطيني ابيض واحمر بجودة عالية onesize",


}

] 


const productsContainer =
    document.getElementById("productsContainer");


    function displayProducts(productsToDisplay) {

    productsContainer.innerHTML = "";
     productsToDisplay.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <strong>$${product.price}</strong>

            <button class="add-to-card" onclick="addToCart(${product.id})">
                أضف إلى السلة <i class="fa-solid fa-cart-shopping" style="color: rgb(255, 255, 255);"></i>
            </button>
        `;
        console.log(card);

        productsContainer.appendChild(card);
    });
}
