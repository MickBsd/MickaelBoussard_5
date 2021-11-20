
//Récupération de l'id via les paramètres de l'url
const idProduct = new URL(window.location.href).searchParams.get("id");
console.log("j'ai recuperer l'id suivant : " + idProduct);

getArticle();

//Récupération de l'article grace a l'id
function getArticle() {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())    
    .then(product => {
        console.log("Ce qui me donne le kanap suivant : " + product.name);
        });


}
