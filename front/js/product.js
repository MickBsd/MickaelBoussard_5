const productId = new URL(window.location.href).searchParams;; 
console.log("j'ai recuperer l'id suivant : " + productId);

//productId va permettre de chercher les données via l'api