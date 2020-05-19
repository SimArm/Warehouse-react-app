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
        const product = {Name: nameValue, EAN: EANValue, Type:typeValue, Weight: weightValue, Color: colorValue, Quantity: quantityValue, Price: priceValue, Enabled: 'true',};
        let productArray = getData() || [];
        productArray.push(product);
        setData(productArray);
    }

    return (
        <div className="newItemWrapper">
            <form className="newItemForm">
                <div>
                    <label htmlFor="Name">Name:</label>
                    <input type="text" placeholder="Product name" name="Name" id="Name" value={nameValue} onChange={updateName} />
                </div>
                <div>
                    <label htmlFor="EAN">EAN:</label>
                    <input type="text" placeholder="EAN" name="EAN" id="EAN" value={EANValue} onChange={updateEAN}/>
                </div>
                <div>
                    <label htmlFor="Type">Type:</label>
                    <input type="text" placeholder="Product type" name="Type" id="Type" value={typeValue} onChange={updateType}/>
                </div>
                <div>
                    <label htmlFor="Weight">Weight</label>
                    <input type="number" placeholder="Weight" name="Weight" id="Weight" value={weightValue} onChange={updateWeight}/>
                </div>
                <div>
                    <label htmlFor="Color">Color:</label>
                    <input type="text" placeholder="Color" name="Color" id="Color" value={colorValue} onChange={updateColor}/>
                </div>
                <div>
                    <label htmlFor="Quantity">Quantity:</label>
                    <input type="number" placeholder="Quantity" name="Quantity" id="Quantity" value={quantityValue} onChange={updateQuantity}/>
                </div>
                <div>
                    <label htmlFor="Price">Price:</label>
                    <input type="number" placeholder="Price" name="Price" id="Price" value={priceValue} onChange={updatePrice}/>
                </div>
                <button onClick={onSave}>Save</button>
            </form>
        </div>
    );

}

export default New;
