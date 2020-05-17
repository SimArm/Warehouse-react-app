const setPriceHistory = (history) => {
    localStorage.setItem('priceHistory', JSON.stringify(history));
}

const getPriceHistory = () => {
    const priceData = JSON.parse(localStorage.getItem('priceHistory'));
    return priceData;
}

const setQuantityHistory = (history) => {
    localStorage.setItem('quantityHistory', JSON.stringify(history));
}

const getQuantityHistory = () => {
    const quantityData = JSON.parse(localStorage.getItem('quantityHistory'));
    return quantityData;
}

export { setPriceHistory, getPriceHistory, setQuantityHistory, getQuantityHistory };