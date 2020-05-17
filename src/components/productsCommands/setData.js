const setData = (dataVar) => {
    localStorage.setItem('productsData', JSON.stringify(dataVar));
}

export default setData;