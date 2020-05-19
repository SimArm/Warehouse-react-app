import React from "react";
import "./QuantityHistory.scss";
import { useParams } from "react-router-dom";
import { getQuantityHistory } from "../../productsCommands/changesHistoryCommands";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import getData from "../../productsCommands/getData";

const QuantityHistory = () => {
    const { productId } = useParams();

    const ProductsData = getData() || [];
    const Product = ProductsData[productId];
    const productName = Product.Name;

    const quantityHistory = getQuantityHistory() || [];
    const filterredQuantity = quantityHistory.filter(history => history.ProductId == productId).slice(-5);
    const chartQuantity = filterredQuantity.map((quantity) => parseInt(quantity.NewQuantity));

    const chartDate = filterredQuantity.map((dates) => dates.ChangeTime);

    const options = {
        title: {
          text: 'Quantity History'
        },
        xAxis: {
            categories: chartDate,
          },
        yAxis: {
            title: {
                text: 'Quantity'
            }
        },
        series: [{
          data: chartQuantity,
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

export default QuantityHistory;
