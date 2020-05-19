import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.scss";
import deleteItem from "../productsCommands/deleteItem";
import disableProduct from "../productsCommands/disableProduct";

const ProductItem = ({ID, Name, EAN, Type, Weight, Color, Quantity, Price, Enabled, }) => {

    const [isActive, setActive] = useState(Enabled);

    const classes =`productItem ${isActive ? 'active' : 'disabled'}`;
    const viewLink = `/products/${ID}`;
    const editLink = `/products/${ID}/edit`;
    const checkedToggle = isActive ? true : false;

    const deleteProduct = () => {
        window.confirm('Are you sure to delete?') && deleteItem(ID);
        window.location.reload();
    }

    const checkboxClicked = () => {
        disableProduct(ID);
        setActive(!isActive);
        window.location.reload();
    }

    return (
        <tr className={classes}>
            <th>{Name}</th>
            <th>{EAN}</th>
            <th>{Type}</th>
            <th>{Weight}</th>
            <th>{Color}</th>
            <th>{Quantity}</th>
            <th>{Price}</th>
            <th><input type="checkbox" checked={checkedToggle} onClick={()=>checkboxClicked()}/></th>
            <th><Link to={viewLink} className="link"><button className="buttonView">View</button></Link></th>
            <th><Link to={editLink} className="link"><button className="buttonEdit">Edit</button></Link></th>
            <th><button className="buttonDelete" onClick={deleteProduct}>Delete</button></th>
        </tr>
    );
}

export default ProductItem;
