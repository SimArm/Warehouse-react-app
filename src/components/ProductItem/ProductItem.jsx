import React, { useState } from "react";
import "./ProductItem.scss";

const ProductItem = ({Name, EAN, Type, Weight, Color}) => {

    const [isActive, setActive] = useState(true);

    const classes =`productItem ${isActive ? 'active' : 'disabled'}`;

    return (
        <ul className={classes}>
            <li>{Name}</li>
            <li>{EAN}</li>
            <li>{Type}</li>
            <li>{Weight}</li>
            <li>{Color}</li>
            <li><input type="checkbox" onClick={()=>setActive(!isActive)}/></li>
            <li><button className="view">View</button></li>
            <li><button className="edit">Edit</button></li>
            <li><button className="delete">Delete</button></li>
        </ul>
    );
}

export default ProductItem;
