let productLocalStorage = JSON.parse(localStorage.getItem("cart"));
console.log(productLocalStorage);

if (!productLocalStorage) {

    const titleCart = document.querySelector("h1");
    const sectionCart = document.querySelector(".cart");

    titleCart.innerHTML = "Votre panier est vide !";
    sectionCart.style.display = "none";

} else {
    console.log("panier rempli");

    // Création de la balise "article" et insertion dans la section
    let productArticle = document.createElement("article");
    document.querySelector("#cart__items").appendChild(productArticle);
    productArticle.className = "cart__item";
    productArticle.setAttribute("data-id", productLocalStorage.idKanap);

    // Insertion de l'élément "div" pour l'image produit
    let productDivImg = document.createElement("div");
    productArticle.appendChild(productDivImg);
    productDivImg.className = "cart__item__img";

    // Insertion de l'image
    let productImg = document.createElement("img");
    productDivImg.appendChild(productImg);
    productImg.src = productLocalStorage.imgKanap;
    // productImg.alt = productLocalStorage.altImgProduit;
    
    // Insertion de l'élément "div" pour la description produit
    let productItemContent = document.createElement("div");
    productArticle.appendChild(productItemContent);
    productItemContent.className = "cart__item__content";

    // Insertion de l'élément "div"
    let productItemContentTitlePrice = document.createElement("div");
    productItemContent.appendChild(productItemContentTitlePrice);
    productItemContentTitlePrice.className = "cart__item__content__titlePrice";
    
    // Insertion du titre h2
    let productTitle = document.createElement("h2");
    productItemContentTitlePrice.appendChild(productTitle);
    productTitle.innerHTML = productLocalStorage.nameKanap;

    // Insertion de la couleur
    let productColor = document.createElement("p");
    productTitle.appendChild(productColor);
    productColor.innerHTML = productLocalStorage.colorKanap;
    productColor.style.fontSize = "20px";

    // Insertion du prix
    let productPrice = document.createElement("p");
    productItemContentTitlePrice.appendChild(productPrice);
    productPrice.innerHTML = productLocalStorage.priceKanap + " €";

    // Insertion de l'élément "div"
    let productItemContentSettings = document.createElement("div");
    productItemContent.appendChild(productItemContentSettings);
    productItemContentSettings.className = "cart__item__content__settings";

    // Insertion de l'élément "div"
    let productItemContentSettingsQuantity = document.createElement("div");
    productItemContentSettings.appendChild(productItemContentSettingsQuantity);
    productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
    
    // Insertion de "Qté : "
    let productQty = document.createElement("p");
    productItemContentSettingsQuantity.appendChild(productQty);
    productQty.innerHTML = "Qté : ";

    // Insertion de la quantité
    let productQuantity = document.createElement("input");
    productItemContentSettingsQuantity.appendChild(productQuantity);
    productQuantity.value = productLocalStorage.qtyKanap;
    productQuantity.className = "itemQuantity";
    productQuantity.setAttribute("type", "number");
    productQuantity.setAttribute("min", "1");
    productQuantity.setAttribute("max", "100");
    productQuantity.setAttribute("name", "itemQuantity");

    // Insertion de l'élément "div"
    let productItemContentSettingsDelete = document.createElement("div");
    productItemContentSettings.appendChild(productItemContentSettingsDelete);
    productItemContentSettingsDelete.className = "cart__item__content__settings__delete";

    // Insertion de "p" supprimer
    let productSupprimer = document.createElement("p");
    productItemContentSettingsDelete.appendChild(productSupprimer);
    productSupprimer.className = "deleteItem";
    productSupprimer.innerHTML = "Supprimer";

  

}


function getTotals(){

    // Récupération du total des quantités
    var elemsQtt = document.getElementsByClassName('itemQuantity');
    var myLength = elemsQtt.length,
    totalQtt = 0;

    for (var i = 0; i < myLength; ++i) {
        totalQtt += elemsQtt[i].valueAsNumber;
    }

    let productTotalQuantity = document.getElementById('totalQuantity');
    productTotalQuantity.innerHTML = totalQtt;
    console.log(totalQtt);

    // Récupération du prix total
    totalPrice = 0;

    for (var i = 0; i < myLength; ++i) {
        totalPrice += (elemsQtt[i].valueAsNumber * productLocalStorage.priceKanap);
    }

    let productTotalPrice = document.getElementById('totalPrice');
    productTotalPrice.innerHTML = totalPrice;
    console.log(totalPrice);
}
getTotals();


// Changer la quantité 


function postForm() {

}