import React from "react";
import { totalPrice, totalQuantity } from "../productsCommands/countTotal";
import "./ListTotalSection.scss";

const ListTotalSection = ({data}) => {
    const ProductsData = data || []; 

    return (
        <div className="totalSection">
            Total products: {totalQuantity(ProductsData)}  Total Price: {totalPrice(ProductsData)}
        </div>
    );
}

export default ListTotalSection;
