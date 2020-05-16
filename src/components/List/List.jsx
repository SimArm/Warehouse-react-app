import React from "react";
import "./List.scss";

import ProductItem from "../ProductItem";

const List = () => {
    const Data = JSON.parse(localStorage.getItem('productsData')) || [];

    return (
        <div>
            { Data.map((Product) => {
                return (
                        <ProductItem
                            Name={Product.Name}
                            EAN={Product.EAN}
                            Type={Product.Type}
                            Weight={Product.Weight}
                            Color={Product.Color}
                        />
                    );
                })
            }
        </div>
    );    
}

export default List;
