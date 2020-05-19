import React from "react";
import "./PriceHistory.scss";
import { useParams } from "react-router-dom";
import { getPriceHistory } from "../../productsCommands/changesHistoryCommands";
import getData from "../../productsCommands/getData";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PriceHistory = () => {
    const { productId } = useParams();

    const ProductsData = getData() || [];
    const Product = ProductsData[productId];
    const productName = Product.Name;

    const priceHistory = getPriceHistory() || [];
    const filterredPrice = priceHistory.filter(history => history.ProductId == productId).slice(-5);
    const newPriceHistory = filterredPrice.map((price) => parseInt(price.NewPrice));
    const chartDate = filterredPrice.map((dates) => dates.ChangeTime);

    const options = {
        title: {
          text: 'Price History'
        },        
        xAxis: {
            categories: chartDate,
          },
        yAxis: {
            title: {
                text: 'Price'
            }
        },
        series: [{
          data: newPriceHistory,
          name: productName
        }]
      }
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );    
}

export default PriceHistory;
