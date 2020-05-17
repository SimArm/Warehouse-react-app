import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.scss";
import deleteItem from "../productsCommands/deleteItem";

const ProductItem = ({ID, Name, EAN, Type, Weight, Color, Quantity, Price}) => {

    const [isActive, setActive] = useState(true);

    const classes =`productItem ${isActive ? 'active' : 'disabled'}`;
    const viewLink = `/products/${ID}`;
    const editLink = `/products/${ID}/edit`;

    const deleteProduct = () => {
        window.confirm('Are you sure to delete?') && deleteItem(ID);
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
            <th><input type="checkbox" onClick={()=>setActive(!isActive)}/></th>
            <th><button className="buttonView"><Link to={viewLink} className="link">View</Link></button></th>
            <th><button className="buttonEdit"><Link to={editLink} className="link">Edit</Link></button></th>
            <th><button className="buttonDelete" onClick={deleteProduct}>Delete</button></th>
        </tr>
    );
}

export default ProductItem;
