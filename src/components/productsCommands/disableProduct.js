const disableProduct = (productId) => {
    const data = JSON.parse(localStorage.getItem('productsData'));
    const product = data[productId];
    product.Enabled = !product.Enabled;
    data[productId] = product;
    localStorage.setItem('productsData', JSON.stringify(data));
}

export default disableProduct;