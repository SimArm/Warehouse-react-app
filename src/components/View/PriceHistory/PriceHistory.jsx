import React from "react";
import "./PriceHistory.scss";
import { useParams } from "react-router-dom";
import { getPriceHistory } from "../../productsCommands/changesHistoryCommands";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PriceHistory = () => {
    const { productId } = useParams();
    const priceHistory = getPriceHistory() || [];
    const filterredPrice = priceHistory.filter(history => history.ProductId == productId).slice(-5);
    const newPriceHistory = filterredPrice.map((price) => parseInt(price.NewPrice));

    const options = {
        title: {
          text: 'Price History'
        },
        series: [{
          data: newPriceHistory
        }]
      }
    return (
        <div>
            { filterredPrice.map((price) => {
                return (
                        <div>Price change from: {price.OldPrice} to: {price.NewPrice} at: {price.ChangeTime}</div>                                            );
                })
            }
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );    
}

export default PriceHistory;
