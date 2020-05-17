import React from "react";
import "./List.scss";

import ProductItem from "../ProductItem";
import ListTotalSection from "../ListTotalSection";
import getData from "../productsCommands/getData";

const List = () => {
    const Data = getData() || [];

    return (
        <div>
            <tr className="tableHeader">
                <th>Name</th>
                <th>EAN</th>
                <th>Type</th>
                <th>Weight</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Display</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            { Data.map((Product) => {
                return (
                        <ProductItem
                            ID={Data.findIndex(x => x.Name === Product.Name)}
                            Name={Product.Name}
                            EAN={Product.EAN}
                            Type={Product.Type}
                            Weight={Product.Weight}
                            Color={Product.Color}
                            Quantity={Product.Quantity}
                            Price={Product.Price}
                        />
                    );
                })
            }
            <ListTotalSection data={Data}/>
        </div>
    );    
}

export default List;
