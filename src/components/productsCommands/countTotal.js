const totalPrice = (dataArray) => {
    let total = 0;

    dataArray.forEach((key) => { 
        let keyPrice = (key.Enabled ? key.Price : 0);
        let keyQuantity = key.Quantity;
        let numberPriceValue = parseInt(keyPrice);
        let numberQuantityValue = parseInt(keyQuantity); 

        total += (numberPriceValue * numberQuantityValue); 
    })
        
    return total;
}

const totalQuantity = (dataArray) => {
    let total = 0;

    dataArray.forEach((key) => { 
        let keyValue = (key.Enabled ? key.Quantity : 0);
        let numberValue = parseInt(keyValue); 

        total += numberValue; 
    })
        
    return total;
}

export { totalPrice, totalQuantity };