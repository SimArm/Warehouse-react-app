import React from "react";
import "./View.scss";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import getData from "../productsCommands/getData";

import ProductDetails from "./ProductDetails";
import QuantityHistory from "./QuantityHistory";
import PriceHistory from "./PriceHistory";

const View  = () => {
    const { productId } = useParams();
    const ProductsData = getData() || [];
    const Product = ProductsData[productId];  

    return (
        <div className="viewWrapper">
            <Tabs>
                <TabList>
                    <Tab>Product Details</Tab>
                    <Tab>Price History</Tab>
                    <Tab>Quantity History</Tab>
                </TabList>
                <TabPanel>
                    <ProductDetails />
                </TabPanel>
                <TabPanel>
                    <PriceHistory />
                </TabPanel>
                <TabPanel>
                    <QuantityHistory />
                </TabPanel>
        </Tabs>
        </div>
    );
}

export default View;
