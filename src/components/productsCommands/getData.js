const getData = () => {
    const data = JSON.parse(localStorage.getItem('productsData'));
    return data;
}

export default getData;