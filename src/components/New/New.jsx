import React, { useState } from "react";
import "./New.scss";

import getData from "../productsCommands/getData";
import setData from "../productsCommands/setData";

const New = () => {

    const [nameValue, setName] = useState('');
    const [EANValue, setEAN] = useState('');
    const [typeValue, setType] = useState('');
    const [weightValue, setWeight] = useState('');
    const [colorValue, setColor] = useState('');
    const [quantityValue, setQuantity] = useState('');
    const [priceValue, setPrice] = useState('');

    const updateName = (event) => {
        const { value } = event.target;
        setName(value);
    }

    const updateEAN = (event) => {
        const { value } = event.target;
        setEAN(value);
    }

    const updateType = (event) => {
        const { value } = event.target;
        setType(value);
    }

    const updateWeight = (event) => {
        const { value } = event.target;
        setWeight(value);
    }

    const updateColor = (event) => {
        const { value } = event.target;
        setColor(value);
    }

    const updateQuantity = (event) => {
        const { value } = event.target;
        setQuantity(value);
    }

    const updatePrice = (event) => {
        const { value } = event.target;
        setPrice(value);
    }

    const onSave = () => {
        const product = {Name: nameValue, EAN: EANValue, Type:typeValue, Weight: weightValue, Color: colorValue, Quantity: quantityValue, Price: priceValue,};
        let productArray = getData() || [];
        productArray.push(product);
        setData(productArray);
    }

    return (
        <div>
            <form className="addProductItem">
                <input type="text" placeholder="Product name" name="Name" value={nameValue} onChange={updateName} />
                <input type="text" placeholder="EAN" name="EAN" value={EANValue} onChange={updateEAN}/>
                <input type="text" placeholder="Product type" name="Type" value={typeValue} onChange={updateType}/>
                <input type="text" placeholder="Weight" name="Weight" value={weightValue} onChange={updateWeight}/>
                <input type="text" placeholder="Color" name="Color" value={colorValue} onChange={updateColor}/>
                <input type="text" placeholder="Quantity" name="Quantity" value={quantityValue} onChange={updateQuantity}/>
                <input type="text" placeholder="Price" name="Price" value={priceValue} onChange={updatePrice}/>
                <button onClick={onSave}>Save</button>
            </form>
        </div>
    );

}

export default New;
