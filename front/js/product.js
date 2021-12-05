//Récupération de l'id via les paramètres de l'url
const idProduct = new URL(window.location.href).searchParams.get("id");

//Récupération des sélecteurs pour les futurs modifications
let imgProduct = document.querySelector(".item__img");
let img = document.createElement("img");
imgProduct.appendChild(img);
let titleProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");
let descriptionProduct = document.getElementById("description");
let colorsProduct = document.getElementById("colors");


//Récupération de l'article grace a l'id + affichage des données de ce dernier
getArticle();

//
let addToCartBtn = document.getElementById("addToCart");
addToCartBtn.addEventListener("click", () => {
    addToCart();
});


//Récupération de l'article grace a l'id + affichage des données de ce dernier
async function getArticle() {
     await fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())    
    .then(product => {
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", product.altTxt);    
        titleProduct.innerHTML = product.name;
        priceProduct.innerHTML = product.price;
        descriptionProduct.innerHTML = product.description;
        document.title = product.name;

        for (let i=0; i < product.colors.length; i++) {
            let color = document.createElement("option");
            color.setAttribute("value", product.colors[i]);
            color.innerHTML = product.colors[i];
            colorsProduct.appendChild(color);
        }  
    });          
}


function addToCart() {

    if (localStorage.getItem("cart")) {
     
        let cart = localStorage.getItem("cart");
        console.log(cart);

    } else {

        let idKanap = idProduct;
        let colorKanap = document.querySelector("#colors").value;
        let qtyKanap = document.querySelector("#quantity").value;
        
        console.log(colorKanap, idKanap, qtyKanap);

        let productCart = {
            idKanap : idProduct,
            colorKanap : colorKanap,
            qtyKanap  : qtyKanap
        };

        console.log(productCart);

        let objCart = JSON.stringify(productCart);
        localStorage.setItem("cart", objCart);

        alert("Ajouté au panier !");
    }
}
