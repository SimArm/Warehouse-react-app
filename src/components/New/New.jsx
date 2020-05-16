import React, { useState } from "react";
import "./New.scss";

const New = () => {

    const [nameValue, setName] = useState('');
    const [EANValue, setEAN] = useState('');
    const [typeValue, setType] = useState('');
    const [weightValue, setWeight] = useState('');
    const [colorValue, setColor] = useState('');

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

    const onSave = () => {
        const product = {Name: nameValue, EAN: EANValue, Type:typeValue, Weight: weightValue, Color: colorValue,};
        console.log(product);
        let productArray = JSON.parse(localStorage.getItem('productsData')) || [];
        productArray.push(product);
        localStorage.setItem('productsData', JSON.stringify(productArray));
    }

    return (
        <div>
            <form className="addProductItem">
                <input type="text" placeholder="Product name" name="Name" value={nameValue} onChange={updateName} />
                <input type="text" placeholder="EAN" name="EAN" value={EANValue} onChange={updateEAN}/>
                <input type="text" placeholder="Product type" name="Type" value={typeValue} onChange={updateType}/>
                <input type="text" placeholder="Weight" name="Weight" value={weightValue} onChange={updateWeight}/>
                <input type="text" placeholder="Color" name="Color" value={colorValue} onChange={updateColor}/>
                <button onClick={onSave}>Save</button>
            </form>
        </div>
    );

}

export default New;
