import React, { useState } from "react";
import "./Edit.scss";
import { useParams } from "react-router-dom";
import getData from "../productsCommands/getData";
import setData from "../productsCommands/setData";
import { setPriceHistory, getPriceHistory, setQuantityHistory, getQuantityHistory  } from "../productsCommands/changesHistoryCommands";

const Edit = () => {
    const { productId } = useParams();
    let ProductsData = getData() || [];
    const Product = ProductsData[productId]; 
    let PricesHistoryData = getPriceHistory() || [];
    let QuantityHistoryData = getQuantityHistory() || [];

    const [nameValue, setName] = useState(Product.Name);
    const [EANValue, setEAN] = useState(Product.EAN);
    const [typeValue, setType] = useState(Product.Type);
    const [weightValue, setWeight] = useState(Product.Weight);
    const [colorValue, setColor] = useState(Product.Color);
    const [quantityValue, setQuantity] = useState(Product.Quantity);
    const [priceValue, setPrice] = useState(Product.Price);



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

    const updateProductsData = () => {
        const updatedProduct = {Name: nameValue, EAN: EANValue, Type:typeValue, Weight: weightValue, Color: colorValue, Quantity: quantityValue, Price: priceValue, Enabled: true};
        ProductsData[productId] = updatedProduct;
        setData(ProductsData);
    }
    
    const dateFormatting = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false
    };

    const updateHistoryData = () => {
        const changeDate = Intl.DateTimeFormat('default', dateFormatting).format(new Date()); 
        const priceChange = {ProductId: productId, OldPrice: Product.Price, NewPrice: priceValue, ChangeTime: changeDate, };
        const quantityChange = {ProductId: productId, OldQuantity: Product.Quantity, NewQuantity: quantityValue, ChangeTime: changeDate, };
        PricesHistoryData.push(priceChange);
        QuantityHistoryData.push(quantityChange);
        setPriceHistory(PricesHistoryData);
        setQuantityHistory(QuantityHistoryData);
    }

    const saveData = () => {
        updateHistoryData();
        updateProductsData();
    }

    return (
        <div className="editWrapper">
            <form className="editFormWrapper">
                <div>
                    <label htmlFor="Product">Product:</label>
                    <input type="text" name="Product" id="Product" value={nameValue} onChange={updateName}/>
                </div>
                <div>
                    <label htmlFor="EAN">EAN:</label>
                    <input type="text" name="EAN" id="EAN" value={EANValue} onChange={updateEAN}/>
                </div>
                <div>
                    <label htmlFor="Type">Type:</label>
                    <input type="text" name="Type" id="Type" value={typeValue} onChange={updateType}/>
                </div>
                <div>
                    <label htmlFor="Weight">Weight:</label>
                    <input type="number" name="Weight" id="Weight" value={weightValue} onChange={updateWeight}/>
                </div>
                <div>
                    <label htmlFor="Color">Color:</label>
                    <input type="text" name="Color" id="Color" value={colorValue} onChange={updateColor}/>
                </div>
                <div>
                    <label htmlFor="Quantity">Quantity:</label>
                    <input type="number" name="Quantity" id="Quantity" value={quantityValue} onChange={updateQuantity}/>
                </div>
                <div>
                    <label htmlFor="Price">Price:</label>
                    <input type="number" name="Price" id="Price" value={priceValue} onChange={updatePrice}/>
                </div>
                <button onClick={saveData}>Save</button>
            </form>
        </div>
    );
}

export default Edit;
