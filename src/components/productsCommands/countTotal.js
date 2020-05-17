const totalPrice = (dataArray) => {
    let total = 0;

    dataArray.forEach((key) => { 
        let keyValue = key.Price;
        let numberValue = parseInt(keyValue); 

        total += numberValue; 
    })
        
    return total;
}

const totalQuantity = (dataArray) => {
    let total = 0;

    dataArray.forEach((key) => { 
        let keyValue = key.Quantity;
        let numberValue = parseInt(keyValue); 

        total += numberValue; 
    })
        
    return total;
}

export { totalPrice, totalQuantity };