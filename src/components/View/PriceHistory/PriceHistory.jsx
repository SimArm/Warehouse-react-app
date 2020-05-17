import React from "react";
import "./PriceHistory.scss";
import { useParams } from "react-router-dom";
import { getPriceHistory } from "../../productsCommands/changesHistoryCommands";

const PriceHistory = () => {
    const { productId } = useParams();
    const priceHistory = getPriceHistory() || [];

    return (
        <div>
            { priceHistory.filter(history => history.ProductId == productId).map((price) => {
                return (
                        <div>Price change from: {price.OldPrice} to: {price.NewPrice} at: {price.ChangeTime}</div>                                            );
                })
            }
        </div>
    );    
}

export default PriceHistory;
