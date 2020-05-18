import React from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import getData from "../../productsCommands/getData";

const ProductDetails = () => {
    const { productId } = useParams();
    const ProductsData = getData() || [];
    const Product = ProductsData[productId];

    const classes = Product.Quantity == 0 && 'noStock';
    return (
        <div className="detailsWrapper">
            <h2 className={classes}>Product: {Product.Name}</h2>
            <div>EAN: {Product.EAN}</div>
            <div>Type: {Product.Type}</div>
            <div>Weight: {Product.Weight}</div>
            <div>Color: {Product.Color}</div>
            <div className={classes}>Quantity: {Product.Quantity > 0 ? Product.Quantity : 'Out of stock'}</div>
            <div>Price: {Product.Price}</div>
            <div>
                <p> Description:
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam dolor ullam omnis expedita praesentium nesciunt sed ea repellat eos tempora placeat quam, eaque voluptatem eum ipsa enim pariatur alias.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam dolor ullam omnis expedita praesentium nesciunt sed ea repellat eos tempora placeat quam, eaque voluptatem eum ipsa enim pariatur alias.
                </p>
            </div>
        </div>
    );
}

export default ProductDetails;
