const deleteItem = (productId) => {
    let productArray = JSON.parse(localStorage.getItem('productsData')) || [];
    productArray.splice(productId, 1);
    localStorage.setItem('productsData', JSON.stringify(productArray));  
}

export default deleteItem;