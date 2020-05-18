import React from "react";
import "./QuantityHistory.scss";
import { useParams } from "react-router-dom";
import { getQuantityHistory } from "../../productsCommands/changesHistoryCommands";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const QuantityHistory = () => {
    const { productId } = useParams();
    const quantityHistory = getQuantityHistory() || [];
    const filterredQuantity = quantityHistory.filter(history => history.ProductId == productId).slice(-5);
    const newQuantityHistory = filterredQuantity.map((quantity) => parseInt(quantity.NewQuantity));

    const options = {
        title: {
          text: 'Quantity History'
        },
        series: [{
          data: newQuantityHistory
        }]
      }
    return (
        <div>
            { filterredQuantity.map((quantity) => {
                return (
                    <div>Quantity change from: {quantity.OldQuantity} to: {quantity.NewQuantity} at: {quantity.ChangeTime}</div>                                            );
                })
            }
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );    
}

export default QuantityHistory;
