function testProducts() {
   console.log("TEST");
};

async function getProducts() {
    let products = await fetch('http://localhost:3000/api/products');
    return products.json();
};

export {testProducts, getProducts};