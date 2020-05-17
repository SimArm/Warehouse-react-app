import React from "react";
import "./QuantityHistory.scss";
import { useParams } from "react-router-dom";
import { getQuantityHistory } from "../../productsCommands/changesHistoryCommands";

const QuantityHistory = () => {
    const { productId } = useParams();
    const quantityHistory = getQuantityHistory() || [];

    return (
        <div>
            { quantityHistory.filter(history => history.ProductId == productId).map((quantity) => {
                return (
                        <div>Quantity change from: {quantity.OldQuantity} to: {quantity.NewQuantity} at: {quantity.ChangeTime}</div>                                            );
                })
            }
        </div>
    );    
}

export default QuantityHistory;
