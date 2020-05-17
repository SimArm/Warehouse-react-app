import React from "react";
import "./View.scss";
import { useParams } from "react-router-dom";

const View  = () => {
    const { productId } = useParams();
    return (
        <div>
            
        </div>
    );
}

export default View;
