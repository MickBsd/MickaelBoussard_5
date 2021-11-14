import {testProducts, getProducts} from './function.js';


// //Récupération des données de l'api 
// async function getProducts() {
//     let products = await fetch('http://localhost:3000/api/products');
//     return products.json();
// };

testProducts();

creationProducts();


async function creationProducts() {
    let result = await getProducts()
    .then( (product) => {
        console.log("test");
        for (let i=0; i < product.length; i++) {		

            // Insertion de l'élément "a"
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${product[i]._id}`;

            // Insertion de l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // Insertion de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = product[i].imageUrl;
            productImg.alt = product[i].altTxt;

            // Insertion du titre "h3"
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = product[i].name;

            // Insertion de la description "p"
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = product[i].description;
        }
    });
}



// fetch('http://localhost:3000/api/products')
// 	.then((response) => response.json())
// 	.then((product) => {
		
//         //Création des articles via une boucle for
// 		for (let i=0; i < product.length; i++) {		

// 			// Insertion de l'élément "a"
//             let productLink = document.createElement("a");
//             document.querySelector(".items").appendChild(productLink);
//             productLink.href = `product.html?id=${product[i]._id}`;

//             // Insertion de l'élément "article"
//             let productArticle = document.createElement("article");
//             productLink.appendChild(productArticle);

//             // Insertion de l'image
//             let productImg = document.createElement("img");
//             productArticle.appendChild(productImg);
//             productImg.src = product[i].imageUrl;
//             productImg.alt = product[i].altTxt;

//             // Insertion du titre "h3"
//             let productName = document.createElement("h3");
//             productArticle.appendChild(productName);
//             productName.classList.add("productName");
//             productName.innerHTML = product[i].name;

//             // Insertion de la description "p"
//             let productDescription = document.createElement("p");
//             productArticle.appendChild(productDescription);
//             productDescription.classList.add("productName");
//             productDescription.innerHTML = product[i].description;
// 		}
//   	});